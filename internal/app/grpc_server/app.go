package grpcserver

import (
	"fmt"
	"google.golang.org/grpc"
	"log"
	"net"
)

type App struct {
	GRPCServer *grpc.Server
	port       int
}

func New(port int) *App {
	GRPCServer := grpc.NewServer()

	return &App{
		GRPCServer: GRPCServer,
		port:       port,
	}
}

func (a *App) Run() error {
	l, err := net.Listen("tcp", fmt.Sprintf(":%d", a.port))
	if err != nil {
		return err
	}

	log.Println("gprc server is running")

	if err := a.GRPCServer.Serve(l); err != nil {
		return err
	}

	return nil
}

func (a *App) Stop() {
	a.GRPCServer.GracefulStop()
}
