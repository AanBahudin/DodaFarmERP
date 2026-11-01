package auth

import "github.com/gin-gonic/gin"

func AuthRoute(router *gin.Engine) {
	router.POST("/api/login", LoginController)
	router.POST("/api/register", RegisterController)
}
