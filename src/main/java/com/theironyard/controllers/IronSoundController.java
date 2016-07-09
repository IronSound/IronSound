package com.theironyard.controllers;

import com.theironyard.entities.Song;
import com.theironyard.entities.User;
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

    @PostConstruct
    public void init() throws SQLException {
        Server.createWebServer().start();
    }

    @RequestMapping(path = "/songs", method = RequestMethod.GET)
    public Iterable<Song> getSongs() {
        return songs.findAll();
    }

    @RequestMapping(path = "/songs", method = RequestMethod.POST)
    public void addSong(HttpSession session, int trackId) {
        String username = (String) session.getAttribute("username");
        User user = users.findByName(username);
        Song song = new Song(trackId, user);
        songs.save(song);
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public void login(HttpSession session, @RequestBody User user) throws Exception {
        User userFromDB = users.findByName(user.getName());
        if (userFromDB == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDB.getPassword())) {
            throw new Exception("Wrong password.");
        }
        session.setAttribute("username", user.getName());
    }

    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session) {
        session.invalidate();
    }
}
