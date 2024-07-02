package app

import (
	"github.com/astronely/pastebin/internal/api/auth"
	"github.com/astronely/pastebin/internal/config"
	"github.com/astronely/pastebin/internal/service"
	authService "github.com/astronely/pastebin/internal/service/auth"
	"github.com/astronely/pastebin/pkg/logger"
	"log/slog"
)

type serviceProvider struct {
	config      *config.Config
	log         *slog.Logger
	authService service.AuthService
	authImpl    *auth.Implementation
	//userRepository repository.UserRepository
	//userService service.UserService
	//userImpl *user.Implementation
}

func newServiceProvider() *serviceProvider {
	return &serviceProvider{}
}

func (s *serviceProvider) Config() *config.Config {
	if s.config == nil {
		cfg, err := config.NewConfig()
		if err != nil {
			s.Log().Error("failed to get grpc config: %s", err.Error())
		}

		s.config = cfg
	}

	return s.config
}

func (s *serviceProvider) Log() *slog.Logger {
	if s.log == nil {
		s.log = logger.NewLogger()
	}

	return s.log
}

func (s *serviceProvider) AuthService() service.AuthService {
	if s.authService == nil {
		s.authService = authService.NewService()
	}

	return s.authService
}

func (s *serviceProvider) AuthImpl() *auth.Implementation {
	if s.authImpl == nil {
		s.authImpl = auth.NewImplementation(s.authService)
	}

	return s.authImpl
}
