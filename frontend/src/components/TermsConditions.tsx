import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "use-of-application", title: "Use of the Application" },
  { id: "user-responsibilities", title: "User Responsibilities" },
  { id: "prohibited-activities", title: "Prohibited Activities" },
  { id: "data-usage", title: "Data Usage & Privacy" },
  { id: "disclaimer", title: "Disclaimer" },
  { id: "limitation-liability", title: "Limitation of Liability" },
  { id: "termination", title: "Termination" },
  { id: "changes-terms", title: "Changes to Terms" },
  { id: "contact", title: "Contact" },
];

export function TermsConditions() {
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
      <div className="bg-[#E8F5FF] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h1 className="text-[#1B6CA8] tracking-wider mb-3 font-semibold">TERMS & CONDITIONS</h1>
          <p className="text-[#1A1A1A]">Last Updated: November 20, 2025</p>
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
                <p className="text-[#1A1A1A] leading-relaxed">
                  Welcome to HostelCare. By using our mobile application ("App"), you agree to the following 
                  Terms & Conditions. Please read them carefully.
                </p>
              </div>

              {/* Section 1: Introduction */}
              <section id="introduction" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  1. Introduction
                </h2>

                <div className="space-y-4">
                  <p className="text-[#1A1A1A] leading-relaxed">
                    These Terms & Conditions govern your use of the HostelCare mobile application. 
                    By accessing or using the App, you agree to comply with these Terms.
                  </p>

                  <div>
                    <p className="text-[#1A1A1A] leading-relaxed mb-3">"User", "You" refers to:</p>
                    <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                      <li>Guests staying in a hostel and using the app</li>
                      <li>The Admin (hostel owner) managing the platform</li>
                    </ul>
                  </div>

                  <p className="text-[#1A1A1A] leading-relaxed">
                    "Admin" refers to the single owner who manages multiple hostels.
                  </p>
                </div>
              </section>

              {/* Section 2: Use of the Application */}
              <section id="use-of-application" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  2. Use of the Application
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#1A1A1A] font-semibold mb-3">2.1 For Guests</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                      <li>Guests can use the app without any login.</li>
                      <li>Guests provide their name once and can join only one hostel at a time.</li>
                      <li>Guests can submit complaints and track their status.</li>
                      <li>Guests must provide accurate information while submitting issues.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#1A1A1A] font-semibold mb-3">2.2 For Admin</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                      <li>Only one admin account exists.</li>
                      <li>Admin can create, edit, and delete hostels.</li>
                      <li>Admin can view all complaints filtered by selected hostel.</li>
                      <li>Admin is responsible for managing complaints submitted by guests.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3: User Responsibilities */}
              <section id="user-responsibilities" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  3. User Responsibilities
                </h2>

                <div className="space-y-6">
                  <div>
                    <p className="text-[#1A1A1A] font-semibold mb-3">Guests must:</p>
                    <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                      <li>Provide correct name</li>
                      <li>Not misuse the platform</li>
                      <li>Not upload abusive or harmful content</li>
                      <li>Submit issues genuinely related to the hostel</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#1A1A1A] font-semibold mb-3">Admin must:</p>
                    <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                      <li>Maintain accurate hostel records</li>
                      <li>Handle complaints responsibly</li>
                      <li>Not misuse guest information</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4: Prohibited Activities */}
              <section id="prohibited-activities" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  4. Prohibited Activities
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed mb-3">Users must NOT:</p>
                <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                  <li>Upload harmful, illegal, or offensive content</li>
                  <li>Impersonate another person</li>
                  <li>Attempt to hack, modify, or disrupt the service</li>
                  <li>Use the app for unrelated commercial activities</li>
                </ul>
              </section>

              {/* Section 5: Data Usage & Privacy */}
              <section id="data-usage" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  5. Data Usage & Privacy
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed mb-5">
                  All data usage is governed by the HostelCare Privacy Policy.
                </p>

                <div className="bg-[#F5F8FA] p-5 rounded-lg">
                  <p className="text-[#1A1A1A] font-semibold mb-3">We do NOT:</p>
                  <ul className="space-y-2 text-[#1A1A1A] leading-relaxed">
                    <li>❌ Sell data</li>
                    <li>❌ Share data with third parties</li>
                    <li>❌ Collect unnecessary personal information</li>
                  </ul>
                </div>
              </section>

              {/* Section 6: Disclaimer */}
              <section id="disclaimer" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  6. Disclaimer
                </h2>

                <div className="space-y-4">
                  <p className="text-[#1A1A1A] leading-relaxed">
                    HostelCare provides a platform for communication between guests and the admin.
                  </p>
                  <p className="text-[#1A1A1A] leading-relaxed">
                    HostelCare does not guarantee accuracy, speed, or outcomes of complaint resolution.
                  </p>
                  <p className="text-[#1A1A1A] leading-relaxed">
                    The hostel owner/admin is responsible for managing issues.
                  </p>
                </div>
              </section>

              {/* Section 7: Limitation of Liability */}
              <section id="limitation-liability" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  7. Limitation of Liability
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed mb-3">HostelCare is not responsible for:</p>
                <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                  <li>Delayed issue resolution</li>
                  <li>Wrong information provided by guests or admin</li>
                  <li>Misuse of the app by any party</li>
                  <li>Loss of data due to external system failures</li>
                </ul>
              </section>

              {/* Section 8: Termination */}
              <section id="termination" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  8. Termination
                </h2>

                <div className="space-y-4">
                  <p className="text-[#1A1A1A] leading-relaxed mb-3">
                    We may restrict or terminate app access if:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[#1A1A1A] ml-4 leading-relaxed">
                    <li>User violates Terms</li>
                    <li>User misuses the platform</li>
                    <li>Illegal activities are detected</li>
                  </ul>

                  <p className="text-[#1A1A1A] leading-relaxed mt-4">
                    Guests can stop using the app anytime.
                  </p>
                </div>
              </section>

              {/* Section 9: Changes to Terms */}
              <section id="changes-terms" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  9. Changes to Terms
                </h2>

                <p className="text-[#1A1A1A] leading-relaxed">
                  We may update these Terms of Service from time to time. Updated terms will be posted on this page.
                </p>
              </section>

              {/* Section 10: Contact */}
              <section id="contact" className="scroll-mt-24">
                <h2 className="text-[#1B6CA8] font-semibold mb-5 pb-3 border-b border-gray-200">
                  10. Contact
                </h2>

                <div className="space-y-2 text-[#1A1A1A] leading-relaxed">
                  <p>For support or questions:</p>
                  <p>
                    📧{" "}
                    <a
                      href="mailto:support@hostelcare.store"
                      className="text-[#1B6CA8] hover:underline"
                    >
                      support@hostelcare.store
                    </a>
                  </p>
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
