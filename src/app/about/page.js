export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-5xl font-bold mb-4 text-center text-gray-800">About Climate Mapper</h1>
        <p className="mb-6 text-lg text-gray-700 text-center">
          The Climate Mapper explores how advanced technology and reforestation can combat climate
          change. Our mission is to establish a healthier, greener world through mapping and public
          engagement.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Our Team</h2>
        <ul className="list-disc list-inside text-left mx-auto max-w-lg">
          <li className="text-lg text-gray-700">Jannatul Ferdousi - Team Leader</li>
          <li className="text-lg text-gray-700">Akib Us Suny Eshan - System Architect</li>
          <li className="text-lg text-gray-700">Sabbir Hossain - Web Developer</li>
          <li className="text-lg text-gray-700">Amimul Ahsan - Video Editor</li>
          <li className="text-lg text-gray-700">Tanvir - Video Editor</li>
          <li className="text-lg text-gray-700">Arpita Das Chaity - UI/UX Designer</li>
        </ul>
      </div>
    </div>
  );
}
