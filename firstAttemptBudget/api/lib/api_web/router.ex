defmodule ApiWeb.Router do
  use ApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug CORSPlug, [origin: "http://localhost:3000"]
  end

  scope "/" do
    pipe_through :api

     forward "/graphql", Absinthe.Plug,
      schema: ApiWeb.Schema,
      interface: :simple,
      context: %{pubsub: ApiWeb.Endpoint}

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: ApiWeb.Schema,
      interface: :simple,
      context: %{pubsub: ApiWeb.Endpoint}
  end

end
