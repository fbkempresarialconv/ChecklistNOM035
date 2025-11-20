
'use client';
import React, { useState } from 'react';

export default function Nom035Checklist() {
  const [tasks, setTasks] = useState([{ id: 1, title: "Ejemplo de tarea", completed: false }]);

  return (
    <div>
      <h2>Checklist NOM-035</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title} - {task.completed ? "Completado" : "Pendiente"}</li>
        ))}
      </ul>
    </div>
  );
}
