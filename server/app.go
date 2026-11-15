package main

import (
	"log"

	"github.com/AanBahudin/DodaFarmERP/database"
	"github.com/AanBahudin/DodaFarmERP/modules/auth"
	"github.com/AanBahudin/DodaFarmERP/modules/roles"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()

	// database connection
	db, err := database.DBConnection()
	if err != nil {
		log.Fatal(err)
	}

	router := gin.Default()

	// router cold start
	auth.AuthRoute(router)
	roles.RolesRoute(router, db)
	router.Run(":8080")
	defer db.Close()
}
