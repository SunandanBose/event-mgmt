package com.chargebee.controller;

import com.chargebee.model.Blog;
import com.chargebee.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BlogController {

    @Autowired
    private BlogService blogService;

    @PostMapping(value = "/blogs")
    private String createNewBlog(@RequestBody Blog blog){
        return blogService.createBlog(blog);
    }
}
