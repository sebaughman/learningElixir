defmodule Api.MoneyManagementTest do
  use Api.DataCase

  alias Api.MoneyManagement

  describe "budgets" do
    alias Api.MoneyManagement.Budget

    @valid_attrs %{amount: "120.5", name: "some name", user_id: 42}
    @update_attrs %{amount: "456.7", name: "some updated name", user_id: 43}
    @invalid_attrs %{amount: nil, name: nil, user_id: nil}

    def budget_fixture(attrs \\ %{}) do
      {:ok, budget} =
        attrs
        |> Enum.into(@valid_attrs)
        |> MoneyManagement.create_budget()

      budget
    end

    test "list_budgets/0 returns all budgets" do
      budget = budget_fixture()
      assert MoneyManagement.list_budgets() == [budget]
    end

    test "get_budget!/1 returns the budget with given id" do
      budget = budget_fixture()
      assert MoneyManagement.get_budget!(budget.id) == budget
    end

    test "create_budget/1 with valid data creates a budget" do
      assert {:ok, %Budget{} = budget} = MoneyManagement.create_budget(@valid_attrs)
      assert budget.amount == Decimal.new("120.5")
      assert budget.name == "some name"
      assert budget.user_id == 42
    end

    test "create_budget/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = MoneyManagement.create_budget(@invalid_attrs)
    end

    test "update_budget/2 with valid data updates the budget" do
      budget = budget_fixture()
      assert {:ok, budget} = MoneyManagement.update_budget(budget, @update_attrs)
      assert %Budget{} = budget
      assert budget.amount == Decimal.new("456.7")
      assert budget.name == "some updated name"
      assert budget.user_id == 43
    end

    test "update_budget/2 with invalid data returns error changeset" do
      budget = budget_fixture()
      assert {:error, %Ecto.Changeset{}} = MoneyManagement.update_budget(budget, @invalid_attrs)
      assert budget == MoneyManagement.get_budget!(budget.id)
    end

    test "delete_budget/1 deletes the budget" do
      budget = budget_fixture()
      assert {:ok, %Budget{}} = MoneyManagement.delete_budget(budget)
      assert_raise Ecto.NoResultsError, fn -> MoneyManagement.get_budget!(budget.id) end
    end

    test "change_budget/1 returns a budget changeset" do
      budget = budget_fixture()
      assert %Ecto.Changeset{} = MoneyManagement.change_budget(budget)
    end
  end

  describe "transactions" do
    alias Api.MoneyManagement.Transaction

    @valid_attrs %{budget_id: 42, day: 42, month: 42, transactionAmount: "120.5", user_id: 42, week: 42, year: 42}
    @update_attrs %{budget_id: 43, day: 43, month: 43, transactionAmount: "456.7", user_id: 43, week: 43, year: 43}
    @invalid_attrs %{budget_id: nil, day: nil, month: nil, transactionAmount: nil, user_id: nil, week: nil, year: nil}

    def transaction_fixture(attrs \\ %{}) do
      {:ok, transaction} =
        attrs
        |> Enum.into(@valid_attrs)
        |> MoneyManagement.create_transaction()

      transaction
    end

    test "list_transactions/0 returns all transactions" do
      transaction = transaction_fixture()
      assert MoneyManagement.list_transactions() == [transaction]
    end

    test "get_transaction!/1 returns the transaction with given id" do
      transaction = transaction_fixture()
      assert MoneyManagement.get_transaction!(transaction.id) == transaction
    end

    test "create_transaction/1 with valid data creates a transaction" do
      assert {:ok, %Transaction{} = transaction} = MoneyManagement.create_transaction(@valid_attrs)
      assert transaction.budget_id == 42
      assert transaction.day == 42
      assert transaction.month == 42
      assert transaction.transactionAmount == Decimal.new("120.5")
      assert transaction.user_id == 42
      assert transaction.week == 42
      assert transaction.year == 42
    end

    test "create_transaction/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = MoneyManagement.create_transaction(@invalid_attrs)
    end

    test "update_transaction/2 with valid data updates the transaction" do
      transaction = transaction_fixture()
      assert {:ok, transaction} = MoneyManagement.update_transaction(transaction, @update_attrs)
      assert %Transaction{} = transaction
      assert transaction.budget_id == 43
      assert transaction.day == 43
      assert transaction.month == 43
      assert transaction.transactionAmount == Decimal.new("456.7")
      assert transaction.user_id == 43
      assert transaction.week == 43
      assert transaction.year == 43
    end

    test "update_transaction/2 with invalid data returns error changeset" do
      transaction = transaction_fixture()
      assert {:error, %Ecto.Changeset{}} = MoneyManagement.update_transaction(transaction, @invalid_attrs)
      assert transaction == MoneyManagement.get_transaction!(transaction.id)
    end

    test "delete_transaction/1 deletes the transaction" do
      transaction = transaction_fixture()
      assert {:ok, %Transaction{}} = MoneyManagement.delete_transaction(transaction)
      assert_raise Ecto.NoResultsError, fn -> MoneyManagement.get_transaction!(transaction.id) end
    end

    test "change_transaction/1 returns a transaction changeset" do
      transaction = transaction_fixture()
      assert %Ecto.Changeset{} = MoneyManagement.change_transaction(transaction)
    end
  end
end
