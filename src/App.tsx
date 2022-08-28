import { useState } from 'react';
import { FormInput } from './components/FormInput/FormInput';
import { Header } from './components/Header/Header';

import './global.css';

import styles from './App.module.css';

interface Task {
  id: string;
  description: string;
  completed: boolean;
  created_at: string;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <FormInput onSetTask={setTasks} />
        </main>
      </div>
    </>
  )
}

export default App
