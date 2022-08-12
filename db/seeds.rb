
puts "Destroying previous data .."

User.destroy_all
Park.destroy_all
Activity.destroy_all
Itinerary.destroy_all

puts "Seeding users .."
10.times do
    User.create(
        username: Faker::Name.username(specifier: 10),
        password: Faker::Internet.password,
        full_name: Faker::Name.name,
        email: Faker::Internet.email,
    )
end

puts "Adding Parks .."

    Park.create(
        name: "Yellowstone National Park",
        location: "Wyoming"
        image: "https://assets3.thrillist.com/v1/image/3087119/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
    )
    Park.create(
        name: "Haleakalā National Park",
        location: "Maui, Hawaii",
        image:"https://www.bikemaui.com/wp-content/uploads/2016/06/haleakala-sunrise-1.jpg"
    )
    Park.create(
        name: "Yosemite National Park",
        location: "California",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-obA0_OFYG3kytfamw5YmPs-1BQ1cQnU2Q&usqp=CAU"
    )
    Park.create(
        name: "North Cascades National Park",
        location: "Washington",
        image: "https://external-preview.redd.it/ATLFpgC9BtHIGXL-ReNOI-Nt20OqkUg5N_zsQyji_uY.jpg?auto=webp&s=7de6b54d93f3379202afe90273b2d344f86c2320"
        # image: "https://funlifecrisis.com/wp-content/uploads/2016/06/Diablo-Lake-North-Cascade-National-Park-e1465880812770.jpg"
    )
    Park.create(
        name: "Redwood National Park",
        location: "California"
        image:"https://parksandtrips.com/wp-content/uploads/2022/01/redwoods.jpg"
    )
end

5.times do
    Activity.create(
        name:
        description:
        image:
    )
end

5.times do
    Itinerary.create(
        date:
        user_id:
        activity_id:

    )
end



# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
