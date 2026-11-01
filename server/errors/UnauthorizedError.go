package errors

import "net/http"

func UnauthorizedError(message string) *ServerError {

	if message == "" {
		message = "You can't access this route"
	}

	return &ServerError{
		Message:    message,
		StatusCode: http.StatusForbidden,
	}
}
