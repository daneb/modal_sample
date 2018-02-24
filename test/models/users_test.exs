defmodule ModalSample.UsersTest do
  use ModalSample.ModelCase

  alias ModalSample.Users

  @valid_attrs %{name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Users.changeset(%Users{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Users.changeset(%Users{}, @invalid_attrs)
    refute changeset.valid?
  end
end
