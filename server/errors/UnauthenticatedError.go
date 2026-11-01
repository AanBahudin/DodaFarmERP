package errors

import "net/http"

func UnauthenticatedError(message string) *ServerError {

	if message == "" {
		message = "You are unauthenticated to access this route"
	}

	return &ServerError{
		Message:    message,
		StatusCode: http.StatusUnauthorized,
	}
}
