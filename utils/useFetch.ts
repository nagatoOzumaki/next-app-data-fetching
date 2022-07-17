/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import useSwr from 'swr';

type ApiUrl = string;
const fetcher = async (url: ApiUrl) => {
  return axios.get(url).then((res) => res.data);
};
const useFetch = (url: ApiUrl) => {
  const { data, error } = useSwr(url, fetcher);
  console.log(data);
  return { data, error };
};

export default useFetch;
