package com.theironyard.services;

import com.theironyard.entities.Song;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Dan on 7/7/16.
 */
public interface SongRepository extends CrudRepository<Song, Integer>{
}
