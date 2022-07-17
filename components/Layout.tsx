/* eslint-disable no-undef */
import { CssBaseline, Container } from '@mui/material';

type PropsType = { children: JSX.Element | JSX.Element[] };

function Layout({ children }: PropsType) {
  return (
    <Container sx={{ justifyContent: 'center' }}>
      <CssBaseline />
      <h1>Posts</h1>
      {children}
    </Container>
  );
}

export default Layout;
