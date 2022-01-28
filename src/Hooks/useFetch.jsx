import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch failed");
        }
        return response.json();
      })
      .then((responseData) => {
        const { data: details } = responseData;
        const dataObj = {
          data:[
            {
              title: "New Cases",
              count: details.local_new_cases,
              color:'#c62828'
            },
            {
              title: "New Deaths",
              count: details.local_new_deaths,
              color:'#e91e63'
            },
            
            {
              title: "Total Active Cases",
              count: details.local_active_cases,
              color:'#00e676'
            },
            {
              title: "Total Deaths",
              count: details.local_deaths,
              color:'#03a9f4'
            }
          ],
          time:details.update_date_time
        }
        setData(dataObj);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
