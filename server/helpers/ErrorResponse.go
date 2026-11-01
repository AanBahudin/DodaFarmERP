package helpers

import (
	"net/http"
	"time"

	"github.com/AanBahudin/DodaFarmERP/errors"
	"github.com/gin-gonic/gin"
)

func ErrorResponse(context *gin.Context, err error) {
	if appError, ok := err.(*errors.ServerError); ok {
		context.JSON(appError.StatusCode, gin.H{
			"message": appError.Message,
			"time":    time.Now(),
		})
		return
	}

	context.JSON(http.StatusInternalServerError, gin.H{
		"message": "Internal server error, try again later",
		"time":    time.Now(),
	})
}
