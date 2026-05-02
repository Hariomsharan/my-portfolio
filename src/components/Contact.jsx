import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const form = useRef();
  const container = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send. Please try again.");
        },
      );
  };

  useGSAP(
    () => {
      gsap.from(".contact-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 bg-dark"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="contact-item text-xs uppercase tracking-[0.5em] text-gold mb-16 font-bold">
          Connect
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT SIDE: INFO */}
          <div className="space-y-12">
            <h3 className="contact-item text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              Let's{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #fff" }}
              >
                Talk
              </span>
            </h3>

            <div className="contact-item space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                  Email
                </p>
                <a
                  href="mailto:sharanhariom2771@gmail.com"
                  className="text-2xl hover:text-gold transition-colors italic"
                >
                  sharanhariom2771@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                  Phone
                </p>
                <a
                  href="tel:+918269301525"
                  className="text-2xl hover:text-gold transition-colors"
                >
                  +91 8269301525
                </a>
              </div>

              <div className="flex gap-8 pt-6 border-t border-white/10">
                <a
                  href="www.linkedin.com/in/hariom-sharan-103609204"
                  className="text-[10px] uppercase tracking-[0.3em] hover:text-gold transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Hariomsharan"
                  className="text-[10px] uppercase tracking-[0.3em] hover:text-gold transition-colors"
                >
                  GitHub
                </a>
                {/* <a
                  href="#"
                  className="text-[10px] uppercase tracking-[0.3em] hover:text-gold transition-colors"
                >
                  Instagram
                </a> */}
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-item space-y-6 bg-soft/10 p-8 md:p-12 border border-white/5 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-white/5 border-b border-white/20 p-3 focus:border-gold outline-none transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-white/5 border-b border-white/20 p-3 focus:border-gold outline-none transition-all text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-white/5 border-b border-white/20 p-3 focus:border-gold outline-none transition-all text-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gold text-black uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-white transition-all duration-500"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-[10px] uppercase tracking-widest text-gold mt-4">
                {status}
              </p>
            )}
          </form>
        </div>

        <p className="contact-item mt-32 text-center text-[8px] uppercase tracking-[1em] text-gray-600">
          Built with Precision • Hariom Sharan 2026
        </p>
      </div>
    </section>
  );
};

export default Contact;
