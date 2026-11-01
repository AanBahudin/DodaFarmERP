package auth

import (
	"net/http"
	"time"

	"github.com/AanBahudin/DodaFarmERP/helpers"
	"github.com/AanBahudin/DodaFarmERP/pkg"
	"github.com/gin-gonic/gin"
)

func LoginController(context *gin.Context) {
	var userInput LoginStruct
	err := context.ShouldBindJSON(&userInput)
	if err != nil {
		validationError := pkg.ParseValidationError(err, AuthValidationMessage)
		helpers.ErrorResponse(context, validationError)
	}

	// login services

}

func RegisterController(context *gin.Context) {
	var userInput RegisterStruct

	// getting inputs
	err := context.ShouldBindJSON(&userInput)
	if err != nil {
		validationError := pkg.ParseValidationError(err, AuthValidationMessage)
		helpers.ErrorResponse(context, validationError)
	}

	// services
	err = RegisterServices(&userInput, context)
	if err != nil {
		helpers.ErrorResponse(context, err)
	}

	context.JSON(http.StatusCreated, gin.H{
		"message": "Register berhasil",
		"time":    time.Now(),
	})

}
