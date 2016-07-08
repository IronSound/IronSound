package com.theironyard.services;

import com.theironyard.entities.Song;
import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Dan on 7/7/16.
 */
public interface SongRepository extends CrudRepository<Song, Integer>{
    public Iterable<Song> findByUser(User user);
}
