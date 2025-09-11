# Overview

This is a professional portfolio website for Sarah Bond, a theatre director, playwright, and author from County Durham. The application serves as a comprehensive showcase of her theatrical work, writing portfolio, and creative services. Built as a full-stack web application, it features a modern React frontend with a Node.js/Express backend, designed to present Sarah's professional achievements and provide contact functionality for potential collaborators and clients.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Forms**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Validation**: Zod schemas for request validation
- **Storage**: In-memory storage implementation with interface for future database integration

## Data Storage Solutions
- **Current**: In-memory storage using Map data structures
- **Configured**: Drizzle ORM with PostgreSQL support (ready for production deployment)
- **Schema**: Contact form submissions with validation

## Design System
- **Component Library**: Custom implementation using Radix UI primitives
- **Theme**: Black, white, and silver color scheme as requested by client
- **Typography**: Custom pixel font for headings, standard fonts for body text
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Content Management
- **Static Assets**: Images and documents served from `attached_assets` directory
- **Gallery System**: Categorized content display with detailed views
- **Workshop Materials**: Dedicated section for creative workshop offerings

## Development Features
- **Hot Reload**: Vite development server with HMR
- **Error Handling**: Runtime error overlay for development
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Code Quality**: Consistent formatting and linting setup

# External Dependencies

## Frontend Dependencies
- **UI Components**: Radix UI primitives for accessibility-compliant components
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date formatting and manipulation
- **Form Validation**: React Hook Form with Hookform Resolvers

## Backend Dependencies
- **Web Framework**: Express.js for HTTP server
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Driver**: Neon Database serverless PostgreSQL client
- **Validation**: Zod for schema validation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

## Build and Development Tools
- **Build Tool**: Vite for fast development and optimized production builds
- **Bundler**: esbuild for server-side code bundling
- **TypeScript**: Full type checking and compilation
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Email Services
- **Email Provider**: SendGrid for contact form submissions and notifications

## Deployment Configuration
- **Production Build**: Optimized client bundle with server-side rendering support
- **Asset Serving**: Static file serving for images and documents
- **Environment Variables**: Database URL and API keys configuration