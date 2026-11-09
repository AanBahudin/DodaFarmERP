CREATE TABLE users.master_employees (
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    account_id uuid NOT NULL,
    nama varchar(100) NOT NULL,
    department uuid NOT NULL,
    warehouse_id uuid,
    hired_at TIMESTAMPTZ,
    is_active bool NOT NULL DEFAULT True,
    role_id uuid NOT NULL,
    created_by uuid NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ,

    CONSTRAINT fk_account_id
        FOREIGN KEY (account_id)
        REFERENCES users.master_user(id),

    CONSTRAINT fk_warehouse_id
        FOREIGN KEY (warehouse_id)
        REFERENCES warehouses.warehouse(id),

    CONSTRAINT fk_role
        FOREIGN KEY (role_id)
        REFERENCES roles.role(id),

    CONSTRAINT fk_created_by
        FOREIGN KEY (created_by)
        REFERENCES users.user(id)
)