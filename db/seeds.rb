# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
  email: 'Guest@someurl.somedomain',
  first_name: 'Guest',
  username: 'Guest',
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

genres = %w(
  pop
  rock
  hip-hop
  rap country
  alternative
  jazz
  R&B
  soul
)

2.times do |i|
  Track.create!(
    title: Faker::ChuckNorris.fact,
    genre: genres.sample,
    track_url: "test_url#{i}",
    user_id: i+1
  )
end
