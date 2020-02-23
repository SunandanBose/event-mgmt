package com.event.service;

import com.event.model.Blog;
import com.event.model.EventWithFile;
import com.event.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;

@Service
public class BlogService {


    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private ImageService imageService;

    public String createBlog(Blog blog){
        blogRepository.save(blog);
        return "Created Successfully!!!";
    }

    public List<Blog> getBlogs() {

        return blogRepository.findAll();
    }

    public String create(EventWithFile eventWithFile) {
        Blog blog = blogRepository.save(eventWithFile.getBlog());
        if(eventWithFile.getFile()!=null) {
            String originalFileName = eventWithFile.getFile().getOriginalFilename();
            String newFileName = (String.valueOf(blog.getId()) + originalFileName.substring(originalFileName.length() - 4, originalFileName.length()));
            imageService.store(eventWithFile.getFile(), newFileName);
        }
        return "Successfull";

    }

    public ResponseEntity<Resource> fetchImage(String fileName,HttpServletRequest request){
        ResponseEntity<Resource> response = null;
        try {
            Resource resource = imageService.loadFileAsResource(fileName);
            String contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
            response = ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                    .body(resource);
        } catch (IOException e) {
            e.printStackTrace();
            try {
                Resource resource = imageService.loadFileAsResource("default");
                String contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
                response = ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType(contentType))
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            }
            catch (IOException ex){
                System.out.println("default image also not available");
                ex.printStackTrace();
            }
        }
        return response;
    }
}
