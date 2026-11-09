CREATE SCHEMA IF NOT EXISTS warehouses;

CREATE TYPE warehouses.warehouse_coordinate AS (
    lang DOUBLE PRECISION,
    long DOUBLE PRECISION
);

CREATE TABLE warehouses.warehouse (
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    nama varchar(100) NOT NULL,
    lokasi varchar(100) NOT NULL,
    alamat varchar (400) NOT NULL,
    description text,
    koordinat warehouses.warehouse_coordinate NOT NULL,
    is_active bool NOT NULL DEFAULT True,
    warehouse_pic uuid,
    warehouse_second_pic uuid, 
    created_by uuid NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ,

    CONSTRAINT fk_warehouse_pic
        FOREIGN KEY (warehouse_pic)
        REFERENCES users.master_user(id),

    CONSTRAINT fk_warehouse_second_pic
        FOREIGN KEY (warehouse_second_pic)
        REFERENCES users.master_user(id)

    -- CONSTRAINT fk_created_by
    --     FOREIGN KEY (created_by) REFERENCES users.master_employees(id)
)