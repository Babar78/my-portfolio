import React, { useRef, useState } from "react";
import CustomInput from "../../components/customInput/CustomInput";
import CustomTextArea from "../../components/customTextArea/CustomTextArea";

// To Scroll to this Element on NavbarButton Click
import { Element } from "react-scroll";

// Send Email Functionality
import emailjs from "@emailjs/browser";

// Import BackDrop
import BackDrop from "../../components/backDrop/BackDrop";

// Form Submitted Successfully Snackbar
import SnackBar from "../../components/snackBar/SnackBar";

function ContactUsSection() {
  // Show BackDrop on Form Submission
  const [showBackDrop, setShowBackDrop] = useState(false);

  // Show SnackBar on Form Submission
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  // Open Snackbar
  const openSnackbar = () => {
    setSnackbarOpen(true);
  };

  // Close Snackbar
  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  // use State to store the form data
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // Function to update the form data
  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send Email Functionality
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // Show BackDrop
    setShowBackDrop(true);

    emailjs
      .sendForm(
        "bartistry_contactUs_form",
        "contactUs_template",
        form.current,
        "uL8SYgTiJR2LFJ1mz"
      )
      .then(
        (result) => {
          console.log(result.text);

          // Stop Showing BackDrop
          setShowBackDrop(false);

          // Show SnackBar
          openSnackbar();

          // Clear the form data after successful submission
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Element name="contact" id="Contact">
      <section className="contactUsSection">
        <div className="md:py-[100px] sm:py-[50px] pt-[50px] pb-[100px]">
          <div className="content_container">
            <div className="flex gap-20 justify-center">
              <div className="p-10 w-[600px] bg-gradient-to-tl from-[#1e1e1e] to-black rounded-[10px] formDiv">
                <p className="uppercase fz-28 text-[#b91813]">get in touch</p>
                <h2 className="fz-48 text-white mb-10">Contact Us!</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <CustomInput
                    label={"Your Name:"}
                    name={"user_name"}
                    type={"text"}
                    placeholder={"Enter Your Name"}
                    value={formData.user_name}
                    onChange={updateFormData}
                  />
                  <CustomInput
                    label={"Your Email:"}
                    name={"user_email"}
                    type={"email"}
                    placeholder={"Enter Your Email"}
                    value={formData.user_email}
                    onChange={updateFormData}
                  />
                  <CustomTextArea
                    label={"Your Message:"}
                    name={"message"}
                    placeholder={"Type Your Message Here!"}
                    value={formData.message}
                    onChange={updateFormData}
                  />
                  <button
                    type="submit"
                    className="btn float-right mt-5 bg-black border-[1px] border-white rounded-[5px] text-white w-[165px] h-[50px] flex justify-center items-center"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="w-fit flex flex-col justify-between infoDiv">
                <div className="location-Div">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.5656634607326!2d72.99042607621642!3d33.64250211776163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df967686954da9%3A0x34436c99dba44537!2sNUST%20School%20of%20Electrical%20Engineering%20and%20Computer%20Science%20(NUST-SEECS)!5e0!3m2!1sen!2s!4v1698970470405!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{
                      border: 0,
                      borderRadius: "10px",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackDrop state={showBackDrop} />

        <SnackBar open={snackbarOpen} onClose={closeSnackbar} />
      </section>
    </Element>
  );
}

export default ContactUsSection;
