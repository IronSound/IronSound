package com.theironyard.services;

import com.theironyard.entities.Comment;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Dan on 7/9/16.
 */
public interface CommentRepository extends CrudRepository<Comment, Integer> {
}
