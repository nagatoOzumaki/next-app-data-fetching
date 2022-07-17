import { Card, Grid, Typography } from '@mui/material';

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type PropsType = { post: PostType };

function Post({ post }: PropsType) {
  return (
    <Card sx={{ padding: 9, height: '100%' }}>
      <Grid spacing={1.3} direction='row' container>
        <Grid item>
          <Typography color='secondary'>{post.id}</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5'>{post.title}</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>{post.body}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Post;
