package auth

import (
	"context"
	authv1 "github.com/astronely/pastebin/pkg/auth_v1"
)

func (i *Implementation) Login(ctx context.Context, req *authv1.LoginRequest) (*authv1.LoginResponse, error) {
	return &authv1.LoginResponse{Token: req.Username}, nil
}
