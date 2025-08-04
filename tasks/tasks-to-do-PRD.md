# Task Garden - Task List

## Relevant Files

- `app/_layout.tsx` - Main navigation layout using Expo Router
- `app/index.tsx` - Home screen showing active tasks list
- `app/completed.tsx` - Screen for displaying completed tasks
- `app/task-form.tsx` - Modal/screen for creating and editing tasks
- `components/TaskItem.tsx` - Reusable component for displaying individual tasks
- `components/TaskForm.tsx` - Form component for task creation and editing
- `components/EmptyState.tsx` - Component for showing empty state messages
- `components/DeleteConfirmation.tsx` - Modal for task deletion confirmation
- `hooks/useTasks.ts` - Custom hook for task state management and AsyncStorage operations
- `types/task.ts` - TypeScript interfaces for Task data model
- `utils/storage.ts` - Utility functions for AsyncStorage operations
- `utils/validation.ts` - Form validation utilities
- `styles/theme.ts` - Design system with colors, typography, spacing, and other design tokens
- `components/TaskItem.test.tsx` - Unit tests for TaskItem component
- `components/TaskForm.test.tsx` - Unit tests for TaskForm component
- `hooks/useTasks.test.ts` - Unit tests for useTasks hook
- `utils/storage.test.ts` - Unit tests for storage utilities

### Notes

- Unit tests should typically be placed alongside the code files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx` in the same directory).
- Use `npx jest [optional/path/to/test/file]` to run tests. Running without a path executes all tests found by the Jest configuration.

## Tasks

- [ ] 1.0 Project Setup and Navigation Structure
  - [X] 1.1 Install and configure Async Storage dependency for data persistence
  - [X] 1.2 Set up bottom tab navigation between Active Tasks and Completed Tasks screens
  - [X] 1.3 Create basic screen structure for home.tsx (Active Tasks) and completed.tsx
  - [X] 1.4 Implement floating action button for adding new tasks
  - [X] 1.5 Set up modal toggle for task creation and editing forms

- [ ] 2.0 Task Data Model and Storage Implementation
  - [X] 2.1 Create Task TypeScript interface with required properties (id, title, description, completed, createdAt, completedAt)
  - [ ] 2.2 Implement Async Storage utility functions for saving, loading, and deleting tasks
  - [ ] 2.3 Create UUID generation utility for unique task IDs
  - [ ] 2.4 Implement data migration and error handling for storage operations
  - [ ] 2.5 Add storage utility unit tests

- [ ] 2.5 Design System and Theme Implementation
  - [ ] 2.5.1 Create theme file with color palette (primary, secondary, background, text, etc.)
  - [ ] 2.5.2 Define typography scale (font sizes, font weights, line heights)
  - [ ] 2.5.3 Establish spacing system (margins, padding, gaps)
  - [ ] 2.5.4 Define border radius and shadow values
  - [ ] 2.5.5 Update existing components to use theme values
  - [ ] 2.5.6 Add TypeScript types for theme properties

- [ ] 3.0 Core Task Management Components
  - [ ] 3.1 Create TaskItem component with title, description, completion checkbox, and edit/delete actions
  - [ ] 3.2 Implement swipe-to-delete functionality for TaskItem with confirmation
  - [ ] 3.3 Build TaskForm component with title and description fields, validation, and submit/cancel actions
  - [ ] 3.4 Create EmptyState component for when no tasks exist
  - [ ] 3.5 Implement DeleteConfirmation modal component
  - [ ] 3.6 Add unit tests for all components

- [ ] 4.0 Task State Management and Business Logic
  - [ ] 4.1 Create useTasks custom hook for managing task state and operations
  - [ ] 4.2 Implement task creation functionality with validation
  - [ ] 4.3 Add task editing capability with pre-populated form data
  - [ ] 4.4 Implement task completion/uncompletion logic with timestamp updates
  - [ ] 4.5 Add task deletion with confirmation and permanent removal
  - [ ] 4.6 Implement task filtering and sorting (active vs completed, by creation date)
  - [ ] 4.7 Add unit tests for useTasks hook
  
- [ ] 5.0 UI/UX Polish and Cross-Platform Testing
  - [ ] 5.1 Implement responsive design for different screen sizes
  - [ ] 5.2 Add loading states and error handling throughout the app
  - [ ] 5.3 Implement proper keyboard handling for form inputs
  - [ ] 5.4 Add haptic feedback for user interactions
  - [ ] 5.5 Test app functionality on web, iOS, and Android platforms
  - [ ] 5.6 Optimize performance for large task lists using FlatList
  - [ ] 5.7 Add accessibility features (screen reader support, proper contrast)
  - [ ] 5.8 Create comprehensive README with setup and usage instructions
