package auth

type LoginStruct struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required,min=8,max=20"`
}

type RegisterStruct struct {
	Nama         string `json:"nama" binding:"required,min=2,max=40"`
	Email        string `json:"email" binding:"required"`
	Password     string `json:"password" binding:"required,min=6,max=20"`
	Kode_referal string `json:"kode_referal"`
}
