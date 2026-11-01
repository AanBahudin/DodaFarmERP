package main

import (
	"github.com/AanBahudin/DodaFarmERP/database"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()

	// database connection
	database.DBConnection()

	router := gin.Default()

	router.GET("/", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "ok",
		})
	})

	router.Run(":8080")
}
