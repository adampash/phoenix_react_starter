defmodule Mix.Tasks.Js.Digest do
  use Mix.Task

  def run(args) do
    Mix.Shell.IO.cmd "NODE_ENV=production yarn start"
    :ok = Mix.Tasks.Phoenix.Digest.run(args)
  end
end
