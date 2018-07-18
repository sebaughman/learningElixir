 defmodule BackWeb.Schema do
  use Absinthe.Schema
  import_types BackWeb.Schema.Types

  alias  BackWeb.KidsResolver
  
  
  query do

    field :all_kids, list_of(:kid) do 
      arg :user_id, non_null(:id)
      resolve &KidsResolver.all_kids/2
    end

  end


      
  end