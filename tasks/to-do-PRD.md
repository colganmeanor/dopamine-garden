# Task Garden - Product Requirements Document

## Project Overview

### Vision Statement

A simple, elegant to-do application built with React Native and Expo, designed as a learning project to master cross-platform mobile development while creating a portfolio-worthy application.

### Success Metrics

- Successfully deploy to web, iOS, and Android platforms
- Demonstrate proficiency in React Native core concepts
- Create a polished user experience suitable for portfolio presentation
- Complete all core features within scope

## Target Audience

**Primary User**: Individual users seeking a straightforward task management solution
**Secondary Audience**: Potential employers/clients reviewing developer portfolio

## Technical Stack

- **Framework**: React Native with Expo
- **UI Components**: React-Bootstrap components
- **Development Environment**: Cursor
- **Target Platforms**: Web, iOS, Android
- **State Management**: React hooks (useState, useEffect)
- **Data Persistence**: AsyncStorage (React Native)

## Core Features (MVP)

### 1. Task Creation

**User Story**: As a user, I want to create new tasks so I can track things I need to do.

**Acceptance Criteria**:

- User can tap "Add Task" button to open task creation form
- Form includes fields for title (required) and description (optional)
- Title field has character limit of 100 characters
- Description field has character limit of 500 characters
- Form validation prevents empty title submission
- Task is immediately added to active tasks list upon creation
- Form clears after successful task creation

### 2. Task Editing

**User Story**: As a user, I want to edit existing tasks so I can update information as needed.

**Acceptance Criteria**:

- User can tap on any task to open edit mode
- Edit form pre-populates with current task data
- User can modify title and/or description
- Changes are saved when user confirms edit
- User can cancel edit to discard changes
- Edited tasks maintain their completion status

### 3. Task Deletion

**User Story**: As a user, I want to delete tasks so I can remove items I no longer need.

**Acceptance Criteria**:

- User can delete task via swipe gesture or delete button
- Confirmation dialog appears before permanent deletion
- Deleted tasks are permanently removed (no recovery)
- Delete action works for both active and completed tasks

### 4. View All Active Tasks

**User Story**: As a user, I want to see all my active tasks so I can understand what needs to be done.

**Acceptance Criteria**:

- Default screen shows list of all active (incomplete) tasks
- Tasks display title prominently with description below
- List is scrollable if tasks exceed screen height
- Empty state message when no active tasks exist
- Tasks are ordered by creation date (newest first)

### 5. Complete Tasks

**User Story**: As a user, I want to mark tasks as complete so I can track my progress.

**Acceptance Criteria**:

- User can mark task complete via checkbox or button
- Completed task moves from active list to completed list
- Visual feedback confirms completion action
- Completion action is reversible

### 6. View Completed Tasks

**User Story**: As a user, I want to review completed tasks so I can see what I've accomplished.

**Acceptance Criteria**:

- Separate screen/section for completed tasks
- Navigation between active and completed views
- Completed tasks show completion date
- User can "uncomplete" tasks to move back to active list
- Empty state message when no completed tasks exist

## Technical Requirements

### Data Model

```javascript
Task = {
  id: string (UUID),
  title: string (required, max 100 chars),
  description: string (optional, max 500 chars),
  completed: boolean,
  createdAt: timestamp,
  completedAt: timestamp | null
}
```

### Screen Structure

1. **Main Screen**: Active tasks list with navigation
2. **Completed Screen**: Completed tasks list
3. **Task Form Screen**: Create/edit task modal or screen
4. **Navigation**: Tab navigation or drawer navigation

### Platform Considerations

- **iOS**: Follow iOS design guidelines for navigation and interactions
- **Android**: Implement Material Design patterns where appropriate
- **Web**: Ensure responsive design and proper touch/click handling

## User Interface Guidelines

### Design Principles

- **Simplicity**: Clean, uncluttered interface
- **Accessibility**: Proper contrast ratios and touch target sizes
- **Consistency**: Uniform styling across all screens
- **Feedback**: Clear visual feedback for all user actions

### Key UI Elements

- Primary action button for adding tasks
- Clear visual distinction between active and completed tasks
- Intuitive navigation between different views
- Loading states for async operations
- Error handling with user-friendly messages

## React Native Learning Objectives

Through this project, demonstrate proficiency in:

1. **Core React Native Components**: View, Text, TextInput, TouchableOpacity, FlatList, Modal
2. **Navigation**: React Navigation implementation
3. **State Management**: useState and useEffect hooks
4. **Data Persistence**: AsyncStorage for local data storage
5. **Platform APIs**: Platform-specific code where needed
6. **Styling**: StyleSheet and responsive design
7. **Performance**: Efficient list rendering and state updates
8. **Testing**: Basic component and functionality testing

## Future Roadmap (Post-MVP)

### Phase 2 Features

1. **Due Dates**
   - Add date picker for task deadlines
   - Visual indicators for overdue tasks
   - Sort tasks by due date

2. **Projects/Categories**
   - Group related tasks together
   - Filter tasks by project
   - Project-based progress tracking

3. **Search Functionality**
   - Search tasks by title/description
   - Filter options (active, completed, date ranges)

### Phase 3 Enhancements

- Task priorities (high, medium, low)
- Notifications and reminders
- Data sync across devices
- Export functionality
- Theme customization

## Success Criteria

### Technical Success

- [ ] App builds and runs on all three platforms (web, iOS, Android)
- [ ] All core features implemented and functional
- [ ] Data persists between app sessions
- [ ] No critical bugs or crashes
- [ ] Code follows React Native best practices

### Portfolio Success

- [ ] Professional UI/UX design
- [ ] Comprehensive README with setup instructions
- [ ] Clean, well-documented code
- [ ] Demonstrates React Native proficiency
- [ ] Ready for app store deployment

## Risk Mitigation

### Technical Risks

- **Platform differences**: Test early and often on all target platforms
- **Data persistence**: Implement robust error handling for AsyncStorage
- **Performance**: Use FlatList for large task lists, avoid unnecessary re-renders

### Scope Risks

- **Feature creep**: Stick to MVP features until complete
- **Over-engineering**: Keep solutions simple and focused
- **Time management**: Set realistic milestones and track progress

## Development Milestones

### Week 1: Setup and Foundation

- Project initialization with Expo
- Basic navigation structure
- Initial UI wireframes and design system

### Week 2: Core Task Management

- Task creation and editing functionality
- Basic task list display
- Local data storage implementation

### Week 3: Task States and Views

- Task completion functionality
- Completed tasks view
- Task deletion with confirmation

### Week 4: Polish and Testing

- UI/UX refinement
- Cross-platform testing
- Bug fixes and performance optimization
- Documentation and README

---

*This PRD serves as the guiding document for development priorities and scope management. Update as needed based on learning progress and technical discoveries.*
