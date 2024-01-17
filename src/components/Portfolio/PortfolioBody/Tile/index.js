import { Body, Description, Links, StyledLink, TileWrapper, Title } from "./styled"

const Tile = ({ title, description, demo, code }) => (
    <TileWrapper>
        <Title>
            {title}
        </Title>

        <Body>
            <Description>
                {description}
            </Description>
            <Links>
                Demo: <StyledLink href={demo} target="_blank">{demo}</StyledLink><br />
                Code: <StyledLink href={code} target="_blank">{code}</StyledLink>
            </Links>
        </Body>
    </TileWrapper >
);

export default Tile;