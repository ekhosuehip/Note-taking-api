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
npm run dev  # Uses nodemon for hot reloading
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
    "_id": "12345",
    "title": "Sample Note",
    "content": "This is a sample note.",
    "createdAt": "2025-03-09T12:00:00.000Z",
    "updatedAt": "2025-03-09T12:00:00.000Z"
  }
]
```

### 3. Get a Single Note
**GET** `/api/notes/:id`
#### Response:
```json
{
  "_id": "12345",
  "title": "Sample Note",
  "content": "This is a sample note.",
  "createdAt": "2025-03-09T12:00:00.000Z",
  "updatedAt": "2025-03-09T12:00:00.000Z"
}
```

### 4. Delete a Note
**DELETE** `/api/notes/:id`
#### Response:
```json
{
  "message": "Note deleted successfully"
}
```

## Project Structure
```
project/
│── src/
│   ├── controllers/
│   │   ├── NoteController.ts
│   ├── models/
│   │   ├── Note.ts
│   ├── routes/
│   │   ├── noteRoutes.ts
│   ├── config/
│   │   ├── db.ts
│   ├── middleware/
│   ├── server.ts
│── package.json
│── tsconfig.json
│── .env
│── README.md
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

