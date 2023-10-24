import { useEffect, useState } from "react";
import {fetchData} from "../../utils/crud";
import Cards from "../../components/Cards";
import Title from "../../components/Title";


function PostList() {
  const [Post, setPost] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData("post/");
        setPost(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <div className="dark:bg-bg-custom-gray h-screen" >
      <Title text='Listado de Posts' />
      <div className="flex flex-wrap rounded justify-around">
      {Post.map((el) => (
        <div key={el.id} className="dark:bg-bg-custom-gray  ">
          <Cards
            image={el.principal_image}
            id={el.id}
            title={el.title}
            content={el.content}
            author={el.author}
            created_at={el.created_at}
          />
        </div>
      ))}
    </div>
    </div>
  );
}

export default PostList;
