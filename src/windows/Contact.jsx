import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact"/>
                <h2>Contact me</h2>    
            </div>

            <div className="p-5 space-y-5">
                <img src="/images/alejandroIcon.jpg" alt="alejandro"
                className="w-20 rounded-full"/>

                <h3>Let's Connect</h3>
                <p>Got an idea? A bug to squash? Or just wanna tech talk?
                    I'm in.
                </p>
                <p>mabernalr12@gmail.com</p>

                <ul>
                    {socials.map(({id, bg, link, icon, text}) => (
                        <li key={id} style={{ backgroundColor: bg}}>
                            <a href={link} target="black" rel="noreferrer" title={text}>
                                <img src={icon} alt={text} className="size-5"/>
                                <p>{text}</p>
                            </a>
                        </li>
                        ))}
                </ul>
            </div>
        </>
    );
}

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;