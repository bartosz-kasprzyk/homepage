import { details } from "./iconDetails";
import { FooterContact, FooterDescription, FooterIcons, FooterIntro, FooterLink, FooterSection } from "./styled";

const Footer = () => (
    <FooterSection>
        <FooterIntro>
            LET'S TALK
        </FooterIntro>

        <FooterContact href="mailto:bartosz.kasprzyk58@gmail.com" title="My email">
            bartosz.kasprzyk58@gmail.com
        </FooterContact>

        <FooterDescription>
            I'm always ready to take on new projects whenever I can spare the time. Whether you're envisioning a website, dashboard, or mobile app and could use some assistance bringing your ideas to fruition, feel free to reach out to me. 🤙

        </FooterDescription>

        < FooterIcons >
            {details.map(({ Icon, name, url }) => (
                <FooterLink href={url} title={name} key={name} target="_blank">
                    <Icon />
                </FooterLink>
            ))}
        </FooterIcons >
    </FooterSection >
);

export default Footer;