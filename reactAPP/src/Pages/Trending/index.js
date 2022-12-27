import "./Trending.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent";
import { getTrending } from "../../api/movie-api";

const Trending = () => {
  const [page] = useState(1);
  const [content, setContent] = useState([]);

  useEffect(() => {
    getTrending().then((result) => {
      setContent(result);
    });
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default Trending;
