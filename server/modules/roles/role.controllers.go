package roles

import (
	"fmt"

	"github.com/AanBahudin/DodaFarmERP/helpers"
	"github.com/AanBahudin/DodaFarmERP/pkg"
	"github.com/gin-gonic/gin"
)

type RoleController struct {
	repo *Roles
}

func NewRoleController(repo *Roles) *RoleController {
	return &RoleController{repo: repo}
}

func (h *RoleController) CreateRoles(c *gin.Context) {
	var role RoleInputStruct

	if err := c.ShouldBindJSON(&role); err != nil {
		validationError := pkg.ParseValidationError(err, RoleValidationMessage)
		fmt.Println(validationError.Message)
		helpers.ErrorResponse(c, validationError)
		fmt.Println(err.Error())
		return
	}

	data, err := h.repo.CreateRoleRepo(c.Request.Context(), &role)

	if err != nil {
		c.JSON(400, gin.H{
			"message": err.Error(),
			"success": false,
		})
		return
	}

	c.JSON(201, gin.H{
		"message": "Role berhasil dibuat",
		"success": true,
		"data":    data,
	})
}

func (h *RoleController) GetAllRoles(c *gin.Context) {
	err, data := h.repo.GetAllRoleRepo(c.Request.Context())
	if err != nil {
		c.JSON(400, gin.H{
			"message": err.Error(),
			"success": false,
		})
		return
	}
	c.JSON(200, gin.H{
		"data": data,
	})
}
