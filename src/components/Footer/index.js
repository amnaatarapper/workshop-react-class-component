import { Component } from "react";

import TextSection from "./TextSectionClass";
import SocialIcons from "./SocialIconsClass";
import ContactForm from "./ContactFormClass";

class FooterClass extends Component {
  render() {
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
  }
}

export default FooterClass;
