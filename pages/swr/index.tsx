/* eslint-disable import/no-extraneous-dependencies */
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';

import { ChangeEvent, FormEvent, useState } from 'react';
import { mutate } from 'swr';
import Post from '../../components/Post';
import useFetch from '../../utils/useFecth';

const apiUrl = 'http://localhost:4000/posts';
export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostsType = PostType[];
type PropsType = { posts: PostsType };
const Home = ({ posts }: PropsType) => {
  //   input handling
  const [newPost, setNewPost] = useState({ title: '', body: '', userId: null });
  console.log(newPost);
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(apiUrl, newPost).catch((er) => console.log(er.message));
    mutate(apiUrl);
  };
  //   data
  const { data, error } = useFetch(apiUrl);
  if (error) return <div>Error</div>;
  if (!data) <div>Loading...</div>;
  else
    return (
      <div>
        <Grid container direction="row" spacing={3}>
          <Grid md={8} item>
            <Grid
              justifyContent="left"
              alignItems="stretch"
              spacing={2}
              padding={2}
              sx={{ backgroundColor: '#ddd' }}
              container
            >
              {data.map((post: PostType) => (
                <Grid
                  key={post.id}
                  md={6}
                  sx={{ alignItems: 'stretch', padding: 2 }}
                  item
                >
                  <Post post={post} />
                </Grid>
              ))}
            </Grid>{' '}
          </Grid>

          <Grid md={4} item>
            <form onSubmit={(e) => submitHandler(e)}>
              <TextField
                name="title"
                type="text"
                onChange={(e) => onChangeHandler(e)}
              />
              <TextField
                name="body"
                type="text"
                onChange={(e) => onChangeHandler(e)}
              />
              <TextField
                name="userId"
                type="number"
                onChange={(e) => onChangeHandler(e)}
              />
              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  return null;
};

export default Home;

export const getServerSideProps = async () => {
  const posts = await axios.get(apiUrl).then((res) => res.data);

  return {
    props: {
      posts,
    },
  };
};
