defmodule BackWeb.Router do
  use BackWeb, :router


  pipeline :api do
    plug :accepts, ["json"]
    plug CORSPlug, [origin: "http://localhost:3000"]
  end

  scope "/"  do
    pipe_through :api

    forward "/graphql", Absinthe.Plug,
      schema: BackWeb.Schema,
      interface: :simple,
      context: %{pubsub: BackWeb.Endpoint}

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: BackWeb.Schema,
      interface: :simple,
      context: %{pubsub: BackWeb.Endpoint}
  end
end
