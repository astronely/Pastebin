package app

import (
	grpcserver "github.com/astronely/pastebin/internal/app/grpc_server"
	"time"
)

type App struct {
	GRPCServer *grpcserver.App
}

func New(GRPCPort int, tokenTTL time.Duration) *App {
	grpcApp := grpcserver.New(GRPCPort)

	return &App{
		GRPCServer: grpcApp,
	}
}
