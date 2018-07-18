defmodule Back.User do
    use BackWeb :model

    schema "users" do
        field :name, :string
        has_many :transactions, Back.Transaction 

        timestamps()    
    end

    def changeset(struct, params \\%{}) do
        struct
        |> cast(params, [:name])
        |>validate_required([:name])
    end
end