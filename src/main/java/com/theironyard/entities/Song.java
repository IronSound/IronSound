package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by Dan on 7/7/16.
 */
@Entity
@Table(name = "songs")
public class Song {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    int trackId;

    @Column(nullable = false)
    int comments;

    @ManyToOne
    User user;

    public Song() {
    }

    public Song(int trackId, User user) {
        this.trackId = trackId;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTrackId() {
        return trackId;
    }

    public void setTrackId(int trackId) {
        this.trackId = trackId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getComments() {
        return comments;
    }

    public void setComments(int comments) {
        this.comments = comments;
    }
}

