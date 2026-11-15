package roles

import "time"

type RoleResponse struct {
	Id          string     `json:"id"`
	Name        string     `json:"name"`
	Description string     `json:"description"`
	Is_Active   bool       `json:"is_active"`
	Created_At  time.Time  `json:"created_at"`
	Deleted_At  *time.Time `json:"deleted_at"`
}
