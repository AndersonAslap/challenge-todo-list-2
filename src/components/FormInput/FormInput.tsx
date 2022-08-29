import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import plusIcon from '../../assets/plus.svg';

import styles from './FormInput.module.css';

interface Task {
    id: string;
    description: string;
    completed: boolean;
    created_at: Date;
}

interface FormInputProps {
    onSetTask: ((tasks: any) => Task[]);
}

export function FormInput({ onSetTask }: FormInputProps) {

    const [description, setDescription] = useState('');


    function handleCreateTask() {
        const task: Task = {
            id: uuidv4(),
            description,
            completed: false,
            created_at: new Date()
        }

        onSetTask((state: Task[]) => [...state, task]);
        setDescription('');
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                className={styles.inputForm}
                placeholder="Adicione uma nova tarefa"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
                type="button"
                className={styles.buttonForm}
                onClick={handleCreateTask}
                disabled={description === ""}
            >
                Criar
                <img src={plusIcon} />
            </button>
        </div>
    )
}