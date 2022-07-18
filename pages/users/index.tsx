/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import { Link, List, ListItem, Typography } from '@mui/material';
import { NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';
import { usersApi } from '../../services/api';
import { userType } from './[userId]';

type propsType = { users: userType[] };

const Users: NextPage<propsType> = ({ users }: propsType) => (
  <div>
    <Typography variant="h1">users</Typography>
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <NextLink href={`/users/${user.id}`} passHref>
            <Link variant="button">{user.name}</Link>
          </NextLink>
        </ListItem>
      ))}
    </List>
  </div>
);

export default Users;

export const getStaticProps = async () => {
  let data: userType[] = [];
  await usersApi.getAllUsers().then((users) => {
    data = users;
  });

  return {
    props: { users: data },
    revalidate: 10,
  };
};
