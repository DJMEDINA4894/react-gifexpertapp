import { useEffect, useState } from "react";
import { GetFetchGifs } from "../helpers/GetFetchGifs";

export const UseFetchGifs = (category) => {
  const [objectGifs, setObjectGifs] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    async function FetchData() {
      const getFetchGifs = await GetFetchGifs(category);

      setObjectGifs({
        data: getFetchGifs,
        loading: false,
      });
    }

    FetchData();
  }, [category]);

  return objectGifs;
};
