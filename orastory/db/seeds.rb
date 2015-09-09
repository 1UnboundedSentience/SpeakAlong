# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(first_name: "Jason", last_name: "Xu", username: "jasonxu", email: "a@a.com", password: "a")
User.create(first_name: "Topher", last_name: "Lubaway", email: "a@a.com", username: "tl", password: "a")
User.create(first_name: "Rajal", last_name: "Patel", email: "rj@a.com", username: "rj", password: "a")

1.upto(4) {|n|
  Video.create(title: "Sherif Talking", user_id: n, video_link: 'https://www.youtube.com/watch?v=8ONf8SXbGZ4')
}

Video.create(title: "Cat Video", user_id: 1, video_link: 'www.youtube.com/watch?v=tntOCGkgt98')
