package errors

type ServerError struct {
	Message    string
	StatusCode int
}

func (e *ServerError) Error() string {
	return e.Message
}
