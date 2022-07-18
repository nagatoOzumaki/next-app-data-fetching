/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const UsersApiUrl = 'http://localhost:4000/users/';
const PostsApiUrl = 'http://localhost:4000/posts/';

const usersApi = {
  getAllUsers: async () => {
    const res = await axios.get(UsersApiUrl);
    const data = await res.data;
    return data;
  },
  getUser: async (userId: string) => {
    const res = await axios.get(UsersApiUrl + userId);
    const data = await res.data;
    return data;
  },
  post: (body: Object) => {
    return axios.post(UsersApiUrl, body);
  },
};
const postsApi = {
  getAllPosts: async () => {
    const res = await axios.get(PostsApiUrl);
    const data = await res.data;
    return data;
  },
  getPost: async (userId: string) => {
    const res = await axios.get(PostsApiUrl + userId);
    const data = await res.data;
    return data;
  },
  post: (body: Object) => {
    return axios.post(PostsApiUrl, body);
  },
};
export { usersApi, postsApi };
