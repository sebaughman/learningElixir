# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Api.Repo.insert!(%Api.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.


#Api.Repo.insert!(%Api.Accounts.User{name: "Sarah", email: "srhbghmn@gmail.com", password: "password"})
#Api.Repo.insert!(%Api.Accounts.User{name: "Chris", email: "chris@gmail.com", password: "ChrisPassword"})
#Api.Repo.insert!(%Api.MoneyManagement.Budget{name: "food", amount: 150.00, user_id: 1})
#Api.Repo.insert!(%Api.MoneyManagement.Budget{name: "gas", amount: 100.00, user_id: 1})
#Api.Repo.insert!(%Api.MoneyManagement.Budget{name: "fun", amount: 200.00, user_id: 2})

#Api.Repo.insert!(%Api.MoneyManagement.Transaction{budget_id: 1, user_id: 1, transactionAmount: 50.00, month: 6, day: 5, week: 1, year: 2018})
#Api.Repo.insert!(%Api.MoneyManagement.Transaction{budget_id: 1, user_id: 1, transactionAmount: 20.00, month: 6, day: 6, week: 1, year: 2018})

#Api.Repo.insert!(%Api.MoneyManagement.Transaction{budget_id: 1, user_id: 1, transactionAmount: 10.00, month: 6, day: 8, week: 2, year: 2018})