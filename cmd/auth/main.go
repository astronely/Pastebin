package main

import (
	"github.com/astronely/pastebin/internal/app"
	"log"
)

func main() {
	application := app.New()
	err := application.Run()
	if err != nil {
		log.Fatal("Failed to start gRPC server")
	}
}
