package com.event.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
public class HealthController {
    @GetMapping(value = "/health")
    public ResponseEntity health(){
        return ResponseEntity.ok("OK");
    }
}