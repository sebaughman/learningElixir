#build your graphQL schema here

defmodule ApiWeb.Schema do
  use Absinthe.Schema

  alias ApiWeb.AccountsResolver
  alias ApiWeb.MoneyManagementResolver

  object :user do 
    field :id, :id
    field :name, :string
    field :email, :string
  end

  object :budget do 
    field :name, :string
    field :amount, :float
    field :user_id, :id
    filed :id, :id
  end

   object :transaction do 
    field :transactionAmount, :float
    field :budget, :id
    field :user_id, :id
    field :id, :id
    field :month, :integer
    field :day, :integer
    field :week, :integer
    field :year, :integer
  end

    
  query do
    field :all_users, list_of(:user) do 
      resolve &AccountsResolver.all_users/3
    end
    field :user_budgets, list_of(:budget) do 
      arg :user_id, non_null(:integer)
      resolve &MoneyManagementResolver.user_budgets/2
    end
  end
end