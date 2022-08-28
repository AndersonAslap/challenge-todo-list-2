import { Trash } from 'phosphor-react'

import styles from './TaskListItem.module.css';

import completedCheck from '../../../assets/completedCheck.svg';
import incompletedCheck from '../../../assets/incompletedCheck.svg';

interface Task {
    id: string;
    description: string;
    completed: boolean;
    created_at: Date;
}

interface TaskListItemProps {
    task: Task;
    onSetTask: (tasks: Task[]) => void;
}

export function TaskListItem({ task, onSetTask }: TaskListItemProps) {
    return (
        <div className={styles.container}>
            {
                task.completed ? <button><img src={completedCheck} /></button> : <button><img src={incompletedCheck} /></button>
            }

            <p className={task.completed ? `${styles.taskCompleted} ${styles.content}` : `${styles.content}`}>
                {task.description}
            </p>

            <button className={styles.btnRemove}>
                <Trash size={20} />
            </button>
        </div>
    )
}