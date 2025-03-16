# Note-Taking API

A simple API to create, read, update, and delete notes using **Node.js, Express, TypeScript, and MongoDB**.

## Deployment
The API is live and can be accessed here:
🔗 [Note-Taking API](https://note-taking-api-sri7.onrender.com/api/notes)

## Features
- Add a new note
- Get all notes
- Get notes by category
- Get a single note by ID
- Update a note by ID
- Delete a note by ID

## Technologies Used
- **Node.js** – Server-side runtime
- **Express.js** – Web framework
- **TypeScript** – JavaScript with types
- **MongoDB** – NoSQL database
- **Nodemon** – Auto-reload during development

## Installation
### 1. Clone the repo
```bash
git clone https://github.com/ekhosuehip/note-taking-api.git
cd note-taking-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root directory and add this:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 4. Start the server
```bash
npm run start  # Uses nodemon for auto-reload
```

## API Endpoints

### 1. Create a Note
**POST** `/api/notes`

#### Example Request Body:
```json
{
  "title": "Sample Note",
  "content": "This is a sample note.",
  "category": {
    "name": "Test",
    "description": "Notes just for testing the API."
  }
}
```

#### Example Response:
```json
{
  "note": {
    "title": "Sample Note",
    "content": "This is a sample note.",
    "category": {
      "name": "Test",
      "description": "Notes just for testing the API.",
      "_id": "67d30078e8eeccfcec085ac2"
    },
    "_id": "67d30078e8eeccfcec085ac1",
    "createdAt": "2025-03-13T15:57:44.132Z",
    "updatedAt": "2025-03-13T15:57:44.132Z"
  }
}
```

### 2. Get All Notes
**GET** `/api/notes`

#### Example Response:
```json
[
  {
    "_id": "67d49ea2e85e2ef383c744c0",
    "title": "Meeting Summary",
    "content": "Reviewed project milestones.",
    "category": {
      "name": "Work",
      "description": "Notes from team meetings.",
      "_id": "67d49fbce85e2ef383c744ce"
    },
    "createdAt": "2025-03-14T21:24:50.381Z",
    "updatedAt": "2025-03-14T21:29:32.898Z"
  }
]
```

### 3. Get Notes by Category ID
**GET** `/api/notes/categories/:categoryId`

#### Example Response:
```json
[
  {
    "_id": "67d49ea2e85e2ef383c744c0",
    "title": "Meeting Summary",
    "content": "Reviewed project milestones.",
    "category": {
      "name": "Work",
      "description": "Notes from team meetings.",
      "_id": "67d49fbce85e2ef383c744ce"
    },
    "createdAt": "2025-03-14T21:24:50.381Z",
    "updatedAt": "2025-03-14T21:29:32.898Z"
  }
]
```

### 4. Get a Single Note
**GET** `/api/notes/:id`

#### Example Response:
```json
{
  "_id": "67d49ea2e85e2ef383c744c0",
  "title": "Meeting Summary",
  "content": "Reviewed project milestones.",
  "category": {
    "name": "Work",
    "description": "Notes from team meetings.",
    "_id": "67d49fbce85e2ef383c744ce"
  },
  "createdAt": "2025-03-14T21:24:50.381Z",
  "updatedAt": "2025-03-14T21:29:32.898Z"
}
```

### 5. Update a Note
**PUT** `/api/notes/:id`

#### Example Request Body:
```json
{
  "title": "Updated Note Title",
  "content": "Updated content of the note.",
  "category": {
    "name": "Updated Category",
    "description": "Updated category description."
  }
}
```

#### Example Response:
```json
{
  "note": {
    "_id": "67d49ea2e85e2ef383c744c0",
    "title": "Updated Note Title",
    "content": "Updated content of the note.",
    "category": {
      "name": "Updated Category",
      "description": "Updated category description.",
      "_id": "67d49fbce85e2ef383c744ce"
    },
    "createdAt": "2025-03-14T21:24:50.381Z",
    "updatedAt": "2025-03-14T21:45:00.000Z"
  }
}
```

### 6. Delete a Note
**DELETE** `/api/notes/:id`

#### Example Response:
```json
{
  "note": {
    "_id": "67d2e6ea4d07fd7b7e8d9dbd",
    "title": "Lorem Ipsum",
    "content": "Lorem ipsum dolor sit amet.",
    "category": {
      "name": "Work",
      "description": "Notes related to work meetings.",
      "_id": "67d2e6ea4d07fd7b7e8d9dbe"
    },
    "createdAt": "2025-03-13T14:08:42.787Z",
    "updatedAt": "2025-03-13T14:08:42.787Z"
  },
  "message": "Deleted"
}
```

## Contributing
1. Fork the repo.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your branch and open a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

---

### 🚀 Happy Coding! 🎉

--- 

Let me know if you want to add more details or features!