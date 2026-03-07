# Task Plan: Implementing Social Video App Comment UI with React 19

This document outlines the step-by-step plan to implement the comment UI for a social video application, leveraging React 19's `React.use` and `React.Suspense` for on-demand data fetching.

## 1. Project Setup and Initial Structure

- [x] Verify the existing Next.js 14 project setup.
- [x] Create necessary directories for new components:
    -   `app/components`
    -   `specs` (already created for this task plan)

## 2. Core Data Fetching Logic

- [ ] **File:** `app/components/data.ts`
- [ ] **Purpose:** Implement a mock asynchronous data fetching function for comments. This function will simulate an API call by returning a Promise that resolves with a list of mock comment objects after a delay.
- [ ] **Details:**
    - [ ] Define a `Comment` interface (or type).
    - [ ] Implement `fetchComments(videoId: string)` function.
    - [ ] Include a `delay` to simulate network latency.

## 3. Comment Display Component

- [ ] **File:** (Part of `app/components/CommentPopup.tsx` initially, or a separate `app/components/CommentsList.tsx` if structure evolves)
- [ ] **Purpose:** A client component responsible for using `React.use` to read the fetched comment data and render the list of comments.
- [ ] **Details:**
    - [ ] Import the `fetchComments` function.
    - [ ] Use `React.use(fetchComments(videoId))` to get the data.
    - [ ] Map over the comments array to display individual comment elements.
    - [ ] Ensure this component is marked as a client component (`'use client'`).

## 4. Comment Popup Component

- [ ] **File:** `app/components/CommentPopup.tsx`
- [ ] **Purpose:** The main client component that orchestrates the comment loading, displays the "Show Comments" button, manages the popup state, and integrates `React.Suspense`.
- [ ] **Details:**
    - [ ] Mark as a client component (`'use client'`).
    - [ ] Manage a state variable (`showComments: boolean`) to control the visibility of the comment section.
    - [ ] Implement a button (e.g., "Show Comments") that toggles `showComments`.
    - [ ] Conditionally render the comment section when `showComments` is true.
    - [ ] Wrap the comment display component (from step 3) with `<React.Suspense fallback={<LoadingSpinner />}>`.
    - [ ] Design a simple loading spinner component (can be inline or a separate small component).
    - [ ] Include basic styling for the popup and loading indicator.

## 5. Integrate into Main Page

- [ ] **File:** `app/page.tsx`
- [ ] **Purpose:** Update the main page to include the `CommentPopup` component.
- [ ] **Details:**
    - [ ] Import `CommentPopup`.
    - [ ] Render `CommentPopup` within the `Home` component.
    - [ ] Pass any necessary props (e.g., `videoId`) to `CommentPopup` (for demonstration, a hardcoded `videoId` is acceptable).

## 6. Testing and Verification

- [ ] **Manual Testing:**
    - [ ] Navigate to the video page.
    - [ ] Verify "Show Comments" button is present.
    - [ ] Click the button.
    - [ ] Observe the loading indicator.
    - [ ] Verify comments load and display correctly.
- [ ] **Code Review:** Ensure all components are correctly marked as client components where necessary and that `React.use` and `React.Suspense` are used idiomatically.

## 7. Explanation to User

- [ ] Provide a clear explanation of the implemented code, highlighting the use of `React.use` and `React.Suspense` and how they fulfill the requirements.