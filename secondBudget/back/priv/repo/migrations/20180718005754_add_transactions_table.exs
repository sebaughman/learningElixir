defmodule Back.Repo.Migrations.AddTransactionsTable do
  use Ecto.Migration

  def change do
    create table(:transactions) do
      add :transaction_amount, :decimal
      add :kid_id, references(:kids)
      add :category_id, references(:categories)

      timestamps()
    end
  end
end