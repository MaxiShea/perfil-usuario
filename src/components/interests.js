import styles from '../styles/interests.module.css';

const Interests = ({ interests }) => {
    return (
        <section className={styles.interests}>
            <h2>Intereses</h2>
            <ul className={styles.interestList}>
                {interests.map((interest, index) => (
                    <li key={index} className={styles.interestItem}>
                        {interest}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Interests;
