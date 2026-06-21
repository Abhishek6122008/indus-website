// Generates simple, valid multi-line PDFs for the three Knowledge Center blog
// articles — no external dependencies. Run: node scripts/make-blog-pdfs.mjs
import { writeFileSync, mkdirSync } from 'node:fs'

const OUT = 'public/files'
mkdirSync(OUT, { recursive: true })

// Escape characters special to PDF string literals.
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

// Wrap a paragraph to ~90 chars/line for the page width we use.
function wrap(text, width = 90) {
  const words = text.split(/\s+/)
  const lines = []
  let line = ''
  for (const w of words) {
    if ((line + ' ' + w).trim().length > width) {
      lines.push(line.trim())
      line = w
    } else {
      line = (line + ' ' + w).trim()
    }
  }
  if (line) lines.push(line.trim())
  return lines
}

function buildContentStream(title, paragraphs) {
  const lineHeight = 16
  let y = 770
  const parts = []
  parts.push('BT')
  // Title
  parts.push('/F2 16 Tf')
  parts.push(`1 0 0 1 56 ${y} Tm`)
  for (const l of wrap(title, 70)) {
    parts.push(`(${esc(l)}) Tj`)
    y -= 22
    parts.push(`1 0 0 1 56 ${y} Tm`)
  }
  y -= 10
  // Body
  parts.push('/F1 11 Tf')
  for (const p of paragraphs) {
    for (const l of wrap(p)) {
      parts.push(`1 0 0 1 56 ${y} Tm`)
      parts.push(`(${esc(l)}) Tj`)
      y -= lineHeight
    }
    y -= 10 // paragraph gap
  }
  parts.push('ET')
  return parts.join('\n')
}

