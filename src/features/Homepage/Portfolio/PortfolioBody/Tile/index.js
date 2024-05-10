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
                <Text>Demo:</Text> <div><StyledLink href={demo} target="_blank">{demo}</StyledLink></div>
                <Text>Code:</Text> <div><StyledLink href={code} target="_blank">{code}</StyledLink></div>
            </Links>
        </Body>
    </TileWrapper >
);

export default Tile;