'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Phone, Mail, Instagram, Linkedin, Youtube, Twitter, ChevronDown, X, Send, Bot, Loader2 } from 'lucide-react'


const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyBWgT0BxNF9b0tlGaqaM2ql9xJkEjYd4ArqZA66RKiVl_M3ZHpFqdpE98iAtWkG7B7/exec"


const quickLinks = [
  { label: 'Who We Are', href: '/about' },
  { label: 'Businesses', href: '/businesses' },
  { label: 'Knowledge Center', href: '/knowledge-center' },
  { label: 'Resources', href: '/resources' },
  { label: 'Tools', href: '/tools' },
  { label: 'Contact', href: '/contact' },
  { label: 'Meet Our Team', href: '/meet-our-team' },
]

const resourceLinks = [
  { label: 'Incoterms 2020 Wallchart', href: 'https://2go.iccwbo.org/incoterms-2020-practical-free-wallchart-fr.html' },
  { label: 'XE Currency Converter', href: 'https://www.xe.com/' },
  { label: 'Track & Trace', href: 'https://www.track-trace.com/' },
]

const businesses = [
  { label: 'Logistics & Supply Chain', href: '/businesses/logistics' },
  { label: 'Enterprise Solutions', href: '/businesses/enterprise-solutions' },
  { label: 'Skill Development', href: '/businesses/skill-development' },
  { label: 'Real Estate & Infra', href: '/businesses/real-estate' },
]

