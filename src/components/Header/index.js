import { HeaderSection, HeaderImage, HeaderContent, HeaderIntro, HeaderName, HeaderDescription, HeaderButton, HeaderButtonIcon, HeaderButtonText } from "./styled";
import pic from "../../images/pic.png"
import Switch from "./Switch";

const Header = () => (
    <HeaderSection>
        <Switch />
        <HeaderImage src={pic} alt="" />

        <HeaderContent>
            <HeaderIntro>
                THIS IS
            </HeaderIntro>

            <HeaderName>
                Bartosz Kasprzyk
            </HeaderName>

            <HeaderDescription>
                I’m a passionate Frontend Developer in love with React. I am looking for my first job and programming challenges. I want to explore new technologies, improve my skills and gain knowledge among other programmers.
            </HeaderDescription>

            <HeaderButton href="mailto:bartosz.kasprzyk58@gmail.com" title="My email">
                <HeaderButtonIcon />
                <HeaderButtonText>
                    Hire me
                </HeaderButtonText>
            </HeaderButton>
        </HeaderContent>
    </HeaderSection>
);

export default Header;