CREATE TABLE permissions.role_permissions (
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    role_id uuid NOT NULL,
    access_id uuid NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ,

    CONSTRAINT fk_role_id
        FOREIGN KEY(role_id)
        REFERENCES roles.role(id),
    
    CONSTRAINT fk_access_id
        FOREIGN KEY(access_id)
        REFERENCES permissions.access_permission(id)
);
