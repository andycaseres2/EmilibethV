import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled from "styled-components"

import SEO from '../components/SEO';

const Title = styled.h3`
  margin-bottom: 30px;
  color: var(--Nord00);

  @media (prefers-color-scheme: dark) {
    color: var(--Nord06);
  }

  @media (prefers-color-scheme: light) {
    color: var(--Nord00);
  }

  @media (prefers-color-scheme: no-preference) {
    color: var(--Nord00);
  }
`

const PostList = styled.div``

const PostLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;

  @media only screen and (min-width: 45em) {
    flex-direction: row;
    margin-bottom: 30px;
  }

  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.05);
      box-shadow: 0 3px 10px -3px rgba(80, 80, 80, 0.3), 0 1px 5px -2px rgba(80, 80, 80, 0.19);
    }
  }
`

const Left = styled.div`
  width: 100%;
  transition: all 300ms ease-in-out;

  @media only screen and (min-width: 45em) {
    width: 38%;
  }
`

const Image = styled.div`
  .gatsby-image-wrapper {
    border-radius: 6px;
    overflow: hidden;
    transition: all 300ms ease-in-out;
    box-shadow: 0 5px 10px -3px rgba(80, 80, 80, 0.2), 0 1px 5px -2px rgba(80, 80, 80, 0.1);
  }
`

const Right = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-left: 0;
  padding-left: 0;
  box-sizing: border-box;

  @media only screen and (min-width: 45em) {
    width: 60%;
    margin-top: 0;
    margin-left: 2%;
    padding-left: 5%;
  }
`

const TitlePost = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 24px;
  color: var(--Nord06);

  @media only screen and (min-width: 45em) {
    font-size: 22px;
    line-height: 24px;
  }

  @media only screen and (min-width: 60em) {
    font-size: 24px;
    line-height: 26px;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--Nord06);
  }

  @media (prefers-color-scheme: light) {
    color: var(--Nord00);
  }

  @media (prefers-color-scheme: no-preference) {
    color: var(--Nord00);
  }
`

const Description = styled.span`
  color: var(--Nord00);
  font-size: 16px;
  line-height: 18px;
  margin-top: 10px;
  display: flex;

  @media (prefers-color-scheme: dark) {
    color: var(--Nord06);
  }

  @media (prefers-color-scheme: light) {
    color: var(--Nord00);
  }

  @media (prefers-color-scheme: no-preference) {
    color: var(--Nord00);
  }
`

const Portfolio = ({data}) => {
  return (
    <Layout>
      <SEO
        title="Conheça meu Porfolio"
      />
      <Title>Meu Portfolio:</Title>
      <PostList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostLink type={"portfolio"} key={node.id} to={node.fields.slug} title={node.frontmatter.title}>
            <Left>
              <Image>
                <Img
                  alt={node.frontmatter.title}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              </Image>
            </Left>
            <Right>
              <TitlePost>{node.frontmatter.title}</TitlePost>
              <Description>{node.frontmatter.description}</Description>
            </Right>
          </PostLink>
        ))}
      </PostList>
    </Layout>
  )
}

export const pageQuery = graphql`{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {categories: {eq: "Portfolio"}}}) {
    edges {
      node {
        id
        frontmatter {
          id: title
          title
          categories
          image {
            childImageSharp {
              fluid(maxWidth: 360) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          date(locale: "pt-br", formatString: "DD MMM")
          description
        }
        fields {
          slug
        }
      }
    }
  }
}
`
export default Portfolio;
