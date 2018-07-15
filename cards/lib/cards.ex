defmodule Cards do
  @moduledoc """
    Provides methods for creating and handling a deckof cards
  """

  @doc """
  Returns a list of strings representing a deck of cards
  """
  def create_deck do
    values = ["Ace", "Two", "Three", "Four", "Five"]
    suits = ["Spades", "Clubs", "Hearts", "Diamonds"]

    for suit <- suits, value <- values do
        "#{value} of #{suit}"
    end

  end

  def shuffle(deck) do
    Enum.shuffle(deck)
  end

  @doc """
    Determines whether a deck contains a given card.

  ## Examples
      iex> deck = Cards.create_deck
      iex> Cards.contains?(deck, "Ace of Spades")
      true
      
  """
  def contains?(deck, card) do
    Enum.member?(deck, card)
  end

  @doc """
    Divides a deck into a hand and the remainder of the deck.
    The `hand_size` argument indicates how many cards should be in the hand.
    returns a tubple `{hand, rest_of_deck}`

  ## Examples

      iex> deck = Cards.create_deck
      iex> {hand, rest_of_deck} = Cards.deal(deck, 1)
      iex> hand
      ["Ace of Spades"]

  """
  def deal(deck, hand_size) do
    Enum.split(deck, hand_size)
  end

  def save(deck, filename) do
    bianary = :erlang.term_to_binary(deck)
    File.write(filename, bianary)
  end

  def load(filename) do
      # this uses pattern matching. The result of File.read(filename) is a tuple with the first value either :ok or :error. 
      # case statements are if statements
      # in the case of the first value being :ok, elixir uses pattern matching to match the first value and then since the
      # second value is a variable on the left and raw data on the right, assign the raw data to the variable.
      # then call what is on the right of the arrow

      # the underscore says, I know there is supposed to be something here, but I dont need it. 
    case File.read(filename) do
      {:ok, binary} -> :erlang.binary_to_term(binary)
      {:error, _reason} -> "That file does not exist"
    end
  end

  def create_hand(hand_size) do

    # the pipe operator expects the next function the FIRST argument to be the returned data from the previous function

    Cards.create_deck
    |> Cards.shuffle
    |> Cards.deal(hand_size)

  end

end
