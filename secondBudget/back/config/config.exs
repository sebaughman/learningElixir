# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :back,
  ecto_repos: [Back.Repo]

# Configures the endpoint
config :back, BackWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "48eGiZ6W2u4uWDvyiSmBitCFcuUjRe9w7gO692LgHm0WsJkb5uBzxMX9AapcaQVy",
  render_errors: [view: BackWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Back.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
