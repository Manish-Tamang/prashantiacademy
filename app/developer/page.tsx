import Image from "next/image";

export default function Developer() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Website Developer</h1>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Developer</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Manish Tamang</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Age:</strong> 17 years old</p>
              <p><strong>Location:</strong> Kathmandu, Nepal</p>
              <p><strong>Education:</strong> Grade-10 Student at Prashanti Academy (2080 B.S/2023)</p>
              <p><strong>Status:</strong> SEE Passed (last update: 2081/01/13)</p>
              <p><strong>Portfolio:</strong> <a href="https://www.manishtamang.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">www.manishtamang.com</a></p>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            I'm Manish Tamang, a 17-year-old from Kathmandu, Nepal, with a fervent passion for web development. 
            My journey in the world of coding began at a young age, and I've immersed myself in creating captivating 
            websites using React, Next.js, and Tailwind CSS. My ambition is to evolve into a full-stack developer, 
            adept at both front-end and back-end development, enabling me to craft powerful and versatile web applications. 
            With every project, I'm honing my skills and knowledge, eager to embrace the dynamic landscape of technology 
            and make a meaningful impact.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Website</h2>
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
          <p className="text-yellow-800 text-sm font-medium">
            <strong>Important Note:</strong> This is not an official website of Prashanti Academy. 
            It's just made for showcase of students talent or a challenge given by Milan Sir to me to create 
            an entire website from scratch to motivate me and make the school's online presence more.
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          This website has been entirely created from scratch, with my sincere appreciation for the guidance and 
          assistance I received from various online tutorials, the invaluable support from ChatGPT, and the endless 
          help from the Stack Overflow community.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          I'd also like to extend my heartfelt thanks to Mr. Millan Kumar Sunuwar, our computer teacher, whose 
          sponsorship of the web hosting and domain made this project possible. His encouragement was the driving 
          force behind completing this project within a tight timeframe. Once again, thank you, Milan Sir, and 
          to all those who have consistently believed in and supported me.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Frontend Technology</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Next.js 14 with App Router</li>
              <li>• React 18 for component architecture</li>
              <li>• TypeScript for type safety</li>
              <li>• Tailwind CSS for styling</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Design Principles</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Clean, minimal design aesthetic</li>
              <li>• Mobile-responsive layout</li>
              <li>• Accessibility compliance (WCAG guidelines)</li>
              <li>• Fast loading performance</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Features</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Responsive navigation system</li>
              <li>• Dynamic news and articles with slug routing</li>
              <li>• Contact form with validation</li>
              <li>• Photo gallery with organized layout</li>
              <li>• Multi-language support (Nepali/English)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Development Information</h2>
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold text-gray-900">Project Timeline</h3>
              <p className="text-sm">Development completed in January 2025</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Maintenance</h3>
              <p className="text-sm">Regular updates and security patches applied monthly</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Browser Support</h3>
              <p className="text-sm">Compatible with all modern browsers including Chrome, Firefox, Safari, and Edge</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Performance</h3>
              <p className="text-sm">Optimized for fast loading with image compression and efficient code structure</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Thanks</h2>
        <div className="border border-gray-200 p-6 rounded-lg bg-gray-50">
          <h3 className="font-bold text-gray-900 mb-3">Acknowledgments</h3>
          <div className="space-y-3 text-gray-700">
            <p className="text-sm">
              <strong>Mr. Millan Kumar Sunuwar</strong> - Computer Teacher at Prashanti Academy<br />
              For sponsoring web hosting and domain, and providing continuous encouragement throughout the project.
            </p>
            <p className="text-sm">
              <strong>Online Learning Resources</strong><br />
              Various tutorials, ChatGPT, and the Stack Overflow community for technical guidance and support.
            </p>
            <p className="text-sm">
              <strong>Prashanti Academy</strong><br />
              For providing the opportunity to work on this meaningful project for my school.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
