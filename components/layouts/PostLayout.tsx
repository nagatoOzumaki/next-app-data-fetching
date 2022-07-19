import { Typography } from '@mui/material';

type Props = {
  children: JSX.Element | JSX.Element[];
};

function PostLayout({ children }: Props) {
  return (
    <div>
      <Typography variant='h3'>Posts Layout</Typography>
      {children}
    </div>
  );
}

export default PostLayout;
