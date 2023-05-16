# TodoList

This Todo List application is developed using React and SCSS. It allows users to create, view, update, and delete tasks.
![TodoList interface](todolistsogeti/public/demo.gif)

## Main features

- Display a list of tasks with their title, description, project progress, and completion status.
- Ability to create a new task by specifying a title and description.
- Sort tasks based on their completion status (completed or not completed).
- Delete a task from the list.
- Navigate to a detail page to view and update a specific task.
- Edit an existing task by updating the title, description, and project progress.

## Installation

1. Clone the repository: git clone <https://github.com/julienguyon12/todolistsogeti.git>

2. Install the dependencies:
   npm install

3. Start the application:
   npm start

The application will run locally on your browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

- The `src` directory contains the application source code.
  - The `Component` directory contains reusable components used in the application.
  - The `Style` directory contains SCSS files for customizing the application styles.
  - The `Page` directory contains the page files.
  - The `App.js` file is the entry point of the application.
  - Files like `TodoList.js`, `TodoDetailForm.js`, `TodoForm.js`, etc., correspond to different components of the application.
  - The task are saved in local storage.
- The `public` directory contains public resources of the application, such as icons and images.

## Contributors

- [Julien Guyon](https://github.com/julienguyon12)
