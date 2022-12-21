// import axios from "axios";
import { useEffect, useState } from "react";
import PeopleContent from "../../components/PeopleContent";
import CustomPagination from "../../components/pagination/index";
import { getPeople } from "../../api/movie-api";

const People = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const handleChange = (e, value) => {
    setPage(value);
  };

  useEffect(() => {
    getPeople().then((result) => {
      setContent(result);
    });
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">People</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <PeopleContent
              key={c.id}
              id={c.id}
              poster={c.profile_path}
              name={c.name}
            />
          ))}
      </div>

      <CustomPagination handleChange={handleChange} />
    </div>
  );
};

export default People;
