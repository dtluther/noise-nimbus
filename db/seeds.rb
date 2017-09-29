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
)

ethan = User.create!(
  email: 'ethan@randomdomain.com',
  first_name: 'Ethan',
  username: 'emeixsell',
  password: 'password',
  image: File.open('/Users/lexluther/Downloads/reindeer-160879_640.png')
)

kara = User.create!(
  email: 'karasquare@fakedomain.url',
  first_name: 'Kara',
  username: 'karasquare',
  password: 'password',
  image: File.open('/Users/lexluther/Documents/appAcademy/kara_square/kara_square_200x200.jpg')
)

# image from https://stackshare.io/atom
hans = User.create!(
  email: 'jeris@fakedomain.url',
  first_name: 'Jeris',
  username: 'hans_atom',
  password: 'password',
  image: File.open('/Users/lexluther/Documents/appAcademy/hans_atom/hans_atom_profile.png')
)

gurdon = User.create!(
  email: 'gurdonark@fakedomain.url',
  first_name: 'Gurdon',
  username: 'gurdon_ark',
  password: 'password',
  image: File.open('/Users/lexluther/Downloads/clouds-2517650_640.jpg')

)

siobhan = User.create!(
  email: 'siobhan@fakedomain.url',
  first_name: 'Siobhan',
  username: 'SiobhanDakay',
  password: 'password',
  image: File.open('/Users/lexluther/Downloads/morning-2550629_640.jpg')
)

jammy = User.create!(
  email: 'jammy@email.xmas',
  first_name: 'jammy',
  username: 'jammy',
  password: 'password',
  image: File.open('/Users/lexluther/Downloads/deer-1940369_640.jpg')
)

country = User.create!(
  email: 'country@email.rando',
  first_name: 'country',
  username: 'country',
  password: 'password',
  image: File.open('/Users/lexluther/Downloads/train-1728537_640.jpg')
)

bensound = User.create!(
  email: 'bensound@email.rando',
  first_name: 'bensound',
  username: 'bensound',
  password: 'password',
  image: File.open('/Users/lexluther/Downloads/bensound-energy.mp3')
)


Track.destroy_all



users = User.all
# Tracks from http://dig.ccmixter.org/free
Track.create!(title: "Test Track", genre: "rock", user_id: User.first.id,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/kara_square/mindmapthat_-_Democrazy.mp3'))

Track.create!(title: "Democrazy", genre: "alternative", user_id: kara.id,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/kara_square/mindmapthat_-_Democrazy.mp3'))

Track.create!(title: "The Coming Storm", genre: "rock", user_id: users[2].id,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/kara_square/mindmapthat_-_Hard_Wired.mp3'))

Track.create!(title: "So Much Is Wrong", genre: "alternative", user_id: gurdon.id,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/gurdonark/gurdonark_-_So_Much_is_Wrong.mp3'))

Track.create!(title: "Who We Are", genre: "alternative", user_id: hans.id,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/hans_atom/hansatom_-_Who_We_Are.mp3'))

Track.create!(title: "You Believed It Yourself", genre: "alternative", user_id: siobhan.id,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/siobhan_dakay/SiobhanD_-_You_Believed_It_Yourself.mp3'))

Track.create!(title: "Hanging Eleven", genre: "alternative", user_id: kara.id,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/kara_square/mindmapthat_-_Hanging_Eleven.mp3'))

Track.create!(title: "Hard Wired", genre: "pop", user_id: kara.id,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/kara_square/mindmapthat_-_Hard_Wired.mp3'))

Track.create!(title: "We Wish You a Merry Christmas", genre: "other", user_id: jingle.id,
  track_upload: File.open('/Users/lexluther/Downloads/We_Wish_You_a_Merry_Christmas_Vocals.mp3'))

Track.create!(title: "Deck the Halls", genre: "jazz", user_id: jammy.id,
  track_upload: File.open('/Users/lexluther/Downloads/Deck_the_Halls_Jazz.mp3'))

Track.create!(title: "Lonesome Avenue", genre: "country", user_id: country.id,
  track_upload: File.open('/Users/lexluther/Downloads/Lonesome_Avenue.mp3'))

# Music: https://www.bensound.com
Track.create!(title: "Energy", genre: "pop", user_id: bensound.id,
  track_upload: File.open('/Users/lexluther/Downloads/bensound-energy.mp3'))
