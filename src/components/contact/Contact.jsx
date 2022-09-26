import "./contact.css";
import phone from "../../images/phone.jpg";
import address from "../../images/address.png";
import email from "../../images/email.png";
import linkedin from "../../images/linkedIn.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const user_name = useRef("");
  const user_email = useRef("");
  const user_subject = useRef("");
  const message = useRef("");

  const toast = useToast();
  const formRef = useRef();

  const handleSubmit = (e) => {
    // const payload = {
    //   user_name:
    // }

    e.preventDefault();
    emailjs
      .sendForm(
        "service_7jqb24r",
        "template_t26ubhn",
        formRef.current,
        "lyZGPaZXRsmWLyAOx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast({
      // title: 'CSuccessfully.',
      description:
        "Contact service is currently down. Please contact thorugh email or contact number. Thank You",
      status: "info",
      // duration: 4000,
      isClosable: true,
      position: "top",
    });
    // console.log(darkMode);
  };

  console.log(process.env.SERVICE_ID);

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-title">
        Let's connect so that we could work together.
      </div>
      <div className="c-wrapper">
        <div className="c-left">
          <div className="c-item">
            <div className="c-info-item">
              <img src={phone} alt="" />
              <span>+91 9082732814</span>
            </div>
            <div className="c-info-item">
              <img src={address} alt="" />
              <span>Sanpada, Navi Mumbai, Maharashtra</span>
            </div>
            <div className="c-info-item">
              <img src={email} alt="" />
              <span>ogomkargavhane@gmail.com</span>
            </div>
          </div>
          <div className="c-info-item">
            <img src={linkedin} alt="" />
            <span>www.linkedin.com/in/omkar77</span>
          </div>
        </div>

        <div className="c-right">
          <form
            action=""
            className="c-contact"
            ref={formRef}
            onSubmit={handleSubmit}
            id="contact_form"
          >
            <input
              ref={user_name}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="Email" name="user_email" />
            <textarea
              type="text"
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button type="submit" className="contact_btn">
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
