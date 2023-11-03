import React from "react";
import CustomInput from "../../components/customInput/CustomInput";
import CustomTextArea from "../../components/customTextArea/CustomTextArea";

// To Scroll to this Element on NavbarButton Click
import { Element } from "react-scroll";


function ContactUsSection() {
  return (
    <Element name="contact">
      <section className="contactUsSection">
        <div className="py-[100px]">
          <div className="content_container">
            <div className="flex gap-20 justify-center">
              <div className="p-10 w-[600px] bg-gradient-to-tl from-[#1e1e1e] to-black rounded-[10px] formDiv">
                <p className="uppercase fz-28 text-[#b91813]">get in touch</p>
                <h2 className="fz-48 text-white mb-10">Contact Us!</h2>
                <form action="#">
                  <CustomInput
                    label={"Your Name:"}
                    type={"text"}
                    placeholder={"Enter Your Name"}
                  />
                  <CustomInput
                    label={"Your Email:"}
                    type={"email"}
                    placeholder={"Enter Your Email"}
                  />
                  <CustomTextArea
                    label={"Your Message:"}
                    placeholder={"Type Your Message Here!"}
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
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default ContactUsSection;
