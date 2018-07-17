defmodule Discuss.User do
    use Discuss.Web, :model

    schema "users" do
        field :email, :string
        field :provider, :string
        field :token, :string

        #timestamps() --- forgot to add before running ecto.mirgrate. need to run it again
    end

    def changeset(struct, params \\%{}) do
        struct
        |> cast(params, [:email, :provider, :token])
        |>validate_required([:email, :provider, :token])
    end
end