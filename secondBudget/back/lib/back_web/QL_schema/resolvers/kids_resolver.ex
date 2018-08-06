defmodule BackWeb.KidsResolver do
    import Ecto.Query

    alias Back.Repo
    alias Back.Kid
    alias Back.User

    #Where you write your resolve functions using ecto's built in functions

    def all_kids(%{user_id: user_id}, _info) do
        query = from Kid,
        where: [user_id: ^user_id]

        kids = Repo.all(query)
        {:ok, kids}
    end

    def kid(%{id: id}, _info) do
        kid = Repo.get(Kid, id)
        {:ok, kid}
    end

    def insert(%{amount_remining: remaining, budget_amount: budget, name: name, user_id: user_id}, _info) do

        changeset = 
            Repo.get(User, user_id)
            |> Ecto.build_assoc( :kids, %{ name: name, budget_amount: budget, amount_remaining: remaining })
            |> Kid.changeset( %{})
        
        case Repo.insert(changeset) do
           {:ok, kid}  -> {:ok, kid}
           {:error, reason} -> IO.inspect(reason)
        end

    end

end