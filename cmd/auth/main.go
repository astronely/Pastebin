package main

import (
	"github.com/astronely/pastebin/internal/app"
	"github.com/astronely/pastebin/pkg/logger"
	"github.com/joho/godotenv"
	"log/slog"
	"os"
	"regexp"
)

const projectDirName = "Pastebin" // change to relevant project name

func init() {
	projectName := regexp.MustCompile(`^(.*` + projectDirName + `)`)
	currentWorkDirectory, _ := os.Getwd()
	rootPath := projectName.Find([]byte(currentWorkDirectory))
	if err := godotenv.Load(string(rootPath) + `/.env`); err != nil {
		slog.Error("No .env file found")
	}
}

func initLogger() *slog.Logger {
	opts := logger.PrettyHandlerOptions{
		SlogOpts: slog.HandlerOptions{
			Level: slog.LevelDebug,
		},
	}
	handler := logger.NewPrettyHandler(os.Stdout, opts)
	log := slog.New(handler)
	slog.SetDefault(log)
	return log
}

func main() {
	log := initLogger()

	application := app.New()
	err := application.GRPCServer.Run()
	if err != nil {
		log.Error("Failed to start gRPC server")
		return
	}
}
