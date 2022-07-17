/* eslint-disable import/no-extraneous-dependencies */
import { CircularProgress, Typography } from '@mui/material';
import { NextPage } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router';

export interface userType {
  id: number;
  name: string;
  age: number;
}
export interface propsType {
  user: userType;
}
const User: NextPage<propsType> = ({ user }: propsType) => {
  const router = useRouter();
  if (router.isFallback) {
    return <CircularProgress />;
  }
  return (
    <div>
      <Typography variant="h1">This is user {user.id}</Typography>
      <Typography>{user.name}</Typography>
      <Typography>{user.age}</Typography>
    </div>
  );
};
export default User;

export const getStaticPaths = async () => {
  let users: userType[] = [];
  await axios
    .get('http://localhost:4000/users/')
    .then((res) => res.data)
    .then((data) => {
      users = data;
      console.log(data);
    })
    .catch((er) => console.log(er));

  // users = users.slice(0, 4);
  const paths: { params: { userId: string } }[] = users.map(
    (user: userType) => ({
      params: {
        userId: user.id.toString(),
      },
    }),
  );

  return {
    paths,
    fallback: 'blocking',
  };
};
export const getStaticProps = async ({ params }: any) => {
  const { userId } = params;
  let returnObject;
  await axios
    .get(`http://localhost:4000/users/${userId}`)
    .then((res) => res.data)
    .then((user) => {
      returnObject = {
        props: {
          user,
        },
        revalidate: 10,
      };
    })
    .catch(() => {
      returnObject = {
        notFound: true,
      };
    });

  return returnObject;
};
