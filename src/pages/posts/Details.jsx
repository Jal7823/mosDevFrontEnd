import { useState } from "react";
import { getOneData } from "../../utils/crud";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Details() {
  const [Post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      try {
        const getData = await getOneData("post/", `${id}/`);
        setPost(getData);
      } catch (e) {
        throw console.log(e);
      }
    };
    data();
  }, []);

  console.log(Post);

  return (
    <div className="h-screen dark:bg-bg-custom-gray dark:text-white ">
      <div className="container-fluid rounded  mt-4 p-4">
        <div className="flex justify-between">
          <h3 className="text-3xl m-2 font-bold">{Post.title}</h3>
          <div className="flex justify-end">
            <Link to="#" onClick={() => window.history.back()}>
              <i
                className="fa fa-arrow-left bg-bg-custom-yellow p-2 rounded-full m-4 sticky bottom-0"
                aria-hidden="true"
              ></i>
            </Link>
          </div>
        </div>
        <span className="text-bg-custom-ligthtext flex justify-end">
          Autor: {Post.author} / {Post.created_at}
        </span>

        <img
          className="w-auto h-1/12 rounded mx-auto"
          src={Post.principal_image}
          alt={Post.title}
        />
        <div
          className="p-4 mt-2"
          dangerouslySetInnerHTML={{ __html: Post.content }}
        />
      </div>
    </div>
  );
}

export default Details;
