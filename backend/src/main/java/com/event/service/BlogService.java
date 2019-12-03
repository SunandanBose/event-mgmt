package com.chargebee.service;

import com.chargebee.model.Blog;
import com.chargebee.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Properties;

@Service
public class BlogService {


    @Autowired
    private BlogRepository blogRepository;

    public String createBlog(Blog blog){
        blogRepository.save(blog);
        return "Created Successfully!!!";
    }

    public List<Blog> getBlogs() {

        return blogRepository.findAll();
    }
}
