CREATE SCHEMA IF NOT EXISTS permissions;

CREATE TYPE permissions.access_permission_action AS ENUM ('CREATE', 'READ', 'UPDATE', 'DELETE');

CREATE TABLE permissions.access_permission (
    id uuid PRIMARY KEY NOT NULL UNIQUE DEFAULT gen_random_uuid(),
    menu varchar(100) NOT NULL,
    action permissions.access_permission_action NOT NULL DEFAULT 'CREATE',
    description varchar(100),
    CONSTRAINT uq_permission UNIQUE(menu, action)
)