package pkg

import (
	"errors"

	"golang.org/x/crypto/bcrypt"
)

func HashPassword(password string) (string, error) {
	var bytes, err = bcrypt.GenerateFromPassword([]byte(password), 10)
	if err != nil {
		return "", errors.New(err.Error())
	}

	return string(bytes), nil
}
