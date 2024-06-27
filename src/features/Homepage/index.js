import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { myFutureSkills, mySkills } from './skillset';
import Portfolio from "./Portfolio";
import { useRef } from "react";
import { useRepositoryData } from "./Portfolio/PortfolioBody/useRepositoryData";

const PersonalHomepage = () => {
    const { repositoryData } = useRepositoryData();
    const contact = useRef(null);

    const scrollToContact = (event) => {
        event.preventDefault();
        const delay = repositoryData.status === "loading" ? 700 : 0;

        setTimeout(() => {
            contact.current.scrollIntoView({ behavior: 'smooth' });
        }, delay);
    };

    return (
        <Container>
            <Header scrollToContact={scrollToContact} />

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

            <Footer contact={contact} />
        </Container>
    )
};

export default PersonalHomepage;