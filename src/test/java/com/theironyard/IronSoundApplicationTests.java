package com.theironyard;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.theironyard.entities.Comment;
import com.theironyard.entities.Song;
import com.theironyard.entities.User;
import com.theironyard.services.CommentRepository;
import com.theironyard.services.LikeRepository;
import com.theironyard.services.SongRepository;
import com.theironyard.services.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = IronSoundApplication.class)
@WebAppConfiguration

@FixMethodOrder(MethodSorters.NAME_ASCENDING)

public class IronSoundApplicationTests {

	@Autowired
	WebApplicationContext wac;

	@Autowired
	UserRepository users;
	@Autowired
	SongRepository songs;
	@Autowired
	CommentRepository comments;
	@Autowired
	LikeRepository likes;

	MockMvc mockMvc;

	@Before
	public void before() {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}

	@Test
	public void aTestLogin() throws Exception {
		User user = new User();
		user.setName("Bob");
		user.setPassword("123");
		user.setTab(0);
		ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(user);
		mockMvc.perform(
				MockMvcRequestBuilders.post("/login")
				.content(json)
				.contentType("application/json")
		);
		Assert.assertTrue(users.count() == 1);
	}

	@Test
	public void bTestAddSong() throws Exception {
		User user = users.findOne(1);
		Song song = new Song();
		song.setTrackId(1);
		song.setId(1);
		song.setUser(user);
		ObjectMapper om = new ObjectMapper();
		String json = om.writeValueAsString(song);
		mockMvc.perform(
				MockMvcRequestBuilders.post("/add-song")
				.content(json)
				.contentType("application/json")
				.sessionAttr("username", "Bob")
		);
		Assert.assertTrue(songs.count() == 1);
	}

	@Test
	public void cTestAddComment() throws Exception {
		User user = users.findOne(1);
		Song song = songs.findOne(1);
		Comment comment = new Comment();
		comment.setSong(song);
		comment.setSongId(1);
		comment.setComment("Test comment.");
		comment.setUser(user);
		ObjectMapper objectMapper = new ObjectMapper();
		String json = objectMapper.writeValueAsString(comment);
		mockMvc.perform(
				MockMvcRequestBuilders.post("/add-comment")
						.content(json)
						.contentType("application/json")
						.sessionAttr("username", "Bob")

		);
		Assert.assertTrue(comments.count() == 1);
	}

	@Test
	public void dTestDeleteSong() throws Exception {
		Song song = songs.findOne(1);
		ObjectMapper om = new ObjectMapper();
		String json = om.writeValueAsString(song);
		mockMvc.perform(
				MockMvcRequestBuilders.post("/delete-song")
				.content(json)
				.contentType("application/json")
				.sessionAttr("username", "Bob")

		);
		Assert.assertTrue(songs.count() == 0);
	}
}
