import { Segment, Header, Body, StyledList, ListItem, Bullet, Content } from "./styled"

const Section = ({ title, body }) => (
    <Segment>
        <Header>
            {title}
        </Header>
        <Body>
            <StyledList>
                {body.map((skill) => (
                    <ListItem key={skill}>
                        <Bullet />

                        <Content>
                            {skill}
                        </Content>
                    </ListItem>
                ))}
            </StyledList>
        </Body>
    </Segment>
);

export default Section;