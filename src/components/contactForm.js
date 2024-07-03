import { useState } from 'react';
import styles from '../styles/contactForm.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setSuccessMessage('¡Mensaje enviado con éxito!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        }, 1000);
    };

    return (
        <section id="contact" className={styles.contact}>
            <h2>Contacto</h2>
            <p className={`${styles.successMessage} ${successMessage && styles.show}`}>
                {successMessage}
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.inputField}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.inputField}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Mensaje:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.textareaField}
                        required
                    />
                </div>

                <button type="submit" className={styles.button}>Enviar</button>
            </form>
        </section>
    );
};

export default ContactForm;



