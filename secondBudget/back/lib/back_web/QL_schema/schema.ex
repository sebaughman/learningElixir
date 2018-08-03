 defmodule BackWeb.Schema do
  use Absinthe.Schema
  import_types BackWeb.Schema.Types

  alias  BackWeb.KidsResolver
  alias  BackWeb.TransactionsResolver

  #Where you define your types / queries / mutations for graphQL
  
  
  query do

    field :all_kids, list_of(:kid) do 
      arg :user_id, non_null(:id)
      resolve &KidsResolver.all_kids/2
    end

    field :all_transactions, list_of(:transaction) do
      arg :kid_id, non_null(:id)
      resolve &TransactionsResolver.all_transactions/2
    end

    field :kid, :kid do
      arg :id, non_null(:id)
      resolve &KidsResolver.kid/2
    end
    
  end


  end