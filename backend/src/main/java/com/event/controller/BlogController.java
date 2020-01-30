package com.event.controller;

import com.event.model.Blog;
import com.event.model.EventWithFile;
import com.event.service.BlogService;
import com.event.service.ImageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.http.MediaType;

import java.io.IOException;
import java.util.List;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

@RestController
public class BlogController {

    @Autowired
    private BlogService blogService;

    @Autowired
    private ImageService imageService;

    @PostMapping(value = "/blogs")
    private String createNewBlog(@RequestParam("event") String model, @RequestParam(value = "file", required = false) MultipartFile file) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Blog blog = mapper.readValue(model, Blog.class);
        UserDetails user =(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println(user.getUsername());
        return "Successful";
        //return blogService.create(eventWithFile);
        //return blogService.createBlog(blog);
    }
    //TODO : Donot return objects return response Entity
    @GetMapping(value = "/blogs")
    private List<Blog> getBlogs(){

        return blogService.getBlogs();
    }

    @PostMapping(value = "/upload")
    private void uploadImage(@RequestParam MultipartFile file){
        System.out.println("Logger : " + file.getContentType());
        System.out.println("Logger1 : " + file.getOriginalFilename());

        //imageService.save(file);
    }
}
