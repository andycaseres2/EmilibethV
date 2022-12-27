import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import word from "../../static/images/skills/word.png"
import docs from "../../static/images/skills/document.png"
import excel from "../../static/images/skills/excel.png"
import sheet from "../../static/images/skills/sheet.png"
import slides from "../../static/images/skills/slides.png"
import forms from "../../static/images/skills/forms.png"
import powerpoint from "../../static/images/skills/powerpoint.png"
import drive from "../../static/images/skills/drive.png"
import meet from "../../static/images/skills/meet.png"
import gmail from "../../static/images/skills/gmail.png"
import outlook from "../../static/images/skills/outlook.png"
import calendar from "../../static/images/skills/calendar.png"
import calendly from "../../static/images/skills/calendly.png"
import window from "../../static/images/skills/window.png"

import SEO from "../components/SEO"
import Social from "../components/Social"
import { Skill } from "../components/Skill"
import ListTask from "../components/ListTask"

const About = styled.div``

const Apresentation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 45em) {
    flex-direction: row;
  }
`

const Left = styled.div`
  overflow: hidden;
  height: auto;
  width: 80%;
  max-width: 320px;
  border-radius: 8px;

  .gatsby-image-wrapper {
    min-height: 500px;
    box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.2),
      0 1px 5px -2px rgba(0, 0, 0, 0.1);
  }

  @media only screen and (min-width: 45em) {
    max-width: 46%;

    .gatsby-image-wrapper {
      min-height: 590px;
    }
  }

  @media (prefers-color-scheme: dark) {
    box-shadow: 0 5px 10px -3px rgba(80, 80, 80, 0.2),
      0 1px 5px -2px rgba(80, 80, 80, 0.1);
  }

  @media (prefers-color-scheme: light) {
    box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.2),
      0 1px 5px -2px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: no-preference) {
    box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.2),
      0 1px 5px -2px rgba(0, 0, 0, 0.1);
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
  color: var(--Nord03);
  position: relative;
  font-weight: 700;
  line-height: 18px;
  font-size: 14px;
  display: block;
  width: 100%;
  margin: 0;

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
  margin-bottom: 10px;
  z-index: 5;

  @media (prefers-color-scheme: dark) {
    color: var(--Nord06);
    font-size: 18px;
  }

  @media (prefers-color-scheme: light) {
    color: var(--Nord00);
  }

  @media (prefers-color-scheme: no-preference) {
    color: var(--Nord00);
  }
`

const Skills = styled.div`
  color: var(--Nord03);
  position: relative;
  font-weight: 700;
  line-height: 18px;
  font-size: 14px;
  display: block;
  width: 100%;
  margin: 0;
  padding-top: 40px;
  padding-bottom: 40px;
`
const GridSkills = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  color: var(--Nord03);
  position: relative;
  font-weight: 700;
  line-height: 18px;
  font-size: 14px;
  width: 100%;
  margin: 0;
  color: #fff;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 0px 30px;
    padding-left: 10px;
    width: 38%;
    font-size: 11px;
  }
`
const Task = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--Nord03);
  position: relative;
  font-weight: 700;
  line-height: 18px;
  font-size: 14px;
  width: 100%;
  margin: 0;
  color: #fff;
  padding-top: 30px;
`

const SobrePage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const tasks = [
    {
      id: 1,
      name: "Administración de correo electrónico",
    },
    {
      id: 2,
      name: "Gestión de agenda y calendario",
    },
    {
      id: 3,
      name: "Atención a redes sociales respondiendo mensajes y dudas",
    },
    {
      id: 4,
      name: "Contabilidad básica",
    },
    {
      id: 5,
      name: "Asistencia personal",
    },
    {
      id: 6,
      name: "Coordinación y planificación de viajes",
    },
    {
      id: 7,
      name: "Investigación",
    },
    {
      id: 8,
      name: "Transcripción a texto de videos y audios",
    },
    {
      id: 9,
      name: "Coordinación de presupuestos y cotizaciones",
    },
    {
      id: 10,
      name: "Relleno de formularios",
    },
  ]

  return (
    <Layout>
      <SEO title="Sobre" />
      <About>
        <Apresentation>
          <Left>
            <Img fluid={data.file.childImageSharp.fluid} alt="Emilibeth" />
          </Left>
          <Right>
            <Title>
              <Small>Hola, mi nombre es</Small>Emilibeth Villasmil
              <Text>
                <span>👩‍💻</span>Asistente Virtual<span>👩‍💻</span>
              </Text>
            </Title>
            <Text>
              Soy una persona confiable, responsable, honesta, organizada, con
              habilidades para trabajo en equipo, manejo de gestión del cambio,
              comprometida, consciente del grado de confidencialidad de la
              información que pueda llegar a manejar, actitud de servicio al
              cliente, enfoque a resultados, con gran capacidad de aprendizaje
              rápido y en constante búsqueda de superación.
            </Text>
          </Right>
        </Apresentation>

        <Social />
        <Skills>
          <Text>
            <span>👩‍💻</span>Herramientas que utilizo en mi día a día
            <span>👩‍💻</span>
          </Text>

          <GridSkills>
            <Skill text={"Docs"} icon={docs} />
            <Skill text={"Sheet"} icon={sheet} />
            <Skill text={"Slides"} icon={slides} />
            <Skill text={"Forms"} icon={forms} />
            <Skill text={"Word"} icon={word} />
            <Skill text={"Excel"} icon={excel} />
            <Skill text={"Power Point"} icon={powerpoint} />
            <Skill text={"Drive"} icon={drive} />
            <Skill text={"Meet"} icon={meet} />
            <Skill text={"Gmail"} icon={gmail} />
            <Skill text={"Outlook"} icon={outlook} />
            <Skill text={"Calendar"} icon={calendar} />
            <Skill text={"Calendly"} icon={calendly} />
            <Skill text={"Windows"} icon={window} />
          </GridSkills>

          <Task>
            <Text>
              <span>📒</span>Tareas que puedo realizar para ayudarte en tu
              trabajo<span>📒</span>
            </Text>
            <ListTask tasks={tasks} />
          </Task>
        </Skills>
      </About>
    </Layout>
  )
}

export default SobrePage
