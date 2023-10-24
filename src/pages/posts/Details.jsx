import { useState } from "react";
import { getOneData } from "../../utils/crud";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <h3 className="text-3xl m-2 font-bold">{Post.title}</h3>
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
