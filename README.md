# User Management Role-Based Access Control (RBAC) System


This project is a User Management System built with React.js, providing essential Role-Based Access Control (RBAC) features. It allows administrators to manage users and roles with the ability to add, edit, and delete users, assign roles, and ensure data persistence using localStorage.

## Features

  
   - **Add Users**: Create new user profiles with details like name, email, role, and status (active/inactive). Ensures email validation before saving.
   - **Edit Users**: Modify user details by pre-filling forms with existing data for easy updates.
   - **Delete Users**: Permanently remove users from the system with a single click.
   - **Role Management**: Define roles that can be assigned to users, enabling control over user permissions and access.
   - **Data Persistence**: User and role data is stored locally using the browser's localStorage, maintaining data across page reloads.
   - **Responsive Design**: The interface is optimized for both desktop and mobile devices.
 
   - 
## Technologies Used


   **Frontend Framework**: React.js
    **Styling**: Tailwind CSS for responsive and aesthetic design.
    **State Management**: Local storage for maintaining application state across sessions.



1. **Clone the repository:**

   ```bash
   https://github.com/mahalak04/VRV-Task.git

2. **Install dependencies:**

   - (Assuming you have Node.js and npm installed)
   
   - Run the below command to install all the required dependencies.
   
    npm install

2. **Start the application:**

   - Run the below command to start the project locally.
   
    npm start

3. **Open your browser and navigate to:**


       http://localhost:3000

**How to Use**

  Manage Roles:
        Create roles before adding users.
        Assign roles during user creation or editing.

  Add Users:
        Click the "Add User" button.
        Fill out the form with the user's name, email, role, and status.
        Submit the form to save the user.

  Edit Users:
        Locate the user in the table and click "Edit".
        Update details as needed and save changes.

   Delete Users:
        Click the "Delete" button next to the user you want to remove.

   Data Persistence:
        All user and role data is automatically saved to localStorage.
        Changes persist across page refreshes.

**Future Enhancements**

   Add authentication to restrict access to role management features.
    Integrate with a backend service for robust data storage.
    Implement a dashboard for advanced analytics and user insights.
 
## Interacting with the Application

- Initally create a role that can eventually be assigned to any User.
- Adding Users: Click on the designated "Add User" button to add a new user.
- Editing Users: Locate the "Edit" button next to a user's record in the table and click it to modify details, including their role.
- Deleting Users: Click the corresponding "Delete" button to permanently remove a user.
- Role Management: When adding or editing a user, you can assign a specific role. This helps to control the access and permissions for each user.
- LocalStorage Utilization: The application leverages the browser's localStorage for user data persistence. This entails:
    - Saving user and role data modifications (addition, editing, deletion) locally to your browser.
    - Maintaining user and role data even upon page refreshes, as it's retrieved from localStorage upon subsequent loads.
