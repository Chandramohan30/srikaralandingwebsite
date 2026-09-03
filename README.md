# Srikara Academy — Landing Page (MERN)

A single-page landing site for Srikara Training and Placement Academy, built from your two brochures:

- **Offline Campus Programs** — IGNITE (₹35,000 / 4 months) and ASCEND (₹45,000 / 5 months), including
  Ascend's 6 stack subcombos and the "what's included" comparison.
- **Full Stack + AI** — the 3-option self-paced track (Frontend Starter / Frontend Pro / Full Stack + AI),
  free recorded courses, and the 7-project capstone sequence.

Stack:

- **Frontend** — React 18 + Vite (plain CSS, no UI framework)
- **Backend** — Node.js + Express + Mongoose
- **Database** — MongoDB Atlas (cloud-hosted MongoDB)

No login/auth — anyone can view the page. The only backend interaction is the "Book your free demo"
form on the landing page, which saves an enquiry (name, phone, email, chosen track, message) to MongoDB
via a small Express API.

```
srikara/
├── backend/     Express + Mongoose API
└── frontend/    React + Vite landing page
```

---

## 1. Prerequisites

- **Node.js 18+** and **npm** installed (`node -v`, `npm -v`)
- A free **MongoDB Atlas** account: https://www.mongodb.com/cloud/atlas/register

## 2. Set up MongoDB Atlas (one-time)

1. Log in to Atlas → **Create a new Project** (any name, e.g. "Srikara").
2. Inside the project, **Build a Database** → choose the free **M0** shared cluster → pick any region → Create.
3. **Database Access** (left sidebar) → **Add New Database User**
   - Choose a username/password (save these — you'll need them below).
   - Give the user **Read and write to any database**.
4. **Network Access** (left sidebar) → **Add IP Address**
   - For local development, click **Allow Access from Anywhere** (`0.0.0.0/0`), or add your current IP.
5. Once the cluster is ready, click **Connect** → **Drivers** → copy the connection string. It looks like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<username>` and `<password>` with the database user you created, and add a database name
   right after `.net/`, e.g. `.../srikara?retryWrites=true&w=majority`. This is your `MONGODB_URI`.

## 3. Run the backend

```bash
cd backend
npm install
cp .env.example .env
```

Open `backend/.env` and paste in your Atlas connection string:

```
MONGODB_URI=mongodb+srv://yourUser:yourPassword@cluster0.xxxxx.mongodb.net/srikara?retryWrites=true&w=majority
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
```

Start the server:

```bash
npm run dev
```

You should see:

```
Connected to MongoDB Atlas
Srikara backend listening on http://localhost:5000
```

Verify it's alive: open http://localhost:5000/api/health — you should get `{"status":"ok", ...}`.

## 4. Run the frontend

In a **new terminal**:

```bash
cd frontend
npm install
npm run dev
```

Vite will print a local URL, typically **http://localhost:5173**. Open it in your browser — that's the
landing page. It talks to the backend automatically in dev (Vite proxies `/api/*` to
`http://localhost:5000`, configured in `frontend/vite.config.js`).

Scroll to **Book Your Free Demo** and submit the form — you should see a success message, and a new
document will appear in your Atlas cluster under the `srikara` database, `leads` collection.

## 5. Everyday commands

| Task | Command |
|---|---|
| Start backend (dev, auto-reload) | `cd backend && npm run dev` |
| Start backend (plain) | `cd backend && npm start` |
| Start frontend (dev) | `cd frontend && npm run dev` |
| Build frontend for production | `cd frontend && npm run build` (outputs to `frontend/dist`) |
| Preview the production build | `cd frontend && npm run preview` |
| View submitted leads (no auth, local use) | Visit `http://localhost:5000/api/leads` while the backend is running |

## 6. Deploying (optional)

- **Backend**: deploy `backend/` to any Node host (Render, Railway, Fly.io, a VPS, etc.). Set the same
  environment variables (`MONGODB_URI`, `PORT`, `CLIENT_ORIGIN` — set this to your deployed frontend's URL).
- **Frontend**: run `npm run build` inside `frontend/` and deploy the `dist/` folder to any static host
  (Vercel, Netlify, GitHub Pages, S3, etc.). Before building, set `VITE_API_URL` in `frontend/.env` to your
  deployed backend's URL (e.g. `https://your-backend.onrender.com`), since the dev-only Vite proxy won't
  exist in the static build.

## 7. Editing content

All copy — combo names, prices, module tables, capstones, roles, roadmap steps — lives in one file:
`frontend/src/data.js`. Update the values there and the whole page reflects the change; you don't need to
touch any component.

The Srikara logo used in the navbar/footer/favicon is at `frontend/src/assets/logo.jpeg` (extracted from
your original brochure) — swap that file to update the logo everywhere.

## 8. Troubleshooting

- **"MONGODB_URI is not set"** — you forgot to create `backend/.env` from `.env.example`, or forgot to
  paste your connection string in.
- **Backend fails to connect to Atlas** — double-check your database user's password (special characters
  need URL-encoding) and that your IP is allowed under Network Access.
- **Form submits but nothing shows in Atlas** — confirm the backend terminal shows "Connected to MongoDB
  Atlas" and that you're looking at the same cluster/database (`srikara`) in the Atlas UI, collection `leads`.
- **CORS error in the browser console** — make sure `CLIENT_ORIGIN` in `backend/.env` matches the exact
  URL the frontend is running on (protocol + host + port).
