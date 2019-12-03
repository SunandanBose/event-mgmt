package com.event.controller;

import com.event.model.Blog;
import com.event.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BlogController {

    @Autowired
    private BlogService blogService;

    @PostMapping(value = "/blogs")
    private String createNewBlog(@RequestBody Blog blog){
        return blogService.createBlog(blog);
    }
    //TODO : Donot return objects return response Entity
    @GetMapping(value = "/blogs")
    private List<Blog> getBlogs(){

        return blogService.getBlogs();
    }
}
