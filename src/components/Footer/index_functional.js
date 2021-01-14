import TextSection from "./TextSection";
import SocialIcons from "./SocialIcons";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer id="footer" className="panel">
      <div className="inner split">
        <div>
          <TextSection />
          <SocialIcons />
          <p className="copyright">
            &copy; Unttled. Design: <a href="http://html5up.net">HTML5 UP</a>.
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
