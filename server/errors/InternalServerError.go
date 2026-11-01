package errors

import "net/http"

func InternalServerError(message string) *ServerError {

	if message == "" {
		message = "Something went wrong, please try again later"
	}

	return &ServerError{
		Message:    message,
		StatusCode: http.StatusInternalServerError,
	}
}
