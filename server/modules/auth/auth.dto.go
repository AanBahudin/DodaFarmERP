package auth

type LoginResponse struct {
	message string
	code    int
	status  string
	data    map[string]string
}
