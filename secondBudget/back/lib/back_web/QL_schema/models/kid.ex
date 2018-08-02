defmodule Back.Kid do
  use BackWeb, :model
  use Ecto.Schema

    schema "kids" do
        field :name, :string
        field :budget_amount, :decimal
        belongs_to :user, Back.User
        has_many :transactions, Back.Transaction

        timestamps()    
    end

    def changeset(struct, params \\%{}) do
        struct
        |> cast(params, [:name, :budget_amount])
        |> validate_required([:name, :budget_amount])
    end
end