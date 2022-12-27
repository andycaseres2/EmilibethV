import React from "react"

const ListTask = ({ tasks }) => {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      {tasks.map(task => {
        return (
          <li key={task.id} style={{ listStyle: "disc", fontSize: "15px" }}>
            {task.name}
          </li>
        )
      })}
    </ul>
  )
}
export default ListTask
