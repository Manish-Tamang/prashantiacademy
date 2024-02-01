import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

// const ArrowIcon = (props) => {
//   return (
//     <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
//       <path
//         fill="currentColor"
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M16 3 10 .5v2H0v1h10v2L16 3Z"
//       />
//     </svg>
//   );
// };

// const NewsletterForm = () => {
//   return (
//     <form className="max-w-sm">
//       <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
//         Sign up for our newsletter
//       </h2>
//       <p className="mt-4 text-sm text-neutral-700">
//         Subscribe for the latest News and Updates.
//       </p>
//       <div className="relative mt-6">
//         <input
//           type="email"
//           placeholder="Email address"
//           autoComplete="email"
//           aria-label="Email address"
//           className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
//         />
//         <div className="absolute inset-y-1 right-1 flex justify-end">
//           <button
//             type="submit"
//             aria-label="Submit"
//             className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
//           >
//             <ArrowIcon className="w-4" />
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex lg:justify-end">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.567302752287!2d85.35625827629723!3d27.730643076169326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1be0a4630b31%3A0x9d8468f7b2b81ad3!2sTap%20to%20rename!5e0!3m2!1sen!2snp!4v1700566409728!5m2!1sen!2snp"
              width="500"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href={"/"} aria-label="Home">
            <Logo className="h-8" fillOnHover>
              प्रशान्ति एकेडेमी
            </Logo>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: "150px",
              overflow: "hidden",
            }}
          >
            <p
              className="text-xs text-neutral-700"
              style={{ overflow: "hidden" }}
            >
              <a href="/developer" title="Made with love by Manish Tamang">
                Project by Manish Tamang{" "}
              </a>
            </p>
          </div>

          <p className="text-sm text-neutral-700">
            © Prashanti Academy {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
