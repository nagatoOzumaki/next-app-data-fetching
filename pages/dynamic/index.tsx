import dynamic from 'next/dynamic';
import LocalStorageComponent from '../../components/dynamic/LocalStorageComponent';

// if (typeof window !== 'undefined') {
//   import('something that needed in the browser like css' file);
// }

const Typo = dynamic(() => import('@mui/material/Typography'), {
  ssr: false,
});
function Home() {
  //   console.log('ssrrr ');
  //   localStorage.setItem('name', 'riad');
  //   const LocalStorageComponent = dynamic(
  //     () => import('../../components/dynamic/LocalStorageComponent'),
  //     { ssr: true },
  //   );f

  return (
    <div>
      <Typo variant="h2">df</Typo>
      <LocalStorageComponent />
    </div>
  );
}

export default Home;
