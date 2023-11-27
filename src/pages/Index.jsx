// Index.jsx
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
//utils
import { fetchData } from "../utils/crud";

//components
import Title from "../components/Title";
import Sliders from "../components/Sliders";
import SecondNavbar from "../components/SecondNavbar";

//pages

function Index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      console.log("Fetching data...");
      try {
        const data = await fetchData("post/");
        console.log("Data fetched:", data);
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

      <div className="flex  flex-wrap dark:bg-bg-custom-gray">
        <div className="flex flex-wrap justify-around dark:bg-bg-custom-gray mt-4 p-6 w-screen">
          {posts.map((el) => (
            <div key={el.id} className="dark:bg-bg-custom-gray  ">
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
        <div className="w-1/6">
          <SecondNavbar />
        </div>
      </div>
    </div>
  );
}

export default Index;
