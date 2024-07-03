import styles from '../styles/header.module.css';

const Header = ({ name, imageUrl }) => {
    return (
        <header className={styles.header}>
            <img className={styles.profileImage} src={imageUrl} alt="Profile" />
            <h1 className={styles.name}>{name}</h1>
        </header>
    );
};

export default Header;

