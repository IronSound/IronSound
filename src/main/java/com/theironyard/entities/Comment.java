package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by Dan on 7/9/16.
 */
@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String comment;

    @ManyToOne
    User user;

    @ManyToOne
    Song song;

    @Transient
    int songId;

    public Comment() {
    }

    public Comment(String comment, User user, Song song, int songId) {
        this.comment = comment;
        this.user = user;
        this.song = song;
        this.songId = songId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Song getSong() {
        return song;
    }

    public void setSong(Song song) {
        this.song = song;
    }

    public int getSongId() {
        return songId;
    }

    public void setSongId(int songId) {
        this.songId = songId;
    }
}
