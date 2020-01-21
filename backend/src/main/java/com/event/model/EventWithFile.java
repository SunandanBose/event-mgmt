package com.event.model;

import org.springframework.web.multipart.MultipartFile;

public class EventWithFile {

    private MultipartFile file;

    private Blog blog;

    public EventWithFile(MultipartFile file, Blog blog) {
        this.file = file;
        this.blog = blog;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

    public Blog getBlog() {
        return blog;
    }

    public void setBlog(Blog blog) {
        this.blog = blog;
    }
}
