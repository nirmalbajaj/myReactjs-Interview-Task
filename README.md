# Image Upload App

A frontend-only web application built with React that allows users to log in, upload images, and view them on different pages. The app includes features like liking images, sorting by upload time or likes, and persisting data using `localStorage`.

## Features
- **User Authentication**: Log in with predefined credentials (`admin` / `admin123`).
- **Image Upload**: Upload images and view them on the Home page.
- **Multiple Views**:
  - **Home**: Displays all uploaded images.
  - **Recently Added**: Shows images sorted by upload time (newest first).
  - **Top Rated**: Shows images sorted by the number of likes (most liked first).
- **Like Functionality**: Users can like images to show appreciation.
- **Data Persistence**: Uses `localStorage` to save user data and images between page refreshes.
- **Form Validation**: Login form validation using React Hook Form and Yup.
- **Responsive Design**: Styled with Tailwind CSS for a responsive and modern UI.

## Tech Stack
- **React**: For building the user interface.
- **Vite**: For project setup and fast development.
- **React Router**: For navigation between pages (Home, Recently Added, Top Rated).
- **Redux Toolkit**: For state management (user data, images, likes).
- **React Hook Form & Yup**: For form handling and validation.
- **Tailwind CSS**: For styling the app.
- **localStorage**: For persisting data in the browser.
