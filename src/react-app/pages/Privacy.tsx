import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <nav className="bg-white/90 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
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
          Privacy Policy
        </h1>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6">
          <p className="text-sm text-gray-500">
            Last updated: November 25, 2025
          </p>

          <h2 className="text-3xl font-bold text-gray-800 pt-6">
            Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Asylinx ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our school management
            platform.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 pt-6">
            Information We Collect
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We collect information that you provide directly to us, including
            but not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>
              Personal identification information (name, email address, phone
              number)
            </li>
            <li>
              Student and staff records as required for school administration
            </li>
            <li>Academic and attendance records</li>
            <li>Payment and financial information</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 pt-6">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>
              Send administrative information, updates, and security alerts
            </li>
            <li>
              Respond to your comments, questions, and provide customer service
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 pt-6">
            Data Security
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate technical and organizational security
            measures to protect your personal information. However, no method of
            transmission over the Internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 pt-6">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact
            us at contact@asylinx.com
          </p>
        </div>
      </div>
    </div>
  );
}
