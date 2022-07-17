/* eslint-disable import/no-extraneous-dependencies */
import { Grid } from '@mui/material';
import axios from 'axios';
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
  const { data, error } = useFetch(apiUrl);
  if (error) return <div>Error</div>;
  if (!data) <div>Loading...</div>;
  else
    return (
      <div>
        <Grid
          justifyContent="left"
          alignItems="stretch"
          spacing={2}
          padding={4}
          sx={{ backgroundColor: '#ddd' }}
          container
        >
          {posts.map((post: PostType) => (
            <Grid
              key={post.id}
              md={6}
              sx={{ alignItems: 'stretch', padding: 2 }}
              item
            >
              <Post post={post} />
            </Grid>
          ))}
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
