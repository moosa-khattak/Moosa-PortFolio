import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  async function handlerForm(e) {
    try {
      e.preventDefault();

      const updatedForm = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.msg.value,
      };

      setContactForm(updatedForm);

      const res = await axios.post("http://localhost:3000/Contactdata", {
        contactForm,
      });

      if (res.status === 200) {
        toast.success("Your Message is Successfully Submitted", {
          autoClose: 3000,
          position: "top-center",
          hideProgressBar: true,
          theme: "dark",
        });
        e.target.reset();
      } else {
        toast.error("SomeThing Went Wrong"),
          {
            autoClose: 2000,
            position: "top-center",
            hideProgressBar: true,
            theme: "dark",
          };
      }

      // console.log(contactForm);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <ToastContainer />
      <main className="bg-gray-900 min-h-screen text-gray-100 flex flex-col">
        <section className="max-w-5xl mx-auto w-full px-6 py-12">
          {/* Header */}
          <header className="text-center mb-14">
            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-blue-600 mb-3">
              Contact Me
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto text-lg sm:text-xl">
              Have questions or want to work together? Fill out the form below
              or reach me via social links.
            </p>
          </header>

          {/* Main grid: form + info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form
              onSubmit={handlerForm}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-6"
            >
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2 cursor-pointer"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2 cursor-pointer sm:flex items-center gap-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <label
                htmlFor="msg"
                className="block text-lg font-semibold mb-2 cursor-pointer"
              >
                Message
              </label>
              <textarea
                id="msg"
                name="msg"
                rows={5}
                placeholder="Write your message here..."
                required
                className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <button
                type="submit"
                className="self-start bg-blue-600 hover:bg-blue-700 transition-colors rounded-full px-8 py-3 font-semibold text-lg"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <aside className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-blue-500 mb-8">
                  Contact Information
                </h2>

                <div className="mb-8">
                  <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
                    <FaEnvelope className="text-blue-500" />
                    Email
                  </h3>
                  <a
                    href="mailto:moosakhattak333@gmail.com"
                    className="flex items-center gap-3 text-blue-400 hover:text-blue-600 transition-colors mb-8"
                  >
                    {/* <FaEnvelope className="text-3xl" /> */}
                    <span className="text-lg select-text">
                      moosakhattak333@gmail.com
                    </span>
                  </a>
                </div>

                <div className="mb-8">
                  <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
                    <FaMapMarkerAlt className="text-blue-500" />
                    Address
                  </h3>
                  <address className="not-italic text-blue-400 leading-relaxed text-lg">
                    Near to Agriculture <br />
                    University of Peshawar <br />
                    Peshawar, Pakistan
                  </address>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Social Links</h3>
                  <nav className="flex gap-6 text-4xl">
                    <a
                      href="https://wa.me/923181822395"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="hover:text-green-500 transition-colors"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100023486677225"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="hover:text-blue-700 transition-colors"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                      href="https://www.instagram.com/muhammadmoosa278?igsh=N3U0d2N0b3NqbWhk"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="hover:text-pink-600 transition-colors"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      href="https://twitter.com/your-twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="hover:text-sky-400 transition-colors"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammad-moosa-06a310293/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="hover:text-blue-500 transition-colors"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
