# Games Forum


## Architecture

HTML, CSS, and Js only on the frontend. MySQL databases and Flask backend. 

## Database scheme

__Users__
Date joined, currently online, bio, likes threads, observes, obsered by

__Threads__
Title, message, uploaded date, edited date, likes, dislikes, poster, category, tags, allow comments

__Comments__
parent thread, uploaded date, edited date, likes, dislikes, poster, category, tags


## Routes / HTTP

- `GET /thread/<thread-id>` - Returns the thread with the id
- `GET /categories`- Returns all categories in JSON
- `GET /comments/<thread_id>` - Returns all comments in a thread
- `GET /comments/<user-id>` - Returns all comments made by a user
- `GET /users/<user_id>` - Returns user information
- `POST /thread` - Makes a thread
- `POST /comment` - Makes a comment
- `POST /users` - User creation
- `POST /report` - Makes a report
- `PUT /comments/<comment_id>` - Edits a comment
- `PUT /thread/<thread_id>` - Edits a thread
- `PUT /users/<user_id>` - Edits a user profile
- `DELETE /thread/<thread_id>` - Deletes a thread
- `DELETE /comment/<comment_id>` - Deletes a comment
- `DELETE /users/<user_id>` - Deletes a user