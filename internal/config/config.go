package config

import (
	"flag"
	"github.com/joho/godotenv"
	"gopkg.in/yaml.v3"
	"net"
	"os"
	"regexp"
	"time"
)

const projectDirName = "Pastebin" // change to relevant project name

type Config struct {
	DB       DBConfig      `yaml:"database"`
	GRPC     grpcConfig    `yaml:"grpc"`
	TokenTTL time.Duration `yaml:"token_ttl"`
}

type GRPCConfig interface {
	Address() string
}

type grpcConfig struct {
	Host    string        `yaml:"host"`
	Port    string        `yaml:"port"`
	TLS     bool          `yaml:"enable-tls"`
	Timeout time.Duration `yaml:"timeout"`
}

type DBConfig struct {
	Driver   string `yaml:"driver"`
	Host     string `yaml:"host"`
	Port     int    `yaml:"port"`
	Name     string `yaml:"name"`
	User     string `yaml:"user"`
	Password string `yaml:"password"`
	Sslmode  string `yaml:"sslmode"`
}

func NewConfig() (*Config, error) {
	config := &Config{}

	//log.Println(os.Getenv("CONFIG_PATH"))
	file, err := os.Open(os.Getenv("CONFIG_PATH"))
	if err != nil {
		return nil, err
	}

	defer file.Close()

	decoder := yaml.NewDecoder(file)

	if err := decoder.Decode(&config); err != nil {
		return nil, err
	}

	port := flag.String("port", "", "The server port")
	enableTLS := flag.Bool("enable-tls", false, "Enable TLS")
	flag.Parse()

	if *port != "" {
		config.GRPC.Port = *port
	}
	if *enableTLS {
		config.GRPC.TLS = *enableTLS
	}

	return config, nil
}

func InitConfig() error {
	projectName := regexp.MustCompile(`^(.*` + projectDirName + `)`)
	currentWorkDirectory, _ := os.Getwd()
	rootPath := projectName.Find([]byte(currentWorkDirectory))
	if err := godotenv.Load(string(rootPath) + `/.env`); err != nil {
		return err
	}
	return nil
}

func (cfg *grpcConfig) Address() string {
	return net.JoinHostPort(cfg.Host, cfg.Port)
}
