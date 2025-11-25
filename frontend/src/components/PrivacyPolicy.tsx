import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const sections = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Information" },
  { id: "who-can-see", title: "Who Can See Your Data" },
  { id: "data-storage", title: "Data Storage & Security" },
  { id: "your-rights", title: "Your Rights" },
  { id: "data-retention", title: "Data Retention" },
  { id: "third-party", title: "Third-Party Services" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );
      
      const currentSection = sectionElements.find((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#1B6CA8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h1 className="text-white tracking-wider mb-3 font-semibold">PRIVACY POLICY</h1>
          <p className="text-white">Last Updated: November 20, 2025</p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar - Contents */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24 bg-[#F5F8FA] rounded-lg p-6">
              <h2 className="text-[#1A1A1A] mb-5 font-semibold">Contents</h2>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left flex items-start gap-2.5 px-3 py-2.5 rounded-md transition-colors ${
                      activeSection === section.id
                        ? "bg-[#D1E9FF] text-[#1B6CA8]"
                        : "text-[#1A1A1A] hover:bg-gray-100"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="flex-1 max-w-3xl">
            <div className="space-y-8">
              {/* Intro */}
              <div className="space-y-4">
                <h2 className="text-[#1B6CA8] font-semibold">HostelCare Privacy Policy</h2>
                <p className="text-[#1A1A1A] leading-relaxed">
                  HostelCare ("we", "our", "us") is a mobile application designed for hostel and PG management. 
                  It enables guests to submit complaints and helps hostel owners manage issues across multiple hostel locations.
                </p>
                <p className="text-[#1A1A1A] leading-relaxed">
                  This Privacy Policy explains how we collect, use, and protect your information when you use our application.
                </p>
              </div>

              {/* Section 1: Information We Collect */}
              <section id="information-we-collect" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  1. Information We Collect
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed mb-6">
                  We collect only the minimum information required for the app to function.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#1A1A1A] font-semibold mb-3">1.1 Guest Information</h3>
                    <p className="text-[#1A1A1A] leading-relaxed mb-3">
                      Guests do not have login accounts. The app collects:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                      <li>Guest Name (entered once at app start)</li>
                      <li>Complaints submitted by the guest</li>
                      <li>Joined hostel information</li>
                    </ul>
                    
                    <p className="text-[#1A1A1A] leading-relaxed mt-4 mb-2 font-semibold">We do NOT collect:</p>
                    <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                      <li>Phone number</li>
                      <li>Email</li>
                      <li>Address</li>
                      <li>Aadhaar / PAN</li>
                      <li>Sensitive personal data</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#1A1A1A] font-semibold mb-3">1.2 Admin Information</h3>
                    <p className="text-[#1A1A1A] leading-relaxed mb-3">
                      There is only one owner admin account. We collect:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                      <li>Admin email</li>
                      <li>Admin password (encrypted)</li>
                    </ul>

                    <p className="text-[#1A1A1A] leading-relaxed mt-4 mb-2">Admin can:</p>
                    <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                      <li>Create multiple hostels</li>
                      <li>Manage all hostels</li>
                      <li>View complaints based on selected hostel</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#1A1A1A] font-semibold mb-3">1.3 Automatically Collected Data</h3>
                    <p className="text-[#1A1A1A] leading-relaxed mb-3">
                      To improve app performance, we may collect:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                      <li>Device model</li>
                      <li>Operating system version</li>
                      <li>App usage analytics</li>
                      <li>Crash logs</li>
                    </ul>
                    <p className="text-[#1A1A1A] leading-relaxed mt-3">
                      This information contains no personal identifiers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: How We Use Information */}
              <section id="how-we-use" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  2. How We Use Information
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed mb-6">
                  We use your information only to operate and improve the app.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#1A1A1A] font-semibold mb-3">2.1 Guest Information Use</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                      <li>To allow you to join a hostel</li>
                      <li>To submit complaints</li>
                      <li>To show complaint history</li>
                      <li>To show your name in admin dashboard</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#1A1A1A] font-semibold mb-3">2.2 Admin Information Use</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                      <li>To allow admin to securely log in</li>
                      <li>To manage multiple hostels</li>
                      <li>To view and update complaints</li>
                    </ul>
                  </div>

                  <div className="bg-[#F5F8FA] p-5 rounded-lg mt-6">
                    <p className="text-[#1A1A1A] font-semibold mb-3">We DO NOT:</p>
                    <ul className="space-y-2 text-[#1A1A1A] leading-relaxed">
                      <li>❌ Sell data</li>
                      <li>❌ Share with advertisers</li>
                      <li>❌ Use data for marketing</li>
                      <li>❌ Share complaint data with other guests</li>
                    </ul>
                    <p className="text-[#1A1A1A] leading-relaxed mt-4">
                      Only the owner admin can view guest complaints.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Who Can See Your Data */}
              <section id="who-can-see" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  3. Who Can See Your Data
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed mb-4">
                  Your complaint data can be viewed by:
                </p>
                <ul className="space-y-2 text-[#1A1A1A] ml-4 leading-relaxed mb-6">
                  <li>✔ You</li>
                  <li>✔ The Hostel Owner Admin</li>
                </ul>

                <p className="text-[#1A1A1A] leading-relaxed mb-4 font-semibold">
                  No other guests or outsiders can see your data.
                </p>

                <div className="bg-[#F5F8FA] p-5 rounded-lg">
                  <p className="text-[#1A1A1A] leading-relaxed font-semibold mb-2">
                    For multi-hostel setups:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                    <li>Complaints are grouped by hostel</li>
                    <li>Admin sees complaint data for the hostel they select</li>
                  </ul>
                </div>
              </section>

              {/* Section 4: Data Storage & Security */}
              <section id="data-storage" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  4. Data Storage & Security
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed mb-5">
                  We take reasonable measures to protect your data.
                </p>

                <div className="bg-[#F5F8FA] p-5 rounded-lg mb-5">
                  <p className="text-[#1A1A1A] font-semibold mb-3">Security Practices:</p>
                  <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                    <li>Admin passwords encrypted</li>
                    <li>Complaint data securely stored</li>
                    <li>No plain-text sensitive information</li>
                    <li>HTTPS-secured communication</li>
                  </ul>
                </div>

                <p className="text-[#1A1A1A] leading-relaxed italic">
                  No system can guarantee 100% security.
                </p>
              </section>

              {/* Section 5: Your Rights */}
              <section id="your-rights" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  5. Your Rights
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed mb-3">Guests can:</p>
                <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed mb-5">
                  <li>Edit their name</li>
                  <li>Exit their hostel anytime</li>
                  <li>Request deletion of their data</li>
                  <li>Stop using the app anytime</li>
                </ul>

                <p className="text-[#1A1A1A] leading-relaxed">
                  For deletion requests: 📧{" "}
                  <a
                    href="mailto:hostelcareapps@gmail.com"
                    className="text-[#1B6CA8] hover:underline"
                  >
                    hostelcareapps@gmail.com
                  </a>
                </p>
              </section>

              {/* Section 6: Data Retention */}
              <section id="data-retention" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  6. Data Retention
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed mb-3">We retain:</p>
                <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                  <li>Guest complaints until deleted by admin</li>
                  <li>Guest name as long as user remains in the app</li>
                  <li>Admin accounts permanently unless removed</li>
                </ul>
              </section>

              {/* Section 7: Third-Party Services */}
              <section id="third-party" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  7. Third-Party Services
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed mb-3">HostelCare does NOT use:</p>
                <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                  <li>Third-party analytics</li>
                  <li>Third-party ad networks</li>
                  <li>External data-sharing services</li>
                </ul>
              </section>

              {/* Section 8: Children's Privacy */}
              <section id="childrens-privacy" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  8. Children's Privacy
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed">
                  Not intended for children under 13. We do not knowingly collect children's data.
                </p>
              </section>

              {/* Section 9: Changes to This Policy */}
              <section id="changes" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  9. Changes to This Policy
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed">
                  Updates will be posted on this page with a new "Last Updated" date.
                </p>
              </section>

              {/* Section 10: Contact Us */}
              <section id="contact" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  10. Contact Us
                </h2>

                <div className="space-y-2 text-[#1A1A1A] leading-relaxed">
                  <p>For questions or data requests:</p>
                  <p>
                    📧{" "}
                    <a
                      href="mailto:hostelcareapps@gmail.com"
                      className="text-[#1B6CA8] hover:underline"
                    >
                      hostelcareapps@gmail.com
                    </a>
                  </p>
                  <p>📍 HostelCare Application</p>
                </div>
              </section>
            </div>

            {/* Footer spacing */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-500 text-sm">
                © 2025 HostelCare. All rights reserved.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
