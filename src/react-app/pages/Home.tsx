import {
  Smartphone,
  GraduationCap,
  ScanFace,
  Video,
  Bot,
  Phone,
  Mail,
  Menu,
  X,
  Check,
  BookOpen,
  MessageCircle,
  ArrowRight,
  Star,
  LayoutDashboard,
  Users,
  Presentation,
  Wallet,
  TrendingUp,
  UsersRound,
  Award,
  MessagesSquare,
  BookMarked,
  Package,
  Bus,
  Building2,
  BarChart3,
  Sliders,
  Printer,
  BookOpenCheck,
  CalendarDays,
  CalendarX,
  MonitorCheck,
  ClipboardList,
  ShieldCheck,
  HardDrive,
  MessageSquare,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: LayoutDashboard,
      title: "Admin Module",
      description:
        "Complete administrative control panel for managing all school operations",
    },
    {
      icon: Users,
      title: "Student Info",
      description:
        "Detailed student profiles with admission, records, and progress tracking",
    },
    {
      icon: Presentation,
      title: "Teacher",
      description:
        "Teacher management with profiles, qualifications, and performance tracking",
    },
    {
      icon: Wallet,
      title: "Fees Collection",
      description:
        "Automated fee collection, receipts, and payment tracking system",
    },
    {
      icon: TrendingUp,
      title: "Accounts",
      description:
        "Complete accounting module for financial management and reporting",
    },
    {
      icon: UsersRound,
      title: "Human Resource",
      description:
        "Staff management, payroll, attendance, and leave administration",
    },
    {
      icon: Award,
      title: "Examination",
      description: "Exam scheduling, grade management, and result processing",
    },
    {
      icon: BookOpen,
      title: "Academics",
      description:
        "Curriculum planning, timetable management, and academic calendar",
    },
    {
      icon: MessagesSquare,
      title: "Communication",
      description:
        "Multi-channel communication between parents, teachers, and students",
    },
    {
      icon: BookMarked,
      title: "Library",
      description:
        "Library management with book inventory, issuing, and tracking",
    },
    {
      icon: Package,
      title: "Inventory",
      description:
        "School asset and inventory management with tracking and reporting",
    },
    {
      icon: Bus,
      title: "Transport",
      description:
        "Transport management with route planning and vehicle tracking",
    },
    {
      icon: Building2,
      title: "Dormitory",
      description:
        "Hostel and dormitory management with room allocation and tracking",
    },
    {
      icon: BarChart3,
      title: "Reports",
      description: "Comprehensive reporting system with customizable analytics",
    },
    {
      icon: Sliders,
      title: "System Settings",
      description:
        "Flexible configuration options to customize the system to your needs",
    },
    {
      icon: Printer,
      title: "Bulk Print",
      description: "Mass printing of reports, certificates, and documents",
    },
    {
      icon: BookOpenCheck,
      title: "Study Material",
      description: "Digital study material repository and distribution system",
    },
    {
      icon: CalendarDays,
      title: "Lesson Plan",
      description: "Teacher lesson planning and curriculum delivery tracking",
    },
    {
      icon: CalendarX,
      title: "Leave",
      description: "Leave management system for staff and students",
    },
    {
      icon: MessageCircle,
      title: "Chat",
      description: "Real-time messaging and collaboration platform",
    },
    {
      icon: MonitorCheck,
      title: "Online Exam",
      description: "Digital examination platform with automated grading",
    },
    {
      icon: ClipboardList,
      title: "Homework",
      description: "Homework assignment, submission, and evaluation system",
    },
    {
      icon: ShieldCheck,
      title: "Role & Permission",
      description: "Granular access control and user permission management",
    },
    {
      icon: HardDrive,
      title: "Backup",
      description:
        "Automated data backup and recovery system for data security",
    },
  ];

  const benefits = [
    "Streamline administrative tasks and reduce paperwork by 80%",
    "Improve parent-teacher communication with built-in messaging",
    "Track student performance with detailed analytics",
    "Manage fees, payroll, and accounting in one system",
    "Mobile app access for parents, teachers, and students",
    "Customizable workflows to match your school processes",
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Asylinx
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#advanced-features"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Adv. Features
              </a>
              <a
                href="#benefits"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Benefits
              </a>
              <a
                href="https://school.asylinx.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Demo
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Contact
              </a>
              <a
                href="tel:+916003432625"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#features"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#advanced-features"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Adv. Features
              </a>
              <a
                href="#benefits"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Benefits
              </a>
              <a
                href="https://school.asylinx.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Demo
              </a>
              <a
                href="#contact"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Contact
              </a>
              <a
                href="tel:+916003432625"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">Call Now</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 min-w-0">
              <div className="inline-block">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-2xl sm:rounded-2xl text-sm font-semibold">
                  Complete School Management System
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight break-words">
                Transform Your
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  School Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Asylinx is the complete ERP solution designed to streamline
                every aspect of school administration, from student management
                to financial operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+916003432625"
                  className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 (600) 3432625</span>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    50+ Schools
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-gray-600 font-medium ml-2">
                    4.9/5 Rating
                  </span>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-4 rounded-3xl border border-white/20 shadow-2xl">
                <img
                  src="/hero.png"
                  alt="School Management"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div
                className="absolute bottom-0 right-4 translate-y-1/2
  bg-white rounded-2xl shadow-xl px-5 py-3
  flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600 stroke-[3]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-sm text-gray-600">Cloud Based</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Modules Section */}
      <section
        id="premium-modules"
        className="py-20 px-4 sm:px-6 lg:px-8 
             bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 
             rounded-3xl mx-4 sm:mx-8 lg:mx-16 mt-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Premium Add-Ons
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Premium Modules
              <span className="block text-purple-300">
                Take Your School to the Next Level
              </span>
            </h2>

            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Unlock advanced capabilities with our premium integrations
              designed for forward-thinking institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                Branded Mobile App
              </h3>

              <p className="text-purple-200 text-sm mb-4">
                Your School in Your Pocket — Available on Android & iOS
              </p>

              <ul className="space-y-2 text-purple-300 text-sm">
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Students: View routines, download materials, submit homework
                  </span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Parents: Real-time push notifications & attendance alerts
                  </span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Teachers: Mark attendance in 30 seconds, evaluate on-the-go
                  </span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Unified Payment Gateway: UPI, Credit Card, Netbanking
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                Learning Management System
              </h3>

              <p className="text-purple-200 text-sm mb-4">
                Turn Your School into a 24/7 Digital Learning Hub
              </p>

              <ul className="space-y-2 text-purple-300 text-sm">
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Interactive Course Management with video lessons & quizzes
                  </span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Personalized learning paths based on student performance
                  </span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Automated evaluation saves teachers hours weekly</span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Hybrid learning environment like international universities
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <ScanFace className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                Smart Biometric & Face ID
              </h3>

              <p className="text-purple-200 text-sm mb-4">
                The Ultimate Security Upgrade with 100% Accuracy
              </p>

              <ul className="space-y-2 text-purple-300 text-sm">
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Multi-Mode: Face ID, Fingerprint & RFID Smart Cards
                  </span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Anti-Proxy Technology eliminates buddy punching</span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Real-time "Safe Arrival" alerts for parents</span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Enterprise-grade hardware included & installed</span>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Video className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                In-App Live Class
              </h3>

              <p className="text-purple-200 text-sm mb-4">
                A Private, Secure Classroom in the Cloud
              </p>

              <ul className="space-y-2 text-purple-300 text-sm">
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>100% privacy — only registered students can join</span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Virtual Whiteboard, Screen Sharing & "Raise Hand"</span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Smart auto-attendance based on login duration</span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>No external apps, no Zoom bombing risks</span>
                </li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                WhatsApp Integration
              </h3>

              <p className="text-purple-200 text-sm mb-4">
                Communication That Parents Actually Read — 98% Open Rate
              </p>

              <ul className="space-y-2 text-purple-300 text-sm">
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Automated fee reminders & absentee alerts</span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Support Bubble for instant parent-admin queries</span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Rich media messages with images & PDFs</span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Reduces phone call volume at reception</span>
                </li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Bot className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                AI Content Assistant
              </h3>

              <p className="text-purple-200 text-sm mb-4">
                Empower Your Teachers & Students with the Speed of AI
              </p>

              <ul className="space-y-2 text-purple-300 text-sm">
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Generate Lesson Plans & Quizzes in seconds</span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Multi-language: English, Hindi & regional languages
                  </span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Professional tone for all communications</span>
                </li>

                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Reduce tedious content creation burden</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-white text-purple-700 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Enquire About Premium Modules</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features for
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Modern Schools
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your institution efficiently in one
              comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-purple-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="product" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Intuitive Dashboard
                <span className="block text-purple-300">
                  Built for Efficiency
                </span>
              </h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Experience a powerful, user-friendly interface designed to
                simplify complex school operations
              </p>
            </div>

            <div className="relative overflow-hidden w-full max-w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-4 rounded-3xl border border-white/20 shadow-2xl">
                <img
                  src="/hero.png"
                  alt="Asylinx Dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20,453</div>
                <div className="text-purple-200">Students Managed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2,150</div>
                <div className="text-purple-200">Teachers Onboard</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-purple-200">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section id="advanced-features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced Capabilities
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Built Right In
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade features to power your school's digital
              transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    SMS Notification
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Instant SMS alerts to parents and staff for important
                    updates
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    Email Notification with Templates
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Professional email templates for automated communications
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    Optimized Performance
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Lightning-fast response times for seamless user experience
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MonitorCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    One Click Update System
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Effortless updates with zero downtime or technical hassle
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Printer className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    Printable Reports
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Generate professional printable reports for all modules
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    Multi Lingual
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Support for multiple languages to serve diverse communities
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    Fully Responsive
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Perfect experience on desktop, tablet, and mobile devices
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HardDrive className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    Inbuilt Backup Tool
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Automated backups to keep your data safe and secure
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    Activity & Email Log
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Complete audit trail of all system activities and
                    communications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Schools Choose
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Asylinx
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of institutions that have revolutionized their
                operations with Asylinx
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-3xl opacity-30"></div>

              <div className="relative bg-white/10 backdrop-blur-lg p-4 rounded-3xl border border-white/20 shadow-2xl">
                <img
                  src="/hero.png"
                  alt="School Management"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-4 translate-y-1/2 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600 stroke-[3]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-sm text-gray-600">Cloud Based</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl shadow-2xl px-6 py-10 sm:p-12 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Get in touch with our team to schedule a personalized demo and see
              Asylinx in action
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center w-full">
              <a
                href="tel:+916003432625"
                className="group w-full sm:w-auto bg-white text-purple-600 px-6 sm:px-8 py-4 rounded-2xl sm:rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-purple-400">Call us now</div>
                  <div className="text-lg font-bold">+91 (600) 3432-625</div>
                </div>
              </a>
              <a
                href="mailto:contact@asylinx.com"
                className="group w-full sm:w-auto bg-white/10 backdrop-blur-lg text-white px-6 sm:px-8 py-4 rounded-2xl sm:rounded-2xl font-semibold border-2 border-white/30 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Mail className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-purple-200">Email us</div>
                  <div className="text-lg font-bold">contact@asylinx.com</div>
                </div>
              </a>
            </div>
            <a
              href="https://wa.me/+916003432625"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full sm:rounded-full transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Or chat with us using whatsapp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-2xl font-bold">Asylinx</span>
              </div>
              <div className="max-w-sm">
                <p className="text-gray-400 mb-4">
                  The most comprehensive school management ERP solution trusted
                  by educational institutions worldwide.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#advanced-features"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Adv. Features
                  </a>
                </li>
                <li>
                  <a
                    href="https://school.asylinx.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/about"
                    className="hover:text-purple-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <a
                    href="tel:+916003432625"
                    className="hover:text-purple-400 transition-colors"
                  >
                    +91 (600) 3432-625
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <a
                    href="mailto:contact@asylinx.com"
                    className="hover:text-purple-400 transition-colors"
                  >
                    contact@asylinx.com
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="hover:text-purple-400 transition-colors">
                    GS Road, Guwahati, Assam
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2026 Asylinx. All rights reserved. Empowering Education
              Through Technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
