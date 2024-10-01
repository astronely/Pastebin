package auth

import (
	"github.com/astronely/pastebin/internal/service"
	authv1 "github.com/astronely/pastebin/pkg/auth_v1"
)

type Implementation struct {
	authv1.UnimplementedAuthServer
	userService service.AuthService
}

func NewImplementation(userService service.AuthService) *Implementation {
	return &Implementation{
		userService: userService,
	}
}