function makePdf(title, paragraphs) {
  const content = buildContentStream(title, paragraphs)
  const objects = []
  objects.push('<< /Type /Catalog /Pages 2 0 R >>')
  objects.push('<< /Type /Pages /Kids [3 0 R] /Count 1 >>')
  objects.push(
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] ' +
      '/Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>'
  )
  objects.push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`)
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>')

  let pdf = '%PDF-1.4\n'
  const offsets = []
  objects.forEach((obj, i) => {
    offsets.push(pdf.length)
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`
  })
  const xrefStart = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
  for (const off of offsets) {
    pdf += String(off).padStart(10, '0') + ' 00000 n \n'
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`
  return Buffer.from(pdf, 'latin1')
}

const articles = [
  {
    file: 'unlocking-success.pdf',
    title: 'Unlocking Success: The Power of an End-to-End Supply Chain Partner',
    paragraphs: [
      "Companies face constant pressure to boost efficiency, costs, and stay ahead in today's fast-changing industrial world. Indus Co. gets these challenges. The Indus Group Co. offers integrated global logistics solutions to drive excellence and spark growth.",
      "Smart supply chain control makes or breaks industrial success. Our full-range logistics & supply chain services fixes upgrade every step. We smooth out the whole process from buying to delivery. This cuts wait times and hiccups. Our high-tech tracking gives you a bird's-eye view of your supply chain. Now you can make smarter choices and tackle issues head-on.",
      "Manufacturing sits at the core of industry. Our services rev up manufacturing through bleeding-edge tech and proven methods. We guide and set up automation, lean production, and quality checks. These fresh ideas help you churn out more, waste less, and keep quality sky-high.",
      "Downtime can drain your wallet in industry. Our upkeep and help services keep your gears turning without a hitch. Our team keeps your machines humming with regular check-ups, quick fixes, and ongoing tech help. We have experts ready to jump on any problem fast, so you don't lose precious work time.",
      "Every factory has its own quirks and needs. That is why we cook up custom fixes just for you. Need special software to run things? A one-of-a-kind gadget? We'll put our heads together with yours to dream up solutions that fit your business goals and real-world setup like a glove.",
      "Going green isn't just nice anymore - it's a must in today's industrial scene. Our Logistics & SCM offerings help you shrink your eco-footprint. From power-saving tech to eco-friendly supply chains, we'll show you how to do right by the planet and your wallet at the same time.",
      "Here at The Indus Group Co., we're all about building lasting bonds with our customers. We roll up our sleeves and dive into your business, sniffing out ways to make things better and putting in place fixes that pack a punch. Your wins define our success. We aim to boost your operational and strategic targets.",
      "The industrial world keeps shifting. To lead, you need fresh ideas, smooth operations, and smart teamwork. The Indus Group Co. Logistics & SCM offerings can spark change in your work, tackle tough spots, and push your growth. Reach out now - we'll show you how we back your business and help you shine in your industrial work.",
    ],
  },
  {
    file: 'future-business-intelligence.pdf',
    title: 'The Future of Business Intelligence: Leveraging Big Data and Analytics for Growth',
    paragraphs: [
      "In the dynamic world of enterprise, if you aren't growing, you're falling behind. We differentiate with our ability to extract maximum value through our pillars of innovation, optimization and adaptability. Here is how we are leading the charge on business and industry transformations around the globe.",
      "Innovation is what drives us. Established in 2011, at The Indus Group Co. we set out to challenge the status quo and we spend heavily on technology to remain true to our commitment of providing our clients with the latest and best-in-class technology solutions - be it AI driven analytics or block chain.",
      "Our culture thrives on thinking outside the standard proverbial box and designing creative solutions for complex challenges, which allows us to provide our customers with innovative, and unique, best value added solutions that achieve efficient and measurable results. In any business today, it is of prime importance that everything runs like a well-oiled machine. One of The Indus Group Co. focus areas is the ground up of administrative work and process optimization to reach higher efficiency of our clients, thus, enabling them to reach their goals. Using big data and analytics, we deliver clear information that gives companies power to make decisions and make an impact in the market.",
      "Emerging businesses are in great need for a flexible approach to adapt to the changing business environment. We agree that we should not use pre-designed solutions here. We are creating custom solutions that are then adjustable and thus empower them to adapt to market changes and emerging trends. We propagate the ecosystem of constant learning and development.",
      "One feature of The Indus Group Co. is the combination of the global reach and the local expertise thus making it something different. We have a presence in multiple regions, ensuring that if a client needs a comprehensive business solution, we will be there for them no matter if they are global or locally occupied.",
      "At The Indus Group Co., we stay committed to our objective: creating value by innovation, optimization, and adaptability. This way, we are successful in leading our customers on the way of growth and transformation at a global level just being true to these values. Your business will truly benefit from our various end-to-end products.",
    ],
  },
  {
    file: 'future-proofing.pdf',
    title: 'Future-Proofing Your Career: Essential Skills for the Digital Age',
    paragraphs: [
      "The digital age has brought about a wave of new technology that's rapidly changing the way we live and work. A recent report by the Institute for the Future, in partnership with Dell, predicts that 85% of jobs that will be available in 2030 haven't been invented yet. As the nature of work continues to evolve, it's important to stay ahead of the curve by cultivating skills that will help you thrive in the new world of work.",
      "In today's fast-paced and ever-changing world, staying at the top of your game means being a lifelong learner and constantly upgrading your skills. My Skills Academy, a unit of The Indus Group Co. and an ISO 9001: 2015 certified platform, is dedicated to empowering individuals and organizations to navigate the modern landscape independently.",
      "At My Skills Academy, we believe that education is the seed of personal and professional growth. Our mission is to deliver high-quality, accessible, and customizable education to our diverse student body. Whether you're looking to upskill, pivot to a new career, or expand your horizons, we have you covered.",
      "Our specialized courses encompass crucial fields such as Logistics & Supply Chain Management, EXIM (Export-Import Management), Sales & Marketing, Data Science and Analysis, UI & UX, Digital Marketing, Entrepreneurship, Soft Skills - Communications & Personality Development, and many more. Each course is meticulously designed and delivered in an interactive, engaging format, ensuring practical, real-world applications.",
      "Learn from the best - our instructors are practitioners in their respective fields, bringing current, real-world experience into the classroom. They provide valuable insights and career advice, taking you beyond the textbook. We understand the demands of busy lives, so our programs offer flexible learning options, including hybrid (online/offline) formats. You can work on your own time with 24/7/365 course access.",
      "Upon completing your program, you'll gain industry-recognized certifications to enhance your resume and employment opportunities. As a graduate, you'll also benefit from our career assistance, including resume building and job placement support.",
      "Ready to unlock your potential? Explore our courses and discover how My Skills Academy can help you achieve your goals, whether you're an experienced professional or a complete beginner.",
    ],
  },
]

for (const a of articles) {
  writeFileSync(`${OUT}/${a.file}`, makePdf(a.title, a.paragraphs))
  console.log('wrote', `${OUT}/${a.file}`)
}
