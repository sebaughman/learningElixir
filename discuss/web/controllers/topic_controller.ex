defmodule Discuss.TopicController do
    use Discuss.Web, :controller

    alias Discuss.Topic

    plug Discuss.Plugs.RequireAuth when action in [:new, :create, :edit, :update, :delete]
    plug :check_topic_owner when action in [:update, :edit, :delete]

    def new(conn, _params) do
        struct = %Topic{}
        params = %{}
        changeset = Topic.changeset(struct, params)

        render(conn, "new.html", changeset: changeset)
    end

    def show(conn, %{"id" => topic_id}) do
        topic = Repo.get!(Topic, topic_id)
        render(conn, "show.html", topic: topic)
    end

    def create(conn, params) do
        %{"topic" => topic} = params
        changeset = 
            conn.assigns.user #pass the current user to build_assoc
            |> build_assoc(:topics) #creates a topics struct (:topics) from the topic model with the user_id
            |> Topic.changeset(topic) 

        case Repo.insert(changeset) do
            {:ok, _topic} -> 
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

    def edit(conn, params) do 
        %{"id" => topic_id} = params

        topic = Repo.get(Topic, topic_id)
        changeset = Topic.changeset(topic)

        render(conn, "edit.html", changeset: changeset, topic: topic)
    end

    def update(conn, params) do
        %{"topic" => topic, "id" => topic_id} = params
        old_topic = Repo.get(Topic, topic_id) 
        changeset = Topic.changeset(old_topic, topic)
       
        case Repo.update(changeset) do
            {:ok, _topic} -> 
                conn
                |> put_flash(:info, "Topic Updated")
                |> redirect(to: topic_path(conn, :index))
            {:error, changeset} -> 
                render(conn, "edit.html", changeset: changeset, topic: old_topic)
        end
    end

    def delete(conn, params) do
        %{"id" => topic_id} = params
        
        Repo.get!(Topic, topic_id) |> Repo.delete! 

        conn
        |> put_flash(:info, "Topic Deleted")
        |> redirect(to: topic_path(conn, :index))
    end

    def check_topic_owner(conn, _params) do
        %{params: %{"id" => topic_id}} = conn

        if Repo.get(Topic, topic_id).user_id == conn.assigns.user.id do
            conn
        else
            conn
            |> put_flash(:error, "Not authorized")
            |> redirect(to: topic_path(conn, :index))
            |> halt()

        end
    end
end

