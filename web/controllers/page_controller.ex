defmodule PhoenixReactStarter.PageController do
  use PhoenixReactStarter.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
