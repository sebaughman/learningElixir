defmodule BackWeb.Schema.Types do
  use Absinthe.Schema.Notation
  use Absinthe.Ecto, repo: Back.Repo

  #graphql requires types. ecto and absinthe makes this easier with the assoc function 
  #in js you use the graqhql TYPE functions but ecto does not require it

  object :user do
    field :id, :id
    field :name, :string
    field :email, :string
    field :google_id, :string

    field :kids, list_of(:kid), resolve: assoc(:kids)
  end

  object :kid do
    field :id, :id
    field :name, :string
    field :budget_amount, :float
    field :user_id, :id

    field :transactions, list_of(:transaction), resolve: assoc(:transactions)
  end

  object :transaction do
    field :id, :id
    field :transaction_amount, :float
    field :kid_id, :id
    field :category, :category, resolve: assoc(:category)
  end

   object :category do
    field :id, :id
    field :type, :string

    field :transactions, list_of(:transaction), resolve: assoc(:transactions)
  end

end