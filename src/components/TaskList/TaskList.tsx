import { BoxWithoutTask } from './BoxWithoutTask/BoxWithoutTask';
import { Counter } from './Counter/Counter';
import styles from './TaskList.module.css';

interface Task {
    id: string;
    description: string;
    completed: boolean;
    created_at: string;
}

interface TaskListProps {
    tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
    return (
        <div className={styles.container}>
            <Counter tasks={tasks} />

            {
                (tasks.length === 0)
                    ? <BoxWithoutTask />
                    : null
            }
        </div>
    )
}