# Course Subscription Application

Welcome to the **Course Subscription Application**. This project allows learners to view available courses, subscribe to them, and manage their course subscriptions. The application uses **ServiceNow** as the backend to handle course and subscription data, and a **React** frontend for the user interface.

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Features](#features)
  - [Course List](#course-list)
  - [Subscription Feature](#subscription-feature)
  - [My Courses](#my-courses)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup (ServiceNow)](#backend-setup-servicenow)
  - [Frontend Setup (React)](#frontend-setup-react)
- [Folder Structure](#folder-structure)
- [Next Steps](#next-steps)
- [Resources](#resources)

## Introduction

This application allows learners to browse through available courses and subscribe to them. The backend is powered by **ServiceNow**, which manages the course data and subscriptions via REST APIs. The frontend is built using **React**, providing a user-friendly interface for learners to interact with the application.

## Technologies

- **Backend**: ServiceNow (using default tables and REST APIs)
- **Frontend**: React
- **Version Control**: Git
- **Optional**: Drag-and-drop subscription feature using HTML5 drag-and-drop API

## Features

### Course List
- Fetch and display a list of available courses from the ServiceNow backend.
- Show course details: Title, Description, Duration.
- Provide subscription options (via button or drag-and-drop).

### Subscription Feature
- Clicking the "Subscribe" button or dropping a course into a subscription basket will create a new subscription record in the backend.
- Subscribed courses are displayed in the learner's "My Courses" section.

### My Courses
- Fetch and display the list of courses the learner has subscribed to.
- Optionally, learners can unsubscribe from courses.

## Prerequisites

### Backend
- ServiceNow Personal Developer Instance (PDI)
- ServiceNow Studio Access
- Git and Remote Repository

### Frontend
- Node.js and npm installed
- React installed via `create-react-app`

## Setup Instructions

### Backend Setup (ServiceNow)

1. **Sign Up for a ServiceNow PDI**
   - Visit [developer.servicenow.com](https://developer.servicenow.com/) and request a Personal Developer Instance.

2. **Clone the Backend Repository**
   - Clone the repository containing the backend code to your local machine.
   - Create a new remote repository on your preferred Git provider (e.g., GitHub, GitLab).
   - Push the cloned code to the new remote repository.

3. **Import Application into ServiceNow**
   - Log into your PDI and use Studio to import the application code from the remote repository.

4. **Create Git Credentials**
   - Navigate to **Connections & Credentials > Credentials** and create a new credential for Git source control.

5. **Verify Import**
   - Ensure the application is successfully imported and there are no errors.

6. **Test REST API**
   - The backend exposes REST APIs for interacting with the courses and subscriptions.
   - You can use the ServiceNow REST API Explorer to test the APIs.

### Frontend Setup (React)

1. **Clone the Frontend Repository**
   - Clone the frontend React code from the repository located in `course-subscription-app/frontend/`.

2. **Install Dependencies**
   - Navigate to the frontend directory: `cd course-subscription-app/frontend/`.
   - Run `npm install` to install all the dependencies.

3. **Configure API Endpoints**
   - Update the API base URLs in your frontend application to point to the ServiceNow REST API.

4. **Start the Frontend Application**
   - Run `npm start` to launch the React app in development mode.
   - Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.
   
## Next Steps

Now that you have the basic structure set up, you can focus on:

1. **Enhancing the UI**: You can customize the frontend by adding features such as drag-and-drop subscription.
2. **Improving Backend Logic**: Extend the ServiceNow backend to include additional data validation, error handling, and advanced subscription features.
3. **Testing**: Ensure that both the frontend and backend components work seamlessly together by testing the application end-to-end.

## Resources

- [ServiceNow Developer Site](https://developer.servicenow.com/)
- [ServiceNow REST API Documentation](https://docs.servicenow.com/csh?topicname=c_RESTAPI.html&version=latest)
- [React Documentation](https://reactjs.org/)
- [Git Documentation](https://git-scm.com/doc)
