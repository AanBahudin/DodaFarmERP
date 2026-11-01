package auth

import "github.com/gin-gonic/gin"

func AuthRoute(router *gin.Engine) {
	router.POST("/api/auth/login", LoginController)
	router.POST("/api/auth/register", RegisterController)
}
