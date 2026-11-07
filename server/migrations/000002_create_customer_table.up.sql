CREATE TYPE users.accepted_gender as ENUM('Pria', 'Wanita');

CREATE TABLE users.master_customer (
    id uuid PRIMARY KEY NOT NULL UNIQUE DEFAULT gen_random_uuid(),
    account_id uuid NOT NULL,
    kode_mitra uuid,
    nama varchar(100) NOT NULL,
    role varchar(100) NOT NULL DEFAULT 'User',
    jenis_kelamin users.accepted_gender,

    CONSTRAINT fk_account_id
        FOREIGN KEY (account_id)
        REFERENCES users.master_user(id)
);