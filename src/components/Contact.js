// Contact.js
export default function Contact() {
    return (
        <section id="contact" className="my-20 px-10 w-full max-w-5xl mx-auto">
            <h2 className="text-5xl text-emerald-500 font-bold text-center">
                Contact Me
            </h2>
            <div className="mt-10 text-center space-y-4">
                <p>
                  You can reach me at{" "}
                  <a href="mailto:kunalnepali123456@gmail.com" className="font-bold text-emerald-700 underline">
                    kunalnepali123456@gmail.com
                  </a>
                </p>
                <p>
                  Phone: <strong>+977 9860357158</strong>
                </p>
                <p>Let’s collaborate and build something great together.</p>
            </div>
        </section>
    );
}
