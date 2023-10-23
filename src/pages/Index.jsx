// Index.jsx
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
//utils
import fetchData from "../utils/crud";

//components
import Title from "../components/Title";
import Sliders from '../components/Sliders'

//pages



function Index() {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData("post/");
        const lastThreePosts = data.slice(-3);
        setPosts(lastThreePosts);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <div className="dark:bg-bg-customgray">
      <Sliders />
      <Title text="Ultimos Post" />
      <hr className="w-9/12 mx-auto" />
      <div className="flex flex-wrap justify-around dark:bg-bg-custumgray mt-4 p-6">
        {posts.map((el) => (
          <div key={el.id} className="dark:bg-bg-customgray  ">
            <Cards
              image={el.principal_image}
              id={el.id}
              title={el.title}
              content={el.content}
              author={el.author}
              created_at={el.created_at}
              link='https://www.google.com'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
