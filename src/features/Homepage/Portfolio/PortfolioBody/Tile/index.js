import { Body, Description, Links, StyledLink, Text, TileWrapper, Title } from "./styled"

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
                <Text>Demo:</Text> <StyledLink href={demo} target="_blank">{demo}</StyledLink>
                <Text>Code:</Text> <StyledLink href={code} target="_blank">{code}</StyledLink>
            </Links>
        </Body>
    </TileWrapper >
);

export default Tile;