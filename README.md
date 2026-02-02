# University of Belize Club Management System (UBCMS)

## Frontend (Next.js)

TODO

## Backend (Strapi + PostgreSQL)

TODO

## Development Workflow

### First-Time Setup

Copy the example environment file to `.env`:

```
cp .env.example .env
```

### Working on the Frontend

Start only the backend services:

```
docker compose up strapi
```

Then develop as normal in the `frontend/` directory:

```
cd frontend
npm install
npm run dev
```

### Working on the Backend

Use the Strapi Admin interface in the browser when working on the schema and data (`http://localhost:1337/admin`).

| Key      | Value                |
| -------- | -------------------- |
| Email    | 2018118240@ub.edu.bz |
| Password | UBCMS-25s2           |

After making schema changes or adding content data, update the `backend/database/ubcms_dump.sql`, which is used to initialize the PostgreSQL database with the example data:

```
docker exec -t ubcms-strapi-db env PGPASSWORD=UBCMS-25s2 pg_dump -U ubcms_user -d ubcms -F p -E UTF-8 > backend/database/ubcms_dump.sql
```

### Configuration Changes

Run the following commands after making changes to the Strapi backend code configuration, pulling in changes to `backend/database/ubcms_dump.sql`, or modifying the `compose.yaml` or `Dockerfile` files:

```
docker compose down
docker volume rm ubcms-strapi-data
docker compose up strapi --build
```

### Single-command Project Testing

The following command starts the backend services and builds the Nextjs frontend. This is mostly a convenient command for testing.

```
docker compose up
```
