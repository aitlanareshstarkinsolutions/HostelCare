import { ChevronRight } from "lucide-react";

export function HostelCareHome() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <header className="bg-[#1B6CA8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
              HostelCare
            </h1>
            <p className="text-sm tracking-wide text-white mb-3">
              SIMPLE HOSTEL ISSUE MANAGEMENT
            </p>
            <p className="text-white max-w-2xl mx-auto leading-relaxed">
              A clean and minimal app for hostel and PG owners to manage guest
              complaints across multiple locations, and for guests to report
              issues without any login.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-10">
        {/* Section: Quick Highlight */}
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="bg-[#F5F8FA] rounded-lg p-6 border border-gray-100">
            <h2 className="text-[#1A1A1A] font-semibold mb-2">
              No Login for Guests
            </h2>
            <p className="text-sm text-[#1A1A1A] leading-relaxed">
              Guests just enter their name once, join their hostel, and start
              reporting problems instantly.
            </p>
          </div>

          <div className="bg-[#F5F8FA] rounded-lg p-6 border border-gray-100">
            <h2 className="text-[#1A1A1A] font-semibold mb-2">
              Single Owner Dashboard
            </h2>
            <p className="text-sm text-[#1A1A1A] leading-relaxed">
              One admin can create and manage multiple hostels, and switch
              between them using a simple dropdown.
            </p>
          </div>

          <div className="bg-[#F5F8FA] rounded-lg p-6 border border-gray-100">
            <h2 className="text-[#1A1A1A] font-semibold mb-2">
              Clear Complaint Status
            </h2>
            <p className="text-sm text-[#1A1A1A] leading-relaxed">
              Track issues with clear states — Viewed, In&nbsp;Progress, and
              Solved — for each hostel separately.
            </p>
          </div>
        </section>

        {/* Section: For Guests / For Admin */}
        <section className="grid gap-8 lg:grid-cols-2">
          {/* Guests */}
          <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
            <p className="text-xs font-semibold text-[#1B6CA8] mb-2 uppercase tracking-wide">
              For Guests
            </p>
            <h2 className="text-lg font-semibold text-[#1A1A1A] mb-4">
              Simple flow for hostel residents
            </h2>
            <ul className="space-y-2 text-sm text-[#1A1A1A]">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-[2px] text-[#1B6CA8]" />
                <span>Enter your name once and select your hostel.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-[2px] text-[#1B6CA8]" />
                <span>
                  Join only one hostel at a time, with an option to exit and
                  join another.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-[2px] text-[#1B6CA8]" />
                <span>
                  Report problems with a title, description, and optional photo.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-[2px] text-[#1B6CA8]" />
                <span>
                  See all your complaints with live status updates from the
                  owner.
                </span>
              </li>
            </ul>
          </div>

          {/* Admin */}
          <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
            <p className="text-xs font-semibold text-[#1B6CA8] mb-2 uppercase tracking-wide">
              For Admin / Owner
            </p>
            <h2 className="text-lg font-semibold text-[#1A1A1A] mb-4">
              One place to manage all hostels
            </h2>
            <ul className="space-y-2 text-sm text-[#1A1A1A]">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-[2px] text-[#1B6CA8]" />
                <span>Create and manage multiple hostels in different areas.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-[2px] text-[#1B6CA8]" />
                <span>
                  Switch hostels from a dropdown and see complaints hostel-wise.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-[2px] text-[#1B6CA8]" />
                <span>
                  View guest name, issue details, and attachments in one
                  dashboard.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-[2px] text-[#1B6CA8]" />
                <span>
                  Update status to Viewed, In&nbsp;Progress, or Solved with a
                  few taps.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Small CTA / Info */}
        <section className="bg-[#F5F8FA] border border-gray-100 rounded-lg p-6">
          <h2 className="text-[#1A1A1A] font-semibold mb-2">
            Focused on privacy and simplicity
          </h2>
          <p className="text-sm text-[#1A1A1A] leading-relaxed mb-2">
            HostelCare collects only the minimum data required to run the app.
            Guests don&apos;t need an account, and only the hostel owner admin
            can view complaints.
          </p>
          <p className="text-sm text-[#1A1A1A] leading-relaxed">
            For more details, please review our{" "}
            <a
              href="/privacy"
              className="text-[#1B6CA8] underline underline-offset-2"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-10 py-6">
        <p className="text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} HostelCare. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
