// PostList.jsx
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/crud";
import Cards from "../../components/Cards";
import Title from "../../components/Title";
import {useParams} from 'react-router-dom'

function PostByCategories() {
  const {name} = useParams()
  const [Post, setPost] = useState([]);

  useEffect(() => {
    const getData = async (name) => {
      try {
        const data = await fetchData(`categories/post-by-category/${name}/`);
        setPost(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData(name);
  }, [name]);


  return (
    <div className="dark:bg-bg-custom-gray h-screen">
      <Title text="Listado de Posts" />
      <div className="flex flex-wrap gap-3 rounded justify-around mx-auto dark:bg-bg-custom-gray">
        {Post.map((el) => (
          <div key={el.id} className="dark:bg-bg-custom-gray h-screen">
            <Cards
              image={el.principal_image}
              id={el.id}
              title={el.title}
              content={el.content}
              author={el.author}
              created_at={el.created_at}
              link={`/details/${el.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostByCategories;
