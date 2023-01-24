100.times do
  Goal.create(
    target: Faker::Book.title,
    start_time: Faker::Time.backward(days: 14, period: :evening),
    end_time: Faker::Time.forward(days: 23, period: :morning),
    img: "https://images.unsplash.com/photo-1674507218650-edc7eae7848b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3456&q=80",
    complete: Faker::Boolean.boolean,
    author: Faker::FunnyName.name
  )
end