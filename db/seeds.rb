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

    yellowstone = Park.create(
        name: "Yellowstone National Park",
        location: "Wyoming"
        image: "https://assets3.thrillist.com/v1/image/3087119/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
    )
    hawaii = Park.create(
        name: "Haleakalā National Park",
        location: "Maui, Hawaii",
        image:"https://www.bikemaui.com/wp-content/uploads/2016/06/haleakala-sunrise-1.jpg"
    )
    yosemite = Park.create(
        name: "Yosemite National Park",
        location: "California",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-obA0_OFYG3kytfamw5YmPs-1BQ1cQnU2Q&usqp=CAU"
    )
    northcascades = Park.create(
        name: "North Cascades National Park",
        location: "Washington",
        image: "https://external-preview.redd.it/ATLFpgC9BtHIGXL-ReNOI-Nt20OqkUg5N_zsQyji_uY.jpg?auto=webp&s=7de6b54d93f3379202afe90273b2d344f86c2320"
        # image: "https://funlifecrisis.com/wp-content/uploads/2016/06/Diablo-Lake-North-Cascade-National-Park-e1465880812770.jpg"
    )
    redwoods = Park.create(
        name: "Redwood National Park",
        location: "California"
        image:"https://parksandtrips.com/wp-content/uploads/2022/01/redwoods.jpg"
    )


puts "Adding activities .."

    Activity.create(
        name: "Horseback riding",
        description: "Yellowstone allows private, licensed outfitters who have been authorized to operate in the park to guide trips. Some outfitters offer day trips and some offer guided overnight backcountry trips. Yellowstone National Park Lodges also offers one to two hours horse rides at Tower-Roosevelt and Canyon.",
        image: "https://www.nps.gov/yell/planyourvisit/images/19538d.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
        park_id: yellowstone.id
    )

    Activity.create(
        name: "Rafting",
        description: "Located a short drive north of West Yellowstone, the Gallatin River offers a variety of whitewater rafting opportunities.",
        image: "https://www.yellowstonedestination.com/wp-content/uploads/2018/05/jmtm1mo3tlboalcn2avf.jpg",
        park_id: yellowstone.id
    )

    Activity.create(
        name: "Hike Artist Point",
        description: "Artist Point is an overlook point on the edge of a cliff on the south rim of the Grand Canyon of the Yellowstone in Yellowstone National Park, Wyoming. The point is located east-northeast of Yellowstone Falls on the Yellowstone River.",
        image: "https://www.nomadbytrade.com/wp-content/uploads/Best-Yellowstone-Hikes-1080x675.jpg"
        park_id: yellowstone.id
    )

    Activity.create(
        name: "Watching the Sunrise/Sunset About the Clouds",
        description: "The summit of Haleakala sits higher than the clouds. A beautiful sight, looking across this blanket of clouds and seeing the first rays of sunlight, as they peek above the cloud layer.",
        image: "https://www.bikemaui.com/wp-content/uploads/2016/06/haleakala-sunrise-1.jpg",
        park_id: hawaii.id
    )

    Activity.create(
        name: "Kalahaku Overlook",
        description: "Located on Haleakala Highway. It's a short uphill walk to the viewpoint.",
        image: "https://www.hawaii-guide.com/images/made/kalahakuoverlook_2500_893_95_s_1600_572_95_s_c1_c_b_0_0.jpg"
        park_id: hawaii.id
    )

    Activity.create(
        name: "Hike Yosemite Falls",
        description: "Yosemite Falls is the highest waterfall in Yosemite National Park, dropping a total of 2,425 feet from the top of the upper fall to the base of the lower fall. Located in the Sierra Nevada of California, it is a major attraction in the park, especially in late spring when the water flow is at its peak.",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQvBdWeJoNRAAGHvcbdnciGZupqXgPZHhllbgiy8-tp9Q-3Na31g7rnmzGgnEWGdo2GL9nOdWgqZ580Lp4zJFmR0A",
        park_id: yosemite.id
    )

    Activity.create(
        name: "Drive down to see iconic Half Dome",
        description: "Half Dome is a granite dome at the eastern end of Yosemite Valley in Yosemite National Park, California. It is a well-known rock formation in the park, named for its distinct shape. One side is a sheer face while the other three sides are smooth and round, making it appear like a dome cut in half. The granite crest rises more than 4,737 ft above the valley floor.",
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSn0HtBTA-tIz_s0Xu9EIXFDUnSf3i3WZAStbScgBT-LfZcxEmDhpPurWT2ZxlowFy6DHnbqQR-3OeUNfp2so1xQg",
        park_id: yosemite.id
    )

    Activity.create(
        name: "Hike Ross Lake National Recreational Area",
        description: "he NRA contains a portion of scenic Washington State Route 20, the North Cascades Highway, and includes three reservoirs: 12,000-acre Ross Lake, 910-acre Diablo Lake, and 210-acre Gorge Lake. These reservoirs make up the Skagit River Hydroelectric Project operated by Seattle City Light. Nestled in the "American Alps" the Ross Lake NRA bisects the north and south units of North Cascades National Park",
        image:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQau5VBW--lIyUU6wzxAghIVCk8NfAQCHdMwGHOHEQB22wM1K0PKoR22ydtVtkMmGXzPy8K7gSvJib3BVv4K07dWA",
        park_id: northcascades.id
    )

    Activity.create(
        name: "Winter Ski Mt. Baker Ski Area",
        description: "Large ski resort with lessons and rentals",
        image: "https://www.skimag.com/wp-content/uploads/2020/02/ski0120-ind-02-baker.jpg",
        park_id: northcascades.id
    )

    Activity.create(
        name: "Visit Fern Canyon",
        description: "Fern Canyon is a canyon in the Prairie Creek Redwoods State Park in Humboldt County, California, western United States. The park is managed in cooperation with other nearby redwoods state parks and Redwood National Park. It is named for the ferns growing on the 50-foot high walls, through which runs Home Creek.",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSxF7Tp4yrO5boYqE5NFjJji_tj_tnsge0oziK_lRnWH4RuxjM0QKKVETy6NTQSWZ36dMxki5KGJPy0rt5omhv-fw",
        park_id: redwoods.id
    )

    Activity.create(
        name: "Hike Redwood National Park",
        description: "Coastal reserve known for redwood trees.",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSENWwV-gtfvCguyit9d90K_mE_XlYrYyWKcpdcbL4oZwX0DivIh4jrtedOXo2C8vlW3a2pBLIMA-lUBrqjvtdzMw",
        park_id: redwoods.id
    )

puts "Adding ititnerary .."

5.times do
    Itinerary.create(
        date: DateTime.now,
        user_id: User.ids.sample,
        activity_id: Activity.ids.sample,
        park_id: Park.ids.sample

    )
end

puts "Done seeding!"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
