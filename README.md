![screen shot 2017-11-03 at 1 28 32 pm](https://user-images.githubusercontent.com/15662012/32394611-ef506bba-c09a-11e7-8f58-e71681fa49e8.png)

# NoiseNimbus

NoiseNimbus is a Ruby-on-Rails/React clone of SoundCloud, the popular site for uploading and discovering music. A user can listen to and comment on other user's music, as well as upload their own. You can also listen to music while logged out.

Check it out here: [https://noise-nimbus.herokuapp.com](https://noise-nimbus.herokuapp.com/).

## Installation
``` npm install ```

## Technologies Used
On the backend, an MVC architecture was implemented using the Rails framework. The app rests on a PostgreSQL database that is connect to an AWS server to store image uploads (for profile pictures) and track uploads (for the music). Backend authentication was set up using logic in the User model to ensure a session token was provided to the user, and the password was hashed with BCrypt:
```
  after_initialize :ensure_session_token

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save!
    session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
```

Jbuilder was a very useful technology in NoiseNimbus as it made it easy to transfer data (in JSON format) from the rails backend to the React frontend. Data was often transferred as a Ruby hash/JavaScript object to make it easy to extract the necessary state via the reducers. Due to the overlapping in state occurring in NoiseNimbus, a very effective method was to pass the track artist username and profile image with the track JSON response, so it could later be accessed for components such as the TrackIndexItem:
```
json.merge! track.attributes
json.username track.artist.username
json.user_image_url asset_path(track.artist.image.url)
json.track_upload_url asset_path(track.track_upload.url)
```

On the front end, a Redux architecture was implemented using React. With React, some of SoundClouds core features were successfully implemented.

## Features

### Track Creation and Update
In order to store tracks, and AWS server was setup. Paperclip was used to to transfer files to an Amazon S3 server, and Figaro was used to keep private keys secure. Ajax requests were used to transfer the formData objects with our track information to our server. A nice front end feature was used to update our track information: a React Modal.
![screen shot 2017-09-29 at 3 54 35 pm](https://user-images.githubusercontent.com/15662012/31038956-90f0d46a-a52e-11e7-9594-f7d7e529cf42.png)


### Asynchronous Music Playback
Probably the most challenging, but significant, feature was setting up the music playback to occur while changing pages. By specifically assigning which props get passed to which components, the react player was able to be present on all "pages" and maintain its state and playback info. It was also made to be responsive to a variety of click actions on different pages, since there are many places from which one can select a track on NoiseNimbus:
![screen shot 2017-09-29 at 4 01 09 pm](https://user-images.githubusercontent.com/15662012/31039078-8550ac88-a52f-11e7-8ec8-a5ba5974b8c9.png)


![screen shot 2017-09-29 at 4 01 31 pm](https://user-images.githubusercontent.com/15662012/31039088-92ca821c-a52f-11e7-9869-2e4bdc6a84da.png)

## Future Considerations
Future objectives for this project include:
* Search implementation by both user and track
* Addition of playlists and recently-listened-to tracks
* Increased click handling and UI interactivity with the media player bar
