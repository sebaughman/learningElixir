defmodule Api.Repo.Migrations.CreateTransactions do
  use Ecto.Migration

  def change do
    create table(:transactions) do
      add :budget_id, :integer
      add :user_id, :integer
      add :transactionAmount, :decimal
      add :month, :integer
      add :day, :integer
      add :week, :integer
      add :year, :integer

      timestamps()
    end

  end
end
