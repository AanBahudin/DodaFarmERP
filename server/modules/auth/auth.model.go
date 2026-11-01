package auth

import "time"

type User struct {
	id         int
	email      string
	nomor_hp   string
	password   string
	is_active  bool
	last_login time.Time
}
