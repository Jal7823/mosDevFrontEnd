import { useState, useEffect } from "react";
import { getOneData } from "../../utils/crud";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Details() {
  const [Post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await getOneData("post/", `${id}/`);
        setPost(getData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="dark:bg-bg-custom-gray h-screen dark:text-white">
      <div className="container-fluid rounded mt-4 p-4 dark:bg-bg-custom-gray">
        <div className="flex justify-between dark:bg-bg-custom-gray h-full ">
          <h3 className="text-3xl m-2 font-bold">{Post.title}</h3>
          <div className="flex justify-end dark:bg-bg-custom-gray h-full">
            <Link to="#" onClick={() => window.history.back()}>
              <i
                className="fa fa-arrow-left bg-bg-custom-yellow p-2 rounded-full m-4 sticky bottom-0 "
                aria-hidden="true"
              ></i>
            </Link>
          </div>
        </div>
        <span className="text-bg-custom-ligthtext flex justify-end">
          Autor: {Post.author} / {Post.created_at}
        </span>

        <img
          className="max-h-80 w-screen rounded mx-auto object-cover"
          src={Post.principal_image}
          alt={Post.title}
        />
       <div className="p-4 mt-2 dark:bg-bg-custom-gray max-w-full overflow-x-auto">
  {typeof Post.content === "string" ? (
    <div dangerouslySetInnerHTML={{ __html: Post.content }} />
  ) : null}
</div>
      </div>
    </div>
  );
}

export default Details;
