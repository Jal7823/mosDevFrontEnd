import { useEffect, useState } from "react";
import fetchData from "../../utils/crud";
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
    <div>
      <Title />
      <div className="flex flex-wrap justify-around">
      {Post.map((el) => (
        <div key={el.id} className="dark:bg-bg-customgray  ">
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
