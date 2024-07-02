package app

import (
	"github.com/astronely/pastebin/internal/config"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"log/slog"
	"net"

	authv1 "github.com/astronely/pastebin/pkg/auth_v1"
)

type App struct {
	serviceProvider *serviceProvider
	grpcServer      *grpc.Server
}

func New() *App {
	a := &App{}

	err := a.initDeps()
	if err != nil {
		a.serviceProvider.log.Error(err.Error())
		return nil
	}
	return a
}

func (a *App) Run() error {
	return a.runGRPCServer()
}

func (a *App) initDeps() error {
	inits := []func() error{
		a.initConfig,
		a.initServiceProvider,
		a.initGRPCServer,
	}
	for _, f := range inits {
		err := f()
		if err != nil {
			a.serviceProvider.log.Error(err.Error())
			return err
		}
	}
	a.serviceProvider.Log().Info("Dependencies successfully initialized")
	return nil
}

func (a *App) initConfig() error {
	if err := config.InitConfig(); err != nil {
		return err
	}
	return nil
}

func (a *App) initServiceProvider() error {
	a.serviceProvider = newServiceProvider()
	return nil
}

func (a *App) initGRPCServer() error {
	a.grpcServer = grpc.NewServer()
	reflection.Register(a.grpcServer)

	authv1.RegisterAuthServer(a.grpcServer, a.serviceProvider.AuthImpl())

	return nil
}

func (a *App) runGRPCServer() error {
	l, err := net.Listen("tcp", a.serviceProvider.Config().GRPC.Address())
	if err != nil {
		return err
	}

	a.serviceProvider.Log().Info("GRPC server is running", slog.Any("config", a.serviceProvider.Config().GRPC))

	if err := a.grpcServer.Serve(l); err != nil {
		return err
	}

	return nil
}

func (a *App) Stop() {
	a.grpcServer.GracefulStop()
	a.serviceProvider.Log().Info("GRPC server stopped")
}
