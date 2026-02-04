import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Globe,
  Users,
  TrendingUp,
  Zap,
  Layout,
  DollarSign,
  Lock,
  MessageSquare
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Sticky Banner (Urgency) */}
      <div className="sticky top-0 z-50 bg-[#164E63] text-white px-4 py-2 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
          Only 10 spots available at launch price ($500). Price doubles after.
        </span>
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-32 overflow-hidden px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.cyan.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-cyan-600/10 ring-1 ring-cyan-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-[#164E63] ring-1 ring-[#164E63]/10 hover:ring-[#164E63]/20 bg-white/50 backdrop-blur-sm">
              For Web Designers Who Are Tired of Struggling to Find Clients
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#0f3645] sm:text-6xl mb-6">
            Your #1 Problem Isn't Building Websites. <span className="text-[#0891B2]">It's Finding People to Pay You.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#336879] max-w-2xl mx-auto">
            This system finds local businesses without websites, auto-builds a demo site for each one, and hands you the leads ready to close. Make 25 calls a day. Close 15 clients a month. Bank $7,500 in setup fees—plus recurring revenue that stacks to $200k+ in year one.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-full bg-[#22C55E] px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-[#16A34A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E] transition-all hover:scale-105 duration-200 flex items-center gap-2">
              Join the Waitlist
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-sm font-semibold leading-6 text-[#164E63]">
              Only 10 Spots at Launch Price
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM AGITATION */}
      <section className="py-24 bg-white/50 backdrop-blur-sm relative">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#164E63] sm:text-4xl mb-12 text-center">
            Let's Be Honest About Your Biggest Problem
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-cyan-900/5 ring-1 ring-black/5">
            <p className="text-lg leading-8 text-gray-600 mb-6">
              You know how to build websites. That's not the issue. The issue is <span className="font-bold text-[#0891B2]">finding people who'll actually pay you to build them.</span>
            </p>

            <p className="mb-4 text-gray-700 font-medium">You've tried it all:</p>
            <ul className="space-y-3 mb-8">
              {[
                "Cold emailing businesses and getting ignored",
                "Posting on social media hoping someone notices",
                "Asking for referrals that never come",
                "Competing on Upwork against designers charging $50",
                "Running ads that burn cash faster than they bring leads"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-[#ECFEFF] rounded-xl p-6 border border-[#22D3EE]/20">
              <p className="text-[#164E63] font-medium">
                Here's what successful designers know: The best clients don't come from waiting. They come from making offers so good, people feel stupid saying no.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SOLUTION */}
      <section className="py-24 bg-[#164E63] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="white">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What If You Could Call a Business Owner With Their Website <span className="text-[#22D3EE]">Already Built?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-cyan-50">
              <p>Imagine this:</p>
              <p>You pick up the phone. Call a local plumber. And say:</p>
              <div className="border-l-4 border-[#22D3EE] pl-6 py-2 my-4 bg-white/5 rounded-r-lg">
                <p className="italic text-white">"Hi, I noticed you don't have a website. So I built you one. It's already live. Want me to send you the link?"</p>
              </div>
              <p>No pitch. No convincing. No "let me explain what I do." Just a website with their name, phone number, and services—already done.</p>
              <p>When they say yes, you ask:</p>
              <p className="font-bold text-white">"Want to keep it? It's $500 to set up and $99 a month."</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#22D3EE] rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs font-mono text-cyan-200">demo-site-preview.html</div>
                </div>
                {/* Mockup of a site inside */}
                <div className="space-y-4 opacity-90">
                  <div className="h-8 w-3/4 bg-white/20 rounded-md" />
                  <div className="flex gap-4">
                    <div className="h-32 w-1/3 bg-white/20 rounded-md" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-full bg-white/20 rounded" />
                      <div className="h-4 w-5/6 bg-white/20 rounded" />
                      <div className="h-4 w-4/6 bg-white/20 rounded" />
                      <div className="mt-4 h-10 w-32 bg-[#22D3EE] rounded-md" />
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-[#22D3EE] font-bold text-xl">Conversion Rate: High</p>
                  <p className="text-sm text-cyan-200">Because seeing is believing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#164E63] sm:text-4xl">
              How It Works (In 3 Simple Steps)
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "1. Import Your Leads",
                desc: "Scrape Google Maps for any industry in any location. Plumbers in London. Dentists in New York. Get 1,000 businesses without websites in minutes."
              },
              {
                icon: Zap,
                title: "2. Demo Sites Auto-Generate",
                desc: "Our AI builds a demo website for every single lead—automatically. Their name, contact info, professional template. Zero manual work."
              },
              {
                icon: Phone,
                title: "3. Call, Send, Close",
                desc: "Open the CRM. Call each lead. Send the demo site via SMS. When they see their business looking that good, closing is easy."
              }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-300 opacity-20 blur-lg transition-opacity group-hover:opacity-40" />
                <div className="relative h-full bg-white ring-1 ring-gray-900/5 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-lg bg-[#ECFEFF] flex items-center justify-center mb-6">
                    <step.icon className="w-6 h-6 text-[#0891B2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#164E63] mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-lg text-gray-600 font-medium">
            No hunting. No spec work. Just <span className="text-[#0891B2]">qualified leads with done-for-you demos</span>.
          </p>
        </div>
      </section>

      {/* SECTION 5: THE MATH */}
      <section className="py-24 bg-[#ECFEFF] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#164E63] sm:text-4xl mb-6">
                Let's Talk Numbers
              </h2>
              <div className="space-y-6 text-lg text-[#336879]">
                <p>Here's what an average week looks like:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                    <span>25 calls/day × 5 days = <strong>125 calls/week</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                    <span>Conservative 3% close rate = <strong>~4 new clients/week</strong></span>
                  </li>
                  <li className="flex items-center gap-3 border-t border-[#164E63]/10 pt-2 mt-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                    <span><strong>15 new clients per month</strong></span>
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-white/60 rounded-xl border border-white/50">
                  <p className="font-semibold text-[#164E63] mb-2">Monthly Revenue Potential:</p>
                  <div className="flex justify-between items-end mb-2">
                    <span>Setup Fees ($500 × 15)</span>
                    <span className="font-mono font-bold text-xl">$7,500</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>Recurring ($99 × 15)</span>
                    <span className="font-mono font-bold text-xl">+$1,485</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl ring-1 ring-gray-900/5">
              <h3 className="text-xl font-bold text-[#164E63] mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#22C55E]" />
                How Recurring Revenue Stacks
              </h3>

              <div className="space-y-6">
                {[
                  { month: "Month 1", amount: "$1,485/mo", width: "10%" },
                  { month: "Month 3", amount: "$4,455/mo", width: "30%" },
                  { month: "Month 6", amount: "$8,910/mo", width: "60%" },
                  { month: "Month 12", amount: "$17,820/mo", width: "100%" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
                      <span>{item.month}</span>
                      <span className="text-[#0891B2] font-bold">{item.amount}</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-visible">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-[#22D3EE] rounded-full shadow-[0_0_10px_theme(colors.cyan.400)] transition-all duration-1000"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500 mb-1">Total Year 1 Potential</p>
                <p className="text-4xl font-bold text-[#164E63]">$206,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY THIS WORKS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#164E63] sm:text-4xl">
              Why This Offer Is Almost Unfair
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-xl text-gray-500 mb-6 uppercase tracking-wide">The Old Way</h3>
              <p className="text-lg text-gray-600 mb-4">
                You call and say: <span className="italic">"Do you need a website? I can build you one."</span>
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold text-xs">✕</div>
                  <p className="text-gray-600">"How much will it cost?"</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold text-xs">✕</div>
                  <p className="text-gray-600">"How long will it take?"</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold text-xs">✕</div>
                  <p className="text-gray-600">"Can I trust you?"</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold text-xs">✕</div>
                  <p className="text-gray-600">Result: "I'll think about it."</p>
                </div>
              </div>
            </div>

            <div className="bg-[#ECFEFF] p-8 rounded-2xl border border-[#22D3EE]/30 shadow-lg">
              <h3 className="font-bold text-xl text-[#0891B2] mb-6 uppercase tracking-wide">The New Way</h3>
              <p className="text-lg text-[#164E63] mb-4">
                You call and say: <span className="italic font-semibold">"I already built your website. Want to see it?"</span>
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                  <p className="text-[#336879]">No imagination required—they SEE it</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                  <p className="text-[#336879]">No risk—it already exists</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                  <p className="text-[#336879]">No commitment—just "want to keep it?"</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                  <p className="text-[#336879]">No competition—you're the only one who did the work</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-medium text-[#164E63]">
              The demo site is the offer. And it makes you <span className="text-[#0891B2] font-bold">uncloseable competition</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6B: THE UPSELL */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#164E63] sm:text-4xl mb-4">
            $99/Month Is Just the Beginning
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Everything starts with the "foot in the door". Once they trust you, the real revenue begins.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Step 1</div>
              <h3 className="text-2xl font-bold text-[#164E63] mb-4">The Foot In The Door</h3>
              <div className="text-4xl font-bold text-[#0891B2] mb-2">$99<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <p className="text-gray-600">Basic site rental. Easy yes. Builds trust immediately.</p>
            </div>

            <div className="p-8 rounded-2xl bg-[#ECFEFF] border border-[#22D3EE]/30 relative transform md:-translate-y-4 shadow-xl">
              <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-[#22C55E] text-white text-xs font-bold px-3 py-1 rounded-full">MOST COMMON</div>
              <div className="text-sm font-semibold text-[#0891B2] uppercase tracking-wide mb-2">Step 2</div>
              <h3 className="text-2xl font-bold text-[#164E63] mb-4">Custom Build</h3>
              <div className="text-4xl font-bold text-[#0891B2] mb-2">$2,500<span className="text-lg text-gray-500 font-normal">+</span></div>
              <p className="text-[#336879]">"Let's rebuild this perfectly for you." Upsell after 3-6 months.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Step 3</div>
              <h3 className="text-2xl font-bold text-[#164E63] mb-4">Services</h3>
              <div className="text-4xl font-bold text-[#0891B2] mb-2">$500<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <p className="text-gray-600">SEO, Ads, Content. Recurring revenue for years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHATS INCLUDED */}
      <section className="py-24 bg-[#164E63] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight mb-8">Everything You Get for $500</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-none p-2 rounded-lg bg-white/10 h-fit">
                    <Layout className="w-6 h-6 text-[#22D3EE]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Complete Lead System</h3>
                    <p className="mt-1 text-cyan-100">Scraper, AI Generator, CRM, and Messaging. All-in-one.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none p-2 rounded-lg bg-white/10 h-fit">
                    <Globe className="w-6 h-6 text-[#22D3EE]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">10 Marketing Templates</h3>
                    <p className="mt-1 text-cyan-100">Tested for 10 years. Built to convert. Not generic themes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none p-2 rounded-lg bg-white/10 h-fit">
                    <Users className="w-6 h-6 text-[#22D3EE]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Training & Sales Scripts</h3>
                    <p className="mt-1 text-cyan-100">Exactly what to say. How to close. How to upsell.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-white text-[#164E63] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Your Investment</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-[#0891B2]">$500</span>
                  <span className="text-gray-500 font-medium">one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                    <span>You own the system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                    <span>No monthly fees to us</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                    <span>Leads cost ~$3 per 1,000</span>
                  </li>
                </ul>
                <button className="w-full rounded-xl bg-[#0891B2] py-4 text-white font-bold text-lg hover:bg-[#0E7490] transition-colors">
                  Get Started
                </button>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-100 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHO THIS IS FOR */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#164E63] sm:text-4xl mb-8">
                This Is For You If...
              </h2>
              <ul className="space-y-4">
                {[
                  "You're a freelance web designer struggling to find consistent clients",
                  "You run a small agency and want a predictable lead source",
                  "You want to start a web design business but don't know how to get clients",
                  "You're tired of competing on price with overseas designers",
                  "You want recurring revenue, not just one-off projects",
                  "You're willing to pick up the phone and make calls"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 text-lg">
                    <CheckCircle2 className="w-6 h-6 text-[#22C55E] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
              <h2 className="text-3xl font-bold tracking-tight text-red-900 sm:text-4xl mb-8">
                This Is NOT For You If...
              </h2>
              <ul className="space-y-4">
                {[
                  "You're not willing to do cold outreach",
                  "You want a completely passive, done-for-you business",
                  "You're looking for a get-rich-quick scheme"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-red-800 text-lg">
                    <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center text-red-700 font-bold text-xs flex-shrink-0">✕</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: URGENCY & SCARCITY */}
      <section className="py-24 bg-[#ECFEFF] relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block p-3 rounded-full bg-[#164E63]/5 mb-6">
            <Lock className="w-8 h-8 text-[#164E63]" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#164E63] sm:text-4xl mb-6">
            Why Only 10 Spots (And Why the Price Doubles After)
          </h2>
          <div className="prose prose-lg mx-auto text-[#336879]">
            <p className="mb-6">
              We're not launching this to thousands of people. Every new user gets the system personally installed. We configure it for your market. We walk you through everything on a 1-hour call.
            </p>
            <p className="mb-6">
              That takes time. And we'd rather have 10 designers crushing it than 100 designers confused and failing.
            </p>
            <p className="font-bold text-xl text-[#164E63] mb-6">
              So we're opening 10 spots at $500.
            </p>
            <p>
              After those fill, the price goes to <span className="font-bold">$1,000</span>. Not as a marketing trick—because the demand will be there and we'll need to scale our onboarding capacity.
            </p>
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg inline-block text-yellow-800 text-sm font-semibold">
              ⚠️ If you want in at the lowest price this will ever be, now is the time.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#164E63] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How is this different from GoHighLevel or other tools?",
                a: "Most tools require you to manually build each demo site—15 to 30 minutes per lead. Our system auto-generates demo sites for every lead the moment you import them. You do zero site building. Just import, call, close."
              },
              {
                q: "Do I need technical skills to use this?",
                a: "If you can follow video instructions and make phone calls, you can use this. We install everything for you and walk you through it step by step."
              },
              {
                q: "What if I've never done cold calling before?",
                a: "We include scripts and training on exactly what to say. Plus, you're not cold calling with a pitch—you're calling with a finished website. That makes the conversation 10x easier."
              },
              {
                q: "Is this a monthly subscription?",
                a: "No. You pay $500 once and own the system. The only ongoing cost is the API for leads—about $3 per 1,000 businesses."
              },
              {
                q: "What countries does this work in?",
                a: "This system works worldwide. You can find leads and build sites for businesses in any country."
              },
              {
                q: "What happens after I join the waitlist?",
                a: "You'll get an email when we launch (14 days). First 10 people to purchase get access at $500. After that, price goes to $1,000."
              },
              {
                q: "Is a 3% close rate realistic?",
                a: "3% is actually conservative when you're calling with a done-for-you demo site. Many users close higher than 3%, but we use conservative numbers so you know the floor, not the ceiling."
              },
              {
                q: "How many calls do I need to make?",
                a: "We recommend 25 calls per day, 5 days a week. That's 15 clients a month at a 3% close rate. It's real work, but the math is in your favor."
              },
              {
                q: "How long does it take to deploy a real website?",
                a: "About 10 minutes. We give you AI website templates to build production-ready sites fast. No coding required."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8 hover:bg-[#ECFEFF] transition-colors">
                <h3 className="font-bold text-[#164E63] text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-24 bg-[#ECFEFF] text-center px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-[#164E63] mb-6">
            Ready to Stop Hunting for Clients?
          </h2>
          <p className="text-lg text-[#336879] mb-8">
            Join the waitlist now. We launch in 14 days.<br />
            First 10 people get access at $500. Everyone else pays $1,000—or waits for the next round.
          </p>

          <button className="rounded-full bg-[#EA580C] px-10 py-5 text-xl font-bold text-white shadow-xl shadow-orange-500/20 hover:bg-[#C2410C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C] transition-all hover:scale-105 duration-200">
            JOIN THE WAITLIST
          </button>

          <p className="mt-6 text-sm text-[#164E63]/70">
            No obligation. But this secures your spot in line.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Web Design Lead Generator. All rights reserved.</p>
      </footer>
    </div>
  );
}
