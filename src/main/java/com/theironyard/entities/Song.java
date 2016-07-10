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
    Integer trackId;

    @Column(nullable = false)
    int comments;

    @Column(nullable = false)
    int likedsong;

    @ManyToOne
    User user;

    public Song() {
    }

    public Song(Integer trackId, User user) {
        this.trackId = trackId;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getTrackId() {
        return trackId;
    }

    public void setTrackId(Integer trackId) {
        this.trackId = trackId;
    }

    public int getLikedsong() {
        return likedsong;
    }

    public void setLikedsong(int likedsong) {
        this.likedsong = likedsong;
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
