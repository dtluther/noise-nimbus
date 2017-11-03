# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

guest = User.create!(
  email: 'Guest@someurl.somedomain',
  first_name: 'Guest',
  username: 'Guest',
  password: 'password',
  image: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/defaults/default_user_profile.png')
)

ethan = User.create!(
  email: 'ethan@randomdomain.com',
  first_name: 'Ethan',
  username: 'emeixsell',
  password: 'password',
  image: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/reindeer-160879_640.png')
)

kara = User.create!(
  email: 'karasquare@fakedomain.url',
  first_name: 'Kara',
  username: 'karasquare',
  password: 'password',
  image: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/kara_avatar.jpg')
)

# image from https://stackshare.io/atom
hans = User.create!(
  email: 'jeris@fakedomain.url',
  first_name: 'Jeris',
  username: 'hans_atom',
  password: 'password',
  image: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/hans_atom_profile.png')
)

gurdon = User.create!(
  email: 'gurdonark@fakedomain.url',
  first_name: 'Gurdon',
  username: 'gurdon_ark',
  password: 'password',
  image: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/clouds-2517650_640.jpg')

)

siobhan = User.create!(
  email: 'siobhan@fakedomain.url',
  first_name: 'Siobhan',
  username: 'SiobhanDakay',
  password: 'password',
  image: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/morning-2550629_640.jpg')
)

jammy = User.create!(
  email: 'jammy@email.xmas',
  first_name: 'jammy',
  username: 'jammy',
  password: 'password',
  image: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/deer-1940369_640.jpg')
)

country = User.create!(
  email: 'country@email.rando',
  first_name: 'country',
  username: 'country',
  password: 'password',
  image: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/train-1728537_640.jpg')
)

bensound = User.create!(
  email: 'bensound@email.rando',
  first_name: 'bensound',
  username: 'bensound',
  password: 'password',
  image: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/dj-1964727_640.jpg')
)

otis = User.create!(
  email: 'otis@email.rando',
  first_name: 'otis',
  username: 'otis',
  password: 'password',
  image: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/hip-hop-1209499_640.jpg')
)


Track.destroy_all



users = User.all
# Tracks from http://dig.ccmixter.org/free
track1 = Track.create!(title: "Test Track", genre: "rock", user_id: User.first.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/mindmapthat_-_Democrazy.mp3'))

track2 = Track.create!(title: "Democrazy", genre: "alternative", user_id: kara.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/mindmapthat_-_Democrazy.mp3'))
  
track4 = Track.create!(title: "So Much Is Wrong", genre: "alternative", user_id: gurdon.id,
track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/gurdonark_-_So_Much_is_Wrong.mp3'))

track5 = Track.create!(title: "Who We Are", genre: "alternative", user_id: hans.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/hansatom_-_Who_We_Are.mp3'))
  
track3 = Track.create!(title: "The Coming Storm", genre: "rock", user_id: users[2].id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/mindmapthat_-_Hard_Wired.mp3'))

track9 = Track.create!(title: "We Wish You a Merry Christmas", genre: "other", user_id: jammy.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/We_Wish_You_a_Merry_Christmas_Vocals.mp3'))

track6 = Track.create!(title: "You Believed It Yourself", genre: "alternative", user_id: siobhan.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/SiobhanD_-_You_Believed_It_Yourself.mp3'))
  
track8 = Track.create!(title: "Hard Wired", genre: "pop", user_id: kara.id,
track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/mindmapthat_-_Hard_Wired.mp3'))

track11 = Track.create!(title: "Lonesome Avenue", genre: "country", user_id: country.id,
track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/Lonesome_Avenue.mp3'))

track10 = Track.create!(title: "Deck the Halls", genre: "jazz", user_id: jammy.id,
track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/Deck_the_Halls_Jazz.mp3'))

track7 = Track.create!(title: "Hanging Eleven", genre: "alternative", user_id: kara.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/mindmapthat_-_Hanging_Eleven.mp3'))

track13 = Track.create!(title: "Black Polkadots", genre: "alternative", user_id: hans.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/Black_Polkadots.mp3'))

track14 = Track.create!(title: "Easy Breezy", genre: "pop", user_id: siobhan.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/Easy_Breezy.mp3'))

track15 = Track.create!(title: "Sports Car Driving Low Rumble", genre: "other", user_id: guest.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/Sports_Car_Driving_Low_Rumble.mp3'))

track16 = Track.create!(title: "Quill Pen Writing", genre: "other", user_id: guest.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/Quill_Pen_Writing.mp3'))

track18 = Track.create!(title: "Quill Pen Writing", genre: "other", user_id: siobhan.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/Nils_Frahm_You.mp3'))

track19 = Track.create!(title: "Quill Pen Writing", genre: "other", user_id: gurdon.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/The_Echelon_Effect_Your_First_Light_My_Eventide.mp3'))

track20 = Track.create!(title: "Quill Pen Writing", genre: "other", user_id: ethan.id,
  track_upload: open('https://s3-us-west-1.amazonaws.com/noise-nimbus-dev/seed_files/Ponies_and_Balloons.mp3'))



Comment.destroy_all

c1 = Comment.create!(body: "Best song I've ever heard!", author_id: guest.id, track_id: track13.id)
c2 = Comment.create!(body: "Are they famous yet?", author_id: hans.id, track_id: track3.id)
c3 = Comment.create!(body: "ehh.. not my favorite", author_id: kara.id, track_id: track1.id)
c4 = Comment.create!(body: "This is my favorite of hers.", author_id: guest.id, track_id: track7.id)
c5 = Comment.create!(body: "An oldie but a goodie.", author_id: siobhan.id, track_id: track19.id)
c6 = Comment.create!(body: "This has a nice sound to it", author_id: ethan.id, track_id: track3.id)
c7 = Comment.create!(body: "A very soothing sound", author_id: otis.id, track_id: track16.id)
c8 = Comment.create!(body: "great song", author_id: guest.id, track_id: track2.id)
c9 = Comment.create!(body: "it's pretty chill", author_id: kara.id, track_id: track1.id)
c10 = Comment.create!(body: "Who doesn't like their own track?!", author_id: guest.id, track_id: track15.id)
c11 = Comment.create!(body: "This song helps me get my day started.", author_id: bensound.id, track_id: track4.id)
c12 = Comment.create!(body: "Been listening to this on repeat for the last week!", author_id: country.id, track_id: track5.id)
c13 = Comment.create!(body: "check out this song!", author_id: jammy.id, track_id: track6.id)
c14 = Comment.create!(body: "cool tune", author_id: gurdon.id, track_id: track7.id)
c15 = Comment.create!(body: "This song will transcend times!", author_id: siobhan.id, track_id: track10.id)
c16 = Comment.create!(body: "A modern day Bon Jovi!", author_id: guest.id, track_id: track9.id)
c17 = Comment.create!(body: "Fantastic!!!!", author_id: kara.id, track_id: track8.id)
c18 = Comment.create!(body: "meh", author_id: jammy.id, track_id: track3.id)
c19 = Comment.create!(body: "VROOOOMMM", author_id: otis.id, track_id: track15.id)
c20 = Comment.create!(body: "MY FAVORITE", author_id: guest.id, track_id: track2.id)
