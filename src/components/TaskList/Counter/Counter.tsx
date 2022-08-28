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
    return (
        <div className={styles.container}>
            <div className={`${styles.countStyleDefault} ${styles.countCreateTask}`}>
                <span>Tarefas criadas</span>
                <span className={styles.count}>0</span>
            </div>

            <div className={`${styles.countStyleDefault} ${styles.countCompletedTask}`}>
                <span>Concluidas</span>
                <span className={styles.count}>0</span>
            </div>
        </div>
    )
}