package com.theironyard.services;

import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Dan on 7/7/16.
 */
public interface UserRepository extends CrudRepository<User, Integer> {
    public User findByName(String name);
}
