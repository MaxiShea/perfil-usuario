
import Header from '../components/header';
import About from '../components/about';
import Interests from '../components/interests';
import ContactForm from '../components/contactForm';

const interests = ['Tecnología', 'Programación', 'Diseño', 'FullStack'];
const imageUrl = 'https://i.ibb.co/nLFNdVJ/profile-image.jpg'

export default function Home() {
    return (
        <div>
            <Header name="Lionel Messi" imageUrl={imageUrl} />
            <About />
            <Interests interests={interests} />
            <ContactForm />
        </div>
    );
}
