// Index.jsx
import { useEffect, useState } from "react";
import SecondCards from "../components/SecondCards";
//utils
import { fetchData } from "../utils/crud";

//components
import Title from "../components/Title";
import Sliders from "../components/Sliders";

//pages

function Index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      console.log("Fetching data...");
      try {
        const data = await fetchData("post/");
        const lastThreePosts = data.slice(-3);
        setPosts(lastThreePosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="dark:bg-bg-custom-gray h-screen">
      <Sliders />
      <Title text="Ultimos Post" />

      <div className="flex flex-wrap dark:bg-bg-custom-gray ">
        <div className="flex flex-col items-center  dark:bg-bg-custom-gray mt-2 p-6 w-screen ">
          {posts.map((el) => (
            <div key={el.id} className="dark:bg-bg-custom-gray  ">
              <SecondCards
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
    </div>
  );
}

export default Index;
