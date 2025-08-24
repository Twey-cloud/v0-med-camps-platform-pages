# MedCamps Backend Implementation Guide

## Overview
This guide provides comprehensive instructions for implementing the MedCamps platform backend based on the completed frontend refactoring. All API endpoints, database schemas, and implementation priorities are documented to ensure smooth development.

## Quick Start Checklist
- [ ] Set up Supabase project with provided schema
- [ ] Configure authentication with email/password
- [ ] Implement Category Management APIs (Priority 1)
- [ ] Set up file storage for learning content
- [ ] Deploy initial admin endpoints

## Implementation Priority Matrix

### Priority 1: Core Data Management (Weeks 1-3)
**Essential for basic platform functionality**

#### Categories API
\`\`\`typescript
// Unified categories used across learning, practice, and mock interviews
GET    /api/categories
POST   /api/categories
PUT    /api/categories/:id
DELETE /api/categories/:id
\`\`\`

#### User Management
\`\`\`typescript
GET    /api/users/profile
PUT    /api/users/profile
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/logout
\`\`\`

### Priority 2: Learning System (Weeks 4-5)
**Learning content and progress tracking**

#### Learning Content
\`\`\`typescript
GET    /api/learning/categories/:categoryId/topics
POST   /api/learning/categories/:categoryId/topics
GET    /api/learning/topics/:topicId
PUT    /api/learning/topics/:topicId
DELETE /api/learning/topics/:topicId
\`\`\`

#### Progress Tracking
\`\`\`typescript
GET    /api/learning/progress/:userId
POST   /api/learning/progress
PUT    /api/learning/progress/:topicId
\`\`\`

### Priority 3: Practice System (Weeks 6-7)
**Practice questions and self-assessment**

#### Practice Questions
\`\`\`typescript
GET    /api/practice/categories/:categoryId/questions
POST   /api/practice/categories/:categoryId/questions
GET    /api/practice/questions/:questionId
PUT    /api/practice/questions/:questionId
DELETE /api/practice/questions/:questionId
\`\`\`

#### Practice Sessions
\`\`\`typescript
POST   /api/practice/sessions
GET    /api/practice/sessions/:sessionId
PUT    /api/practice/sessions/:sessionId/responses
POST   /api/practice/sessions/:sessionId/complete
\`\`\`

### Priority 4: Mock Interview System (Weeks 8-9)
**Mock interview management and assessment**

#### Mock Interview Sets
\`\`\`typescript
GET    /api/mock-interviews
POST   /api/mock-interviews
GET    /api/mock-interviews/:setId
PUT    /api/mock-interviews/:setId
DELETE /api/mock-interviews/:setId
\`\`\`

#### Interview Sessions
\`\`\`typescript
POST   /api/mock-interviews/:setId/sessions
GET    /api/mock-interviews/sessions/:sessionId
PUT    /api/mock-interviews/sessions/:sessionId/responses
POST   /api/mock-interviews/sessions/:sessionId/complete
\`\`\`

### Priority 5: Admin & Analytics (Week 10)
**Administrative functions and performance tracking**

#### Admin Dashboard
\`\`\`typescript
GET    /api/admin/overview
GET    /api/admin/users
GET    /api/admin/content/stats
\`\`\`

#### Performance Analytics
\`\`\`typescript
GET    /api/analytics/user/:userId/performance
GET    /api/analytics/user/:userId/progress
GET    /api/analytics/platform/stats
\`\`\`

## Database Schema

### Core Tables

#### categories
\`\`\`sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  color VARCHAR(20),
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

#### users
\`\`\`sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  avatar_url TEXT,
  role VARCHAR(20) DEFAULT 'student',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

#### learning_topics
\`\`\`sql
CREATE TABLE learning_topics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES categories(id),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  video_url TEXT,
  duration_minutes INTEGER,
  difficulty VARCHAR(20),
  order_index INTEGER,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

#### practice_questions
\`\`\`sql
CREATE TABLE practice_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES categories(id),
  title VARCHAR(255) NOT NULL,
  question_text TEXT NOT NULL,
  marking_criteria JSONB NOT NULL,
  difficulty VARCHAR(20),
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

#### mock_interview_sets
\`\`\`sql
CREATE TABLE mock_interview_sets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

#### mock_interview_questions
\`\`\`sql
CREATE TABLE mock_interview_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  set_id UUID REFERENCES mock_interview_sets(id),
  category_id UUID REFERENCES categories(id),
  title VARCHAR(255) NOT NULL,
  question_text TEXT NOT NULL,
  marking_criteria JSONB NOT NULL,
  station_number INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

#### user_progress
\`\`\`sql
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  content_type VARCHAR(50) NOT NULL, -- 'learning', 'practice', 'mock_interview'
  content_id UUID NOT NULL,
  progress_percentage INTEGER DEFAULT 0,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

#### practice_sessions
\`\`\`sql
CREATE TABLE practice_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  question_id UUID REFERENCES practice_questions(id),
  user_response TEXT,
  self_assessment JSONB,
  ai_feedback TEXT,
  score INTEGER,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

#### mock_interview_sessions
\`\`\`sql
CREATE TABLE mock_interview_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  set_id UUID REFERENCES mock_interview_sets(id),
  responses JSONB,
  assessments JSONB,
  overall_score INTEGER,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

## Authentication & Authorization

### Authentication Flow
1. **Email/Password Authentication** via Supabase Auth
2. **JWT Token Management** for session handling
3. **Role-Based Access Control** (student, admin, content_creator)

### Authorization Levels
- **Public**: Registration, login
- **Student**: Learning content, practice questions, mock interviews, profile
- **Admin**: All student access + user management, content management, analytics
- **Content Creator**: Student access + content creation/editing

### Environment Variables
\`\`\`env
# Database
DATABASE_URL=postgresql://...
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# Authentication
JWT_SECRET=...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000

# File Storage
SUPABASE_STORAGE_BUCKET=medcamps-content

# AI Integration (Optional)
OPENAI_API_KEY=...
\`\`\`

## API Response Formats

### Success Response
\`\`\`typescript
{
  success: true,
  data: any,
  message?: string
}
\`\`\`

### Error Response
\`\`\`typescript
{
  success: false,
  error: {
    code: string,
    message: string,
    details?: any
  }
}
\`\`\`

### Pagination Response
\`\`\`typescript
{
  success: true,
  data: any[],
  pagination: {
    page: number,
    limit: number,
    total: number,
    totalPages: number
  }
}
\`\`\`

## File Storage Structure

### Supabase Storage Buckets
\`\`\`
medcamps-content/
├── learning/
│   ├── videos/
│   └── documents/
├── practice/
│   └── attachments/
└── users/
    └── avatars/
\`\`\`

## Testing Strategy

### Unit Tests
- API endpoint functionality
- Database operations
- Authentication flows

### Integration Tests
- Complete user workflows
- Cross-component data flow
- File upload/download

### Performance Tests
- API response times
- Database query optimization
- Concurrent user handling

## Deployment Checklist

### Development Environment
- [ ] Supabase project setup
- [ ] Database schema migration
- [ ] Environment variables configured
- [ ] File storage buckets created

### Production Environment
- [ ] Production database setup
- [ ] SSL certificates configured
- [ ] CDN setup for file storage
- [ ] Monitoring and logging enabled
- [ ] Backup strategy implemented

## Monitoring & Analytics

### Key Metrics
- User engagement (daily/weekly active users)
- Content completion rates
- Practice session performance
- Mock interview scores
- System performance (response times, error rates)

### Logging Requirements
- API request/response logging
- User action tracking
- Error monitoring and alerting
- Performance metrics collection

## Support & Maintenance

### Regular Tasks
- Database backup verification
- Performance monitoring review
- Security updates
- Content moderation (if user-generated content is added)

### Scaling Considerations
- Database connection pooling
- API rate limiting
- CDN optimization for global users
- Horizontal scaling for high traffic

This implementation guide provides a complete roadmap for building the MedCamps backend with clear priorities, technical specifications, and deployment guidelines.
