defmodule Back.Repo.Migrations.AddUsersTable do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string
      add :email, :string
      add :google_id, :string

      timestamps()
    end
  end
end
