defmodule Back.User do
      use BackWeb, :model
      use Ecto.Schema

    schema "users" do
        field :name, :string
        field :email, :string
        field :google_id, :string
        has_many :kids, Back.Kid  

        timestamps()    
    end

    def changeset(struct, params \\%{}) do
        struct
        |> cast(params, [:email])
        |>validate_required([:email])
    end
end