package auth

import (
	"github.com/AanBahudin/DodaFarmERP/errors"
	"github.com/AanBahudin/DodaFarmERP/pkg"
	"github.com/gin-gonic/gin"
)

// func LoginServices(loginInput *LoginStruct, context *gin.Context) (string, *User) {
// 	fmt.Println("login services")
// 	return "test",
// }

func RegisterServices(registerInput *RegisterStruct, context *gin.Context) error {
	// hashing password
	hashedPassword, err := pkg.HashPassword(registerInput.Password)
	if err != nil {
		return errors.BadRequestError("Terjadi kesalahan, coba lagi nanti")
	}

	registerInput.Password = hashedPassword
	err = RegisterRepo(registerInput)
	if err != nil {
		return errors.BadRequestError("Terjadi kesalahan, silahkan coba lagi")
	}

	return nil

}
