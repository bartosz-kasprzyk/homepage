import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { PortfolioWrapper } from "../../components/Portfolio/PortfolioBody";
import Tile from "../../components/Portfolio/PortfolioBody/Tile";
import PortfolioHeader from "../../components/Portfolio/PortfolioHeader";
import Section from "../../components/Section";
import { myFutureSkills, mySkills } from './skillset';

const PersonalHomepage = () => (
    <Container>
        <Header />

        <Section
            title="My skillset includes 🛠️"
            body={mySkills}
        />

        <Section
            title="What I want to learn next 🚀"
            body={myFutureSkills}
        />

        <PortfolioHeader />
        <PortfolioWrapper>
            <Tile
                title="Homepage"
                description="Coming soon"
                demo="https://bartek-kasprzyk.github.io/homepage/"
                code="https://github.com/bartek-kasprzyk/homepage"
            />

            <Tile
                title="Movie Browser"
                description="Coming soon"
                demo="https://link.demo.com"
                code="https://link.code.com"
            />

            <Tile
                title="To-do list"
                description="A simple to-do list maker that allows you to list all of the things you need to do, mark them as done, hide done tasks or even delete them if needed."
                demo="https://bartek-kasprzyk.github.io/to-do-list/"
                code="https://github.com/bartek-kasprzyk/to-do-list"
            />

            <Tile
                title="To-do list (react)"
                description="More advanced version of a to-do list maker bootstrapped with Create React App. Here you can filter your tasks using a search bar right over the task list. Thanks to the async function you can also download example tasks."
                demo="https://bartek-kasprzyk.github.io/todo-list-react/#/zadania"
                code="https://github.com/bartek-kasprzyk/todo-list-react"
            />

            <Tile
                title="Currency Calculator"
                description="A currency calculator that lets you convert different currencies. Available currencies: EUR, USD, PLN."
                demo="https://bartek-kasprzyk.github.io/currency-converter/"
                code="https://github.com/bartek-kasprzyk/currency-converter"
            />

            <Tile
                title="Currency Calculator (react)"
                description="More advanced version of a currency calculator with more currencies to choose from, bootstrapped with Create React App. Current exchange rates are being downloaded from currencyapi.com. There's also built in clock that tells you the date and time."
                demo="https://bartek-kasprzyk.github.io/currency-converter-react/"
                code="https://github.com/bartek-kasprzyk/currency-converter-react"
            />

            <Tile
                title="Diablo II - runes & runewords"
                description="My first page created as an assignment for YouCode course. It contains a list of all runes and a few runewords from a game Diablo II. There's a button that creates an atmospheric gradient and two navigations that help you move around the website."
                demo="https://bartek-kasprzyk.github.io/d2runes/"
                code="https://github.com/bartek-kasprzyk/d2runes"
            />
        </PortfolioWrapper>
        <Footer />
    </Container>
)

export default PersonalHomepage;