// ── SocialMenu ────────────────────────────────────────────────────────────────
function SocialMenu() {
  return (
    <div className="fixed bottom-16 left-6 z-50 group">
      <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#0b1f5c] text-white shadow-lg hover:bg-blue-700 transition">
        SOCIAL
        <ChevronDown className="w-4 h-4" />
      </button>

      <div className="absolute bottom-full left-0 mb-3 w-56 rounded-xl bg-white shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <a
          href="https://www.instagram.com/the_indusgroup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          <Instagram className="w-5 h-5 text-[#E1306C]" />
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/company/the-indus-group-co/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          <Linkedin className="w-5 h-5 text-[#0077B5]" />
          LinkedIn
        </a>
        <a
          href="https://www.youtube.com/@theindusgroupco.?si=LUxtGChKqM4L2KGU"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          <Youtube className="w-5 h-5 text-[#FF0000]" />
          YouTube
        </a>
        <a
          href="https://x.com/theindusgroup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          <Twitter className="w-5 h-5 text-[#000000]" />
          X (Twitter)
        </a>
      </div>
    </div>
  )
}

// ── Chatbot internals ─────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  )
}

function Message({ msg }) {
  const isBot = msg.role === 'assistant'
  return (
    <div className={`flex gap-2 ${isBot ? 'items-start' : 'items-end justify-end'}`}>
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-[#0b1f5c] flex items-center justify-center shrink-0 mt-0.5">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      <div
        className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${isBot
          ? 'bg-gray-100 text-gray-800 rounded-tl-sm'
          : 'bg-[#0b1f5c] text-white rounded-br-sm'
          }`}
      >
        {msg.content}
      </div>
    </div>
  )
}
const FAQS = [
  {
    keywords: [
      "logistics",
      "shipping",
      "freight",
      "cargo",
      "warehouse",
      "warehousing",
      "transport",
      "transportation",
      "supply chain",
      "customs",
      "export",
      "import"
    ],
    answer:
      "The Indus Group provides integrated logistics and supply chain solutions including freight forwarding, transportation, warehousing, customs support, shipping coordination, and end-to-end supply chain management."
  },
  {
    keywords: ["warehouse", "warehousing"],
    answer:
      "Warehousing is the process of storing goods in a dedicated facility before they are distributed, sold, or transported to customers."
  },

  {
    keywords: ["logistics"],
    answer:
      "Logistics is the planning, movement, storage, and management of goods, services, and information from origin to destination efficiently and cost-effectively."
  },

  {
    keywords: ["supply chain"],
    answer:
      "A supply chain is the complete network involved in producing and delivering a product, including suppliers, manufacturers, warehouses, transporters, and customers."
  },

  {
    keywords: ["freight"],
    answer:
      "Freight refers to goods transported in bulk by road, rail, sea, or air from one location to another."
  },

  {
    keywords: ["freight forwarding", "freight forwarder"],
    answer:
      "Freight forwarding is the coordination and shipment of goods through carriers. A freight forwarder manages transportation, documentation, customs, and logistics activities."
  },

  {
    keywords: ["customs", "customs clearance"],
    answer:
      "Customs clearance is the process of obtaining permission from customs authorities to import or export goods legally."
  },

  {
    keywords: ["msme"],
    answer:
      "MSME stands for Micro, Small and Medium Enterprises. These businesses are classified based on investment and annual turnover and play a major role in economic growth and employment."
  },

  {
    keywords: ["gst"],
    answer:
      "GST (Goods and Services Tax) is India's unified indirect tax system applied to the supply of goods and services."
  },

  {
    keywords: ["exim"],
    answer:
      "EXIM stands for Export-Import. It refers to international trade activities involving the export and import of goods and services."
  },

  {
    keywords: ["uld"],
    answer:
      "ULD stands for Unit Load Device. It is a container or pallet used to load luggage, cargo, and mail onto aircraft efficiently."
  },

  {
    keywords: ["container"],
    answer:
      "A shipping container is a standardized steel box used to transport goods securely by sea, rail, and road."
  },

  {
    keywords: ["air freight"],
    answer:
      "Air freight is the transportation of goods through aircraft and is generally used for high-value or time-sensitive shipments."
  },

  {
    keywords: ["sea freight", "ocean freight"],
    answer:
      "Sea freight is the transportation of cargo through ships and is commonly used for large-volume international trade."
  },
  {
    keywords: [
      "enterprise",
      "startup",
      "company registration",
      "gst",
      "tax",
      "compliance",
      "legal",
      "consulting",
      "digital marketing",
      "business"
    ],
    answer:
      "The Enterprise Solutions division helps businesses with company incorporation, GST and taxation support, compliance, legal assistance, HR services, digital marketing, IT solutions, and business consulting."
  },

  {
    keywords: [
      "skill",
      "training",
      "course",
      "courses",
      "academy",
      "certification",
      "learning",
      "education"
    ],
    answer:
      "Through My Skills Academy, The Indus Group offers training and certification programs in Logistics, Supply Chain Management, Export-Import, Digital Marketing, Data Science, Cyber Security, E-commerce, Sales, and International Trade."
  },

  {
    keywords: [
      "knowledge",
      "knowledge center",
      "article",
      "blog",
      "glossary",
      "industry updates"
    ],
    answer:
      "The Knowledge Center provides industry articles, EXIM updates, trade terminology, logistics glossaries, and educational resources for professionals and businesses."
  },

  {
    keywords: [
      "resource",
      "resources",
      "container",
      "port",
      "airport",
      "uld",
      "guide"
    ],
    answer:
      "The Resources section includes shipping container information, airport and seaport references, ULD guides, cargo tools, trade resources, and logistics reference material."
  },

  {
    keywords: [
      "real estate",
      "property",
      "infrastructure",
      "construction"
    ],
    answer:
      "The Indus Group also operates in Real Estate and Infrastructure solutions as one of its major business verticals."
  },

  {
    keywords: [
      "contact",
      "phone",
      "email",
      "support",
      "reach"
    ],
    answer:
      "You can contact The Indus Group at +91 7011332238 or email info@theindusgroup.com."
  },

  {
    keywords: [
      "who are you",
      "about",
      "indus group",
      "company"
    ],
    answer:
      "The Indus Group is a multi-business organization focused on Logistics & Supply Chain, Enterprise Solutions, Skill Development, and Real Estate. The company works with MSMEs, entrepreneurs, and organizations to help them grow and scale."
  }
]





// ── ChatbotWidget ─────────────────────────────────────────────────────────────
function ChatbotWidget() {
  const [open, setOpen] = useState(true)
  const getFaqReply = (question) => {
    const q = question.toLowerCase()

    for (const faq of FAQS) {
      for (const keyword of faq.keywords) {
        if (q.includes(keyword)) {
          return faq.answer
        }
      }
    }

    return "I can help with information about The Indus Group's businesses, services, resources and contact details."
  }

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([])
  const [leadCaptured, setLeadCaptured] = useState(false)
  const [submittingLead, setSubmittingLead] = useState(false);

  const [leadStep, setLeadStep] = useState("name")

  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    brief: ""
  })
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const saveLead = async (lead) => {
    console.log("SAVING LEAD", lead)

    const formData = new FormData()

    formData.append("name", lead.name)
    formData.append("email", lead.email)
    formData.append("phone", lead.phone)
    formData.append("services", lead.services)
    formData.append("brief", lead.brief)

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    })

    console.log("LEAD SENT")
  }

  const send = async () => {
    const text = input.trim()

    if (!text || loading) return

    setMessages(prev => [
      ...prev,
      {
        role: "user",
        content: text
      }
    ])

    setInput("")
    setLoading(true)

    const reply = getFaqReply(text)

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: reply
        }
      ])

      setLoading(false)
    }, 400)
  }
  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className="fixed bottom-16 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div className="w-[360px] flex flex-col rounded-2xl shadow-2xl border border-gray-200 bg-white overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 bg-[#0b1f5c]">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">Indu</p>
              <p className="text-blue-300 text-xs">Powered by The Indus Group</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          {!leadCaptured ? (

            <div className="p-4 space-y-3">

              <h3 className="font-semibold text-lg">
                Welcome 👋
              </h3>

              <p className="text-sm text-gray-500">
                Tell us about yourself before we begin.
              </p>

              <input
                placeholder="Full Name"
                value={lead.name}
                onChange={(e) =>
                  setLead({ ...lead, name: e.target.value })
                }
                className="w-full border rounded-lg p-2"
              />

              <input
                placeholder="Email"
                type="email"
                value={lead.email}
                onChange={(e) =>
                  setLead({ ...lead, email: e.target.value })
                }
                className="w-full border rounded-lg p-2"
              />

              <input
                placeholder="Phone"
                value={lead.phone}
                onChange={(e) =>
                  setLead({ ...lead, phone: e.target.value })
                }
                className="w-full border rounded-lg p-2"
              />

              <select
                value={lead.services}
                onChange={(e) =>
                  setLead({ ...lead, services: e.target.value })
                }
                className="w-full border rounded-lg p-2"
              >
                <option value="">Select Service</option>
                <option>Logistics</option>
                <option>Enterprise</option>
                <option>Skill Development</option>
                <option>Real Estate</option>
              </select>

              <textarea
                rows={3}
                placeholder="Brief Requirement"
                value={lead.brief}
                onChange={(e) =>
                  setLead({ ...lead, brief: e.target.value })
                }
                className="w-full border rounded-lg p-2"
              />

              <button
                disabled={submittingLead}
                className="w-full bg-[#0b1f5c] text-white rounded-lg py-2 disabled:opacity-50 disabled:cursor-not-allowed"

                onClick={async () => {

                  if (submittingLead) return;

                  if (
                    !lead.name ||
                    !lead.email ||
                    !lead.phone ||
                    !lead.services
                  ) {
                    alert("Please complete all required fields.");
                    return;
                  }

                  try {
                    setSubmittingLead(true);

                    await saveLead(lead);

                    setLeadCaptured(true);

                    setMessages([
                      {
                        role: "assistant",
                        content: `Thanks ${lead.name}! How can I help you today?`
                      }
                    ]);

                  } catch (err) {
                    console.error(err);
                    alert("Failed to submit. Please try again.");
                  } finally {
                    setSubmittingLead(false);
                  }
                }}

              >
                {submittingLead ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "Continue"
                )}
              </button>

            </div>

          ) : (

            <>
              {messages.map((msg, i) => (
                <Message key={i} msg={msg} />
              ))}

              {loading && (
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#0b1f5c] flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>

                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm">
                    <TypingDots />
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </>

          )}

          {/* Input */}
          {/* Input */}
          {leadCaptured && (
            <div className="flex items-center gap-2 px-3 py-3 border-t border-gray-100">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask something..."
                disabled={loading}
                className="flex-1 text-sm px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
              />

              <button
                onClick={send}
                disabled={!input.trim() || loading}
                className="w-9 h-9 rounded-xl bg-[#0b1f5c] flex items-center justify-center text-white disabled:opacity-40 hover:bg-blue-800 transition"
                aria-label="Send"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-[#0b1f5c] shadow-lg flex items-center justify-center hover:bg-blue-800 transition-all hover:scale-105 active:scale-95"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? <X className="w-6 h-6 text-white" /> : <Bot className="w-6 h-6 text-white" />}
      </button>

    </div>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <>
      <SocialMenu />
      <ChatbotWidget />

      <footer className="bg-[#0b1f5c] text-blue-200">
        {/* Main */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-white font-bold text-3xl font-heading">
                  The Indus Group of Co.
                </h3>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-sm text-blue-200/80">
                Delivering industry-leading solutions across verticals with reliability, innovation, and integrity.
              </p>
              <div className="space-y-2.5">
                <a href="tel:+917011332238" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  +91 7011 332 238
                </a>
                <a href="mailto:info@theindusgroup.com" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  info@theindusgroup.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold font-heading mb-5 text-xs uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-blue-200/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Tools */}
            <div>
              <h4 className="text-white font-semibold font-heading mb-5 text-xs uppercase tracking-widest">Resources & Tools</h4>
              <ul className="space-y-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-200/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="text-white font-semibold font-heading mb-5 text-xs uppercase tracking-widest">Connect With Us</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="https://www.instagram.com/the_indusgroup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-200/70 hover:text-white transition-colors">
                    <Instagram className="w-4 h-4 text-[#E1306C]" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/the-indus-group-co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-200/70 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4 text-[#0077B5]" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@theindusgroupco." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-200/70 hover:text-white transition-colors">
                    <Youtube className="w-4 h-4 text-[#FF0000]" /> YouTube
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/theindusgroup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-200/70 hover:text-white transition-colors">
                    <X className="w-4 h-4 text-white" /> Twitter / X
                  </a>
                </li>
              </ul>
            </div>

            {/* Businesses */}
            <div>
              <h4 className="text-white font-semibold font-heading mb-5 text-xs uppercase tracking-widest">Our Businesses</h4>
              <ul className="space-y-2.5">
                {businesses.map((b) => (
                  <li key={b.href}>
                    <Link href={b.href} className="text-sm text-blue-200/70 hover:text-white transition-colors">
                      {b.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-20 md:mb-0 flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-xs text-blue-200/50">
              © 2025 The Indus Group. All rights reserved.
            </p>
            {/* Legal */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200/80">
              <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}
