# MedCamps Platform - Admin & Content Management Architecture

## 🚀 Recent Developments & Project Status

### Phase 1 Refactoring Complete ✅
The admin dashboard has been successfully refactored from a 1,300+ line monolith into a modular, performance-optimized system:

- **92% file size reduction** in main admin page (1,300+ → 100 lines)
- **Component extraction**: 4 major admin components created with lazy loading
- **Shared components**: Reusable AdminTable, AdminForm, and AdminHeader components
- **Performance optimizations**: React.memo(), Suspense boundaries, and code splitting implemented
- **Vercel Speed Insights**: Integrated for performance monitoring and optimization tracking

### Navigation & UX Improvements
- **Streamlined learning navigation**: Removed redundant intermediate pages
- **Direct routing**: Learning notes now navigate directly back to main learning page
- **Redirect handling**: Legacy category pages automatically redirect to prevent 404s

### Documentation & Planning
- **Comprehensive refactoring documentation**: Detailed sub-task tracking and progress monitoring
- **API endpoint planning**: Identified required backend APIs for smooth handoff
- **Performance baseline**: Vercel deployment with Speed Insights for optimization tracking

### Current Architecture Status
- **Frontend refactoring**: Phase 1 complete, ready for Phase 2 (Mock Interview system)
- **Component structure**: Clean separation between UI and business logic
- **Backend readiness**: Clear API requirements documented for implementation

## Overview

The MedCamps platform uses a hierarchical content management system that supports three main content types: Learning Materials, Practice Questions, and Mock Interviews. This document outlines the structure, relationships, and mapping between the admin interface and user-facing pages.

## Content Hierarchy Structure

### 1. Learning Materials (3 Levels)

**Level 0: Categories**
- Unified categories shared across all content types
- Examples: Motivation, Communication, Ethics, Teamwork, Problem Solving, Empathy, Leadership
- Admin Path: `/admin` → Learning Tab → Categories View
- User Path: `/learning` (collapsible category list)

**Level 1: Topics**
- Specific learning topics within each category
- Examples: "Why Medicine and Not Nursing?", "Breaking Bad News", "Patient Communication"
- Admin Path: `/admin` → Learning Tab → Select Category → Topics View
- User Path: `/learning` → Expand Category → Topic List

**Level 2: Notes & Content**
- Individual note pages with rich text content and video
- Contains: Title, Rich Text Content, Video URL, Status
- Admin Path: `/admin` → Learning Tab → Select Category → Select Topic → Content Editor
- User Path: `/learning/[category]/[topic-slug]` → Individual note page

### 2. Practice Questions (3 Levels)

**Level 0: Categories**
- Same unified categories as Learning Materials
- Ensures consistency across content types
- Admin Path: `/admin` → Practice Tab → Categories View
- User Path: `/practice` (category filter badges)

**Level 1: Question Titles**
- Individual practice question sets within each category
- Examples: "Valid Consent & Patient Autonomy", "Breaking Bad News Scenarios"
- Admin Path: `/admin` → Practice Tab → Select Category → Questions View
- User Path: `/practice` → Filter by Category → Question Cards

**Level 2: Question Content & Marking Criteria**
- Question text, scenarios, and detailed marking criteria
- Contains: Question Text, Marking Criteria (JSON), Duration, Status
- Admin Path: `/admin` → Practice Tab → Select Category → Select Question → Details Editor
- User Path: `/practice/[question-slug]` → Question interface with marking

### 3. Mock Interviews (4 Levels)

**Level 0: Mock Interview Sets**
- Top-level mock interview collections (Mock 1, Mock 2, Mock 3)
- Each contains 7 stations covering different competencies
- Admin Path: `/admin` → Mock Tab → Interviews View
- User Path: `/mock-interview` → Mock Interview Cards

**Level 1: Categories**
- Competency-based categories within each mock interview
- Novel questions NOT shared with practice questions
- Examples: "Medical Ethics", "Communication Skills", "Problem Solving"
- Admin Path: `/admin` → Mock Tab → Select Mock → Categories View
- User Path: Internal navigation within mock interview flow

**Level 2: Question Titles**
- Individual station questions within each category
- Examples: "Informed Consent in Emergency", "Delivering Unexpected Diagnosis"
- Admin Path: `/admin` → Mock Tab → Select Mock → Select Category → Questions View
- User Path: `/mock-interview/[mock-id]/station/[station-number]`

**Level 3: Question Details**
- Complete question scenarios with marking criteria and timing
- Contains: Question Text, Marking Criteria (JSON), Time Limit, Competency, Status
- Admin Path: `/admin` → Mock Tab → Select Mock → Select Category → Select Question → Details Editor
- User Path: Individual station interface during mock interview

## Data Relationships

