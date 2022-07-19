/* eslint-disable no-undef */
import { CssBaseline, Container } from '@mui/material';
import { FC } from 'react';

// interface Props {
//   children: (
//     nextName: string,
//     setNextName: Dispatch<SetStateAction<string>>
//   ) => JSX.Element;
// }
interface Props {
  children: JSX.Element | JSX.Element[];
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <Container sx={{ justifyContent: 'center' }}>
      <CssBaseline />
      <small>this is global layout</small>
      <h1>Posts</h1>
      {children}
    </Container>
  );
};

export default Layout;
