CREATE SCHEMA IF NOT EXISTS users;

CREATE TABLE users.master_user (
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    email VARCHAR(100) NOT NULL UNIQUE CHECK(email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    phone_number VARCHAR(100),
    password_hash TEXT NOT NULL,
    is_active bool NOT NULL DEFAULT False, 
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ,
    lastupdate_at TIMESTAMPTZ
);