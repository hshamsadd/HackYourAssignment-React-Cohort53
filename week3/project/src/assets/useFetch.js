import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
    //url is the dependency here because if the url changes we want to refetch the data
  }, [url]);

  return { data, loading };
}
