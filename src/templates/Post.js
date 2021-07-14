import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost;

    return (
      <>
        <Layout>
          <SEO title={post.title} />
          <h1>{post.title}</h1>
          <div
            style={{ marginTop: 20 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Layout>
      </>
    );
  }
}

export default Post;

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
};

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
