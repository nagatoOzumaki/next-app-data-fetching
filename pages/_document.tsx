import Document, { Html, Head, Main, NextScript } from 'next/document';
import CustomHead from '../components/CustomHead';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="eng">
        <CustomHead />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
