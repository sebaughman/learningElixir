defmodule BackWeb.Router do
  use BackWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", BackWeb do
    pipe_through :api
  end
end
