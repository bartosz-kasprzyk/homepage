import { details } from "./icons/iconDetails";
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
            I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me.
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