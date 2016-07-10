package com.theironyard.services;

import com.theironyard.entities.Like;
import com.theironyard.entities.Song;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by hoseasandstrom on 7/9/16.
 */
public interface LikeRepository extends CrudRepository<Like, Integer> {
    public Iterable<Like> findBySong(Song song);
}
