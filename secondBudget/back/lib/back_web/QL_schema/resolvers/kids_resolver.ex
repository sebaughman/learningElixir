defmodule BackWeb.KidsResolver do
    import Ecto.Query

    alias Back.Repo
    alias Back.Kid

    #Where you write your resolve functions using ecto's built in functions

    def all_kids(%{user_id: user_id}, _info) do
        query = from Kid,
        where: [user_id: ^user_id]

        kids = Repo.all(query)
        {:ok, kids}
    end

end