import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title="error">
    {statusCode
      ? `Could not load you user data: Status Code ${statusCode}`
      : "Couldn't get that page, Sorry"}
  </Layout>
);
