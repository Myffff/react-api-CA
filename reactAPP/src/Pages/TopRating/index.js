import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent";
import CustomPagination from "../../components/pagination/index";

const TopRating = () => {
  const [page,setPage] = useState(1);
  const [content, setContent] = useState([]);

  const handleChange = (e, value) => {
    setPage(value)
  }

  const fetchRating = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    setContent(data.results);
  };


  useEffect(() => {
    fetchRating();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Top Rating</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type='movie'
              vote_average={c.vote_average}
            />
          ))}
      </div>

      <CustomPagination handleChange={handleChange} />
    </div>
  );
};

export default TopRating;