defmodule Back.Repo.Migrations.AddCategoriesTable do
  use Ecto.Migration

  def change do
    create table(:categories) do
      add :name, :string
    end
  end
end
