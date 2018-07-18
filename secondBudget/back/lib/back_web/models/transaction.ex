defmodule Back.Tansaction do
    use BackWeb :model

    schema "users" do
        field :transaction_amount, :decimal
        belongs_to :kid, Back.Kid 
        belongs_to :category, Back.Category 

        timestamps()    
    end

    def changeset(struct, params \\%{}) do
        struct
        |> cast(params, [:transaction_amount])
        |>validate_required([:transaction_amount])
    end
end