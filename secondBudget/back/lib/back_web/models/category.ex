defmodule Back.Category do
      use BackWeb, :model
      use Ecto.Schema

    schema "categories" do
        field :name, :string
        has_many :transactions, Back.Transaction
 
    end

    def changeset(struct, params \\%{}) do
        struct
        |> cast(params, [:name])
        |>validate_required([:name])
    end
end