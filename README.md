# tasksApp
Tasks application made with React, Express and PostgreSQL.

## Overview

In this project, I've developed an intuitive application tailored for project and task management. Users have the ability to create projects, assign tasks to them, and modify project details as needed. The application's frontend is built using React, Redux Toolkit, and react-markdown for enhanced project descriptions. On the backend, Express and PostgreSQL are employed, and security features include token-based authentication using jsonwebtoken, helmet for enhanced security, and express rate limit for further protection.
    
### Key Features

1. **Project Creation and Task Assignment:** Users can create projects and assign tasks to them, fostering efficient organization and management. This feature enhances productivity and collaboration by providing a structured framework for task allocation.
    
2. **Dynamic Project Manipulation:** Projects are not static entities; they can be modified, added, or removed. This adaptability ensures that the application caters to evolving project requirements and maintains a relevant workspace.
    
3. **Enhanced Project Descriptions:** By incorporating react-markdown, project descriptions gain versatility and better readability. This improvement in documentation contributes to clearer project understanding and communication.
    
4. **Frontend with React and Redux Toolkit:** The frontend architecture leverages React for efficient component rendering and Redux Toolkit for streamlined state management. This combination ensures a responsive and seamless user experience.
    
5. **Backend using Express and PostgreSQL:** Express serves as the backend framework, managing API routes and requests, while PostgreSQL offers a robust database solution for storing project and task data securely and efficiently.
    
6. **Token-Based Authentication and Security:** Authentication is implemented using jsonwebtoken, providing secure and authenticated access. Security is further strengthened with helmet, a collection of middleware functions for Express applications. Additionally, express rate limit guards against potential malicious activities, ensuring application integrity.
    
## Testing the application
    
------------
    
To effectively test the application, follow these steps:
    
1. **Account Creation:** Click 'signUp' to create an account. Provide a fictional email address, password, and username.
    
2. **Project Manipulation:** You can add more projects by clicking the + icon. Each project is editable and removable. Clicking a project's name redirects you to its content, enabling task creation or removal within the project.
