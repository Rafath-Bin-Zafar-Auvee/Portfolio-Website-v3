import React from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bxyz292",
        "template_66cbsae",
        e.target,
        "236udK2u7CF43YT5D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="mt-60 pb-60"  id="contact">
      <div className="contact-1 py-4 md:py-12">
        <div className="container mx-auto px-4">
          <div className="xl:flex -mx-4">
            <div className="xl:w-10/12 xl:mx-auto px-4">
              <div className="xl:w-3/4 mb-4">
                <h1 className="text-3xl text-medium mb-4">
                  I would love to hear from you
                </h1>
                <p className="text-xl mb-2">
                  Please submit your information and I will get back to you.
                </p>
                <p>
                  Call us at{" "}
                  <a
                    href="tel:+8801764951051"
                    className="text-indigo-600 border-b border-transparent hover:border-indigo-600 transition-colors duration-300"
                  >
                    +8801764951051
                  </a>
                </p>
              </div>

              <div className="md:flex md:-mx-4 mt-4 md:mt-10">
                <div className="md:w-2/3 md:px-4">
                  <div className="contact-form">
                    <div className="sm:flex sm:flex-wrap -mx-3">
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        />
                      </div>
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="text"
                          placeholder="Company Name"
                          className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        />
                      </div>
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="text"
                          placeholder="E-mail address"
                          className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        />
                      </div>
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        />
                      </div>
                      <div className="sm:w-full px-3">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Your message here"
                          className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-right mt-4 md:mt-12">
                      <button className="border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                        Send a Message
                        <i className="fas fa-chevron-right ml-2 text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 md:px-4 mt-10 md:mt-0">
                  <div className="bg-indigo-100 rounded py-4 px-6">
                    <h5 className="text-xl font-medium mb-3">Help</h5>
                    <p className="text-gray-700 mb-4">
                      Need help or have any query? Don't hesitate, you can
                      directly shoot me an{" "}
                      <a
                        href="mailto:rafath.auvee@gmail.com"
                        className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                      >
                        email
                      </a>{" "}
                      or call us at{" "}
                      <a
                        href="tel:+8801764951051"
                        className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                      >
                        +8801764951051
                      </a>
                    </p>
                    {/* <p className="text-gray-700">
                      You can move to{" "}
                      <a
                        href="#"
                        className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                      >
                        FAQs
                      </a>{" "}
                      or{" "}
                      <a
                        href="#"
                        className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                      >
                        Support
                      </a>{" "}
                      page to get more information about our site.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
