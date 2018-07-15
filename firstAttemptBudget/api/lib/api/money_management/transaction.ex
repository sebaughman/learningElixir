defmodule Api.MoneyManagement.Transaction do
  use Ecto.Schema
  import Ecto.Changeset


  schema "transactions" do
    field :budget_id, :id
    field :day, :integer
    field :month, :integer
    field :transactionAmount, :decimal
    field :user_id, :id
    field :week, :integer
    field :year, :integer

    timestamps()
  end

  @doc false
  def changeset(transaction, attrs) do
    transaction
    |> cast(attrs, [:budget_id, :user_id, :transactionAmount, :month, :day, :week, :year])
    |> validate_required([:budget_id, :user_id, :transactionAmount, :month, :day, :week, :year])
  end
end
