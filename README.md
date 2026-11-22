# Assessment 3 – Full Stack Backend

A REST API for user accounts, built with Node.js, Express 5, MongoDB (Mongoose) and JWT. It sends a welcome email on signup (Nodemailer, Gmail) and stores profile photos on Cloudinary (Multer + multer-storage-cloudinary).

## Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/register` | – | Create a user (`name`, `email`, `password`). The password is hashed with bcrypt and a welcome email is sent |
| POST | `/api/auth/login` | – | Returns a JWT (valid for 1 day) and the user |
| GET | `/api/auth/me` | Bearer token | The logged-in user |
| GET | `/api/users` | – | List all users (passwords excluded) |
| GET | `/api/users/:id` | – | One user |
| PUT | `/api/users/:id` | Bearer token, own account only | Update `name`, `email` and/or `password` |
| DELETE | `/api/users/:id` | Bearer token, own account only | Delete own account |
| POST | `/api/users/upload-profile` | Bearer token | `multipart/form-data` with an `image` field (jpg/png/jpeg). Sets the logged-in user's `profileImg` |

## Run locally

Create a `.env` file:

```
db_url=<MongoDB connection string>
PORT=3000
cloud_name=<Cloudinary cloud name>
api_key=<Cloudinary API key>
api_secre=<Cloudinary API secret>
```

Then run:

```bash
npm install
node server.js
```

## Note

The `Internship Adcance full stack/` folder contains internship JavaScript/React practice files. They are not part of this backend.
