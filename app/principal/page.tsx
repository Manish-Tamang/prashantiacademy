export default function Principal() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Message from Our Principal</h1>

      <div className="border border-gray-200 p-6">
        <div className="relative">
          <div className="float-right ml-6 mb-4">
            <img 
              src="/images/principal.jpg" 
              alt="Principal Samir Bastola" 
              className="w-32 h-32 object-cover rounded-lg border border-gray-200"
              draggable={false}
              style={{ userSelect: 'none' }}
            />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Samir Bastola</h2>
          <p className="text-gray-600 mb-4">Principal, Prashanti Academy</p>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Dear Students, Parents, and Community Members,</p>
            <p>
              It is my great pleasure to welcome you to Prashanti Academy. As principal, I am honored to lead an
              institution that has been dedicated to educational excellence since 2061 B.S.
            </p>
            <p>
              At Prashanti Academy, we believe that every student has the potential to achieve greatness. Our dedicated
              faculty and staff work tirelessly to create an environment where students can explore their interests,
              develop their talents, and prepare for their future endeavors.
            </p>
            <p>
              We offer a comprehensive curriculum that challenges students academically while providing opportunities for
              personal growth through extracurricular activities, community service, and leadership development. Our goal
              is to graduate well-rounded individuals who are prepared for success in their future endeavors.
            </p>
            <p>
              I encourage you to explore our website to learn more about the many opportunities available at Prashanti
              Academy. If you have any questions or would like to schedule a visit, please don't hesitate to contact
              our office.
            </p>
            <p>Together, we can ensure that every student reaches their full potential.</p>
            <p className="font-bold">
              Sincerely,
              <br />
              Samir Bastola
              <br />
              Principal
            </p>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Born on 14th March in Jhapa, Nepal</li>
          <li>• Currently living in Kathmandu, Nepal</li>
          <li>• Hails from Jhapa, Nepal</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Positions</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Principal at Prashanti Academy (since 2063 B.S.)</li>
          <li>• Chief Advisor at City Montessori Anamnagar Kathmandu</li>
          <li>• District Committee Vice Chairman at Npabsan Kathmandu</li>
          <li>• Executive Chairperson at International Nature Loving Association (INLA Ohio)</li>
          <li>• Promotional Icon at Asian Heritage Inn & Bistro</li>
          <li>• Advisor/Program Head at LEADS Nepal</li>
          <li>• Coordinator Education committee at Texas saving and credit co-operative LTD</li>
          <li>• Academic director at Rachana Academy</li>
          <li>• Advisor at Pabsok Kathmandu</li>
          <li>• Managing Director at Lakhanpur Education Foundation</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Previous Experience</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Former Committee Member at बू.न.पा -शिक्षा शाखा Budhanilkantha Municipality-Education section</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Master's degree from Kathmandu University</li>
        </ul>
      </section>
    </div>
  )
}
