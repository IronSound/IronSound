# IronSound

User login: 

  route = `POST`, path = `"/login"`, data = `User` object (contains Strings `name` & `password`) 
  
User logout:

  route = `POST`, path = `"/logout"` 

Show songs:  

  route = `GET`, path = `"/songs"`
  
Add a song: 

  route = `POST`, path = `"/add-song"`, data = `int trackId`
  
Delete a song:

  route = `POST`, path = `"/delete-song"`, data = `int id`
  
Add a comment:
  
  route = `POST`, path = `"/add-comment"`, data = `Comment` object (contains String `comment`)
  

  
