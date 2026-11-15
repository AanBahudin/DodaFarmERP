package database

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

func DBConnection() (*pgxpool.Pool, error) {

	pool, err := pgxpool.New(
		context.Background(),
		os.Getenv("DATABASE_CONNECTION"),
	)

	if err != nil {
		return nil, fmt.Errorf("gagal membuat pool: %w", err)
	}

	if err := pool.Ping(context.Background()); err != nil {
		pool.Close()
		return nil, fmt.Errorf("gagal terhubung: %w", err)
	}

	fmt.Println("Berhasil terhubung ke PostgreSQL")

	return pool, nil
}
