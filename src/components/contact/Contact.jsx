import "./contact.css";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
//
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
    e.preventDefault();

    let name = user_name.current.value;
    let email = user_email.current.value;
    let subject = user_subject.current;
    let msg = message.current.value;

    // console.log(email);
    // if (email && name && msg && subject !== (null || "")) {
    //   console.log("sent");
    // } else {
    //   console.log("not sent");
    // }

    if (email && name && msg && subject !== (null || "")) {
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
            toast({
              description:
                "Thank you for contacting. I'll reach out to you soon.",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
            user_name.current.value = null;
            user_email.current.value = null;
            user_subject.current.value = null;
            message.current.value = null;
          },
          (error) => {
            console.log(error.text);
            toast({
              description:
                "Unable to contact. Please try directly through mobile number or email address.",
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
            user_name.current.value = null;
            user_email.current.value = null;
            user_subject.current.value = null;
            message.current.value = null;
          }
        );
    } else {
      toast({
        description: "Please enter all details !",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      user_name.current.value = null;
      user_email.current.value = null;
      user_subject.current.value = null;
      message.current.value = null;
    }
  };

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
              <CallIcon />
              <span>+91 9082732814</span>
            </div>
            <div className="c-info-item">
              <HomeIcon />
              <span>Sanpada, Navi Mumbai, Maharashtra</span>
            </div>
            <div className="c-info-item">
              <EmailIcon />
              <span>ogomkargavhane@gmail.com</span>
            </div>
            <div className="c-info-item">
              <LinkedInIcon />
              <span>omkar77</span>
            </div>
            <div className="c-info-item">
              <GitHubIcon />
              <span>omkargavhane11</span>
            </div>
          </div>
        </div>

        <div className="c-right">
          <form
            action=""
            className={darkMode ? "c-contact-dark" : "c-contact"}
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
            <input
              ref={user_subject}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              ref={user_email}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              type="text"
              rows="5"
              placeholder="Message"
              name="message"
              ref={message}
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
