defmodule Back.Repo.Migrations.AddKidsTable do
  use Ecto.Migration

  def change do
    create table(:kids) do
      add :name, :string
      add :budget_amount, :decimal
      add :user_id, references(:users)

      timestamps()
    end
  end
end
