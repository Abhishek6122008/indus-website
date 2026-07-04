'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Phone, Mail, Instagram, Linkedin, Youtube, Twitter, ChevronDown, X, Facebook, Send, Sparkles, Loader2, ArrowLeft, Briefcase, Wrench, Building2, User, FileText, AlertCircle, CheckCircle2, Globe } from 'lucide-react'


const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxDsrUW0biQ8S3Yhw0acSQuxLnCp041StvnBxCdjWasOaBu-k8z_IDflYjxMm1wKYUq/exec"


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

// ── Languages supported by the chatbot ────────────────────────────────────────
const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
  { code: 'ur', label: 'اردو', flag: '🇵🇰' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
]
const RTL_LANGS = ['ar', 'ur']

// Sub-options shown when the user taps "Businesses" inside the chatbot
const businessOptionsBase = [
  { id: 'enterprise', href: '/businesses/enterprise-solutions', icon: Briefcase },
  { id: 'logistics', href: '/businesses/logistics', icon: Wrench },
  { id: 'skillDev', href: '/businesses/skill-development', icon: Building2 },
  { id: 'realEstate', href: '/businesses/real-estate', icon: Building2 },
]

// The four primary chatbot menu options (Amazon/Alexa style quick actions)
const mainMenuOptionsBase = [
  { id: 'contact' },
  { id: 'careers' },
  { id: 'tools' },
  { id: 'businesses' },
]

// Dialler codes with flag emoji for the phone field
const countryCodes = [
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+1', flag: '🇺🇸', name: 'USA' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+90', flag: '🇹🇷', name: 'Turkey' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+974', flag: '🇶🇦', name: 'Qatar' },
  { code: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: '+968', flag: '🇴🇲', name: 'Oman' },
  { code: '+973', flag: '🇧🇭', name: 'Bahrain' },
  { code: '+234', flag: '🇳🇬', name: 'Nigeria' },
  { code: '+243', flag: '🇨🇩', name: 'Congo' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: '+212', flag: '🇲🇦', name: 'Morocco' },
  { code: '+216', flag: '🇹🇳', name: 'Tunisia' },
  { code: '+60', flag: '🇲🇾', name: 'Malaysia' },
]

// Validation helpers for the lead form
const NAME_REGEX = /^[A-Za-z][A-Za-z\s.'-]{1,49}$/
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_REGEX = /^[6-9]\d{9}$/

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length
}

