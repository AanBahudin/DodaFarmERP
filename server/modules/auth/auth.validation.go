package auth

var AuthValidationMessage = map[string]string{
	"Nama.required": "Nama tidak boleh kosong",
	"Nama.min":      "Nama harus lebih dari 2 karakter",

	"Email.required": "Email tidak boleh kosong",
	"Email.email":    "Email tidak valid",

	"Password.required": "Password tidak bole kosong",
	"Password.min":      "Password minimal 8 karakter",
	"Password.max":      "Password tidak boleh lebih dari 20 karakter",
}
