package com.event.util;

import com.event.Application;
import com.event.model.Blog;
import com.event.model.SearchCriteria;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class BlogSpecificationBuilder {
    private List<SearchCriteria> params;

    public BlogSpecificationBuilder() {
        params = new ArrayList<>();
    }

    public BlogSpecificationBuilder with(String key, String operation, Object value) {
        params.add(new SearchCriteria(key,operation,value));
        return this;
    }

    public Specification<Blog> build(){
        if(params.size() == 0) return null;
        Specification<Blog> result = new BlogSpecification(params.get(0));
        return null;
    }
}

