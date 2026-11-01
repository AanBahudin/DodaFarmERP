package database

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

func DBConnection() {

	pool, err := pgxpool.New(context.Background(), os.Getenv("DATABASE_CONNECTION"))
	if err != nil {
		log.Fatal("gagal membuat pool: ", err)
	}

	defer pool.Close()

	if err := pool.Ping(context.Background()); err != nil {
		log.Fatal("gagal terhubung: ", err)
	}
	fmt.Println("Berhasil terhubung ke PostgreSQL")
}
