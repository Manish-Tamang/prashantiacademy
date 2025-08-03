export default function Contact() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold text-gray-900">Address</h3>
              <p>
                Tenzing Chowk, Budhanilkantha‑12 (Kapan area)
                <br />
                Kathmandu, Nepal
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Phone</h3>
              <p>01 4821903</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Email</h3>
              <p>pss.school@gmail.com</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Office Hours</h3>
              <p>
                Monday to Friday: 09:00–17:00
                <br />
                Saturday: Closed
                <br />
                Sunday: 09:00–17:00
              </p>
            </div>
          </div>
        </section>

        <section>
          {/* <h2 className="text-2xl font-bold text-gray-900 mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Send Message
            </button>
          </form> */}
                     <iframe
             title="Google Maps"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.567302752287!2d85.35625827629723!3d27.730643076169326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1be0a4630b31%3A0x9d8468f7b2b81ad3!2sTap%20to%20rename!5e0!3m2!1sen!2snp!4v1700566409728!5m2!1sen!2snp"
             width="500"
             height="450"
             style={{ border: 0 }}
             allowFullScreen={true}
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </section>
      </div>

      <section>
        {/* <h2 className="text-2xl font-bold text-gray-900 mb-4">Department Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 mb-2">Main Office</h3>
            <p className="text-gray-700 text-sm">
              Phone: 01 4821903
              <br />
              Email: info@prashantiacademy.edu.np
            </p>
          </div>
          <div className="border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 mb-2">Admissions</h3>
            <p className="text-gray-700 text-sm">
              Phone: 01 4821903
              <br />
              Email: admissions@prashantiacademy.edu.np
            </p>
          </div>
          <div className="border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 mb-2">Principal's Office</h3>
            <p className="text-gray-700 text-sm">
              Phone: 01 4821903
              <br />
              Email: principal@prashantiacademy.edu.np
            </p>
          </div>
          <div className="border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 mb-2">Academic Office</h3>
            <p className="text-gray-700 text-sm">
              Phone: 01 4821903
              <br />
              Email: academic@prashantiacademy.edu.np
            </p>
          </div>
        </div> */}
      </section>
    </div>
  )
}
