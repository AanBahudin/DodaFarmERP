CREATE SCHEMA IF NOT EXISTS roles;


CREATE TABLE roles.role (
    id uuid PRIMARY KEY NOT NULL UNIQUE DEFAULT gen_random_uuid(),
    name varchar(100) NOT NULL,
    description varchar(100),
    is_active bool NOT NULL DEFAULT True,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ
);

CREATE UNIQUE INDEX uq_role_name_lower
    ON roles.role (LOWER(name))
    WHERE deleted_at IS NULL;