import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const apiData = response?.data;
      console.log("res", response);
      if (response.status === 200) {
        setData(apiData);
        setIsLoading(false);
      }
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [url]);

  return { isLoading, data, error };
};
export default useFetch;
