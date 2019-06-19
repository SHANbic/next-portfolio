import Link from 'next/link';
import Layout from '../components/Layout';
const Index = () => {
  return (
    <Layout title="Home">
      <Link href="/about">
        <a>Go to about page</a>
      </Link>
      <p>Welcome to the home page</p>
    </Layout>
  );
};
export default Index;
