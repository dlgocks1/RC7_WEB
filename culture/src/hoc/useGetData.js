import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGetData = (url) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          await axios(url)
            .then(res => {
              setData(res.data);
            })
            .finally(() => {
              setIsLoading(true);
            });
        } catch (error) {
            setError(error);
            throw new Error(error);
        }
      };
      if (!isLoading) {
        fetchData();
      }
    }, [url]);
  
    return { data, error, isLoading };
}

export default useGetData;