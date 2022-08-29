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
    onHandleRemoveTask: (task: Task) => void;
    onHandleCompletedTask: (task: Task) => void;
}

export function TaskListItem({ task, onHandleRemoveTask, onHandleCompletedTask }: TaskListItemProps) {

    return (
        <div className={!task.completed ? `${styles.container} ${styles.taskInCompleted}` : styles.container}>
            {
                task.completed ? <button onClick={() => onHandleCompletedTask(task)}><img src={completedCheck} /></button> : <button onClick={() => onHandleCompletedTask(task)}><img src={incompletedCheck} /></button>
            }

            <p className={task.completed ? `${styles.taskCompleted} ${styles.content}` : `${styles.content}`}>
                {task.description}
            </p>

            <button className={styles.btnRemove} onClick={() => onHandleRemoveTask(task)}>
                <Trash size={20} />
            </button>
        </div>
    )
}