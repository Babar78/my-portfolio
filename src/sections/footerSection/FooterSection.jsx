import React from "react";

import logo from "../../assets/images/logo/logo-small-white.png";

function FooterSection() {
  return (
    <footer className="footerSection">
      <div className="main_container_two bg-gradient-to-tl from-[#1e1e1e] to-black  mt-[100px]">
        <div className="content_container">
          <div className="ctaContainer relative">
            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-[1300px] min-h-[100px] m-auto py-[4rem] px-[5rem] bg-[#121213] rounded-[20px] flex justify-between items-center gap-10 ctaDiv">
              <h2>Start a Project</h2>
              <p className="w-[30%] text-center">
                Interested in working together? We should queue up a chat.
              </p>
              <button className=" bg-white text-[#b91813] w-[150px] h-[50px] flex justify-center items-center rounded-full">
                Let's do this
              </button>
            </div>
          </div>

          <div className="footer_content flex flex-col justify-center items-center pt-[100px] pb-5 gap-10">
            <div className="mt-[50px] flex flex-col gap-3 justify-center items-center">
              <img src={logo} alt="Logo" className="w-[50px]" />
              <p className="fz-16 text-center">
                Turning Ideas into Digital Masterpieces!
              </p>
            </div>
            <div className="social-handles-div flex gap-5">
              <a
                href="https://www.linkedin.com/in/mbabarashraf/"
                target="_blank"
                className="w-[50px] h-[50px] border-[1px] border-white hover:bg-white rounded-full text-white hover:text-black flex justify-center items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  className="fill-current"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <a
                href="https://www.behance.net/muhammad_babar"
                className="w-[50px] h-[50px] border-[1px] border-white hover:bg-white rounded-full text-white hover:text-black flex justify-center items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  viewBox="0 0 576 512"
                  className="fill-current"
                >
                  <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                </svg>
              </a>
              <a
                href="https://dribbble.com/Babar_Ashraf"
                className="w-[50px] h-[50px] border-[1px] border-white hover:bg-white rounded-full text-white hover:text-black flex justify-center items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" />
                </svg>
              </a>
            </div>
            <div className="copyright text-gray-600 fz-14">
              Hand crafted by me &#169; Babar Ashraf
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
