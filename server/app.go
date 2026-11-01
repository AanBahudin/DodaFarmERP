package main

import (
	"github.com/AanBahudin/DodaFarmERP/database"
	"github.com/AanBahudin/DodaFarmERP/modules/auth"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()

	// database connection
	database.DBConnection()

	router := gin.Default()

	// router cold start
	auth.AuthRoute(router)
	router.Run(":8080")
}
