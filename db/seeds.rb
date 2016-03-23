# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(first_name: "Jason", last_name: "Xu", username: "jasonxu", email: "a@a.com", password: "a")
User.create(first_name: "Topher", last_name: "Lubaway", email: "b@a.com", username: "tl", password: "a")
User.create(first_name: "Rajal", last_name: "Patel", email: "rj@a.com", username: "rj", password: "a")

ted_talks = [

]

Video.create(title: "Public Speaking Champion 2014", user_id: 1, video_link: 'https://www.youtube.com/watch?v=bbz2boNSeL0')

Video.create(title: "Julian Treasure how to speak", user_id: 2, video_link: 'https://www.youtube.com/watch?v=eIho2S0ZahI')

Video.create(title: "Presiyan Vasilev", user_id: 2, video_link: 'https://www.youtube.com/watch?v=9k92IGhnLig')


