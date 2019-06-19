import Link from 'next/link';
import Layout from '../components/Layout';
const About = () => (
  <Layout title="About">
    <Link href="/">
      <a>Go to home</a>
    </Link>
    <p>Javascript Programmer</p>
    <img src="static/js-logo.png" alt="javascript logo" height="100" />
  </Layout>
);
export default About;
