# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Back.Repo.insert!(%Back.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.


# Back.Repo.insert!(%Back.User{name: "Sarah", email: "srhbghmn@gmail.com", google_id: "google"})
# Back.Repo.insert!(%Back.User{name: "Chris", email: "chris@gmail.com", google_id: "google"})
# Back.Repo.insert!(%Back.Kid{name: "Maddie", budget_amount: 150.00, amount_remaining: 90.00, user_id: 1})
# Back.Repo.insert!(%Back.Kid{name: "Ben", budget_amount: 100.00, amount_remaining: 80.00, user_id: 1})
# Back.Repo.insert!(%Back.Kid{name: "Kelsey", budget_amount: 200.00, amount_remaining: 190.00, user_id: 2})

# Back.Repo.insert!(%Back.Category{type: "fun", })
# Back.Repo.insert!(%Back.Category{type: "food", })

# Back.Repo.insert!(%Back.Transaction{kid_id: 1, transaction_amount: 50.00, category_id: 1})
# Back.Repo.insert!(%Back.Transaction{kid_id: 2, transaction_amount: 20.00, category_id: 1})
# Back.Repo.insert!(%Back.Transaction{kid_id: 3, transaction_amount: 10.00, category_id: 2})
# Back.Repo.insert!(%Back.Transaction{kid_id: 1, transaction_amount: 10.00, category_id: 2})
