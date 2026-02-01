# University of Belize Club Management System (UBCMS)

## Backend (Strapi + PostgreSQL)

### Development Workflow

#### First-Time Setup

Example `.env` file is provided for development purposes only.

```
cp .env.example .env
docker compose up
```

#### Admin Testing Credentials

Use the Strapi Admin interface in the browser when working on the schema and data (`http://localhost:1337/admin`).

| Key      | Value                |
| -------- | -------------------- |
| Email    | 2018118240@ub.edu.bz |
| Password | UBCMS-25s2           |

#### Saving DB Schema and Data Changes

Execute this while the project is running (and in its root directory) in order to update `backend/database/ubcms_dump.sql`. This data dump file is used when rebuilding the PostgreSQL Docker container.

```
docker exec -t ubcms-strapi-db env PGPASSWORD=UBCMS-25s2 pg_dump -U ubcms_user -d ubcms -F p -E UTF-8 > backend/database/ubcms_dump.sql
```

#### Backend/Database/Docker Changes

Run the following commands after making changes to the Strapi backend code configuration, pulling in changes to `backend/database/ubcms_dump.sql`, or modifying the `compose.yaml` or `Dockerfile` files:

```
docker compose down
docker volume rm ubcms-strapi-data
docker compose up --build
```

#### Stopping the Project

```
docker compose down
```
