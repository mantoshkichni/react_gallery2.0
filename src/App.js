import { Link } from "@react-navigation/native";
import axios from "axios";

import { saveAs } from "file-saver";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "./container/Cateogry";
import "./styles.css";

export default function App() {
  const [photoState, setphotoState] = useState();
  const downloadImage = (image_url) => {
    saveAs(image_url, "image.jpg"); // Put your image url here.
  };
  const getThePhotos = async (data) => {
    console.log(data);
    const photos = await axios.get(
      `https://api.unsplash.com/search/photos?query=${data}&client_id=yCbGXqZc75nV4H1HPLsI0qUTLO3CzjlHFDS4CVgdReM&page=${Math.floor(
        Math.random() * 10 + 1
      )}&per_page=30&orientation=portrait`
    );
    console.log(photos);
    console.log(photos.data.results);
    setphotoState(photos.data.results);
  };
  const getThePhotosFromForm = (e) => {
    e.preventDefault();
    getThePhotos(e.target.name.value);
  };
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-light sticky-top">
        <div class="container-fluid">
          <h1 class="navbar-brand" href="#">
            Go Gallery
          </h1>

          <form onSubmit={getThePhotosFromForm} class="d-flex" role="search">
            <input
              autocomplete="off"
              name="name"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <a href="#newItem">
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </a>
          </form>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <Category category="man" getThePhotos={getThePhotos} />
          <Category category="bike" getThePhotos={getThePhotos} />
          <Category category="car" getThePhotos={getThePhotos} />
          <Category category="boy" getThePhotos={getThePhotos} />
          <Category category="model" getThePhotos={getThePhotos} />
          <Category category="india" getThePhotos={getThePhotos} />
          <Category category="america" getThePhotos={getThePhotos} />
          <Category category="computer" getThePhotos={getThePhotos} />
          <Category category="mobile" getThePhotos={getThePhotos} />
          <Category category="iphone" getThePhotos={getThePhotos} />
          <Category category="iceland" getThePhotos={getThePhotos} />
          <Category category="japan" getThePhotos={getThePhotos} />

          <Category category="wild animal" getThePhotos={getThePhotos} />
          <Category category="pets" getThePhotos={getThePhotos} />
          <Category category="river" getThePhotos={getThePhotos} />
          <Category category="london" getThePhotos={getThePhotos} />
          <Category category="mumbai" getThePhotos={getThePhotos} />
          <Category category="paris" getThePhotos={getThePhotos} />

          <Category category="desert" getThePhotos={getThePhotos} />
          <Category category="clouds" getThePhotos={getThePhotos} />
          {/* <Category category="science" getThePhotos={getThePhotos} /> */}
          <Category category="space" getThePhotos={getThePhotos} />
          <Category category="bikini" getThePhotos={getThePhotos} />
          <Category category="sea" getThePhotos={getThePhotos} />
          {/* <Category category="fashion" getThePhotos={getThePhotos} /> */}
          <Category category="grassland" getThePhotos={getThePhotos} />
          <Category category="girl" getThePhotos={getThePhotos} />
          <Category category="mountain" getThePhotos={getThePhotos} />
          <Category category="gods" getThePhotos={getThePhotos} />
          <Category category="france" getThePhotos={getThePhotos} />
        </div>
      </div>
      <div id="newItem" className=" container">
        <div className="row">
          {photoState?.map((item) => {
            return (
              <div className="col-3 img ">
                <button onClick={() => downloadImage(item.links.download)}>
                  <img
                    className="img-thumbnail rounded float-start "
                    img-thumbnail
                    src={item.urls.small}
                  ></img>
                  <i class="bi bi-download"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
