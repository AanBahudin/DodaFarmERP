package pkg

import (
	"github.com/AanBahudin/DodaFarmERP/errors"
	"github.com/go-playground/validator/v10"
)

func ParseValidationError(err error, message map[string]string) *errors.ServerError {
	validationErrors, ok := err.(validator.ValidationErrors)
	if !ok {
		return errors.BadRequestError("Invalid input")
	}

	for _, fieldError := range validationErrors {
		key := fieldError.Field() + "." + fieldError.Tag()
		if message, exists := message[key]; exists {
			return errors.BadRequestError(message)
		}
	}

	return errors.BadRequestError("invalid input")
}
