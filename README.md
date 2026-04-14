## Task Manager REST API

##  Description
A simple REST API for managing tasks built using Node.js and Express. It allows users to create, read, update, and delete tasks, as well as mark them as completed.

---

##  Features
- Create a new task
- Get all tasks
- Get task by ID
- Update task
- Mark task as done
- Delete task

---

##  Technologies Used
- Node.js
- Express.js

---

##  How to Run

1. Clone the repository  
2. Install dependencies:
   npm install  
3. Start the server:
   node index.js  

Server will run on:
http://localhost:3000

---

##  API Endpoints with Examples

### 1. Create Task
POST /tasks

Example: curl -X POST http://localhost:3000/tasks

-H "Content-Type: application/json"
-d '{"title":"Study","description":"DSA"}'

---

### 2. Get All Tasks
GET /tasks

Example:curl http://localhost:3000/tasks

---

### 3. Get Task by ID
GET /tasks/1

Example:curl http://localhost:3000/tasks/1

---

### 4. Update Task
PUT /tasks/1

Example:curl -X PUT http://localhost:3000/tasks/1

-H "Content-Type: application/json"
-d '{"title":"Updated Task"}

---

### 5. Mark Task as Done
PATCH /tasks/1/done

Example:curl -X PATCH http://localhost:3000/tasks/1/done

---

### 6. Delete Task
DELETE /tasks/1

Example:curl -X DELETE http://localhost:3000/tasks/1

---

##  Error Handling
- Returns **400 Bad Request** if required fields are missing  
- Returns **404 Not Found** if task ID does not exist  

---

##  Author
Yuvraj Singh