defmodule ApiWeb.MoneyManagementResolver do
alias Api.MoneyManagement
alias Api.Repo
alias Api.MoneyManagement.Budget

  import Ecto.Query

  def user_budgets(user_id, _info) do
       budgets =  Repo.all(from b in Budget, select: b, where: b.user_id == ^user_id)
        {:ok, budgets}
  end
end