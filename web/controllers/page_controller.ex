defmodule ModalSample.PageController do
  use ModalSample.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
