defmodule Api.Repo.Migrations.CreateBudgets do
  use Ecto.Migration

  def change do
    create table(:budgets) do
      add :name, :string
      add :amount, :decimal
      add :user_id, :integer

      timestamps()
    end

  end
end
