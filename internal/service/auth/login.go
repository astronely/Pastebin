package auth

import (
	"context"
	authv1 "github.com/astronely/pastebin/pkg/auth_v1"
)

func (s *service) Login(ctx context.Context, req *authv1.LoginRequest) (*authv1.LoginResponse, error) {
	panic("implement me")
}
