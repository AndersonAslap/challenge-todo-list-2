import plusIcon from '../../assets/plus.svg';

import styles from './FormInput.module.css';

interface Task {
    id: string;
    description: string;
    completed: boolean;
    created_at: string;
}

interface FormInputProps {
    onSetTask: (tasks: Task[]) => void;
}

export function FormInput({ onSetTask }: FormInputProps) {
    return (
        <div className={styles.container}>
            <input
                type="text"
                className={styles.inputForm}
                placeholder="Adicione uma nova tarefa"
            />

            <button
                type="button"
                className={styles.buttonForm}
            >
                Criar
                <img src={plusIcon} />
            </button>
        </div>
    )
}