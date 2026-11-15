package roles

import (
	"context"
	"strings"

	"github.com/AanBahudin/DodaFarmERP/errors"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Roles struct {
	db *pgxpool.Pool
}

var ErrNameTaken = errors.BadRequestError("Nama sudah digunakan")

func RolesRepository(db *pgxpool.Pool) *Roles {
	return &Roles{
		db: db,
	}
}

func (r *Roles) CreateRoleRepo(context context.Context, roleInput *RoleInputStruct) (*RoleInputStruct, error) {
	roleName := strings.Join(strings.Fields(roleInput.Name), " ")
	roleDesc := strings.Join(strings.Fields(roleInput.Description), " ")

	var it RoleInputStruct
	err := r.db.QueryRow(context,
		`INSERT INTO roles.role (name, description) VALUES ($1, $2) RETURNING name, description`, roleName, roleDesc,
	).Scan(&it.Name, &it.Description)

	if err != nil {
		if errors.DuplicatedDataError(err) {
			return nil, ErrNameTaken
		}
		return nil, err
	}

	return &it, nil
}

func (r *Roles) GetAllRoleRepo(context context.Context) (error, *[]RoleResponse) {

	rows, err := r.db.Query(context, `
		SELECT * FROM roles.role
	`)

	if err != nil {
		return err, nil
	}
	defer rows.Close()

	var roles []RoleResponse

	for rows.Next() {
		var role RoleResponse
		err := rows.Scan(&role.Id, &role.Name, &role.Description, &role.Is_Active, &role.Created_At, &role.Deleted_At)

		if err != nil {
			return err, nil
		}

		roles = append(roles, role)
	}

	if err := rows.Err(); err != nil {
		return err, nil
	}

	return nil, &roles
}
