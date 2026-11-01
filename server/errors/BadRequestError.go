package errors

import "net/http"

func BadRequestError(message string) *ServerError {

	if message == "" {
		message = "Something is wrong, please try again later"
	}

	return &ServerError{
		Message:    message,
		StatusCode: http.StatusBadRequest,
	}
}
