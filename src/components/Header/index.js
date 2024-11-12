import { HeaderSection, HeaderImage, HeaderContent, HeaderIntro, HeaderName, HeaderDescription, HeaderButton, HeaderButtonIcon, HeaderButtonText } from "./styled";
import pic from "../../images/pic.png"
import Switch from "./Switch";

const Header = ({ scrollToContact }) => (
    <HeaderSection>
        <Switch />

        <HeaderImage src={pic} alt="Profile picture" />

        <HeaderContent>
            <HeaderIntro>
                THIS IS
            </HeaderIntro>

            <HeaderName>
                Bartosz Kasprzyk
            </HeaderName>

            <HeaderDescription>
                😎💻 An enthusiastic Frontend Developer with a deep affection for React.<br />
                I'm eager to take on coding challenges and dive into new projects as I seek opportunities in the field. 🚀
            </HeaderDescription>

            <HeaderButton onClick={scrollToContact} title="My socials">
                <HeaderButtonIcon />
                <HeaderButtonText>
                    Hire me
                </HeaderButtonText>
            </HeaderButton>
        </HeaderContent>
    </HeaderSection>
);

export default Header;