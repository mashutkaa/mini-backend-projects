# Task Tracker CLI

Task Tracker CLI is a simple command-line application for managing tasks. You can add, list, update, and delete tasks using the CLI commands.

## Features
- Add new tasks
- List tasks with filtering options
- Update existing tasks
- Delete tasks
- Mark tasks as done or pending

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mashutkaa/mini-backend-projects.git
   cd task-tracker-cli
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Make the script executable (if using Linux/macOS):
   ```sh
   chmod +x index.js
   ```

4. Link the CLI globally:
   ```sh
   npm link
   ```

## Usage

Run the following commands in your terminal:

-   **Add a new task**

    ```sh
    task-cli add "Buy groceries"
    ```

-   **List all tasks**

    ```sh
    task-cli list
    ```

-   **List tasks with a specific filter**

    ```sh
    task-cli list done
    ```

-   **Update a task**

    ```sh
    task-cli update 1 "Buy milk instead of groceries"
    ```

-   **Delete a task**
    ```sh
    task-cli delete 1
    ```

-   **Mark a task as done**
    ```sh
    task-cli mark-done 1
    ```

-   **Mark a task as in progress**
    ```sh
    task-cli mark-in-progress 1
    ```

## Project Roadmap
The requirements for this project were inspired by the roadmap available at:
[Task Tracker CLI Roadmap](https://roadmap.sh/projects/task-tracker)

## License
This project is open-source and available under the MIT License.

---
Feel free to contribute or suggest improvements!

