defmodule Api.MoneyManagement.Budget do
  use Ecto.Schema
  import Ecto.Changeset


  schema "budgets" do
    field :amount, :decimal
    field :name, :string
    field :user_id, :id

    timestamps()
  end

  @doc false
  def changeset(budget, attrs) do
    budget
    |> cast(attrs, [:name, :amount, :user_id])
    |> validate_required([:name, :amount, :user_id])
  end
end