// ── UI strings (every label / message the chatbot itself produces) ───────────
const UI = {
  en: {
    greeting: "Hi there 👋 How can I help you today? Choose an option below or just type your question.",
    formGreeting: "Hi there 👋 To get you connected with the right team, please fill in your details below. Or feel free to type a question instead.",
    redirectedGreeting: "Hi again 👋 We've taken you to the page you asked for — hope it's exactly what you needed! If there's anything else I can help with, just ask here, or leave your details below and our team will reach out to you.",
    helloAgain: (n) => `Hi ${n}! How can I help you today?`,
    inputPlaceholder: "Ask a question...",
    poweredBy: "Powered by The Indus Group",
    menu: { contact: 'Contact Us', careers: 'Careers', tools: 'Tools', businesses: 'Businesses' },
    biz: { enterprise: 'Enterprise', logistics: 'Logistics', skillDev: 'Skill Dev', realEstate: 'Real Estate' },
    leaveDetails: "Leave Your Details",
    formTitle: "Let's get you connected 👋",
    formSubtitle: "Share a few details and our team will reach out shortly.",
    fullName: "Full Name", namePlaceholder: "e.g. John Doe",
    email: "Email Address", emailPlaceholder: "you@example.com",
    phone: "Phone Number", phonePlaceholder: "10-digit mobile number",
    service: "Service of Interest", selectService: "Select a service",
    brief: "Brief Requirement", briefPlaceholder: "Tell us a little about what you need (minimum 20 words)...",
    words: "words",
    submit: "Submit Details", submitting: "Submitting...",
    backToChat: "← Back to chat",
    contactPrompt: "Sure! Please fill in your details below and our team will get back to you shortly.",
    contactPromptFree: "Of course! Please leave your details below and our team will reach out to you shortly.",
    careersRedirect: "Sure — taking you to our Careers page...",
    toolsRedirect: "Sure — taking you to our Tools page...",
    businessesPrompt: "We operate across four verticals. Which one would you like to explore?",
    businessRedirect: (l) => `Taking you to ${l}...`,
    dontKnow: "I don't have that information on hand. Please leave your details below and our team will get back to you shortly.",
    thanks: (n) => `Thanks ${n}! We've received your details and our team will reach out soon. How else can I help you today?`,
    errName: "Enter a valid name (letters only, min 2 characters).",
    errEmail: "Enter a valid email address.",
    errPhone: "Enter a valid 10-digit mobile number.",
    errService: "Please select a service.",
    errBrief: (n) => `Please describe your requirement in at least 20 words (currently ${n}).`,
    failedSubmit: "Failed to submit. Please try again.",
    chooseLanguage: "Language",
  },
  hi: {
    greeting: "नमस्ते 👋 आज मैं आपकी कैसे मदद कर सकता हूँ? नीचे दिए गए विकल्प चुनें या अपना सवाल टाइप करें।",
    formGreeting: "नमस्ते 👋 सही टीम से आपको जोड़ने के लिए, कृपया नीचे अपनी जानकारी भरें। या आप सीधे अपना सवाल भी टाइप कर सकते हैं।",
    redirectedGreeting: "नमस्ते 👋 हमने आपको वह पेज दिखा दिया है जो आपने माँगा था — उम्मीद है यह आपके लिए मददगार रहा! अगर कुछ और चाहिए तो यहाँ पूछें, या नीचे अपनी जानकारी दें और हमारी टीम आपसे संपर्क करेगी।",
    helloAgain: (n) => `नमस्ते ${n}! आज मैं आपकी कैसे मदद करूँ?`,
    inputPlaceholder: "अपना सवाल लिखें...",
    poweredBy: "द इंडस ग्रुप द्वारा संचालित",
    menu: { contact: 'संपर्क करें', careers: 'करियर', tools: 'टूल्स', businesses: 'व्यवसाय' },
    biz: { enterprise: 'एंटरप्राइज़', logistics: 'लॉजिस्टिक्स', skillDev: 'स्किल डेवलपमेंट', realEstate: 'रियल एस्टेट' },
    leaveDetails: "अपनी जानकारी दें",
    formTitle: "आइए आपको जोड़ते हैं 👋",
    formSubtitle: "कुछ जानकारी साझा करें, हमारी टीम जल्द ही आपसे संपर्क करेगी।",
    fullName: "पूरा नाम", namePlaceholder: "उदा. जॉन डो",
    email: "ईमेल पता", emailPlaceholder: "you@example.com",
    phone: "फ़ोन नंबर", phonePlaceholder: "10 अंकों का मोबाइल नंबर",
    service: "रुचि की सेवा", selectService: "एक सेवा चुनें",
    brief: "संक्षिप्त आवश्यकता", briefPlaceholder: "अपनी आवश्यकता के बारे में बताएं (कम से कम 20 शब्द)...",
    words: "शब्द",
    submit: "विवरण सबमिट करें", submitting: "सबमिट हो रहा है...",
    backToChat: "← चैट पर वापस जाएं",
    contactPrompt: "ज़रूर! कृपया नीचे अपनी जानकारी भरें, हमारी टीम जल्द ही आपसे संपर्क करेगी।",
    contactPromptFree: "बिल्कुल! कृपया नीचे अपनी जानकारी दें, हमारी टीम जल्द ही संपर्क करेगी।",
    careersRedirect: "ठीक है — आपको हमारे करियर पेज पर ले जा रहे हैं...",
    toolsRedirect: "ठीक है — आपको हमारे टूल्स पेज पर ले जा रहे हैं...",
    businessesPrompt: "हम चार क्षेत्रों में काम करते हैं। आप किसके बारे में जानना चाहेंगे?",
    businessRedirect: (l) => `आपको ${l} पर ले जा रहे हैं...`,
    dontKnow: "मेरे पास अभी यह जानकारी उपलब्ध नहीं है। कृपया नीचे अपनी जानकारी दें, हमारी टीम जल्द संपर्क करेगी।",
    thanks: (n) => `धन्यवाद ${n}! हमें आपकी जानकारी मिल गई है, हमारी टीम जल्द संपर्क करेगी। मैं और कैसे मदद कर सकता हूँ?`,
    errName: "एक मान्य नाम दर्ज करें (केवल अक्षर, न्यूनतम 2 अक्षर)।",
    errEmail: "एक मान्य ईमेल पता दर्ज करें।",
    errPhone: "एक मान्य 10-अंकीय मोबाइल नंबर दर्ज करें।",
    errService: "कृपया एक सेवा चुनें।",
    errBrief: (n) => `कृपया कम से कम 20 शब्दों में अपनी आवश्यकता बताएं (अभी ${n})।`,
    failedSubmit: "सबमिट करने में विफल। कृपया पुनः प्रयास करें।",
    chooseLanguage: "भाषा",
  },
  ur: {
    greeting: "السلام علیکم 👋 آج میں آپ کی کس طرح مدد کر سکتا ہوں؟ نیچے دیے گئے آپشنز میں سے کوئی منتخب کریں یا اپنا سوال ٹائپ کریں۔",
    formGreeting: "السلام علیکم 👋 صحیح ٹیم سے رابطہ کرانے کے لیے، براہ کرم نیچے اپنی تفصیلات درج کریں۔ یا آپ سیدھا اپنا سوال بھی ٹائپ کر سکتے ہیں۔",
    redirectedGreeting: "السلام علیکم 👋 ہم نے آپ کو وہ صفحہ دکھا دیا ہے جو آپ نے مانگا تھا — امید ہے یہ آپ کے لیے مددگار رہا! اگر مزید کچھ درکار ہو تو یہاں پوچھیں، یا نیچے اپنی تفصیلات دیں، ہماری ٹیم آپ سے رابطہ کرے گی۔",
    helloAgain: (n) => `السلام علیکم ${n}! آج میں آپ کی کیسے مدد کروں؟`,
    inputPlaceholder: "اپنا سوال لکھیں...",
    poweredBy: "دی انڈس گروپ کی جانب سے",
    menu: { contact: 'رابطہ کریں', careers: 'کیریئر', tools: 'ٹولز', businesses: 'کاروبار' },
    biz: { enterprise: 'انٹرپرائز', logistics: 'لاجسٹکس', skillDev: 'سکل ڈویلپمنٹ', realEstate: 'رئیل اسٹیٹ' },
    leaveDetails: "اپنی تفصیلات دیں",
    formTitle: "آئیے آپ سے رابطہ کرتے ہیں 👋",
    formSubtitle: "کچھ تفصیلات شیئر کریں، ہماری ٹیم جلد رابطہ کرے گی۔",
    fullName: "پورا نام", namePlaceholder: "مثلاً جان ڈو",
    email: "ای میل ایڈریس", emailPlaceholder: "you@example.com",
    phone: "فون نمبر", phonePlaceholder: "10 ہندسوں کا موبائل نمبر",
    service: "مطلوبہ سروس", selectService: "ایک سروس منتخب کریں",
    brief: "مختصر تفصیل", briefPlaceholder: "اپنی ضرورت کے بارے میں بتائیں (کم از کم 20 الفاظ)...",
    words: "الفاظ",
    submit: "تفصیلات جمع کرائیں", submitting: "جمع کیا جا رہا ہے...",
    backToChat: "← چیٹ پر واپس جائیں",
    contactPrompt: "ضرور! براہ کرم نیچے اپنی تفصیلات درج کریں، ہماری ٹیم جلد رابطہ کرے گی۔",
    contactPromptFree: "بالکل! براہ کرم نیچے اپنی تفصیلات دیں، ہماری ٹیم جلد رابطہ کرے گی۔",
    careersRedirect: "ٹھیک ہے — آپ کو ہمارے کیریئر صفحے پر لے جا رہے ہیں...",
    toolsRedirect: "ٹھیک ہے — آپ کو ہمارے ٹولز صفحے پر لے جا رہے ہیں...",
    businessesPrompt: "ہم چار شعبوں میں کام کرتے ہیں۔ آپ کس کے بارے میں جاننا چاہیں گے؟",
    businessRedirect: (l) => `آپ کو ${l} پر لے جا رہے ہیں...`,
    dontKnow: "میرے پاس فی الحال یہ معلومات موجود نہیں۔ براہ کرم نیچے اپنی تفصیلات دیں، ہماری ٹیم جلد رابطہ کرے گی۔",
    thanks: (n) => `شکریہ ${n}! ہمیں آپ کی تفصیلات موصول ہو گئی ہیں، ہماری ٹیم جلد رابطہ کرے گی۔ میں مزید کیسے مدد کر سکتا ہوں؟`,
    errName: "براہ کرم درست نام درج کریں (صرف حروف، کم از کم 2 حروف)۔",
    errEmail: "براہ کرم درست ای میل ایڈریس درج کریں۔",
    errPhone: "براہ کرم درست 10 ہندسوں کا موبائل نمبر درج کریں۔",
    errService: "براہ کرم ایک سروس منتخب کریں۔",
    errBrief: (n) => `براہ کرم کم از کم 20 الفاظ میں اپنی ضرورت بیان کریں (ابھی ${n})۔`,
    failedSubmit: "جمع کرانے میں ناکامی۔ براہ کرم دوبارہ کوشش کریں۔",
    chooseLanguage: "زبان",
  },
  ar: {
    greeting: "مرحباً 👋 كيف يمكنني مساعدتك اليوم؟ اختر أحد الخيارات أدناه أو اكتب سؤالك مباشرة.",
    formGreeting: "مرحباً 👋 لتوصيلك بالفريق المناسب، يرجى تعبئة بياناتك أدناه. أو يمكنك كتابة سؤالك مباشرة.",
    redirectedGreeting: "مرحباً مجدداً 👋 لقد نقلناك إلى الصفحة التي طلبتها — نأمل أن تكون هي ما كنت تبحث عنه بالضبط! إذا احتجت إلى أي شيء آخر، تحدث معي هنا، أو اترك بياناتك أدناه وسيتواصل فريقنا معك.",
    helloAgain: (n) => `مرحباً ${n}! كيف يمكنني مساعدتك اليوم؟`,
    inputPlaceholder: "اكتب سؤالك...",
    poweredBy: "بدعم من مجموعة إندس",
    menu: { contact: 'اتصل بنا', careers: 'الوظائف', tools: 'الأدوات', businesses: 'الأعمال' },
    biz: { enterprise: 'حلول المؤسسات', logistics: 'الخدمات اللوجستية', skillDev: 'تطوير المهارات', realEstate: 'العقارات' },
    leaveDetails: "اترك بياناتك",
    formTitle: "دعنا نتواصل معك 👋",
    formSubtitle: "شاركنا بعض التفاصيل وسيتواصل فريقنا معك قريباً.",
    fullName: "الاسم الكامل", namePlaceholder: "مثال: محمد علي",
    email: "البريد الإلكتروني", emailPlaceholder: "you@example.com",
    phone: "رقم الهاتف", phonePlaceholder: "رقم الجوال المكوّن من 10 أرقام",
    service: "الخدمة المطلوبة", selectService: "اختر خدمة",
    brief: "وصف موجز", briefPlaceholder: "أخبرنا قليلاً عمّا تحتاجه (20 كلمة على الأقل)...",
    words: "كلمة",
    submit: "إرسال البيانات", submitting: "جارٍ الإرسال...",
    backToChat: "← العودة إلى المحادثة",
    contactPrompt: "بالتأكيد! يرجى ملء بياناتك أدناه وسيتواصل فريقنا معك قريباً.",
    contactPromptFree: "بالطبع! يرجى ترك بياناتك أدناه وسيتواصل فريقنا معك قريباً.",
    careersRedirect: "حسناً — جارٍ نقلك إلى صفحة الوظائف...",
    toolsRedirect: "حسناً — جارٍ نقلك إلى صفحة الأدوات...",
    businessesPrompt: "نعمل في أربعة قطاعات رئيسية. أي منها تود استكشافه؟",
    businessRedirect: (l) => `جارٍ نقلك إلى ${l}...`,
    dontKnow: "ليست لدي هذه المعلومة حالياً. يرجى ترك بياناتك أدناه وسيتواصل فريقنا معك قريباً.",
    thanks: (n) => `شكراً ${n}! تم استلام بياناتك وسيتواصل فريقنا معك قريباً. كيف يمكنني مساعدتك أكثر؟`,
    errName: "أدخل اسماً صحيحاً (حروف فقط، حرفان على الأقل).",
    errEmail: "أدخل بريداً إلكترونياً صحيحاً.",
    errPhone: "أدخل رقم جوال صحيحاً مكوّناً من 10 أرقام.",
    errService: "يرجى اختيار خدمة.",
    errBrief: (n) => `يرجى وصف طلبك في 20 كلمة على الأقل (حالياً ${n}).`,
    failedSubmit: "فشل الإرسال. يرجى المحاولة مرة أخرى.",
    chooseLanguage: "اللغة",
  },
  zh: {
    greeting: "您好 👋 今天我能为您提供什么帮助？请选择下方选项或直接输入您的问题。",
    formGreeting: "您好 👋 为了让合适的团队与您联系，请在下方填写您的信息。您也可以直接输入您的问题。",
    redirectedGreeting: "您好，欢迎回来 👋 已经为您跳转到所需的页面，希望正是您需要的内容！如果还有其他需要帮助的，请在这里继续提问，或留下您的信息，我们的团队会尽快与您联系。",
    helloAgain: (n) => `您好 ${n}！今天我能为您做些什么？`,
    inputPlaceholder: "请输入您的问题...",
    poweredBy: "由 The Indus Group 提供支持",
    menu: { contact: '联系我们', careers: '招聘', tools: '工具', businesses: '业务板块' },
    biz: { enterprise: '企业解决方案', logistics: '物流', skillDev: '技能发展', realEstate: '房地产' },
    leaveDetails: "留下您的信息",
    formTitle: "让我们与您取得联系 👋",
    formSubtitle: "请填写一些信息，我们的团队会尽快与您联系。",
    fullName: "姓名", namePlaceholder: "例如：张三",
    email: "电子邮箱", emailPlaceholder: "you@example.com",
    phone: "电话号码", phonePlaceholder: "10位手机号码",
    service: "感兴趣的服务", selectService: "请选择服务",
    brief: "简要需求", briefPlaceholder: "请简要描述您的需求（至少20个字）...",
    words: "字",
    submit: "提交信息", submitting: "正在提交...",
    backToChat: "← 返回聊天",
    contactPrompt: "好的！请在下方填写您的信息，我们的团队会尽快与您联系。",
    contactPromptFree: "没问题！请在下方留下您的信息，我们的团队会尽快与您联系。",
    careersRedirect: "好的，正在为您转到招聘页面...",
    toolsRedirect: "好的，正在为您转到工具页面...",
    businessesPrompt: "我们涉及四大业务板块，您想了解哪一个？",
    businessRedirect: (l) => `正在为您转到${l}...`,
    dontKnow: "我目前没有这方面的信息。请在下方留下您的信息，我们的团队会尽快与您联系。",
    thanks: (n) => `谢谢您，${n}！我们已收到您的信息，团队会尽快联系您。还有什么我可以帮您的吗？`,
    errName: "请输入有效姓名（仅限字母，至少2个字符）。",
    errEmail: "请输入有效的电子邮箱地址。",
    errPhone: "请输入有效的10位手机号码。",
    errService: "请选择一项服务。",
    errBrief: (n) => `请用至少20个字描述您的需求（目前${n}个字）。`,
    failedSubmit: "提交失败，请重试。",
    chooseLanguage: "语言",
  },
  pt: {
    greeting: "Olá 👋 Como posso ajudá-lo hoje? Escolha uma opção abaixo ou digite sua pergunta.",
    formGreeting: "Olá 👋 Para conectá-lo com a equipe certa, preencha seus dados abaixo. Ou, se preferir, digite sua pergunta diretamente.",
    redirectedGreeting: "Olá novamente 👋 Levamos você à página que pediu — espero que seja exatamente o que precisava! Se precisar de mais alguma coisa, é só falar comigo aqui, ou deixe seus dados abaixo e nossa equipe entrará em contato.",
    helloAgain: (n) => `Olá ${n}! Como posso ajudá-lo hoje?`,
    inputPlaceholder: "Digite sua pergunta...",
    poweredBy: "Desenvolvido por The Indus Group",
    menu: { contact: 'Fale Conosco', careers: 'Carreiras', tools: 'Ferramentas', businesses: 'Negócios' },
    biz: { enterprise: 'Soluções Empresariais', logistics: 'Logística', skillDev: 'Desenvolvimento de Habilidades', realEstate: 'Imóveis' },
    leaveDetails: "Deixe Seus Dados",
    formTitle: "Vamos conectá-lo 👋",
    formSubtitle: "Compartilhe alguns detalhes e nossa equipe entrará em contato em breve.",
    fullName: "Nome Completo", namePlaceholder: "ex. João Silva",
    email: "Endereço de E-mail", emailPlaceholder: "voce@exemplo.com",
    phone: "Número de Telefone", phonePlaceholder: "número de celular com 10 dígitos",
    service: "Serviço de Interesse", selectService: "Selecione um serviço",
    brief: "Resumo da Necessidade", briefPlaceholder: "Conte-nos um pouco sobre o que você precisa (mínimo 20 palavras)...",
    words: "palavras",
    submit: "Enviar Dados", submitting: "Enviando...",
    backToChat: "← Voltar ao chat",
    contactPrompt: "Claro! Por favor, preencha seus dados abaixo e nossa equipe entrará em contato em breve.",
    contactPromptFree: "Claro! Deixe seus dados abaixo e nossa equipe entrará em contato em breve.",
    careersRedirect: "Certo — levando você à página de Carreiras...",
    toolsRedirect: "Certo — levando você à página de Ferramentas...",
    businessesPrompt: "Atuamos em quatro áreas de negócio. Qual delas você gostaria de explorar?",
    businessRedirect: (l) => `Levando você a ${l}...`,
    dontKnow: "Não tenho essa informação no momento. Deixe seus dados abaixo e nossa equipe entrará em contato em breve.",
    thanks: (n) => `Obrigado, ${n}! Recebemos seus dados e nossa equipe entrará em contato em breve. Posso ajudar em mais alguma coisa?`,
    errName: "Digite um nome válido (somente letras, mínimo 2 caracteres).",
    errEmail: "Digite um endereço de e-mail válido.",
    errPhone: "Digite um número de celular válido com 10 dígitos.",
    errService: "Selecione um serviço.",
    errBrief: (n) => `Descreva sua necessidade em pelo menos 20 palavras (atualmente ${n}).`,
    failedSubmit: "Falha ao enviar. Tente novamente.",
    chooseLanguage: "Idioma",
  },
  fr: {
    greeting: "Bonjour 👋 Comment puis-je vous aider aujourd'hui ? Choisissez une option ci-dessous ou tapez votre question.",
    formGreeting: "Bonjour 👋 Pour vous mettre en relation avec la bonne équipe, veuillez remplir vos informations ci-dessous. Ou tapez directement votre question.",
    redirectedGreeting: "Bonjour à nouveau 👋 Nous vous avons emmené vers la page demandée — j'espère qu'elle correspond exactement à ce que vous cherchiez ! Pour toute autre question, discutez avec moi ici, ou laissez vos coordonnées ci-dessous et notre équipe vous contactera.",
    helloAgain: (n) => `Bonjour ${n} ! Comment puis-je vous aider aujourd'hui ?`,
    inputPlaceholder: "Posez votre question...",
    poweredBy: "Propulsé par The Indus Group",
    menu: { contact: 'Nous contacter', careers: 'Carrières', tools: 'Outils', businesses: 'Activités' },
    biz: { enterprise: 'Solutions Entreprise', logistics: 'Logistique', skillDev: 'Développement des compétences', realEstate: 'Immobilier' },
    leaveDetails: "Laisser vos coordonnées",
    formTitle: "Mettons-nous en contact 👋",
    formSubtitle: "Partagez quelques informations, notre équipe vous contactera rapidement.",
    fullName: "Nom complet", namePlaceholder: "ex. Jean Dupont",
    email: "Adresse e-mail", emailPlaceholder: "vous@exemple.com",
    phone: "Numéro de téléphone", phonePlaceholder: "numéro mobile à 10 chiffres",
    service: "Service souhaité", selectService: "Sélectionnez un service",
    brief: "Besoin en bref", briefPlaceholder: "Décrivez brièvement votre besoin (20 mots minimum)...",
    words: "mots",
    submit: "Envoyer", submitting: "Envoi en cours...",
    backToChat: "← Retour au chat",
    contactPrompt: "Bien sûr ! Veuillez remplir vos informations ci-dessous, notre équipe vous contactera rapidement.",
    contactPromptFree: "Bien sûr ! Laissez vos coordonnées ci-dessous, notre équipe vous contactera rapidement.",
    careersRedirect: "D'accord — direction la page Carrières...",
    toolsRedirect: "D'accord — direction la page Outils...",
    businessesPrompt: "Nous opérons dans quatre secteurs. Lequel souhaitez-vous découvrir ?",
    businessRedirect: (l) => `Direction ${l}...`,
    dontKnow: "Je n'ai pas cette information pour le moment. Laissez vos coordonnées ci-dessous, notre équipe vous contactera rapidement.",
    thanks: (n) => `Merci ${n} ! Nous avons bien reçu vos informations, notre équipe vous contactera bientôt. Puis-je vous aider pour autre chose ?`,
    errName: "Entrez un nom valide (lettres uniquement, 2 caractères minimum).",
    errEmail: "Entrez une adresse e-mail valide.",
    errPhone: "Entrez un numéro de mobile valide à 10 chiffres.",
    errService: "Veuillez sélectionner un service.",
    errBrief: (n) => `Décrivez votre besoin en au moins 20 mots (actuellement ${n}).`,
    failedSubmit: "Échec de l'envoi. Veuillez réessayer.",
    chooseLanguage: "Langue",
  },
  es: {
    greeting: "¡Hola! 👋 ¿Cómo puedo ayudarte hoy? Elige una opción abajo o escribe tu pregunta.",
    formGreeting: "¡Hola! 👋 Para conectarte con el equipo adecuado, completa tus datos abajo. O si prefieres, escribe tu pregunta directamente.",
    redirectedGreeting: "¡Hola de nuevo! 👋 Te llevamos a la página que pediste — ¡espero que sea justo lo que necesitabas! Si necesitas algo más, escríbeme aquí, o deja tus datos abajo y nuestro equipo se pondrá en contacto contigo.",
    helloAgain: (n) => `¡Hola ${n}! ¿Cómo puedo ayudarte hoy?`,
    inputPlaceholder: "Escribe tu pregunta...",
    poweredBy: "Desarrollado por The Indus Group",
    menu: { contact: 'Contáctanos', careers: 'Carreras', tools: 'Herramientas', businesses: 'Negocios' },
    biz: { enterprise: 'Soluciones Empresariales', logistics: 'Logística', skillDev: 'Desarrollo de Habilidades', realEstate: 'Bienes Raíces' },
    leaveDetails: "Deja tus datos",
    formTitle: "Conectemos contigo 👋",
    formSubtitle: "Comparte algunos datos y nuestro equipo te contactará pronto.",
    fullName: "Nombre completo", namePlaceholder: "ej. Juan Pérez",
    email: "Correo electrónico", emailPlaceholder: "tu@ejemplo.com",
    phone: "Número de teléfono", phonePlaceholder: "número móvil de 10 dígitos",
    service: "Servicio de interés", selectService: "Selecciona un servicio",
    brief: "Requerimiento breve", briefPlaceholder: "Cuéntanos un poco sobre lo que necesitas (mínimo 20 palabras)...",
    words: "palabras",
    submit: "Enviar datos", submitting: "Enviando...",
    backToChat: "← Volver al chat",
    contactPrompt: "¡Claro! Completa tus datos abajo y nuestro equipo se pondrá en contacto pronto.",
    contactPromptFree: "¡Por supuesto! Deja tus datos abajo y nuestro equipo se pondrá en contacto pronto.",
    careersRedirect: "Listo — te llevamos a la página de Carreras...",
    toolsRedirect: "Listo — te llevamos a la página de Herramientas...",
    businessesPrompt: "Operamos en cuatro áreas de negocio. ¿Cuál te gustaría explorar?",
    businessRedirect: (l) => `Te llevamos a ${l}...`,
    dontKnow: "No tengo esa información por ahora. Deja tus datos abajo y nuestro equipo se pondrá en contacto pronto.",
    thanks: (n) => `¡Gracias ${n}! Hemos recibido tus datos y nuestro equipo se pondrá en contacto pronto. ¿En qué más puedo ayudarte?`,
    errName: "Ingresa un nombre válido (solo letras, mínimo 2 caracteres).",
    errEmail: "Ingresa un correo electrónico válido.",
    errPhone: "Ingresa un número móvil válido de 10 dígitos.",
    errService: "Selecciona un servicio.",
    errBrief: (n) => `Describe tu requerimiento en al menos 20 palabras (actualmente ${n}).`,
    failedSubmit: "Error al enviar. Inténtalo de nuevo.",
    chooseLanguage: "Idioma",
  },
}

