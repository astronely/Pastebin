package main

import (
	"fmt"
	"github.com/astronely/pastebin/internal/app"
	"github.com/astronely/pastebin/internal/config"
	"github.com/joho/godotenv"
	"log"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}
}

func main() {
	config, err := config.NewConfig()
	if err != nil {
		fmt.Println(err)
		return
	}

	application := app.New(config.GRPC.Port, config.TokenTTL)
	err = application.GRPCServer.Run()
	if err != nil {
		return
	}
}
