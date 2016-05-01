package main

import (
	"log"
	"net/http"
)

func main() {
	log.Println("Starting, listening on :30003")
	fs := http.FileServer(http.Dir("content"))
	http.Handle("/", fs)

	log.Fatal(http.ListenAndServe(":30003", nil))
}
