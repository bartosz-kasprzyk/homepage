import { Container } from './components/Container';
import Section from './components/Section';
import { myFutureSkills, mySkills } from './skillset';
import Header from './components/Header';
import PortfolioHeader from './components/Portfolio/PortfolioHeader';
import Tile from './components/Portfolio/PortfolioBody/Tile';
import { PortfolioWrapper } from './components/Portfolio/PortfolioBody';
import Footer from './components/Footer';

function App() {
  return (
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
          demo="https://link.demo.com"
          code="https://link.code.com"
        />

        <Tile
          title="Movie"
          description="Coming soon"
          demo="https://link.demo.com"
          code="https://link.code.com"
        />

        <Tile
          title="to-do"
          description="Simple to-do list maker."
          demo="https://bartek-kasprzyk.github.io/to-do-list/"
          code="https://github.com/bartek-kasprzyk/to-do-list"
        />

        <Tile
          title="to-do-react"
          description="This application is a simple to-do list maker. It allows you to list all of the things you need to do, mark them as done, hide already done tasks or even delete them if needed. You can filter your tasks using a search bar right over the task list. Thanks to the async function you can also download example tasks."
          demo="https://bartek-kasprzyk.github.io/todo-list-react/#/zadania"
          code="https://github.com/bartek-kasprzyk/todo-list-react"
        />

        <Tile
          title="currency-calculator"
          description="This Currency Calculator is a quick and easy way to convert different currencies."
          demo="https://bartek-kasprzyk.github.io/currency-converter/"
          code="https://github.com/bartek-kasprzyk/currency-converter"
        />

        <Tile
          title="currency-calculator-react"
          description="This website is a currency conversion tool that lets you calculate different currencies."
          demo="https://bartek-kasprzyk.github.io/currency-converter-react/"
          code="https://github.com/bartek-kasprzyk/currency-converter-react"
        />

        <Tile
          title="d2runes"
          description="Your reliable source of D2 knowledge."
          demo="https://bartek-kasprzyk.github.io/d2runes/"
          code="https://github.com/bartek-kasprzyk/d2runes"
        />
      </PortfolioWrapper>
      <Footer />
    </Container>
  );
}

export default App;
