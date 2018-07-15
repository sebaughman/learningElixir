defmodule ApiWeb.Router do
  use ApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", ApiWeb do
    pipe_through :api

 
  end
     forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: ApiWeb.Schema,
      interface: :simple,
      context: %{pubsub: ApiWeb.Endpoint}
end
