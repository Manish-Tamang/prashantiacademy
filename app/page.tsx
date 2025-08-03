import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Prashanti Academy</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          <span className="italic">Prashanti Academy</span>, which was originally established in 2061 B.S as Prashanti Shikshya Sadan
          and later renamed to Prashanti Academy, is led by Principal <span className="font-bold gray-100 hover:underline decoration-wavy"> <a href="https://www.facebook.com/samir.bastola.1">Samir Bastola</a> </span>. The school's motto,
          "Quality Education, Our Commitment," resonates throughout its classes from playgroup
          to Grade 10.
        </p>
        <p className="text-gray-700 leading-relaxed">
          and its dedication to excellence has earned it numerous awards in the field of education. Prashanti Academy is located in the vibrant city of Kathmandu, specifically in the Kapan area at Tenjing Chowk, Nepal.
        </p>
      </section>
      <Image src="/namaste.jpg" alt="Prashanti Academy" width={800} height={400} draggable={false} style={{ userSelect: 'none' }} />
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Empowering Students for Success: Comprehensive Services Offered by Our School</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our school is dedicated to empowering students through a comprehensive range of services that extend beyond academics. We believe in nurturing well-rounded individuals who are equipped with the skills and support they need for success in both their educational journey and in life beyond the school walls.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Education Programs</h3>
            <p className="text-gray-700 text-sm">
              We offer a variety of educational programs for students, ranging from pre-school to high school. Our curriculum is designed to provide a well-rounded education and to meet the diverse needs of our students.
            </p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Qualified Teachers</h3>
            <p className="text-gray-700 text-sm">
              Our school employs highly qualified and experienced teachers who are dedicated to providing quality education and fostering a positive learning environment.
            </p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Extracurricular Activities</h3>
            <p className="text-gray-700 text-sm">
              We offer a wide range of extracurricular activities, including sports, clubs, and arts programs, to encourage students to explore their interests and develop important life skills beyond academics.
            </p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Counseling Services</h3>
            <p className="text-gray-700 text-sm">
              We have counseling services available to support the social and emotional well-being of our students. Our counselors provide guidance, support, and resources to address students' personal and academic challenges.
            </p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Library and Learning Resources</h3>
            <p className="text-gray-700 text-sm">
              Our school maintains a well-equipped library and provides access to digital resources, helping students with research, studying, and reading.
            </p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Technology Integration</h3>
            <p className="text-gray-700 text-sm">
              We incorporate technology into our teaching methods and offer computer labs to enhance students' digital literacy and skills.
            </p>
          </div>
        </div>

        <div className="border border-gray-200 p-4 rounded">
          <h3 className="font-bold text-gray-900 mb-2">Transportation</h3>
          <p className="text-gray-700 text-sm">
            Our school may provide transportation services to ensure students' safe and reliable commute to and from school.
          </p>
        </div>
      </section>

      <section>
        <Image src="/sir.jpg" alt="Prashanti Academy" width={800} height={400} draggable={false} style={{ userSelect: 'none' }} />
      </section>
    </div>
  )
}
