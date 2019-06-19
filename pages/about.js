import Link from 'next/link';
import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

export default class about extends Component {
  state = {
    user: null
  };

  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/shanbic');
    const data = await res.json();
    console.log(data);
    return { user: data };
  }
  render() {
    const { user } = this.props;
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

          .card p{
            display: flex;
            justify-content: center;
            align-items:flex-end; 
          }

          .card a{
            text-decoration: none;
            color:inherit;
            text-decoration: underline;
          }

          .card a:hover{
            
            color: blue

          }


        `}</style>
      </Layout>
    );
  }
}
