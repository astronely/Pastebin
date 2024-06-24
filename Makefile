PHONY: generate
generate:
	mkdir -p pkg/auth_v1
	protoc --go_out=./pkg/auth_v1 --go_opt=paths=import --go-grpc_out=./pkg/auth_v1 --go-grpc_opt=paths=import api/auth-service/v1/auth.proto
	move ./pkg/auth_v1/github.com/astronely/pastebin/* pkg/auth_v1/