### Unified Categories
\`\`\`
Categories (shared across all content types)
├── Learning Topics
├── Practice Questions  
└── Mock Interview Categories (per mock)
\`\`\`

### Content Mapping
\`\`\`
Learning: Category → Topic → Note Content
Practice: Category → Question → Question Details
Mock: Mock Set → Category → Question → Question Details
\`\`\`

## Admin Interface Navigation Flow

### Learning Management
1. **Categories List** → View all unified categories
2. **Topics List** → View topics within selected category
3. **Content Editor** → Edit individual note content and media

### Practice Management
1. **Categories List** → View unified categories with question counts
2. **Questions List** → View questions within selected category
3. **Details Editor** → Edit question text and marking criteria

### Mock Interview Management
1. **Mock Sets List** → View all mock interview collections
2. **Categories List** → View competency categories within selected mock
3. **Questions List** → View station questions within selected category
4. **Details Editor** → Edit complete station details and criteria

## User Interface Mapping

### Learning Page (`/learning`)
- Displays collapsible category list
- Each category expands to show topics
- Topics link to individual note pages
- Completion tracking and progress bars

### Practice Page (`/practice`)
- Category filter badges at top
- Question cards grouped by category
- Each card links to question interface
- Progress tracking per question set

### Mock Interview Page (`/mock-interview`)
- Mock interview selection cards
- Each mock shows competencies and difficulty
- Links to complete mock interview flow
- Station-by-station progression

## Technical Implementation Notes

### Database Schema Considerations

**Categories Table**
\`\`\`sql
categories (
  id, name, description, status, created_at, updated_at
)
\`\`\`

**Learning Topics Table**
\`\`\`sql
learning_topics (
  id, category_id, title, content, video_url, status, order, created_at, updated_at
)
\`\`\`

**Practice Questions Table**
\`\`\`sql
practice_questions (
  id, category_id, title, question_text, marking_criteria_json, 
  duration_minutes, status, created_at, updated_at
)
\`\`\`

**Mock Interviews Table**
\`\`\`sql
mock_interviews (
  id, title, description, stations_count, status, created_at, updated_at
)
\`\`\`

**Mock Categories Table**
\`\`\`sql
mock_categories (
  id, mock_interview_id, name, description, question_count, status, created_at, updated_at
)
\`\`\`

**Mock Questions Table**
\`\`\`sql
mock_questions (
  id, mock_category_id, title, question_text, marking_criteria_json,
  time_limit_minutes, competency, status, created_at, updated_at
)
\`\`\`

### API Endpoints Structure

**Learning Endpoints**
- `GET /api/learning/categories` - List all categories
- `GET /api/learning/categories/{id}/topics` - Topics in category
- `GET /api/learning/topics/{id}` - Individual topic content
- `POST/PUT/DELETE /api/admin/learning/*` - Admin CRUD operations

**Practice Endpoints**
- `GET /api/practice/categories` - Categories with question counts
- `GET /api/practice/categories/{id}/questions` - Questions in category
- `GET /api/practice/questions/{id}` - Question details and criteria
- `POST/PUT/DELETE /api/admin/practice/*` - Admin CRUD operations

**Mock Interview Endpoints**
- `GET /api/mock-interviews` - List all mock interview sets
- `GET /api/mock-interviews/{id}/categories` - Categories in mock
- `GET /api/mock-interviews/{mockId}/categories/{catId}/questions` - Questions in category
- `GET /api/mock-interviews/questions/{id}` - Question details
- `POST/PUT/DELETE /api/admin/mock-interviews/*` - Admin CRUD operations

### Content Status Management
- **Active**: Published and visible to users
- **Draft**: Work in progress, admin-only visibility
- **Archived**: Hidden from users but preserved

### Key Design Principles
1. **Unified Categories**: Same categories across Learning and Practice for consistency
2. **Novel Mock Content**: Mock interview questions are unique, not reused from practice
3. **Hierarchical Navigation**: Clear breadcrumb navigation in admin interface
4. **Progressive Disclosure**: Users see appropriate level of detail at each stage
5. **Consistent Patterns**: Similar UI patterns across all content types

## Future Considerations
- User progress tracking across all content types
- Advanced filtering and search capabilities
- Content versioning and revision history
- Bulk import/export functionality
- Analytics and usage reporting

## ⚠️ Next Steps for Backend Implementation

### Immediate Priorities:
1. **API Development**: Implement the documented API endpoints for each extracted component
2. **Database Schema**: Create tables based on the documented structure
3. **Performance Testing**: Use Vercel Speed Insights data to optimize API response times
4. **Phase 2 Refactoring**: Continue with mock interview system optimization

### Performance Metrics Available:
- **Vercel Speed Insights**: Real-time performance monitoring active
- **Component Loading**: Lazy loading implemented for optimal bundle splitting
- **Baseline Established**: Pre-refactoring metrics captured for comparison

The frontend architecture is now backend-ready with clear component boundaries, documented data requirements, and performance optimization infrastructure in place.
