import React from "react";
import CustomInput from "../../components/customInput/CustomInput";
import CustomTextArea from "../../components/customTextArea/CustomTextArea";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailIcon from "@mui/icons-material/Email";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactUsSection() {
  return (
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
                <div className="flex gap-2 items-center mt-5">
                  <LocationOnRoundedIcon className="dark:text-gray-500" />
                  <p className="dark:text-gray-500 p-0 m-0 fz-14">
                    JXVR+25F, Indus Loop, H-12, Islamabad, Islamabad Capital
                    Territory, Pakistan
                  </p>
                </div>
                <div className="flex gap-2 items-center mt-3">
                  <EmailIcon className="dark:text-gray-500" />
                  <p className="dark:text-gray-500 p-0 m-0 fz-14">
                    muhammadbabarashraf8@gmail.com
                  </p>
                </div>
              </div>
              <div className="follow-Div">
                <h4 className="mb-4">Follow Me!</h4>
                <div className="flex gap-8">
                  <a
                    href="https://www.linkedin.com/in/mbabarashraf/"
                    target="_blank"
                  >
                    <LinkedInIcon
                      className="text-white"
                      style={{
                        fontSize: "2.5rem",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.behance.net/muhammad_babar"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="2.5em"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M186.5 293c0 19.3-14 25.4-31.2 25.4h-45.1v-52.9h46c18.6.1 30.3 7.8 30.3 27.5zm-7.7-82.3c0-17.7-13.7-21.9-28.9-21.9h-39.6v44.8H153c15.1 0 25.8-6.6 25.8-22.9zm132.3 23.2c-18.3 0-30.5 11.4-31.7 29.7h62.2c-1.7-18.5-11.3-29.7-30.5-29.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM271.7 185h77.8v-18.9h-77.8V185zm-43 110.3c0-24.1-11.4-44.9-35-51.6 17.2-8.2 26.2-17.7 26.2-37 0-38.2-28.5-47.5-61.4-47.5H68v192h93.1c34.9-.2 67.6-16.9 67.6-55.9zM380 280.5c0-41.1-24.1-75.4-67.6-75.4-42.4 0-71.1 31.8-71.1 73.6 0 43.3 27.3 73 71.1 73 33.2 0 54.7-14.9 65.1-46.8h-33.7c-3.7 11.9-18.6 18.1-30.2 18.1-22.4 0-34.1-13.1-34.1-35.3h100.2c.1-2.3.3-4.8.3-7.2z" />
                    </svg>
                  </a>
                  <a href="https://dribbble.com/Babar_Ashraf" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="2.5em"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
