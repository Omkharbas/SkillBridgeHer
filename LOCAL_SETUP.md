# SkillBridge Her — Local Setup & Development Guide

This guide explains how to run **SkillBridge Her** locally in a development environment with full-stack support, database integration, and file storage.

---

## Prerequisites

- **Node.js**: v20 or higher recommended (v22 installed)
- **pnpm**: v10 or higher (`npm install -g pnpm`)
- **MySQL / TiDB database** (optional for basic UI testing; required for user accounts and server-side file storage)

---

## 1. Environment Variables

Create a `.env` file in the project root based on `.env.example`. The following environment variables are supported:

```env
# Database connection string
DATABASE_URL=mysql://user:password@localhost:3306/skillbridge

# Authentication & Security
JWT_SECRET=your_jwt_secret_here
VITE_APP_ID=your_manus_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://auth.manus.im

# File Storage & Built-in Services (Forge API)
BUILT_IN_FORGE_API_URL=https://forge.manus.im
BUILT_IN_FORGE_API_KEY=your_forge_api_key
VITE_FRONTEND_FORGE_API_KEY=your_frontend_forge_key
VITE_FRONTEND_FORGE_API_URL=https://forge.manus.im
```

---

## 2. Installation & Dependencies

Install all required client and server dependencies:

```bash
pnpm install
```

---

## 3. Database Migration

If you have configured a `DATABASE_URL`, push your schema changes to the database:

```bash
pnpm db:push
```

*(Alternatively, run `drizzle-kit generate` and apply the generated SQL via `webdev_execute_sql`)*.

---

## 4. Running Locally

Start the development server (runs both Vite frontend HMR and Express backend API):

```bash
pnpm dev
```

The app will be accessible at `http://localhost:3000` (or the port assigned by your environment).

---

## 5. Running Tests

Run the test suite with Vitest:

```bash
pnpm test
```

---

## 6. Building for Production

To create an optimized production build:

```bash
pnpm run build
pnpm start
```
