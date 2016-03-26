ExUnit.start

Mix.Task.run "ecto.create", ~w(-r PhoenixReactStarter.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r PhoenixReactStarter.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(PhoenixReactStarter.Repo)

