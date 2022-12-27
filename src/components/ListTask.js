import React from "react"
import styled from "styled-components"

const List = styled.li`
  font-size: 20px;
  line-height: 26px;
  color: var(--Nord00);
  position: relative;
  list-style: disc;

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

const ListTask = ({ tasks }) => {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        marginLeft: "20px",
      }}
    >
      {tasks.map(task => {
        return <List key={task.id}>{task.name}</List>
      })}
    </ul>
  )
}
export default ListTask
