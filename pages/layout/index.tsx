import { Typography } from '@mui/material';
import PostLayout from '../../components/layouts/PostLayout';

function Index() {
  return (
    <div>
      <Typography>Hello I am Index </Typography>
    </div>
  );
}

Index.Layout = PostLayout;
export default Index;