function t(language, key, ...args) {
  const dict = UI[language] || UI.en
  const val = dict[key] !== undefined ? dict[key] : UI.en[key]
  return typeof val === 'function' ? val(...args) : val
}

function validateLead(lead, language) {
  const errors = {}
  if (!NAME_REGEX.test(lead.name.trim())) errors.name = t(language, 'errName')
  if (!EMAIL_REGEX.test(lead.email.trim())) errors.email = t(language, 'errEmail')
  if (!PHONE_REGEX.test(lead.phone.trim())) errors.phone = t(language, 'errPhone')
  if (!lead.services) errors.services = t(language, 'errService')
  if (countWords(lead.brief) < 20) errors.brief = t(language, 'errBrief', countWords(lead.brief))
  return errors
}

// ── Language detection (script + keyword based) ───────────────────────────────
function detectLanguage(text) {
  if (/[\u4e00-\u9fff]/.test(text)) return 'zh'
  if (/[\u0900-\u097f]/.test(text)) return 'hi'
  if (/[\u0600-\u06ff]/.test(text)) {
    return /[ٹڈڑںےۓہھچپگ]/.test(text) ? 'ur' : 'ar'
  }
  const lower = ` ${text.toLowerCase()} `
  const wordHit = (words) => words.some((w) => lower.includes(` ${w} `) || lower.includes(w))
  if (wordHit(['olá', 'ola', 'obrigado', 'você', 'voce', 'não', 'nao', 'por favor', 'envio', 'negócio', 'negocio'])) return 'pt'
  if (wordHit(['bonjour', 'merci', 'vous', "s'il vous plaît", 'aide', 'expédition', 'entreprise', 'salut'])) return 'fr'
  if (wordHit(['hola', 'gracias', 'usted', 'por favor', 'ayuda', 'envío', 'envio', 'negocio'])) return 'es'
  return null
}


