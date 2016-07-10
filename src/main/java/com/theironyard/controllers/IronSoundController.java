package com.theironyard.controllers;

import com.theironyard.entities.Comment;
import com.theironyard.entities.Like;
import com.theironyard.entities.Song;
import com.theironyard.entities.User;
import com.theironyard.services.CommentRepository;
import com.theironyard.services.LikeRepository;
import com.theironyard.services.SongRepository;
import com.theironyard.services.UserRepository;
import com.theironyard.utilities.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;

/**
 * Created by Dan on 7/7/16.
 */
@RestController
public class IronSoundController {

    @Autowired
    UserRepository users;

    @Autowired
    SongRepository songs;

    @Autowired
    LikeRepository likes;

    @Autowired
    CommentRepository comments;

    @PostConstruct
    public void init() throws SQLException {
        Server.createWebServer().start();
    }

    @RequestMapping(path = "/songs", method = RequestMethod.GET)
    public Iterable<Song> getSongs() {
        return songs.findAll();
    }

    @RequestMapping(path = "/library", method = RequestMethod.POST)
    public String addSong(HttpSession session, int trackId) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }
        User user = users.findByName(username);
        if (user == null) {
            throw new Exception("User not found.");
        }
        Song song = new Song(trackId, user);
        songs.save(song);

        user.setTab(user.getTab() + 1);

        return "Success.";
    }

    @RequestMapping(path = "delete-song", method = RequestMethod.POST)
    public String deleteSong(HttpSession session, int id) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }
        User user = users.findByName(username);
        if (user == null) {
            throw new Exception("User not found.");
        }
        if (!user.getName().equals(songs.findOne(id).getUser().getName())) {
            throw new Exception("You may only delete your own songs.");
        }
        songs.delete(id);

        return "Success.";
    }

    @RequestMapping(path = "/add-comment", method = RequestMethod.POST)
    public String addComment(HttpSession session, @RequestBody Comment comment) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }
        User user = users.findByName(username);
        if (user == null) {
            throw new Exception("User not found.");
        }
        Song song = songs.findOne(comment.getSongId());
        if (song == null) {
            throw new Exception("Song not found.");
        }
        song.setComments(song.getComments() + 1);
        songs.save(song);

        comment.setSong(song);
        comment.setUser(user);
        comments.save(comment);

        return "Success.";
    }

    @RequestMapping(path = "/likes", method = RequestMethod.POST)
    public String addLike(HttpSession session, @RequestBody Like like) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("You must be logged in");
        }

        User user = users.findByName(username);
        if (user == null) {
            throw new Exception("Cannot find the user in the database");
        }

        Song song = songs.findOne(like.getLikeid());
        if (song == null) {
            throw new Exception("Song does not exist");
        }

        song.setLikedsong(song.getLikedsong() + (like.isGoodsong() ? 1 : -1));
        songs.save(song);

        like.setSong(song);
        like.setUser(user);
        likes.save(like);

        return "Success.";
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public String login(HttpSession session, @RequestBody User user) throws Exception {
        User userFromDB = users.findByName(user.getName());
        if (userFromDB == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDB.getPassword())) {
            throw new Exception("Wrong password.");
        }
        session.setAttribute("username", user.getName());

        return "Successful login.";
    }

    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public String logout(HttpSession session) {
        session.invalidate();

        return "Logout successful.";
    }
}
