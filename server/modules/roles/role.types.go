package roles

type RoleInputStruct struct {
	Name        string `json:"name" binding:"required,min=2,max=40"`
	Description string `json:"description" binding:"max=300"`
}
