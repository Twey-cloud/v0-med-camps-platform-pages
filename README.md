# MedCamps Platform - Medical Interview Preparation System

A comprehensive Next.js application for UK medical school interview preparation, featuring learning materials, practice questions, and mock interview simulations.

## Project Overview

MedCamps is a full-stack educational platform built with Next.js 15, TypeScript, and Tailwind CSS. The platform provides structured learning paths, interactive practice sessions, and comprehensive mock interview experiences for medical school candidates.

## Design System

### Color Theme
The platform uses an **emerald green** color scheme (`emerald-800`, `emerald-700`, `emerald-900`) as the primary brand color, creating a professional medical aesthetic. The design system includes:

- **Primary**: Emerald green variants for navigation and key actions
- **Secondary**: Slate grays for text and subtle elements  
- **Accent**: Blue for interactive elements and progress indicators
- **Status Colors**: Green (success), amber (warning), red (error) for psychological impact

### shadcn/ui Integration
Built on shadcn/ui component library with custom theming:
- Consistent component patterns across all interfaces
- Accessible design with proper ARIA labels and keyboard navigation
- Responsive breakpoints with mobile-first approach
- Performance-optimized with React.memo() and lazy loading

## Project Structure

### Core Application Files

\`\`\`
app/
├── layout.tsx                    # Root layout with sidebar and mobile blocker
├── page.tsx                      # Dashboard with quick actions and video content
├── globals.css                   # Global styles and Tailwind configuration
├── admin/
│   ├── page.tsx                  # Admin dashboard hub (100 lines, refactored)
│   └── components/
│       ├── AdminOverview.tsx     # Statistics and metrics dashboard
│       ├── AdminLearningManagement.tsx    # Learning content CRUD
│       ├── AdminPracticeManagement.tsx    # Practice questions CRUD
│       ├── AdminMockInterviewManagement.tsx # Mock interview CRUD
│       └── shared/
│           ├── AdminTable.tsx    # Reusable data table component
│           ├── AdminForm.tsx     # Dynamic form generator
│           └── AdminHeader.tsx   # Consistent admin page headers
├── learning/
│   ├── page.tsx                  # Learning categories with collapsible topics
│   └── motivation/
│       └── why-medicine-not-nursing/
│           └── page.tsx          # Individual learning note with rich content
├── practice/
│   ├── page.tsx                  # Practice question categories and filters
│   └── valid-consent/
│       └── page.tsx              # Practice question interface (120 lines, refactored)
├── mock-interview/
│   ├── page.tsx                  # Mock interview selection cards
│   └── mock-1/
│       └── page.tsx              # Mock interview flow (120 lines, refactored)
├── performance/
│   └── page.tsx                  # Performance analytics with custom histogram
└── profile/
    └── page.tsx                  # User profile and settings
\`\`\`

### Component Architecture

\`\`\`
components/
├── sidebar.tsx                   # Responsive navigation with mobile hamburger menu
├── MobileBlocker.tsx            # Desktop-only access enforcement
├── shared/                      # Cross-platform reusable components
│   ├── BackButton.tsx           # Consistent navigation back buttons
│   ├── PageHeader.tsx           # Standardized page headers with actions
│   ├── SectionNavigation.tsx    # Sequential content navigation
│   ├── FormField.tsx            # Unified form input handling
│   ├── ContactForm.tsx          # Reusable contact dialog system
│   ├── FormContainer.tsx        # Consistent form wrapper styling
│   ├── StatusBadge.tsx          # Color-coded status indicators
│   ├── ProgressDisplay.tsx      # Progress bars and completion tracking
│   ├── ScoreDisplay.tsx         # Score visualization with color psychology
│   ├── CompletionIndicator.tsx  # Task completion states
│   ├── PageLayout.tsx           # Standard page container patterns
│   ├── GridContainer.tsx        # Responsive grid layout system
│   ├── FlexContainer.tsx        # Flexible layout containers
│   ├── Section.tsx              # Content grouping with consistent spacing
│   ├── ActionButton.tsx         # Interactive buttons with loading states
│   ├── InteractiveCard.tsx      # Collapsible content cards
│   ├── LoadingState.tsx         # Unified loading indicators
│   └── ContentCard.tsx          # Multi-purpose content display cards
├── practice/
│   ├── QuestionInterface.tsx    # Question display with timer integration
│   ├── SelfAssessment.tsx       # Marking criteria and score calculation
│   └── AIFeedback.tsx           # AI-powered response analysis
├── mock-interview/
│   ├── InterviewStation.tsx     # Individual station interface
│   ├── InstructionsScreen.tsx   # Pre-interview setup and instructions
│   ├── SetupScreen.tsx          # Interview configuration
│   ├── AssessmentPanel.tsx      # Real-time marking and evaluation
│   └── ReviewScreen.tsx         # Post-interview performance review
├── learning/
│   └── LearningNote.tsx         # Rich text content with video integration
└── ui/                          # shadcn/ui base components
    ├── button.tsx               # Base button component
    ├── card.tsx                 # Base card component
    ├── form.tsx                 # Form handling utilities
    ├── input.tsx                # Input field components
    ├── select.tsx               # Dropdown selection components
    ├── badge.tsx                # Status and category badges
    ├── progress.tsx             # Progress bar components
    ├── chart.tsx                # Chart and visualization components
    └── breadcrumb.tsx           # Navigation breadcrumb component
\`\`\`

### Service Layer

\`\`\`
services/
├── mockInterviewService.ts      # Mock interview business logic and state management
└── practiceSessionService.ts    # Practice session workflow and data handling
\`\`\`

### Utility Functions

\`\`\`
hooks/
└── useTimer.tsx                 # Reusable timer hook with pause/resume functionality

lib/
└── utils.ts                     # Utility functions including cn() for class merging
\`\`\`

### Documentation

\`\`\`
docs/
├── refactoring-plan.md          # Complete refactoring progress and phase tracking
├── api-documentation.md         # Comprehensive API endpoint specifications
└── backend-implementation-guide.md # Technical implementation roadmap
\`\`\`

## Technical Architecture

### Frontend Framework
- **Next.js 15** with App Router for file-based routing and server components
- **TypeScript** for type safety and developer experience
- **Tailwind CSS v4** for utility-first styling and responsive design
- **React 19** with concurrent features and performance optimizations

### Performance Optimizations
- **Code Splitting**: Lazy loading for admin components and large interfaces
- **React.memo()**: Memoization for expensive components and calculations
- **Suspense Boundaries**: Loading states for async component imports
- **Vercel Speed Insights**: Real-time performance monitoring and optimization tracking

### State Management
- **Service Layer Pattern**: Centralized business logic in service classes
- **React Hooks**: Local state management with useState and useEffect
- **Singleton Services**: Consistent state across component instances

### Responsive Design
- **Mobile Blocker**: Desktop-only access with informational screen for mobile users
- **Breakpoint Strategy**: lg+ (1024px) for full functionality, below shows access restriction
- **Touch Targets**: Optimized button sizes and spacing for desktop interaction

### Component Patterns
- **Compound Components**: Complex interfaces broken into focused sub-components
- **Render Props**: Flexible component composition for reusable logic
- **Custom Hooks**: Shared stateful logic like timer management and form handling

## Content Management System

### Hierarchical Structure
The platform uses a 3-4 level content hierarchy:

**Learning Materials**: Categories → Topics → Rich Content
**Practice Questions**: Categories → Questions → Marking Criteria  
**Mock Interviews**: Mock Sets → Categories → Questions → Station Details

### Admin Interface
Fully refactored admin system with:
- **92% file size reduction** from original monolithic structure
- **Component extraction** with lazy loading and performance optimization
- **Shared components** for consistent CRUD operations across content types
- **Real-time preview** and content management workflows

### Data Flow
- **Service Layer**: Handles all business logic and API interactions
- **Component Props**: Clean interfaces between UI and data layers
- **Mock Data**: Development-ready with realistic content for testing

## Development Features

### Performance Monitoring
- **Vercel Speed Insights**: Integrated performance tracking
- **Build Optimization**: Tree shaking and bundle analysis
- **Component Profiling**: React DevTools integration for performance debugging

### Code Quality
- **TypeScript Strict Mode**: Full type coverage across components and services
- **Component Documentation**: Inline comments and prop interface definitions
- **Consistent Patterns**: Standardized component structure and naming conventions

### Development Workflow
- **Hot Reload**: Fast development iteration with Next.js dev server
- **Component Isolation**: Modular architecture for independent development
- **Mock Services**: Frontend development without backend dependencies

## Deployment Configuration

### Vercel Integration
- **Automatic Deployments**: Git-based deployment pipeline
- **Environment Variables**: Secure configuration management
- **Performance Analytics**: Real-time monitoring and optimization insights

### Build Process
- **Static Generation**: Pre-rendered pages for optimal performance
- **API Routes**: Server-side functionality within Next.js framework
- **Asset Optimization**: Automatic image and bundle optimization

This architecture provides a scalable, maintainable foundation for the MedCamps platform with clear separation of concerns, performance optimization, and comprehensive content management capabilities.
