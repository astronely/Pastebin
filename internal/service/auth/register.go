package auth

import (
	"context"
	authv1 "github.com/astronely/pastebin/pkg/auth_v1"
)

func (s *service) Register(ctx context.Context, req *authv1.RegisterRequest) (*authv1.RegisterResponse, error) {
	panic("implement me")
}
