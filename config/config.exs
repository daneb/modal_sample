# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :modal_sample,
  ecto_repos: [ModalSample.Repo]

# Configures the endpoint
config :modal_sample, ModalSample.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "//gaCQHfVFQ0QzZAX0czYuqqLvPLSUX5mZ4LaiM3YDrHGve8sMwVAChL1xV0xWbf",
  render_errors: [view: ModalSample.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ModalSample.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# CORS
config :cors_plug,
  origin: ["http://localhost:4000"],
  max_age: 86400,
  methods: ["GET", "POST"]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
