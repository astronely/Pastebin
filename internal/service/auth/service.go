package auth

import def "github.com/astronely/pastebin/internal/service"

var _ def.AuthService = (*service)(nil)

type service struct {
	//userRepository repository.UserRepository
}

func NewService() *service {
	return &service{}
}
