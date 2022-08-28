
import clipboard from '../../../assets/clipboard.svg';

import styles from './BoxWithoutTask.module.css';


export function BoxWithoutTask() {


    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <img src={clipboard} />

                <div className={styles.contentTextInfo}>
                    <span className={styles.infoOne}>Você ainda não tem tarefas cadastradas</span>
                    <span className={styles.infoTwo}>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </div>
        </div>
    )
}