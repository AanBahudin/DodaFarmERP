package roles

import (
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
)

func RolesRoute(router *gin.Engine, db *pgxpool.Pool) {

	repo := RolesRepository(db)
	controller := NewRoleController(repo)

	roleRoutes := router.Group("/api/v1/roles")
	roleRoutes.GET("/", controller.GetAllRoles)
	roleRoutes.POST("/create", controller.CreateRoles)
}
