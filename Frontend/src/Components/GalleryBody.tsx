import img from "./Images/Hero.jpg";
import img2 from "./Images/Hero2.jpg";
import "../Global css/util.css";
import "./Css/GalleryBody.css";

import { createSignal, For } from "solid-js";

const GalleryBody = () => {
  const [photos, setPhotos] = createSignal([
    img,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
  ]);

  const [photodes, setPhotodes] = createSignal([
    "1st Image",
    "2nd Image",
    "3rd Imgage",
    "4th Imgage",
    "5th Imgage",
    "6th Imgage",
    "7th Imgage",
  ]);

  return (
    <div class="container">
      <div class="gallery_wrapper">
        <ul class="photo_section">
          <For each={photos()}>
            {(img, i) => (
              <li class="Photolist">
                <img class="photo" src={img} alt="img" />
                <div class="imageDescription">{photodes()[1]}</div>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
};

export default GalleryBody;
