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
  password: 'password'
)

siobhan = User.create!(
  email: 'siobhan@fakedomain.url',
  first_name: 'Siobhan',
  username: 'SiobhanDakay',
  password: 'password'
)


4.times do
  User.create!(
    email: Faker::Internet.unique.email,
    first_name: Faker::Name.unique.first_name,
    username: Faker::LeagueOfLegends.unique.champion,
    password: "password"
  )
end

Track.destroy_all

# genres = %w(
#   pop
#   rock
#   hip-hop
#   rap
#   country
#   alternative
#   jazz
#   R&B
#   soul
#   blues
# )

Track.create!(title: "Test Track", genre: "rock", user_id: 1,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/kara_square/mindmapthat_-_Democrazy.mp3'))
# Tracks all from http://dig.ccmixter.org/free
Track.create!(title: "Democrazy", genre: "alternative", user_id: 2,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/kara_square/mindmapthat_-_Democrazy.mp3'))
Track.create!(title: "Hanging Eleven", genre: "alternative", user_id: 2,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/kara_square/mindmapthat_-_Hanging_Eleven.mp3'))
Track.create!(title: "Hard Wired", genre: "pop", user_id: 2,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/kara_square/mindmapthat_-_Hard_Wired.mp3'))

Track.create!(title: "Who We Are", genre: "alternative", user_id: 3,
  track_upload: File.open('/Users/lexluther/Documents/appAcademy/hans_atom/hansatom_-_Who_We_Are.mp3'))




2.times do
  Track.create!(
    title: Faker::ChuckNorris.fact,
    genre: genres.sample,
    user_id: 1
  )
end
