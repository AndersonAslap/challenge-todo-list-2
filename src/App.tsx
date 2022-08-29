import { useEffect, useState } from 'react';
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

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => { console.log('here') }, [tasks]);

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
