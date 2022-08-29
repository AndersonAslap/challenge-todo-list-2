import styles from './Counter.module.css';

interface Task {
    id: string;
    description: string;
    completed: boolean;
    created_at: Date;
}

interface CounterProps {
    tasks: Task[]
}

export function Counter({ tasks }: CounterProps) {

    const countTasksCompleted = tasks.reduce((count, task) => {
        if (task.completed) {
            count++;
        }

        return count;
    }, 0)


    return (
        <div className={styles.container}>
            <div className={`${styles.countStyleDefault} ${styles.countCreateTask}`}>
                <span>Tarefas criadas</span>
                <span className={styles.count}>{tasks.length}</span>
            </div>

            <div className={`${styles.countStyleDefault} ${styles.countCompletedTask}`}>
                <span>Concluidas</span>
                <span className={styles.count}>{countTasksCompleted} {tasks.length > 0 && `de ${tasks.length}`} </span>
            </div>
        </div>
    )
}