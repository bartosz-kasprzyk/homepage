import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { myFutureSkills, mySkills } from './skillset';
import Portfolio from "./Portfolio";

const PersonalHomepage = () => (
    <Container>
        <Header />

        <Section
            title="My skillset includes 🛠️"
            body={mySkills}
            skills
        />

        <Section
            title="What I want to learn next 🚀"
            body={myFutureSkills}
        />

        <Portfolio />

        <Footer />
    </Container>
)

export default PersonalHomepage;