import Loading from "./Loading";
import Error from "./Error";
import Tile from "./Tile";
import { PortfolioWrapper } from "./styled";
import { useRepositoryData } from "./useRepositoryData";

const PortfolioBody = () => {
    const { repositoryData } = useRepositoryData();
    const portfolioData = repositoryData.data

    if (repositoryData.status === "loading") {
        return <Loading />
    }

    if (repositoryData.status === "error") {
        return <Error />
    }

    return (
        <PortfolioWrapper>
            {portfolioData?.map((project) => (
                <Tile
                    key={project.id}
                    title={(project.name).replace(/-/g, " ").replace("react", "(react)").replace("todo", "to-do")}
                    description={project.description}
                    demo={project.homepage}
                    code={project.html_url}
                />
            ))}
        </PortfolioWrapper>
    )
};

export default PortfolioBody;