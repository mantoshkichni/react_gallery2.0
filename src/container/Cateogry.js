import axios from "axios";
import { useEffect, useState } from "react";
import "./Cateogry.css";
export const Category = (props) => {
  const [photos, setphotos] = useState();
  useEffect(() => {
    const getThumbnail = async (category) => {
      const data = await axios.get(
        `https://api.unsplash.com/search/photos?query=${category}&client_id=yCbGXqZc75nV4H1HPLsI0qUTLO3CzjlHFDS4CVgdReM&page=${Math.floor(
          Math.random() * 10 + 1
        )}`
      );
      console.log(data.data.results[0].urls.thumb);
      setphotos(data.data.results[0].urls.thumb);
    };
    getThumbnail(props.category);
  }, []);
  return (
    <div className="col col-3 mb-2 ">
      <a href="#newItem">
        <button
          className="btn btn-primary"
          onClick={() => props.getThePhotos(props.category)}
        >
          <figure class="figure text-uppercase">
            <img class="img-thumbnail img" src={photos}></img>
            <figcaption class="figure-caption text-white fs-5">
              {props.category}
            </figcaption>
          </figure>
        </button>
      </a>
    </div>
  );
};
