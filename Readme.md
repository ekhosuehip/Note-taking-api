# Note-Taking API

A simple RESTful API for creating, reading, and deleting notes using **Node.js, Express, TypeScript, and MongoDB**.

## Features
- Create a new note
- Retrieve all notes
- Retrieve a single note by ID
- Delete a note by ID

## Technologies Used
- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB** (with Mongoose ODM)
- **Nodemon** (for development)

## Installation
### 1. Clone the repository
```bash
git clone https://github.com/ekhosuehip/note-taking-api.git
cd note-taking-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory and add the following:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 4. Start the server
```bash
npm run start  # Uses nodemon for hot reloading
```

## API Endpoints
### 1. Create a Note
**POST** `/api/notes`
#### Request Body (JSON):
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
#### Response:
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
#### Response:
```json
[
  {
    "_id": "67d49ea2e85e2ef383c744c0",
    "title": "Meeting Summary",
    "content": "Reviewed project milestones and upcoming deadlines.",
    "category": {
        "name": "Work",
        "description": "Notes from team meetings and discussions today.",
        "_id": "67d49fbce85e2ef383c744ce"
    },
    "createdAt": "2025-03-14T21:24:50.381Z",
    "updatedAt": "2025-03-14T21:29:32.898Z"
  }
]
```

### 3. Get a Single Note
**GET** `/api/notes/:id`
#### Response:
```json
{
  "_id": "67d49ea2e85e2ef383c744c0",
  "title": "Meeting Summary",
  "content": "Reviewed project milestones and upcoming deadlines.",
  "category": {
      "name": "Work",
      "description": "Notes from team meetings and discussions today.",
      "_id": "67d49fbce85e2ef383c744ce"
  },
  "createdAt": "2025-03-14T21:24:50.381Z",
  "updatedAt": "2025-03-14T21:29:32.898Z"
}
```

### 4. Delete a Note
**DELETE** `/api/notes/:id`
#### Response:
```json
{
  "note": {
      "_id": "67d2e6ea4d07fd7b7e8d9dbd",
      "title": "lorem lpsum 6",
      "content": "Lorem ipsum dolor sit amet, consectetur ",
      "category": {
          "name": "Work",
          "description": "Notes related to work meetings",
          "_id": "67d2e6ea4d07fd7b7e8d9dbe"
      },
      "createdAt": "2025-03-13T14:08:42.787Z",
      "updatedAt": "2025-03-13T14:08:42.787Z"
  },
  "message": "Deleted"
}
```

## Project Structure
```
project/
│── src/
│   ├── config/
│   │   ├── config.ts
│   ├── controllers/
│   │   ├── NoteController.ts
│   ├── middleware/
│   │   ├── Joi.ts
│   │   ├── loggingMiddleware.ts
│   ├── models/
│   │   ├── Note.ts
│   ├── routes/
│   │   ├── noteRoutes.ts
│   ├── schema/
│   │   ├── joiSchema.ts
│   ├── server.ts
│── .env
│── .gitignore
│── package-lock.json
│── package.json
│── README.md
│── tsconfig.json
```

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your branch and open a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

---

### 🚀 Happy Coding! 🎉

