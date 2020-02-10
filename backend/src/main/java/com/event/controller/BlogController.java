package com.event.controller;

import com.event.model.Blog;
import com.event.model.EventWithFile;
import com.event.service.BlogService;
import com.event.service.ImageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
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

import javax.servlet.http.HttpServletRequest;

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
        blogService.create(new EventWithFile(file, blog));
        return "Successful";
    }
    //TODO : Donot return objects return response Entity
    @GetMapping(value = "/blogs")
    private List<Blog> getBlogs(){

        return blogService.getBlogs();
    }

    @GetMapping(value = "/image")
    private ResponseEntity<Resource> uploadImage(HttpServletRequest request){
        return blogService.fetchImage(request);
        //imageService.save(file);
    }
}
