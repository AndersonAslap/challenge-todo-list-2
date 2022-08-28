import { BoxWithoutTask } from './BoxWithoutTask/BoxWithoutTask';
import { Counter } from './Counter/Counter';
import styles from './TaskList.module.css';
import { TaskListItem } from './TaskListItem/TaskListItem';

interface Task {
    id: string;
    description: string;
    completed: boolean;
    created_at: Date;
}

interface TaskListProps {
    tasks: Task[];
    onSetTask: (tasks: Task[]) => void;
}

export function TaskList({ tasks, onSetTask }: TaskListProps) {
    return (
        <div className={styles.container}>
            <Counter tasks={tasks} />

            {
                (tasks.length === 0)
                    ? <BoxWithoutTask />
                    : <div className={styles.table}>
                        {
                            tasks.map((task) => (
                                <TaskListItem task={task} onSetTask={onSetTask} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}