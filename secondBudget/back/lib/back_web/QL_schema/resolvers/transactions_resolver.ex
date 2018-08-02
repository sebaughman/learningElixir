defmodule BackWeb.TransactionsResolver do
    import Ecto.Query

    alias Back.Repo
    alias Back.Kid
    alias Back.Transaction

    def all_transactions(%{kid_id: kid_id}, _info) do
        query = from Transaction,
        where: [kid_id: ^kid_id]

        trasnactions = Repo.all(query)
        {:ok, trasnactions}
    end

end