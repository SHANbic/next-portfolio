import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from './_error';

export default class about extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/shanbic');
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    console.log(data);
    return { user: data, statusCode };
  }
  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title="About">
        <div className="card">
          <p>
            <img src={user.avatar_url} alt="my avatar" />
            <a href={user.html_url} target="_blank">
              {user.login} from {user.location}
            </a>
          </p>
        </div>
        <style jsx>{`
          img {
            border-radius: 5px;
            width: 20px;
            margin-right: 10px;
          }

          .card p {
            display: flex;
            justify-content: center;
            align-items: flex-end;
          }

          .card a {
            text-decoration: none;
            color: inherit;
            text-decoration: underline;
          }

          .card a:hover {
            color: blue;
          }
        `}</style>
      </Layout>
    );
  }
}