function SocialMenu() {
  return (
    <div className="fixed bottom-16 left-4 sm:left-6 z-50 group">
      <button className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#0b1f5c] text-white shadow-lg hover:bg-blue-700 transition text-sm">
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
        <a
          href="https://www.facebook.com/theindusgroup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
        <Facebook className="w-5 h-5 text-[#1877F2]" />
        Facebook
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

function Message({ msg, onContactClick, language }) {
  const isBot = msg.role === 'assistant'
  return (
    <div className={`flex flex-col gap-1.5 ${isBot ? 'items-start' : 'items-end'}`}>
      <div className={`flex gap-2 w-full ${isBot ? 'items-start' : 'items-end justify-end'}`}>
        {isBot && (
          <div className="w-7 h-7 rounded-full bg-[#0b1f5c] flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-3.5 h-3.5 text-white" />
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
      {isBot && msg.cta === 'contact' && (
        <button
          onClick={onContactClick}
          className="ml-9 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#0b1f5c] text-white text-xs font-medium hover:bg-blue-800 transition-colors shadow-sm"
        >
          <Phone className="w-3.5 h-3.5" />
          {t(language, 'leaveDetails')}
        </button>
      )}
    </div>
  )
}

// Pill-style suggestion buttons rendered inline in the chat thread (Amazon-style quick actions)
function SuggestionRow({ options, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 pl-9 pr-1">
      {options.map((opt) => (
        <button
          key={opt.id || opt.label}
          onClick={() => onSelect(opt)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#0b1f5c]/20 bg-white text-[#0b1f5c] text-xs font-medium hover:bg-[#0b1f5c] hover:text-white transition-colors shadow-sm"
        >
          {opt.icon && <opt.icon className="w-3.5 h-3.5" />}
          {opt.label}
        </button>
      ))}
    </div>
  )
}

// Keyword groups used to detect when free-typed text actually wants one of the
// quick-action routes (careers / tools / businesses / contact) instead of an FAQ.
// Keywords are provided across all supported languages so intent works regardless
// of which language the visitor types in.
const INTENT_KEYWORDS = {
  careers: [
    "career", "careers", "job", "jobs", "hiring", "vacancy", "work with you", "join your team",
    "करियर", "नौकरी", "भर्ती",
    "کیریئر", "نوکری", "ملازمت",
    "وظيفة", "وظائف", "التوظيف",
    "招聘", "工作", "职位",
    "carreira", "emprego", "vaga",
    "carrière", "emploi", "poste",
    "carrera", "empleo", "trabajo",
  ],
  tools: [
    "tool", "tools", "calculator", "tracker", "track shipment", "incoterm",
    "टूल", "उपकरण",
    "ٹول", "اوزار",
    "أداة", "أدوات",
    "工具", "计算器",
    "ferramenta", "ferramentas",
    "outil", "outils",
    "herramienta", "herramientas",
  ],
  businesses: [
    "business", "businesses", "vertical", "verticals", "what do you offer", "what do you do", "services you offer",
    "व्यवसाय", "कारोबार",
    "کاروبار", "بزنس",
    "أعمال", "عمل", "خدمات",
    "业务", "公司业务",
    "negócio", "negócios", "negocio", "negocios",
    "entreprise", "activités",
    "negocio", "negocios",
  ],
  contact: [
    "contact", "talk to", "speak to", "call me", "get in touch", "reach out", "quote", "enquiry", "inquiry", "lead", "sales team", "representative",
    "संपर्क", "बात करें", "कॉल करें",
    "رابطہ", "بات کریں", "کال کریں",
    "اتصال", "تواصل", "اتصل بنا",
    "联系", "联系我们", "致电",
    "contato", "fale conosco", "ligar",
    "contact", "contactez", "appelez",
    "contacto", "contáctanos", "llamar",
  ],
}

function detectIntent(text) {
  const q = text.toLowerCase()
  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
    if (keywords.some((k) => q.includes(k.toLowerCase()))) return intent
  }
  return null
}

// Small-talk / etiquette layer — checked before the FAQ database so greetings,
// thanks, and goodbyes feel natural instead of falling back to "I don't know".
// Each entry has a keyword set per language and a reply per language.
const SMALL_TALK = [
  {
    type: 'single',
    keywords: {
      en: ["hi", "hii", "hiii", "hello", "hey", "heyy", "yo"],
      hi: ["नमस्ते", "हाय", "हेलो"],
      ur: ["السلام", "ہیلو", "ہائے"],
      ar: ["مرحبا", "مرحباً", "أهلا", "اهلا", "السلام"],
      zh: ["你好", "您好", "嗨"],
      pt: ["oi", "olá", "ola"],
      fr: ["salut", "bonjour"],
      es: ["hola"],
    },
    replies: {
      en: "Hello! 👋 I'm ChatAI from The Indus Group. I can help with our logistics, enterprise, skill development and real estate businesses, or connect you with our team. What can I do for you today?",
      hi: "नमस्ते! 👋 मैं द इंडस ग्रुप का ChatAI हूँ। मैं लॉजिस्टिक्स, एंटरप्राइज़, स्किल डेवलपमेंट और रियल एस्टेट से जुड़ी मदद कर सकता हूँ या आपको हमारी टीम से जोड़ सकता हूँ। आज मैं आपकी कैसे मदद करूँ?",
      ur: "السلام علیکم! 👋 میں دی انڈس گروپ کا ChatAI ہوں۔ میں لاجسٹکس، انٹرپرائز، سکل ڈویلپمنٹ اور رئیل اسٹیٹ سے متعلق مدد کر سکتا ہوں یا آپ کو ہماری ٹیم سے جوڑ سکتا ہوں۔ آج میں آپ کی کیسے مدد کروں؟",
      ar: "مرحباً! 👋 أنا ChatAI من مجموعة إندس. يمكنني مساعدتك بخصوص اللوجستيات وحلول المؤسسات وتطوير المهارات والعقارات، أو ربطك بفريقنا. كيف يمكنني مساعدتك اليوم؟",
      zh: "您好！👋 我是 The Indus Group 的智能助手 ChatAI。我可以协助您了解物流、企业解决方案、技能发展和房地产业务，或为您联系我们的团队。今天我能为您做些什么？",
      pt: "Olá! 👋 Sou o ChatAI do The Indus Group. Posso ajudar com nossos negócios de logística, soluções empresariais, desenvolvimento de habilidades e imóveis, ou conectá-lo com nossa equipe. Como posso ajudá-lo hoje?",
      fr: "Bonjour ! 👋 Je suis ChatAI de The Indus Group. Je peux vous aider concernant la logistique, les solutions entreprise, le développement des compétences et l'immobilier, ou vous mettre en contact avec notre équipe. Comment puis-je vous aider aujourd'hui ?",
      es: "¡Hola! 👋 Soy ChatAI de The Indus Group. Puedo ayudarte con logística, soluciones empresariales, desarrollo de habilidades e inmuebles, o conectarte con nuestro equipo. ¿En qué puedo ayudarte hoy?",
    },
  },
  {
    type: 'phrase',
    keywords: {
      en: ["thank you", "thanks a lot", "thanks", "thx", "appreciate it"],
      hi: ["धन्यवाद", "शुक्रिया"],
      ur: ["شکریہ", "مہربانی"],
      ar: ["شكرا", "شكراً", "متشكر"],
      zh: ["谢谢", "感谢"],
      pt: ["obrigado", "obrigada"],
      fr: ["merci"],
      es: ["gracias"],
    },
    replies: {
      en: "You're most welcome! Let me know if there's anything else I can help with.",
      hi: "आपका स्वागत है! अगर और किसी चीज़ में मदद चाहिए तो बताएं।",
      ur: "خوش آمدید! اگر کسی اور چیز میں مدد چاہیے تو بتائیں۔",
      ar: "العفو! أخبرني إذا كنت بحاجة لأي مساعدة أخرى.",
      zh: "不客气！如果还有其他需要帮助的，请告诉我。",
      pt: "De nada! Avise-me se precisar de mais alguma coisa.",
      fr: "Avec plaisir ! Dites-moi si je peux faire autre chose pour vous.",
      es: "¡De nada! Avísame si necesitas algo más.",
    },
  },
  {
    type: 'phrase',
    keywords: {
      en: ["bye", "goodbye", "see you", "take care", "good night"],
      hi: ["अलविदा", "फिर मिलेंगे"],
      ur: ["خدا حافظ", "اللہ حافظ"],
      ar: ["مع السلامة", "وداعا"],
      zh: ["再见", "拜拜"],
      pt: ["tchau", "adeus"],
      fr: ["au revoir", "à bientôt"],
      es: ["adiós", "chao", "hasta luego"],
    },
    replies: {
      en: "Take care! 👋 Feel free to come back anytime — we're always here to help.",
      hi: "ध्यान रखें! 👋 जब चाहें वापस आएं — हम हमेशा मदद के लिए मौजूद हैं।",
      ur: "اپنا خیال رکھیں! 👋 جب چاہیں واپس آئیں — ہم ہمیشہ مدد کے لیے موجود ہیں۔",
      ar: "اعتنِ بنفسك! 👋 يسعدنا عودتك في أي وقت — نحن دائماً هنا للمساعدة.",
      zh: "保重！👋 欢迎随时回来 — 我们随时为您提供帮助。",
      pt: "Cuide-se! 👋 Volte sempre que precisar — estamos sempre aqui para ajudar.",
      fr: "Prenez soin de vous ! 👋 Revenez quand vous voulez — nous sommes toujours là pour aider.",
      es: "¡Cuídate! 👋 Vuelve cuando quieras — siempre estamos aquí para ayudar.",
    },
  },
  {
    type: 'phrase',
    keywords: {
      en: ["who are you", "what are you", "your name"],
      hi: ["आप कौन हैं", "तुम्हारा नाम"],
      ur: ["آپ کون ہیں", "آپ کا نام"],
      ar: ["من أنت", "ما اسمك"],
      zh: ["你是谁", "你叫什么"],
      pt: ["quem é você", "qual o seu nome"],
      fr: ["qui es-tu", "comment tu t'appelles"],
      es: ["quién eres", "cómo te llamas"],
    },
    replies: {
      en: "I'm ChatAI, the virtual assistant for The Indus Group. I can answer questions about our businesses, point you to careers or tools, or connect you with our team.",
      hi: "मैं ChatAI हूँ, द इंडस ग्रुप का वर्चुअल असिस्टेंट। मैं हमारे व्यवसायों के बारे में सवालों के जवाब दे सकता हूँ, करियर या टूल्स बता सकता हूँ, या आपको हमारी टीम से जोड़ सकता हूँ।",
      ur: "میں ChatAI ہوں، دی انڈس گروپ کا ورچوئل اسسٹنٹ۔ میں ہمارے کاروبار کے بارے میں سوالات کے جواب دے سکتا ہوں، کیریئر یا ٹولز بتا سکتا ہوں، یا آپ کو ہماری ٹیم سے جوڑ سکتا ہوں۔",
      ar: "أنا ChatAI، المساعد الافتراضي لمجموعة إندس. يمكنني الإجابة عن أسئلتك حول أعمالنا، أو توجيهك للوظائف أو الأدوات، أو ربطك بفريقنا.",
      zh: "我是 ChatAI，The Indus Group 的虚拟助手。我可以回答有关我们业务的问题，为您指引招聘或工具页面，或为您联系我们的团队。",
      pt: "Sou o ChatAI, o assistente virtual do The Indus Group. Posso responder perguntas sobre nossos negócios, indicar carreiras ou ferramentas, ou conectá-lo à nossa equipe.",
      fr: "Je suis ChatAI, l'assistant virtuel de The Indus Group. Je peux répondre à vos questions sur nos activités, vous orienter vers les carrières ou les outils, ou vous mettre en contact avec notre équipe.",
      es: "Soy ChatAI, el asistente virtual de The Indus Group. Puedo responder preguntas sobre nuestros negocios, orientarte hacia carreras o herramientas, o conectarte con nuestro equipo.",
    },
  },
]

function getSmallTalkReply(text, language) {
  const q = text.toLowerCase().trim()
  const words = q.split(/\s+/)

  for (const group of SMALL_TALK) {
    const langKeywords = group.keywords[language] || group.keywords.en
    const allKeywordSets = Object.values(group.keywords).flat()
    const matched = group.type === 'single'
      ? allKeywordSets.some((k) => words.includes(k.toLowerCase()))
      : allKeywordSets.some((k) => q.includes(k.toLowerCase()))
    if (matched) {
      return group.replies[language] || group.replies.en
    }
  }
  return null
}

// FAQ knowledge base. Main category entries carry full translations; the
// detailed glossary entries are kept in English (used as fallback in any
// language) since they are reference definitions rather than conversational replies.
const FAQS = [
  {
    keywords: [
      "logistics", "shipping", "freight", "cargo", "warehouse", "warehousing", "transport", "transportation",
      "supply chain", "customs", "export", "import",
      "लॉजिस्टिक्स", "शिपिंग", "माल ढुलाई", "गोदाम", "परिवहन",
      "لاجسٹکس", "شپنگ", "مال برداری", "گودام", "نقل و حمل",
      "لوجستيات", "شحن", "بضائع", "مستودع", "نقل", "جمارك",
      "物流", "运输", "货运", "仓储", "海关",
      "logística", "envio", "frete", "armazém", "transporte", "alfândega",
      "logistique", "expédition", "fret", "entrepôt", "transport", "douane",
      "logística", "envío", "flete", "almacén", "transporte", "aduana",
    ],
    answer: {
      en: "The Indus Group provides integrated logistics and supply chain solutions including freight forwarding, transportation, warehousing, customs support, shipping coordination, and end-to-end supply chain management.",
      hi: "द इंडस ग्रुप एकीकृत लॉजिस्टिक्स और सप्लाई चेन समाधान प्रदान करता है, जिसमें फ्रेट फॉरवर्डिंग, परिवहन, वेयरहाउसिंग, कस्टम्स सहायता, शिपिंग समन्वय और एंड-टू-एंड सप्लाई चेन प्रबंधन शामिल है।",
      ur: "دی انڈس گروپ مربوط لاجسٹکس اور سپلائی چین حل فراہم کرتا ہے جن میں فریٹ فارورڈنگ، نقل و حمل، گودام داری، کسٹمز سپورٹ، شپنگ کوآرڈینیشن اور مکمل سپلائی چین مینجمنٹ شامل ہیں۔",
      ar: "تقدم مجموعة إندس حلولاً متكاملة للوجستيات وسلسلة التوريد تشمل الشحن وتخليص البضائع، النقل، التخزين، الدعم الجمركي، تنسيق الشحن، وإدارة سلسلة التوريد الشاملة.",
      zh: "印度斯集团提供一体化的物流与供应链解决方案，包括货运代理、运输、仓储、海关支持、货运协调以及端到端的供应链管理。",
      pt: "O The Indus Group oferece soluções integradas de logística e cadeia de suprimentos, incluindo agenciamento de cargas, transporte, armazenagem, suporte alfandegário, coordenação de embarques e gestão completa da cadeia de suprimentos.",
      fr: "The Indus Group propose des solutions intégrées de logistique et de chaîne d'approvisionnement, incluant le transit de fret, le transport, l'entreposage, le support douanier, la coordination des expéditions et la gestion complète de la chaîne d'approvisionnement.",
      es: "The Indus Group ofrece soluciones integradas de logística y cadena de suministro, incluyendo transporte de carga, almacenamiento, soporte aduanero, coordinación de envíos y gestión integral de la cadena de suministro.",
    },
  },
  { keywords: ["warehouse", "warehousing"], answer: "Warehousing is the process of storing goods in a dedicated facility before they are distributed, sold, or transported to customers." },
  { keywords: ["logistics"], answer: "Logistics is the planning, movement, storage, and management of goods, services, and information from origin to destination efficiently and cost-effectively." },
  { keywords: ["supply chain"], answer: "A supply chain is the complete network involved in producing and delivering a product, including suppliers, manufacturers, warehouses, transporters, and customers." },
  { keywords: ["freight"], answer: "Freight refers to goods transported in bulk by road, rail, sea, or air from one location to another." },
  { keywords: ["freight forwarding", "freight forwarder"], answer: "Freight forwarding is the coordination and shipment of goods through carriers. A freight forwarder manages transportation, documentation, customs, and logistics activities." },
  { keywords: ["customs", "customs clearance"], answer: "Customs clearance is the process of obtaining permission from customs authorities to import or export goods legally." },
  { keywords: ["msme"], answer: "MSME stands for Micro, Small and Medium Enterprises. These businesses are classified based on investment and annual turnover and play a major role in economic growth and employment." },
  { keywords: ["gst"], answer: "GST (Goods and Services Tax) is India's unified indirect tax system applied to the supply of goods and services." },
  { keywords: ["exim"], answer: "EXIM stands for Export-Import. It refers to international trade activities involving the export and import of goods and services." },
  { keywords: ["uld"], answer: "ULD stands for Unit Load Device. It is a container or pallet used to load luggage, cargo, and mail onto aircraft efficiently." },
  { keywords: ["container"], answer: "A shipping container is a standardized steel box used to transport goods securely by sea, rail, and road." },
  { keywords: ["air freight"], answer: "Air freight is the transportation of goods through aircraft and is generally used for high-value or time-sensitive shipments." },
  { keywords: ["sea freight", "ocean freight"], answer: "Sea freight is the transportation of cargo through ships and is commonly used for large-volume international trade." },
  {
    keywords: [
      "enterprise", "startup", "company registration", "tax", "compliance", "legal", "consulting", "digital marketing", "business",
      "एंटरप्राइज़", "स्टार्टअप", "व्यापार पंजीकरण",
      "انٹرپرائز", "اسٹارٹ اپ", "کاروبار کی رجسٹریشن",
      "مؤسسة", "شركة ناشئة", "تسجيل الشركة",
      "企业", "创业", "公司注册",
      "empresa", "startup", "registro de empresa",
      "entreprise", "création d'entreprise", "immatriculation",
      "empresa", "startup", "registro de empresa",
    ],
    answer: {
      en: "The Enterprise Solutions division helps businesses with company incorporation, GST and taxation support, compliance, legal assistance, HR services, digital marketing, IT solutions, and business consulting.",
      hi: "एंटरप्राइज़ सॉल्यूशंस डिवीजन कंपनी पंजीकरण, जीएसटी और टैक्सेशन सहायता, अनुपालन, कानूनी सहायता, एचआर सेवाओं, डिजिटल मार्केटिंग, आईटी समाधान और व्यवसाय परामर्श में मदद करता है।",
      ur: "انٹرپرائز سلوشنز ڈویژن کاروباروں کو کمپنی رجسٹریشن، جی ایس ٹی اور ٹیکس سپورٹ، کمپلائنس، قانونی مدد، ایچ آر سروسز، ڈیجیٹل مارکیٹنگ، آئی ٹی حل اور بزنس کنسلٹنگ میں مدد فراہم کرتا ہے۔",
      ar: "يساعد قسم حلول المؤسسات الشركات في تأسيس الشركات، دعم الضرائب والامتثال، المساعدة القانونية، خدمات الموارد البشرية، التسويق الرقمي، الحلول التقنية، والاستشارات التجارية.",
      zh: "企业解决方案部门为企业提供公司注册、税务合规支持、法律协助、人力资源服务、数字营销、IT解决方案以及商业咨询。",
      pt: "A divisão de Soluções Empresariais auxilia empresas com abertura de empresas, suporte fiscal e de conformidade, assistência jurídica, serviços de RH, marketing digital, soluções de TI e consultoria empresarial.",
      fr: "La division Solutions Entreprise aide les entreprises avec la création de société, le support fiscal et la conformité, l'assistance juridique, les services RH, le marketing digital, les solutions informatiques et le conseil aux entreprises.",
      es: "La división de Soluciones Empresariales ayuda a las empresas con la constitución de empresas, soporte fiscal y de cumplimiento, asistencia legal, servicios de RR.HH., marketing digital, soluciones de TI y consultoría empresarial.",
    },
  },
  {
    keywords: [
      "skill", "training", "course", "courses", "academy", "certification", "learning", "education",
      "कौशल", "प्रशिक्षण", "पाठ्यक्रम", "प्रमाणन",
      "ہنر", "تربیت", "کورس", "سرٹیفکیشن",
      "مهارة", "تدريب", "دورة", "شهادة",
      "技能", "培训", "课程", "认证",
      "habilidade", "treinamento", "curso", "certificação",
      "compétence", "formation", "cours", "certification",
      "habilidad", "capacitación", "curso", "certificación",
    ],
    answer: {
      en: "Through My Skills Academy, The Indus Group offers training and certification programs in Logistics, Supply Chain Management, Export-Import, Digital Marketing, Data Science, Cyber Security, E-commerce, Sales, and International Trade.",
      hi: "माय स्किल्स अकादमी के माध्यम से, द इंडस ग्रुप लॉजिस्टिक्स, सप्लाई चेन प्रबंधन, एक्सपोर्ट-इंपोर्ट, डिजिटल मार्केटिंग, डेटा साइंस, साइबर सिक्योरिटी, ई-कॉमर्स, सेल्स और अंतर्राष्ट्रीय व्यापार में प्रशिक्षण और प्रमाणन कार्यक्रम प्रदान करता है।",
      ur: "مائی سکلز اکیڈمی کے ذریعے، دی انڈس گروپ لاجسٹکس، سپلائی چین مینجمنٹ، ایکسپورٹ امپورٹ، ڈیجیٹل مارکیٹنگ، ڈیٹا سائنس، سائبر سیکیورٹی، ای کامرس، سیلز اور بین الاقوامی تجارت میں تربیت اور سرٹیفیکیشن پروگرام پیش کرتا ہے۔",
      ar: "من خلال أكاديمية My Skills، تقدم مجموعة إندس برامج تدريب وشهادات في اللوجستيات، إدارة سلسلة التوريد، التصدير والاستيراد، التسويق الرقمي، علم البيانات، الأمن السيبراني، التجارة الإلكترونية، المبيعات، والتجارة الدولية.",
      zh: "通过 My Skills Academy，印度斯集团提供物流、供应链管理、进出口贸易、数字营销、数据科学、网络安全、电子商务、销售和国际贸易方面的培训与认证课程。",
      pt: "Através da My Skills Academy, o The Indus Group oferece programas de treinamento e certificação em Logística, Gestão da Cadeia de Suprimentos, Comércio Exterior, Marketing Digital, Ciência de Dados, Segurança Cibernética, E-commerce, Vendas e Comércio Internacional.",
      fr: "Grâce à My Skills Academy, The Indus Group propose des programmes de formation et de certification en Logistique, Gestion de la chaîne d'approvisionnement, Import-Export, Marketing digital, Data Science, Cybersécurité, E-commerce, Ventes et Commerce international.",
      es: "A través de My Skills Academy, The Indus Group ofrece programas de capacitación y certificación en Logística, Gestión de la Cadena de Suministro, Comercio Exterior, Marketing Digital, Ciencia de Datos, Ciberseguridad, E-commerce, Ventas y Comercio Internacional.",
    },
  },
  {
    keywords: [
      "knowledge", "knowledge center", "article", "blog", "glossary", "industry updates",
      "ज्ञान केंद्र", "लेख", "ब्लॉग",
      "نالج سینٹر", "مضمون", "بلاگ",
      "مركز المعرفة", "مقال", "مدونة",
      "知识中心", "文章", "博客",
      "centro de conhecimento", "artigo", "blog",
      "centre de connaissances", "article", "blog",
      "centro de conocimiento", "artículo", "blog",
    ],
    answer: {
      en: "The Knowledge Center provides industry articles, EXIM updates, trade terminology, logistics glossaries, and educational resources for professionals and businesses.",
      hi: "नॉलेज सेंटर उद्योग लेख, एक्ज़िम अपडेट, व्यापार शब्दावली, लॉजिस्टिक्स ग्लॉसरी और पेशेवरों व व्यवसायों के लिए शैक्षिक संसाधन प्रदान करता है।",
      ur: "نالج سینٹر صنعتی مضامین، ایکزم اپڈیٹس، تجارتی اصطلاحات، لاجسٹکس گلوسری اور پیشہ ور افراد و کاروباروں کے لیے تعلیمی وسائل فراہم کرتا ہے۔",
      ar: "يوفر مركز المعرفة مقالات صناعية، تحديثات التصدير والاستيراد، مصطلحات تجارية، قواميس لوجستية، وموارد تعليمية للمحترفين والشركات.",
      zh: "知识中心提供行业文章、进出口贸易动态、贸易术语、物流词汇表以及面向专业人士和企业的教育资源。",
      pt: "O Centro de Conhecimento oferece artigos do setor, atualizações de comércio exterior, terminologia comercial, glossários de logística e recursos educacionais para profissionais e empresas.",
      fr: "Le Centre de connaissances propose des articles sectoriels, des mises à jour import-export, du vocabulaire commercial, des glossaires logistiques et des ressources éducatives pour les professionnels et les entreprises.",
      es: "El Centro de Conocimiento ofrece artículos del sector, actualizaciones de comercio exterior, terminología comercial, glosarios de logística y recursos educativos para profesionales y empresas.",
    },
  },
  {
    keywords: [
      "resource", "resources", "port", "airport", "guide",
      "संसाधन", "बंदरगाह", "हवाई अड्डा",
      "وسائل", "بندرگاہ", "ہوائی اڈہ",
      "موارد", "ميناء", "مطار",
      "资源", "港口", "机场",
      "recursos", "porto", "aeroporto",
      "ressources", "port", "aéroport",
      "recursos", "puerto", "aeropuerto",
    ],
    answer: {
      en: "The Resources section includes shipping container information, airport and seaport references, ULD guides, cargo tools, trade resources, and logistics reference material.",
      hi: "रिसोर्सेज़ सेक्शन में शिपिंग कंटेनर जानकारी, हवाई अड्डे और बंदरगाह संदर्भ, यूएलडी गाइड, कार्गो टूल्स, व्यापार संसाधन और लॉजिस्टिक्स संदर्भ सामग्री शामिल है।",
      ur: "ریسورسز سیکشن میں شپنگ کنٹینر کی معلومات، ہوائی اڈے اور بندرگاہ کے حوالہ جات، یو ایل ڈی گائیڈز، کارگو ٹولز، تجارتی وسائل اور لاجسٹکس حوالہ جاتی مواد شامل ہے۔",
      ar: "يشمل قسم الموارد معلومات حاويات الشحن، مراجع المطارات والموانئ، أدلة وحدات التحميل، أدوات الشحن، الموارد التجارية، والمواد المرجعية اللوجستية.",
      zh: "资源板块包含集装箱信息、机场与港口参考资料、ULD指南、货运工具、贸易资源以及物流参考资料。",
      pt: "A seção de Recursos inclui informações sobre contêineres, referências de aeroportos e portos, guias de ULD, ferramentas de carga, recursos comerciais e material de referência logística.",
      fr: "La section Ressources comprend des informations sur les conteneurs, des références aéroportuaires et portuaires, des guides ULD, des outils de fret, des ressources commerciales et de la documentation logistique.",
      es: "La sección de Recursos incluye información sobre contenedores, referencias de aeropuertos y puertos, guías de ULD, herramientas de carga, recursos comerciales y material de referencia logística.",
    },
  },
  {
    keywords: [
      "real estate", "property", "infrastructure", "construction",
      "रियल एस्टेट", "संपत्ति", "निर्माण",
      "رئیل اسٹیٹ", "جائیداد", "تعمیرات",
      "عقارات", "ممتلكات", "بناء",
      "房地产", "物业", "建筑",
      "imóveis", "propriedade", "construção",
      "immobilier", "propriété", "construction",
      "bienes raíces", "propiedad", "construcción",
    ],
    answer: {
      en: "The Indus Group also operates in Real Estate and Infrastructure solutions as one of its major business verticals.",
      hi: "द इंडस ग्रुप अपने प्रमुख व्यावसायिक क्षेत्रों में से एक के रूप में रियल एस्टेट और इंफ्रास्ट्रक्चर समाधान में भी काम करता है।",
      ur: "دی انڈس گروپ اپنے بڑے کاروباری شعبوں میں سے ایک کے طور پر رئیل اسٹیٹ اور انفراسٹرکچر حل میں بھی کام کرتا ہے۔",
      ar: "تعمل مجموعة إندس أيضاً في مجال العقارات والبنية التحتية كأحد أبرز قطاعات أعمالها الرئيسية.",
      zh: "印度斯集团也涉足房地产与基础设施解决方案，是其主要业务板块之一。",
      pt: "O The Indus Group também atua em soluções de Imóveis e Infraestrutura como um de seus principais segmentos de negócio.",
      fr: "The Indus Group opère également dans les solutions Immobilier et Infrastructure, l'un de ses principaux secteurs d'activité.",
      es: "The Indus Group también opera en soluciones de Bienes Raíces e Infraestructura como uno de sus principales sectores de negocio.",
    },
  },
  {
    keywords: [
      "contact", "phone", "email", "support", "reach",
      "संपर्क", "फोन", "ईमेल",
      "رابطہ", "فون", "ای میل",
      "اتصال", "هاتف", "بريد",
      "联系", "电话", "邮箱",
      "contato", "telefone", "e-mail",
      "contact", "téléphone", "e-mail",
      "contacto", "teléfono", "correo",
    ],
    answer: {
      en: "You can contact The Indus Group at +91 7011332238 or email info@theindusgroup.com.",
      hi: "आप द इंडस ग्रुप से +91 7011332238 पर संपर्क कर सकते हैं या info@theindusgroup.com पर ईमेल कर सकते हैं।",
      ur: "آپ دی انڈس گروپ سے +91 7011332238 پر رابطہ کر سکتے ہیں یا info@theindusgroup.com پر ای میل کر سکتے ہیں۔",
      ar: "يمكنكم التواصل مع مجموعة إندس عبر +91 7011332238 أو عبر البريد الإلكتروني info@theindusgroup.com.",
      zh: "您可以拨打 +91 7011332238 联系印度斯集团，或发送邮件至 info@theindusgroup.com。",
      pt: "Você pode contatar o The Indus Group pelo +91 7011332238 ou pelo e-mail info@theindusgroup.com.",
      fr: "Vous pouvez contacter The Indus Group au +91 7011332238 ou par e-mail à info@theindusgroup.com.",
      es: "Puede contactar a The Indus Group al +91 7011332238 o por correo a info@theindusgroup.com.",
    },
  },
  {
    keywords: [
      "who are you", "about", "indus group", "company",
      "इंडस ग्रुप के बारे में", "कंपनी",
      "انڈس گروپ کے بارے میں", "کمپنی",
      "عن مجموعة إندس", "الشركة",
      "关于印度斯集团", "公司",
      "sobre o indus group", "empresa",
      "à propos d'indus group", "entreprise",
      "sobre indus group", "empresa",
    ],
    answer: {
      en: "The Indus Group is a multi-business organization focused on Logistics & Supply Chain, Enterprise Solutions, Skill Development, and Real Estate. The company works with MSMEs, entrepreneurs, and organizations to help them grow and scale.",
      hi: "द इंडस ग्रुप एक मल्टी-बिज़नेस संगठन है जो लॉजिस्टिक्स एंड सप्लाई चेन, एंटरप्राइज़ सॉल्यूशंस, स्किल डेवलपमेंट और रियल एस्टेट पर केंद्रित है। यह कंपनी MSME, उद्यमियों और संगठनों के साथ मिलकर उनके विकास में मदद करती है।",
      ur: "دی انڈس گروپ ایک ملٹی بزنس تنظیم ہے جو لاجسٹکس اینڈ سپلائی چین، انٹرپرائز سلوشنز، سکل ڈویلپمنٹ اور رئیل اسٹیٹ پر مرکوز ہے۔ یہ کمپنی MSMEs، کاروباری افراد اور تنظیموں کے ساتھ مل کر ان کی ترقی میں مدد کرتی ہے۔",
      ar: "مجموعة إندس هي منظمة متعددة الأعمال تركز على اللوجستيات وسلسلة التوريد، حلول المؤسسات، تطوير المهارات، والعقارات. تعمل الشركة مع المنشآت الصغيرة والمتوسطة ورواد الأعمال والمؤسسات لمساعدتهم على النمو والتوسع.",
      zh: "印度斯集团是一家多元化业务组织，专注于物流与供应链、企业解决方案、技能发展和房地产。公司与中小微企业、创业者及各类组织合作，助力其成长与扩展。",
      pt: "O The Indus Group é uma organização multinegócios focada em Logística e Cadeia de Suprimentos, Soluções Empresariais, Desenvolvimento de Habilidades e Imóveis. A empresa trabalha com MPMEs, empreendedores e organizações para ajudá-los a crescer e expandir.",
      fr: "The Indus Group est une organisation multi-activités spécialisée dans la Logistique et la chaîne d'approvisionnement, les Solutions Entreprise, le Développement des compétences et l'Immobilier. L'entreprise accompagne les PME, entrepreneurs et organisations dans leur croissance.",
      es: "The Indus Group es una organización multinegocio enfocada en Logística y Cadena de Suministro, Soluciones Empresariales, Desarrollo de Habilidades y Bienes Raíces. La empresa trabaja con MIPYMES, emprendedores y organizaciones para ayudarles a crecer.",
    },
  },
]


// ── ChatbotWidget ─────────────────────────────────────────────────────────────
function ChatbotWidget() {
  const [open, setOpen] = useState(true)

  // 'form' = lead capture (default open screen) | 'chat' = conversational view
  const [view, setView] = useState('form')
  const [language, setLanguage] = useState('en')
  const [showLangMenu, setShowLangMenu] = useState(false)

  const getFaqReply = (question, lang) => {
    const q = question.toLowerCase()
    for (const faq of FAQS) {
      for (const keyword of faq.keywords) {
        if (q.includes(keyword.toLowerCase())) {
          if (typeof faq.answer === 'string') return faq.answer
          return faq.answer[lang] || faq.answer.en
        }
      }
    }
    return null
  }

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([])
  const [leadCaptured, setLeadCaptured] = useState(false)
  const [submittingLead, setSubmittingLead] = useState(false)
  const [showBusinessOptions, setShowBusinessOptions] = useState(false)
  // Quick-action chips are shown once after the greeting, then hidden once the
  // user types a free-text message — they reappear only via explicit intent match
  const [suggestionsDismissed, setSuggestionsDismissed] = useState(false)
  const [userId, setUserId] = useState(null)

  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    brief: ""
  })
  const [countryCode, setCountryCode] = useState('+91')
  const [showCountryList, setShowCountryList] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [touched, setTouched] = useState({})
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  const isRTL = RTL_LANGS.includes(language)

  const mainMenuOptions = mainMenuOptionsBase.map((o) => ({ ...o, label: t(language, 'menu')[o.id] }))
  const businessOptions = businessOptionsBase.map((o) => ({ ...o, label: t(language, 'biz')[o.id] }))

  useEffect(() => {
    if (open && view === 'chat') setTimeout(() => inputRef.current?.focus(), 100)
  }, [open, view])

  // On first open, greet the visitor. If the previous action inside the
  // chatbot was a redirect (Careers / Tools / Businesses / a business sub-page),
  // show a "welcome back, hope that helped" message with the quick-action
  // chips instead of the normal form greeting — since navigateTo() causes a
  // full page reload (window.location.href), we recover that context from
  // localStorage, which is the only thing that survives the reload.
  const welcomeSentRef = useRef(false)
  useEffect(() => {
    if (open && !welcomeSentRef.current) {
      welcomeSentRef.current = true

      let redirected = false
      let storedLang = language
      try {
        redirected = window.localStorage.getItem('indus_chat_redirected') === 'true'
        storedLang = window.localStorage.getItem('indus_chat_redirected_lang') || language
        if (redirected) {
          window.localStorage.removeItem('indus_chat_redirected')
          window.localStorage.removeItem('indus_chat_redirected_lang')
        }
      } catch (e) {
        // localStorage unavailable — fall back to the normal greeting below
      }

      if (redirected) {
        if (storedLang !== language) setLanguage(storedLang)
        setView('chat')
        setShowBusinessOptions(false)
        setSuggestionsDismissed(false)
        pushBotMessage(t(storedLang, 'redirectedGreeting'))
      } else {
        pushBotMessage(t(language, 'formGreeting'))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  // Generate (or reuse) a unique per-visitor id, used to group their conversation in Sheet2
  useEffect(() => {
    try {
      let id = window.localStorage.getItem('indus_chat_user_id')
      if (!id) {
        id = (typeof crypto !== 'undefined' && crypto.randomUUID)
          ? crypto.randomUUID()
          : `user_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
        window.localStorage.setItem('indus_chat_user_id', id)
      }
      setUserId(id)
    } catch (e) {
      setUserId(`user_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`)
    }
  }, [])

  useEffect(() => {
    setFormErrors(validateLead(lead, language))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lead, language])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading, showBusinessOptions])

  // Logs the full running conversation to Sheet2 (timestamp, user_id, conversation, language)
  // Debounced so a burst of messages results in a single request.
  const logTimeoutRef = useRef(null)
  useEffect(() => {
    if (!userId || messages.length === 0) return

    if (logTimeoutRef.current) clearTimeout(logTimeoutRef.current)

    logTimeoutRef.current = setTimeout(() => {
      const conversationText = messages
        .map((m) => `${m.role === 'assistant' ? 'Bot' : 'User'}: ${m.content}`)
        .join('\n')

      const formData = new FormData()
      formData.append("sheet", "Sheet2")
      formData.append("timestamp", new Date().toISOString())
      formData.append("user_id", userId)
      formData.append("language", language)
      formData.append("conversation", conversationText)

      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      }).catch((e) => console.error("Conversation log failed", e))
    }, 500)

    return () => {
      if (logTimeoutRef.current) clearTimeout(logTimeoutRef.current)
    }
  }, [messages, userId, language])

  const saveLead = async (lead) => {
    const formData = new FormData()

    formData.append("name", lead.name)
    formData.append("email", lead.email)
    formData.append("phone", `'${countryCode} ${lead.phone}`)
    formData.append("services", lead.services)
    formData.append("brief", lead.brief)
    formData.append("language", language)

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    })
  }

  const pushBotMessage = (content, cta) => {
    setMessages((prev) => [...prev, { role: 'assistant', content, cta }])
  }

  const pushUserMessage = (content) => {
    setMessages((prev) => [...prev, { role: 'user', content }])
  }

  // Centralized navigation helper. Since this triggers a full page reload,
  // we stash a flag (+ the current language) in localStorage right before
  // navigating away, so the widget can detect on the next page load that it
  // just redirected the visitor and greet them accordingly instead of
  // showing the generic first-time greeting.
  const navigateTo = (href) => {
    try {
      window.localStorage.setItem('indus_chat_redirected', 'true')
      window.localStorage.setItem('indus_chat_redirected_lang', language)
    } catch (e) {
      // localStorage unavailable — navigation still proceeds, just without the
      // "welcome back" follow-up message on the next page.
    }
    window.location.href = href
  }

  // Handles taps on the main quick-action menu (Contact Us / Careers / Tools / Businesses)
  const handleMainOption = (opt) => {
    pushUserMessage(opt.label)
    setSuggestionsDismissed(true)

    if (opt.id === 'contact') {
      setTimeout(() => {
        pushBotMessage(t(language, 'contactPrompt'))
        setView('form')
      }, 300)
      return
    }

    if (opt.id === 'careers') {
      setTimeout(() => {
        pushBotMessage(t(language, 'careersRedirect'))
        navigateTo('/careers')
      }, 300)
      return

    }

    if (opt.id === 'tools') {
      setTimeout(() => {
        pushBotMessage(t(language, 'toolsRedirect'))
        navigateTo('/tools')
      }, 300)
      return
    }

    if (opt.id === 'businesses') {
      setTimeout(() => {
        pushBotMessage(t(language, 'businessesPrompt'))
        setShowBusinessOptions(true)
      }, 300)
      return
    }
  }

  const handleBusinessOption = (opt) => {
    pushUserMessage(opt.label)
    setShowBusinessOptions(false)
    setSuggestionsDismissed(true)
    setTimeout(() => {
      pushBotMessage(t(language, 'businessRedirect', opt.label))
      navigateTo(opt.href)
    }, 300)
  }

  const send = async () => {
    const text = input.trim()

    if (!text || loading) return

    // Auto-detect language from what the user types and switch the bot's
    // working language for this and all subsequent replies.
    const detected = detectLanguage(text)
    const replyLang = detected || language
    if (detected && detected !== language) setLanguage(detected)

    pushUserMessage(text)
    setInput("")
    setLoading(true)
    setShowBusinessOptions(false)
    setSuggestionsDismissed(true)

    setTimeout(() => {
      const intent = detectIntent(text)

      if (intent === 'careers') {
        pushBotMessage(t(replyLang, 'careersRedirect'))
        setLoading(false)
        navigateTo('/careers')
        return
      }

      if (intent === 'tools') {
        pushBotMessage(t(replyLang, 'toolsRedirect'))
        setLoading(false)
        navigateTo('/tools')
        return
      }

      if (intent === 'businesses') {
        pushBotMessage(t(replyLang, 'businessesPrompt'))
        setShowBusinessOptions(true)
        setLoading(false)
        return
      }

      if (intent === 'contact') {
        pushBotMessage(t(replyLang, 'contactPromptFree'))
        setView('form')
        setLoading(false)
        return
      }

      const smallTalk = getSmallTalkReply(text, replyLang)
      if (smallTalk) {
        pushBotMessage(smallTalk)
        setLoading(false)
        return
      }

      const reply = getFaqReply(text, replyLang)

      if (reply) {
        pushBotMessage(reply)
      } else {
        pushBotMessage(t(replyLang, 'dontKnow'), 'contact')
      }

      setLoading(false)
    }, 400)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  const startChat = () => {
    setView('chat')
    if (!welcomeSentRef.current) {
      welcomeSentRef.current = true
      pushBotMessage(leadCaptured ? t(language, 'helloAgain', lead.name || '') : t(language, 'greeting'))
    }
  }

  return (
    <div className="fixed bottom-16 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div
          dir={isRTL ? 'rtl' : 'ltr'}
          className="w-[calc(100vw-2rem)] max-w-[380px] sm:w-[380px] flex flex-col rounded-2xl shadow-2xl border border-gray-200 bg-white overflow-hidden max-h-[80vh]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 bg-[#0b1f5c]">
            {view === 'form' ? (
              <button
                onClick={startChat}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Back to chat"
              >
                <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            ) : (
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold leading-tight">ChatAI</p>
              <p className="text-blue-300 text-xs">{t(language, 'poweredBy')}</p>
            </div>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu((v) => !v)}
                className="flex items-center gap-1 text-white/80 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
                aria-label={t(language, 'chooseLanguage')}
              >
                <Globe className="w-5 h-5" />
              </button>
              {showLangMenu && (
                <div className={`absolute top-full mt-1 ${isRTL ? 'left-0' : 'right-0'} w-40 max-h-56 overflow-y-auto rounded-xl bg-white border border-gray-200 shadow-xl z-20`}>
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLanguage(l.code); setShowLangMenu(false) }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left hover:bg-gray-50 ${language === l.code ? 'bg-gray-50 font-semibold' : ''}`}
                    >
                      <span>{l.flag}</span>
                      <span className="text-gray-700">{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {view === 'chat' && (
              <button
                onClick={() => setView('form')}
                className="text-white/80 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
                aria-label="Contact us form"
              >
                <Phone className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ── Lead capture form (default screen) ── */}
          {view === 'form' && (
            <div className="bg-gradient-to-b from-blue-50/60 to-white overflow-y-auto max-h-[65vh]">
              {/* Bot greeting bubble(s) asking the visitor to fill the form */}
              <div className="px-4 pt-4 pb-1 space-y-3">
                {messages.map((msg, i) => (
                  <Message key={i} msg={msg} onContactClick={() => { }} language={language} />
                ))}
              </div>

              <div className="px-5 pt-2 pb-3">
                <h3 className="font-semibold text-lg text-gray-900">
                  {t(language, 'formTitle')}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {t(language, 'formSubtitle')}
                </p>
              </div>

              <div className="px-5 pb-5 space-y-4">
                {/* Name */}
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">{t(language, 'fullName')}</label>
                  <div className={`flex items-center gap-2 rounded-xl border bg-white px-3 py-2.5 transition-colors ${touched.name && formErrors.name ? 'border-red-400' : 'border-gray-200 focus-within:border-[#0b1f5c]'}`}>
                    <User className="w-4 h-4 text-gray-400 shrink-0" />
                    <input
                      placeholder={t(language, 'namePlaceholder')}
                      value={lead.name}
                      onChange={(e) => setLead({ ...lead, name: e.target.value })}
                      onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                      className="w-full text-sm outline-none bg-transparent"
                    />
                    {touched.name && !formErrors.name && lead.name && (
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    )}
                  </div>
                  {touched.name && formErrors.name && (
                    <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1"><AlertCircle className="w-3 h-3" />{formErrors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">{t(language, 'email')}</label>
                  <div className={`flex items-center gap-2 rounded-xl border bg-white px-3 py-2.5 transition-colors ${touched.email && formErrors.email ? 'border-red-400' : 'border-gray-200 focus-within:border-[#0b1f5c]'}`}>
                    <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                    <input
                      placeholder={t(language, 'emailPlaceholder')}
                      type="email"
                      value={lead.email}
                      onChange={(e) => setLead({ ...lead, email: e.target.value })}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      className="w-full text-sm outline-none bg-transparent"
                    />
                    {touched.email && !formErrors.email && lead.email && (
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    )}
                  </div>
                  {touched.email && formErrors.email && (
                    <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1"><AlertCircle className="w-3 h-3" />{formErrors.email}</p>
                  )}
                </div>

                {/* Phone with dial-code dropdown */}
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">{t(language, 'phone')}</label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowCountryList((v) => !v)}
                        className="flex items-center gap-1 h-[42px] px-2.5 rounded-xl border border-gray-200 bg-white text-sm hover:border-[#0b1f5c] transition-colors"
                      >
                        <span>{countryCodes.find((c) => c.code === countryCode)?.flag}</span>
                        <span className="text-gray-700">{countryCode}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                      </button>
                      {showCountryList && (
                        <div className="absolute bottom-full left-0 mb-1 w-44 max-h-48 overflow-y-auto rounded-xl bg-white border border-gray-200 shadow-xl z-10">
                          {countryCodes.map((c) => (
                            <button
                              key={c.code + c.name}
                              type="button"
                              onClick={() => { setCountryCode(c.code); setShowCountryList(false) }}
                              className="w-full flex items-center gap-2 px-3 py-2 text-xs text-left hover:bg-gray-50"
                            >
                              <span>{c.flag}</span>
                              <span className="text-gray-700">{c.name}</span>
                              <span className="ml-auto text-gray-400">{c.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className={`flex-1 flex items-center gap-2 rounded-xl border bg-white px-3 py-2.5 transition-colors ${touched.phone && formErrors.phone ? 'border-red-400' : 'border-gray-200 focus-within:border-[#0b1f5c]'}`}>
                      <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                      <input
                        placeholder={t(language, 'phonePlaceholder')}
                        value={lead.phone}
                        onChange={(e) => setLead({ ...lead, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                        onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                        inputMode="numeric"
                        className="w-full text-sm outline-none bg-transparent"
                      />
                      {touched.phone && !formErrors.phone && lead.phone && (
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      )}
                    </div>
                  </div>
                  {touched.phone && formErrors.phone && (
                    <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1"><AlertCircle className="w-3 h-3" />{formErrors.phone}</p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">{t(language, 'service')}</label>
                  <div className={`flex items-center gap-2 rounded-xl border bg-white px-3 py-2.5 transition-colors ${touched.services && formErrors.services ? 'border-red-400' : 'border-gray-200 focus-within:border-[#0b1f5c]'}`}>
                    <Briefcase className="w-4 h-4 text-gray-400 shrink-0" />
                    <select
                      value={lead.services}
                      onChange={(e) => setLead({ ...lead, services: e.target.value })}
                      onBlur={() => setTouched((t) => ({ ...t, services: true }))}
                      className="w-full text-sm outline-none bg-transparent text-gray-700"
                    >
                      <option value="">{t(language, 'selectService')}</option>
                      <option>Logistics</option>
                      <option>Enterprise</option>
                      <option>Skill Development</option>
                      <option>Real Estate</option>
                    </select>
                  </div>
                  {touched.services && formErrors.services && (
                    <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1"><AlertCircle className="w-3 h-3" />{formErrors.services}</p>
                  )}
                </div>

                {/* Brief */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-medium text-gray-600">{t(language, 'brief')}</label>
                    <span className={`text-[11px] ${countWords(lead.brief) < 20 ? 'text-gray-400' : 'text-green-500'}`}>
                      {countWords(lead.brief)}/20 {t(language, 'words')}
                    </span>
                  </div>
                  <div className={`flex items-start gap-2 rounded-xl border bg-white px-3 py-2.5 transition-colors ${touched.brief && formErrors.brief ? 'border-red-400' : 'border-gray-200 focus-within:border-[#0b1f5c]'}`}>
                    <FileText className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <textarea
                      rows={3}
                      placeholder={t(language, 'briefPlaceholder')}
                      value={lead.brief}
                      onChange={(e) => setLead({ ...lead, brief: e.target.value })}
                      onBlur={() => setTouched((t) => ({ ...t, brief: true }))}
                      className="w-full text-sm outline-none bg-transparent resize-none"
                    />
                  </div>
                  {touched.brief && formErrors.brief && (
                    <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1"><AlertCircle className="w-3 h-3" />{formErrors.brief}</p>
                  )}
                </div>

                <button
                  disabled={submittingLead}
                  className="w-full bg-[#0b1f5c] text-white rounded-xl py-2.5 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium shadow-md shadow-blue-900/10 hover:bg-blue-800 transition-colors"
                  onClick={async () => {
                    if (submittingLead) return

                    const errors = validateLead(lead, language)
                    setFormErrors(errors)
                    setTouched({ name: true, email: true, phone: true, services: true, brief: true })

                    if (Object.keys(errors).length > 0) return

                    try {
                      setSubmittingLead(true)
                      await saveLead(lead)
                      setLeadCaptured(true)
                      setView('chat')
                      setShowBusinessOptions(false)
                      setSuggestionsDismissed(false)
                      setMessages((prev) => [
                        ...prev,
                        {
                          role: "assistant",
                          content: t(language, 'thanks', lead.name.trim().split(' ')[0])
                        }
                      ])
                    } catch (err) {
                      console.error(err)
                      alert(t(language, 'failedSubmit'))
                    } finally {
                      setSubmittingLead(false)
                    }
                  }}
                >
                  {submittingLead ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t(language, 'submitting')}
                    </span>
                  ) : (
                    t(language, 'submit')
                  )}
                </button>

                <button
                  onClick={startChat}
                  className="w-full text-[#0b1f5c] text-xs font-medium py-1 hover:underline"
                >
                  {t(language, 'backToChat')}
                </button>
              </div>
            </div>
          )}

          {/* ── Chat screen ── */}
          {view === 'chat' && (
            <>
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[260px] max-h-[50vh]">
                {messages.map((msg, i) => (
                  <Message key={i} msg={msg} onContactClick={() => setView('form')} language={language} />
                ))}

                {/* Quick-action suggestion chips — shown once, then hidden after the user types */}
                {!suggestionsDismissed && !showBusinessOptions && !loading && (
                  <SuggestionRow options={mainMenuOptions} onSelect={handleMainOption} />
                )}

                {showBusinessOptions && !loading && (
                  <SuggestionRow options={businessOptions} onSelect={handleBusinessOption} />
                )}

                {loading && (
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#0b1f5c] flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm">
                      <TypingDots />
                    </div>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="flex items-center gap-2 px-3 py-3 border-t border-gray-100">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={t(language, 'inputPlaceholder')}
                  disabled={loading}
                  className="flex-1 text-sm px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition min-w-0"
                />

                <button
                  onClick={send}
                  disabled={!input.trim() || loading}
                  className="w-9 h-9 rounded-xl bg-[#0b1f5c] flex items-center justify-center text-white disabled:opacity-40 hover:bg-blue-800 transition shrink-0"
                  aria-label="Send"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="h-12 sm:h-14 px-4 sm:px-5 rounded-full bg-[#0b1f5c] shadow-lg flex items-center gap-2 hover:bg-blue-800 transition-all hover:scale-105 active:scale-95"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        ) : (
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        )}
        <span className="text-white text-sm font-semibold">ChatAI</span>
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
                  The Indus Group Co.
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
                <a href="mailto:theindusgroup@outlook.com" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  theindusgroup@outlook.com
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
                <li>
                  <a href="https://www.facebook.com/theindusgroup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-200/70 hover:text-white transition-colors">
                    <Facebook className="w-4 h-4 text-[#1877F2]" />Facebook
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
              <Link href="/fraud-disclaimer" className="hover:text-white transition-colors">Fraud Disclaimer</Link>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}