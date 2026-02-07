# University of Belize Club Management System (UBCMS)

## Frontend (Next.js)

TODO

## Backend (Directus + PostgreSQL)

TODO

## Development Workflow

### First-Time Setup

Copy the example environment file to `.env`:

```
cp .env.example .env
```

### Working on the Frontend

Start the backend services:

```
make db
```

Then develop in the `frontend/` directory:

```
cd frontend
npm install
npm run dev
```

### Working on the Backend

Start the backend services:

```
make db
```

Use the Directus Admin interface in the browser when working on the schema and data (`http://localhost:8055`).

| Key      | Value                |
| -------- | -------------------- |
| Email    | 2018118240@ub.edu.bz |
| Password | UBCMS-25s2           |

After making schema changes or adding content data, update the `backend/database/ubcms.sql` file, which is used to initialize the PostgreSQL database with the example data:

```
make backup
```

You can do a quick reset of the database to ensure the backup file works as intended:

```
make reset-db
```

### Single-command Project Testing

The following command starts the backend services and builds the Nextjs frontend. This is mostly a convenient command for testing.

```
make
```
