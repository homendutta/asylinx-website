import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <nav className="bg-white/90 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Asylinx
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          About Asylinx
        </h1>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6">
          <p className="text-xl text-gray-700 leading-relaxed">
            Asylinx is a comprehensive school management ERP solution designed
            to streamline educational institutions' administrative tasks and
            enhance communication between all stakeholders.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Founded with a vision to transform the way schools operate, Asylinx
            brings together decades of educational experience and cutting-edge
            technology to deliver a platform that truly understands the needs of
            modern educational institutions.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 pt-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To empower educational institutions with innovative technology that
            simplifies administration, enhances learning outcomes, and fosters
            better communication between teachers, students, and parents.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 pt-6">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be the leading school management platform that transforms
            education worldwide by making administrative excellence accessible
            to every institution, regardless of size or resources.
          </p>
        </div>
      </div>
    </div>
  );
}
