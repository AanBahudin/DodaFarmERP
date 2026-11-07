CREATE SCHEMA IF NOT EXISTS addresses;
CREATE TYPE addresses.address_coordinate AS (
    lang DOUBLE PRECISION,
    long DOUBLE PRECISION
);

CREATE TABLE addresses.master_address (
    id uuid PRIMARY KEY NOT NULL UNIQUE DEFAULT gen_random_uuid(),
    nama varchar(100) NOT NULL,
    full_address varchar(400) NOT NULL,
    phone_number varchar(14) NOT NULL,
    coordinate addresses.address_coordinate NOT NULL,
    description text,
    is_default BOOL NOT NULL DEFAULT FALSE,
    user_id uuid NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ,
    deleted_at TIMESTAMPTZ,

    CONSTRAINT fk_user_id
        FOREIGN KEY (user_id)
        REFERENCES users.master_user(id)
);