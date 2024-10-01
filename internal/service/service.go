package service

import (
	"context"
	authv1 "github.com/astronely/pastebin/pkg/auth_v1"
)

type AuthService interface {
	Login(ctx context.Context, req *authv1.LoginRequest) (*authv1.LoginResponse, error)
	Register(ctx context.Context, req *authv1.RegisterRequest) (*authv1.RegisterResponse, error)
}
