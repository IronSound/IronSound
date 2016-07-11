package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by hoseasandstrom on 7/8/16.
 */
@Entity
@Table(name = "likes")
public class Like {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    boolean goodsong;

    @ManyToOne
    User user;

    @ManyToOne
    Song song;

    @Transient
    int songId;

    public Like() {
    }

    public Like(boolean goodsong, User user, Song song, int songId) {
        this.goodsong = goodsong;
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

    public boolean isGoodsong() {
        return goodsong;
    }

    public void setGoodsong(boolean goodsong) {
        this.goodsong = goodsong;
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
