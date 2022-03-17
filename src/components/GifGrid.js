import React from "react";
import { UseFetchGifs } from "../hooks/UseFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   objectGifs(category).then(setImages);
  // }, [category]);

  const { data: images, loading } = UseFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading ? <h4>Loading...</h4> : null}

      <div className="card-grid">
        <ol>
          {images.map((gif) => (
            <GifGridItem key={gif.id} {...gif} />
          ))}
        </ol>
      </div>
    </>
  );
};
