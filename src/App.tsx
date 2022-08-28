import { useState } from 'react';
import { FormInput } from './components/FormInput/FormInput';
import { Header } from './components/Header/Header';

import './global.css';

import styles from './App.module.css';
import { TaskList } from './components/TaskList/TaskList';

interface Task {
  id: string;
  description: string;
  completed: boolean;
  created_at: Date;
}

const tasksExamples: Task[] = [
  {
    id: 'abcd',
    description: 'Realizar Tarefa 1',
    completed: false,
    created_at: new Date()
  },
  {
    id: 'abce',
    description: 'Realizar Tarefa 2',
    completed: true,
    created_at: new Date()
  }
]

function App() {

  const [tasks, setTasks] = useState<Task[]>(tasksExamples);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <FormInput onSetTask={setTasks} />
          <TaskList tasks={tasks} onSetTask={setTasks} />
        </main>
      </div>
    </>
  )
}

export default App
