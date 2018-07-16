defmodule Discuss.TopicController do
    use Discuss.Web, :controller

    alias Discuss.Topic

    def new(conn, _params) do
        struct = %Topic{}
        params = %{}
        changeset = Topic.changeset(struct, params)

        render(conn, "new.html", changeset: changeset)
    end

    def create(conn, params) do
        %{"topic" => topic} = params
        changeset = Topic.changeset(%Topic{}, topic)
        case Repo.insert(changeset) do
            {:ok, post} -> 
                conn
                |> put_flash(:info, "Topic Created")
                |> redirect(to: topic_path(conn, :index))
            {:error, changeset} -> 
                render(conn, "new.html", changeset: changeset)
        end
    end

    def index(conn, _params) do
        topics = Repo.all(Topic)
        render(conn, "index.html", topics: topics)
    end
end
