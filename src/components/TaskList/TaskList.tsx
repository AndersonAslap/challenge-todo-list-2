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

    function handleRemoveTask(task: Task): void {
        const tasks_ = tasks.filter((t) => t.id !== task.id);
        onSetTask(tasks_);
    }

    function handleCompletedTask(taskUpdate: Task): void {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskUpdate.id) {
                task.completed = !task.completed
            }

            return task;
        });

        onSetTask(updatedTasks);
    }

    return (
        <div className={styles.container}>
            <Counter tasks={tasks} />

            {
                (tasks.length === 0)
                    ? <BoxWithoutTask />
                    : <div className={styles.table}>
                        {
                            tasks.map((task) => (

                                <TaskListItem
                                    key={task.id}
                                    task={task}
                                    onHandleRemoveTask={handleRemoveTask}
                                    onHandleCompletedTask={handleCompletedTask}
                                />

                            ))
                        }
                    </div>
            }
        </div>
    )
}