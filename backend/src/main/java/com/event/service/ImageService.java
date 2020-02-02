package com.event.service;
import com.event.properties.StorageProperties;
import org.springframework.stereotype.Service;
import java.nio.file.Path;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.io.IOException;

@Service
public class ImageService {
    private final Path rootLocation;

    @Autowired
    public ImageService() {
        this.rootLocation = Paths.get("images");
    }

    public void store(MultipartFile file) {
        try {
            if (file.isEmpty()) {
                throw new IOException("Failed to store empty file " + file.getOriginalFilename());
            }
            Files.copy(file.getInputStream(), this.rootLocation.resolve(file.getOriginalFilename()));
        } catch (IOException e) {
            System.out.println("Failed to store file " + file.getOriginalFilename());
            e.printStackTrace();
        }
    }
}
