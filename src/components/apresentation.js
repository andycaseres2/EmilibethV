import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Social from "./Social"

const Apresentation = styled.div`
  margin: 100px 0 60px;

  @media only screen and (min-width: 45em) {
    margin: 144px 0 80px;
  }
`

const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  max-width: 850px;
  box-sizing: border-box;

  @media only screen and (min-width: 33.75em) {
    width: 80%;
    padding: 0 1.5rem;
  }

  @media only screen and (min-width: 45em) {
    padding: 0 2rem;
  }
`

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (min-width: 45em) {
    text-align: left;
    flex-direction: row;
  }
`

const Left = styled.div`
  width: 100%;
  display: block;
  margin: 0 auto;
  overflow: hidden;
  max-width: 210px;
  border-radius: 100%;
  box-shadow: 0 0px 15px 0px rgba(0, 0, 0, 0.2),
    0 5px 5px 0px rgba(0, 0, 0, 0.05);

  @media only screen and (min-width: 45em) {
    max-width: 250px;
  }
`

const Right = styled.div`
  margin-top: 30px;
  margin-left: 0;
  flex: 1;

  @media only screen and (min-width: 45em) {
    margin-top: 0;
    margin-left: 30px;
  }
`

const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: var(--Nord00);
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 20px;
  position: relative;
  font-weight: 700;
  display: block;
  width: 100%;

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

const Small = styled.small`
  margin: 0;
  color: var(--Nord03);
  position: relative;
  font-weight: 700;
  line-height: 18px;
  font-size: 14px;
  display: block;
  width: 100%;

  @media (prefers-color-scheme: dark) {
    color: var(--Nord04);
  }

  @media (prefers-color-scheme: light) {
    color: var(--Nord03);
  }

  @media (prefers-color-scheme: no-preference) {
    color: var(--Nord03);
  }
`

const Text = styled.p`
  font-size: 20px;
  line-height: 26px;
  color: var(--Nord00);
  position: relative;
  display: inline-block;
  z-index: 5;

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

const StyledLink = styled(Link)`
  font-size: 20px;
  line-height: 26px;
  position: relative;
  display: inline-block;
  transition: all 300ms ease-in-out;
  margin-left: 4px;

  &::before {
    content: "";
    width: 100%;
    height: 2px;
    opacity: 4;
    position: absolute;
    background-color: var(--Nord11);
    z-index: -1;
    display: block;
    bottom: 2px;
    left: 0px;
  }

  &:hover {
    &::before {
      height: 13px;
      background-color: var(--Nord11);
      opacity: 0.3;
    }
  }

  @media (prefers-color-scheme: dark) {
    &::before {
      background-color: var(--Nord11);
    }

    &:hover {
      &::before {
        background-color: var(--Nord11);
      }
    }
  }

  @media (prefers-color-scheme: light) {
    &::before {
      background-color: var(--Nord11);
    }

    &:hover {
      &::before {
        background-color: var(--Nord11);
      }
    }
  }

  @media (prefers-color-scheme: no-preference) {
    &::before {
      background-color: var(--Nord11);
    }

    &:hover {
      &::before {
        background-color: var(--Nord11);
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Yo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Apresentation>
      <Container>
        <Bio>
          <Left>
            <Img
              fluid={data.file.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt="Emilibeth"
            />
          </Left>
          <Right>
            <Title>
              <Small>Hola, mi nombre es</Small>Emilibeth Villasmil
              <Text>👩‍💻Asistente Virtual👩‍💻</Text>
            </Title>
            <Text>
              Soy una apasionada de la administración y de todo lo que implique
              organizar. Me destaco por ser una persona dinámica y perseverante,
              así que tengo la plena certeza de que podemos construir avances 🚀
              para tu negocio, reduciéndote tiempo. Me encanta 🗣conversar y
              escuchar 👥a las personas, por lo que podría ofrecerte una
              atención al cliente de calidad.
              <StyledLink to={"/sobre"} alt={"Sobre"}>
                Conóceme
              </StyledLink>{" "}
              y un poco más de{" "}
              <StyledLink to={"/portfolio"} alt={"Portfolio"}>
                mi trabajo
              </StyledLink>
              .
            </Text>
          </Right>
        </Bio>
        <Social />
      </Container>
    </Apresentation>
  )
}
