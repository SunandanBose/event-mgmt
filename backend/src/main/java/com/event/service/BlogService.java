package com.event.service;

import com.event.model.Blog;
import com.event.model.EventWithFile;
import com.event.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public String create(EventWithFile eventWithFile) {
        System.out.println(eventWithFile.getFile().getOriginalFilename());
        return "Successfull";

    }
}
