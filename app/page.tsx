// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 font-sans overflow-x-hidden">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center shadow-sm">
              <ToothIcon className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-slate-800 dark:text-slate-100 tracking-wide">
              DentaCare
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-400">
            {["Services", "About", "Team", "Testimonials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:block text-sm text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              Sign in
            </Link>
            <Link href="/register" className="btn-primary text-sm px-4 py-2">
              Book Appointment
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-col flex-1">
        {/* ── Hero ── */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background glows */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] -translate-y-1/2 rounded-full bg-sky-100/70 dark:bg-sky-950/50 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-100/60 dark:bg-cyan-950/40 blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col gap-7 animate-fade-up">
              <span className="label-text">✦ Trusted by 15,000+ patients</span>

              <h1 className="font-display text-5xl sm:text-6xl leading-tight text-slate-900 dark:text-white">
                Your Perfect{" "}
                <em className="not-italic text-sky-600 dark:text-sky-400">
                  Smile
                </em>{" "}
                Starts Here
              </h1>

              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                World-class dental care combining advanced technology with a
                gentle, compassionate approach. Because every smile tells a
                story.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/register"
                  className="btn-primary px-6 py-3 text-base shadow-brand"
                >
                  Book Free Consultation
                </Link>
                <a
                  href="#services"
                  className="btn-secondary px-6 py-3 text-base"
                >
                  Our Services
                </a>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                {[
                  { value: "15K+", label: "Happy Patients" },
                  { value: "98%", label: "Satisfaction Rate" },
                  { value: "25+", label: "Specialists" },
                  { value: "14yr", label: "Experience" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                      {s.value}
                    </div>
                    <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — illustration card */}
            <div className="hidden lg:flex justify-center animate-fade-in">
              <div className="relative">
                {/* Main card */}
                <div className="w-80 h-80 rounded-3xl bg-sky-950 dark:bg-slate-900 border border-sky-900/50 flex flex-col items-center justify-center gap-6 shadow-brand-lg">
                  <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <ToothIcon className="w-12 h-12 text-white/80" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-lg">
                      DentaCare Clinic
                    </div>
                    <div className="text-sky-300/70 text-sm mt-1">
                      Est. 2010 · Nairobi, KE
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {["General", "Ortho", "Cosmetic"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/10 text-sky-200 px-3 py-1 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-6 bg-white dark:bg-slate-800 shadow-brand-sm border border-slate-100 dark:border-slate-700 rounded-2xl px-4 py-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 text-sm">
                      ✓
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      HIPAA Compliant
                    </div>
                    <div className="text-xs text-slate-400">
                      Certified & Secure
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-6 bg-white dark:bg-slate-800 shadow-brand-sm border border-slate-100 dark:border-slate-700 rounded-2xl px-4 py-3">
                  <div className="text-xs text-slate-400 mb-1">
                    Next available
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    Today, 2:30 PM
                  </div>
                  <div className="flex mt-2 -space-x-2">
                    {["sky", "cyan", "indigo"].map((c, i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-${c}-400`}
                      />
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[8px] text-slate-500">
                      +4
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section
          id="services"
          className="py-24 bg-slate-50 dark:bg-slate-900/50"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="label-text">What We Offer</span>
              <h2 className="font-display text-4xl text-slate-900 dark:text-white mt-3">
                Comprehensive Dental Care
              </h2>
              <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                From routine cleanings to full smile makeovers, we have every
                treatment you need under one roof.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="card p-6 hover:shadow-brand-sm hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/50 border border-sky-100 dark:border-sky-900/50 flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:border-sky-600 transition-colors duration-300">
                    <span className="text-sky-600 group-hover:text-white text-xl transition-colors duration-300">
                      {s.icon}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Us ── */}
        <section id="about" className="py-24">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — feature list */}
            <div>
              <span className="label-text">Why DentaCare</span>
              <h2 className="font-display text-4xl text-slate-900 dark:text-white mt-3 mb-8">
                Care That Goes Beyond the Chair
              </h2>
              <div className="flex flex-col gap-6">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-100 dark:border-sky-900/50 flex items-center justify-center text-sky-600 dark:text-sky-400">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                        {item.title}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stats card */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15,000+", label: "Patients Served", color: "sky" },
                { value: "98%", label: "Satisfaction Rate", color: "cyan" },
                { value: "25+", label: "Expert Specialists", color: "sky" },
                { value: "14 Years", label: "In Practice", color: "cyan" },
              ].map((stat) => (
                <div key={stat.label} className="card p-6 flex flex-col gap-2">
                  <div className="font-display text-3xl text-sky-600 dark:text-sky-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section id="team" className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="label-text">Our Specialists</span>
              <h2 className="font-display text-4xl text-slate-900 dark:text-white mt-3">
                Meet the Team
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="card p-6 text-center group hover:-translate-y-1 hover:shadow-brand-sm transition-all duration-300"
                >
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-100 to-cyan-100 dark:from-sky-900/50 dark:to-cyan-900/50 border border-sky-100 dark:border-sky-900/50 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">{member.avatar}</span>
                  </div>
                  <div className="font-semibold text-slate-800 dark:text-slate-100">
                    {member.name}
                  </div>
                  <div className="text-xs text-sky-600 dark:text-sky-400 mt-1 font-medium">
                    {member.role}
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                    {member.experience} experience
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section id="testimonials" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="label-text">Patient Stories</span>
              <h2 className="font-display text-4xl text-slate-900 dark:text-white mt-3">
                What Our Patients Say
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="card p-6 flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="w-9 h-9 rounded-full bg-sky-100 dark:bg-sky-900/40 border border-sky-100 dark:border-sky-900/50 flex items-center justify-center text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-400">{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section
          id="contact"
          className="py-24 bg-sky-950 dark:bg-slate-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-800/30 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-800/20 blur-3xl" />
          </div>
          <div className="relative max-w-2xl mx-auto px-6 text-center">
            <span className="label-text text-sky-300">
              Ready to Get Started?
            </span>
            <h2 className="font-display text-4xl text-white mt-3 mb-5">
              Book Your Free Consultation Today
            </h2>
            <p className="text-sky-200/70 mb-8 leading-relaxed">
              Take the first step toward your best smile. Our team is ready to
              welcome you with personalised care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-sky-900 font-semibold text-sm hover:bg-sky-50 transition-colors shadow-brand"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+254700000000"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                📞 Call Us Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-600 flex items-center justify-center">
              <ToothIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">
              DentaCare
            </span>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} DentaCare Clinic. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-slate-400 dark:text-slate-600">
            <a href="#" className="hover:text-sky-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-sky-500 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-sky-500 transition-colors">
              HIPAA
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: "🦷",
    title: "General Dentistry",
    description:
      "Routine checkups, cleanings, fillings, and preventive care to keep your teeth healthy for life.",
  },
  {
    icon: "✨",
    title: "Cosmetic Dentistry",
    description:
      "Teeth whitening, veneers, and smile makeovers designed to give you the confidence you deserve.",
  },
  {
    icon: "🔧",
    title: "Orthodontics",
    description:
      "Braces and clear aligners tailored to straighten your teeth comfortably and discreetly.",
  },
  {
    icon: "🪥",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements that restore both function and appearance.",
  },
  {
    icon: "👶",
    title: "Pediatric Dentistry",
    description:
      "Gentle, fun, and reassuring dental care specially designed for children of all ages.",
  },
  {
    icon: "🩺",
    title: "Oral Surgery",
    description:
      "Extractions, jaw surgery, and other procedures performed with precision and care.",
  },
];

const whyUs = [
  {
    icon: "🏥",
    title: "State-of-the-Art Technology",
    description:
      "Digital X-rays, 3D imaging, and laser dentistry for accurate, comfortable treatment.",
  },
  {
    icon: "❤️",
    title: "Compassionate Approach",
    description:
      "We understand dental anxiety. Our team creates a calm, welcoming environment for every visit.",
  },
  {
    icon: "🕐",
    title: "Flexible Scheduling",
    description:
      "Early morning, evening, and weekend appointments available to fit your busy lifestyle.",
  },
  {
    icon: "🔒",
    title: "HIPAA Compliant & Secure",
    description:
      "Your medical records and personal data are protected with enterprise-grade security.",
  },
];

const team = [
  {
    avatar: "👩‍⚕️",
    name: "Dr. Amina Osei",
    role: "General Dentist",
    experience: "12 yrs",
  },
  {
    avatar: "👨‍⚕️",
    name: "Dr. James Kariuki",
    role: "Orthodontist",
    experience: "9 yrs",
  },
  {
    avatar: "👩‍⚕️",
    name: "Dr. Priya Nair",
    role: "Cosmetic Specialist",
    experience: "15 yrs",
  },
  {
    avatar: "👨‍⚕️",
    name: "Dr. Samuel Otieno",
    role: "Oral Surgeon",
    experience: "11 yrs",
  },
];

const testimonials = [
  {
    avatar: "🙂",
    name: "Grace Mwangi",
    location: "Nairobi, KE",
    quote:
      "The team made me feel so comfortable from the first visit. My smile has never looked better — I can't stop grinning!",
  },
  {
    avatar: "😊",
    name: "Brian Otieno",
    location: "Mombasa, KE",
    quote:
      "I was terrified of dentists until I came here. The staff are incredibly patient and the results are amazing.",
  },
  {
    avatar: "🤗",
    name: "Fatuma Hassan",
    location: "Kisumu, KE",
    quote:
      "Booked online in under a minute, was seen on time, and left with a sparkling clean smile. 10/10 experience.",
  },
];

// ── Inline tooth icon ─────────────────────────────────────────────────────────
function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 4.5 4 4 3 5C1.5 6.5 2 9 3 11C4 13 4 15 4.5 17C5 19 6 22 7.5 22C9 22 9.5 20 10 18.5C10.5 17 11 16 12 16C13 16 13.5 17 14 18.5C14.5 20 15 22 16.5 22C18 22 19 19 19.5 17C20 15 20 13 21 11C22 9 22.5 6.5 21 5C20 4 18.5 4.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" />
    </svg>
  );
}
