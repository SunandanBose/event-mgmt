package com.event.service;
import com.event.properties.StorageProperties;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.net.MalformedURLException;
import java.nio.file.Path;

import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.io.IOException;
import java.util.logging.Logger;

@Service
public class ImageService {
    private final Path rootLocation;

    @Autowired
    public ImageService() {
        this.rootLocation = Paths.get("images");
    }

    public void store(MultipartFile file, String newFile) {
        try {
            if (file.isEmpty()) {
                throw new IOException("Failed to store empty file " + file.getOriginalFilename());
            }
            Files.copy(file.getInputStream(), this.rootLocation.resolve(newFile));
        } catch (IOException e) {
            System.out.println("Failed to store file " + file.getOriginalFilename());
            e.printStackTrace();
        }
    }

    public Resource loadFileAsResource(String fileName) throws IOException {
        try {
            Path filePath = this.rootLocation.resolve(fileName+".png").normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if(resource.exists()) {
                return resource;
            } else {
                throw new IOException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new IOException("File not found " + fileName, ex);
        }
    }

    public void delete(Integer id){
        try {
            Path filePath = this.rootLocation.resolve(String.valueOf(id)+".png").normalize();
            Files.deleteIfExists(filePath);
        } catch (IOException e) {
            Logger.getLogger(getClass().getName()).fine(e.toString());
        }
    }
}
