# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Menu.create(name:'Breakfeast')
Menu.create(name:'Lunch')
Menu.create(name:'Dinner')

menus = Menu.all

100.times do
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: Faker::Commerce.price.to_f,
    menu_id: menus.sample.id
  )
end