
import { useEffect, useRef, useState } from "react";
import {
    Menu,
    X,
    CalendarDays,
    Clock,
    CreditCard,
    Users,
    ShieldCheck,
    BarChart3,
    CheckCircle2,
    ArrowRight,
    ChevronDown,
    Zap,
    RefreshCw,
    CalendarCheck,
    LayoutDashboard,
    Sparkles,
    CircleCheck,
    ArrowUpRight,
    Star,
    MessageCircle,
    Mail
} from "lucide-react";

// ==========================================
// CONTACT DETAILS
// EDIT THESE VALUES
// ==========================================

const CONTACT = {
    facebookPageUrl: "https://www.facebook.com/profile.php?id=61593960652597",
    viberNumber: "639751920231",
    businessEmail: "makertech.it.solutions@gmail.com",
    businessName: "MakerTech IT Solutions",
    businessTagline: "Simple. Smart. Efficient.",
    makertechLogo: "/makertech-logo.png"
};

const viberChatLink = `viber://chat?number=%2B${CONTACT.viberNumber}`;

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

function Reveal({
    children,
    className = "",
    delay = 0,
    direction = "up"
}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        if (typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${visible ? `reveal-visible reveal-${direction}` : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

// ==========================================
// SCREENSHOTS
// ==========================================

const screenshots = [
    {
        number: "01",
        title: "Reservation Management",
        description:
            "Manage customer reservations, booking details, and court schedules from one organized workspace.",
        image: "/screenshots/reservation.png"
    },
    {
        number: "02",
        title: "Secure Login System",
        description:
            "Provide authorized users with access to your court management platform through a secure login experience.",
        image: "/screenshots/login.png"
    },
    {
        number: "03",
        title: "Court Availability",
        description:
            "View available court time slots and organize bookings with a clearer view of availability.",
        image: "/screenshots/availability.png"
    },
    {
        number: "04",
        title: "Calendar Management",
        description:
            "Keep track of daily bookings and upcoming schedules through an organized calendar interface.",
        image: "/screenshots/calendar.png"
    },
    {
        number: "05",
        title: "Payment Records",
        description:
            "Access payment records and monitor reservation payment information in one place.",
        image: "/screenshots/payments.png"
    }
];

// ==========================================
// FEATURES
// ==========================================

const features = [
    {
        icon: CalendarCheck,
        title: "Reservation Management",
        description:
            "Organize bookings and manage customer reservations efficiently."
    },
    {
        icon: Clock,
        title: "Court Availability",
        description:
            "View available time slots and manage court scheduling."
    },
    {
        icon: CalendarDays,
        title: "Calendar Management",
        description:
            "Monitor daily bookings and upcoming reservations."
    },
    {
        icon: CreditCard,
        title: "Payment Records",
        description:
            "Keep reservation payment information organized and accessible."
    },
    {
        icon: Users,
        title: "Customer Management",
        description:
            "Manage customer information and reservation records."
    },
    {
        icon: BarChart3,
        title: "Management Dashboard",
        description:
            "Access important facility information from one central workspace."
    }
];

// ==========================================
// FAQ
// ==========================================

const faqs = [
    {
        question: "What is PickleBook?",
        answer:
            "PickleBook is a court reservation management system designed to help pickleball facilities organize reservations, court availability, schedules, customer records, and payments."
    },
    {
        question: "How much does PickleBook cost?",
        answer:
            "The PickleBook package is priced at ₱1,799. Contact us for billing and subscription details."
    },
    {
        question: "What is included in the package?",
        answer:
            "The package includes complete system access, all available features, system updates and improvements, and technical support."
    },
    {
        question: "Will the system receive updates?",
        answer:
            "Yes. System updates and improvements are included in the package."
    },
    {
        question: "Can I get technical support?",
        answer:
            "Yes. Technical support is included to help with system-related concerns."
    },
    {
        question: "How can I get started?",
        answer:
            "Contact us to discuss access, setup, and available billing arrangements."
    }
];

// ==========================================
// IMAGE COMPONENT
// ==========================================

function ProductImage({ src, alt, className = "" }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div className={`flex items-center justify-center bg-green-50 text-green-700 ${className}`}>
                <div className="text-center p-6">
                    <LayoutDashboard
                        size={38}
                        className="mx-auto mb-3 opacity-60"
                    />
                    <p className="text-sm font-semibold">
                        Add image: {src}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className={className}
        />
    );
}

// ==========================================
// MAIN APP
// ==========================================

export default function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState(0);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Features", href: "#features" },
        { label: "Screenshots", href: "#screenshots" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden">

            {/* =====================================
                ANIMATION STYLES
            ===================================== */}

            <style>{`
                html {
                    scroll-behavior: smooth;
                    scroll-padding-top: 90px;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-18px); }
                }

                @keyframes floatSlow {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(15px, -20px); }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(25px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes pulseGlow {
                    0%, 100% {
                        box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.15);
                    }
                    50% {
                        box-shadow: 0 0 0 15px rgba(22, 163, 74, 0);
                    }
                }

                @keyframes gradientMove {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes menuDrop {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .mobile-menu {
                    animation: menuDrop 250ms ease-out;
                }

                .hero-animate {
                    animation: fadeIn 0.9s ease-out both;
                }

                .hero-delay-1 { animation-delay: 150ms; }
                .hero-delay-2 { animation-delay: 300ms; }
                .hero-delay-3 { animation-delay: 450ms; }

                .floating {
                    animation: float 6s ease-in-out infinite;
                }

                .floating-slow {
                    animation: floatSlow 9s ease-in-out infinite;
                }

                .pulse-glow {
                    animation: pulseGlow 2.8s infinite;
                }

                .reveal {
                    opacity: 0;
                    transform: translateY(35px);
                    transition:
                        opacity 700ms ease,
                        transform 700ms cubic-bezier(.2,.7,.2,1);
                }

                .reveal-visible {
                    opacity: 1;
                }

                .reveal-visible.reveal-up,
                .reveal-visible.reveal-left,
                .reveal-visible.reveal-right {
                    transform: translate(0, 0);
                }

                .reveal-left { transform: translateX(-45px); }
                .reveal-right { transform: translateX(45px); }

                .gradient-text {
                    background: linear-gradient(
                        90deg,
                        #15803D,
                        #22C55E,
                        #4ADE80
                    );
                    background-size: 200% auto;
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: gradientMove 5s ease infinite;
                }

                .screenshot-card img {
                    transition: transform 700ms cubic-bezier(.2,.7,.2,1);
                }

                .screenshot-card:hover img {
                    transform: scale(1.035);
                }

                .feature-card {
                    transition:
                        transform 350ms ease,
                        box-shadow 350ms ease,
                        border-color 350ms ease;
                }

                .feature-card:hover {
                    transform: translateY(-9px);
                    box-shadow: 0 24px 50px rgba(20, 83, 45, 0.09);
                    border-color: #86EFAC;
                }

                .feature-icon {
                    transition: transform 350ms ease;
                }

                .feature-card:hover .feature-icon {
                    transform: rotate(-8deg) scale(1.1);
                }

                .faq-answer {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 300ms ease;
                }

                .faq-answer.open {
                    grid-template-rows: 1fr;
                }

                .faq-answer > div {
                    overflow: hidden;
                }

                .cta-button {
                    transition:
                        transform 250ms ease,
                        box-shadow 250ms ease,
                        background-color 250ms ease;
                }

                .cta-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 28px rgba(22, 163, 74, 0.22);
                }

                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        scroll-behavior: auto !important;
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }

                    .reveal {
                        opacity: 1;
                        transform: none;
                    }
                }
            `}</style>

            {/* =====================================
                NAVIGATION
            ===================================== */}

            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-green-100/80">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="h-20 flex items-center justify-between">

                        <a href="#home" className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-600/20">
                                <CalendarDays size={23} />
                            </div>

                            <div>
                                <h1 className="text-xl font-black tracking-tight text-green-950">
                                    PickleBook
                                </h1>
                                <p className="text-[10px] font-bold tracking-[2px] text-green-600 uppercase">
                                    Court Management
                                </p>
                            </div>
                        </a>

                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm font-semibold text-slate-600 hover:text-green-700 transition"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className="hidden md:block">
                            <a
                                href="#pricing"
                                className="cta-button inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-green-600/20"
                            >
                                Get Started
                                <ArrowUpRight size={17} />
                            </a>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-green-900"
                            aria-label="Toggle navigation"
                        >
                            {mobileMenuOpen ? (
                                <X size={25} />
                            ) : (
                                <Menu size={25} />
                            )}
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <div className="md:hidden pb-6 space-y-2 mobile-menu">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-green-50"
                                >
                                    {link.label}
                                </a>
                            ))}

                            <a
                                href="#pricing"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-3 rounded-xl font-bold text-green-700 bg-green-50"
                            >
                                Get Started
                            </a>
                        </div>
                    )}
                </div>
            </nav>

            {/* =====================================
                HERO
            ===================================== */}

            <section
                id="home"
                className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100"
            >
                <div className="absolute -top-32 -right-24 w-[500px] h-[500px] rounded-full bg-green-200/40 blur-3xl floating-slow" />
                <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl floating" />

                <div className="absolute top-40 right-[10%] w-5 h-5 rounded-full bg-green-300/70 floating hidden lg:block" />
                <div className="absolute bottom-28 left-[45%] w-3 h-3 rounded-full bg-emerald-400/70 floating-slow hidden lg:block" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>
                            <div className="hero-animate inline-flex items-center gap-2 bg-white border border-green-200 text-green-800 px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                                <Sparkles size={15} className="text-green-600" />
                                SMART COURT MANAGEMENT PLATFORM
                            </div>

                            <h2 className="hero-animate hero-delay-1 mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-[1.06] tracking-tight text-green-950">
                                Your Courts.
                                <span className="block gradient-text">
                                    Better Managed.
                                </span>
                            </h2>

                            <p className="hero-animate hero-delay-2 mt-7 text-lg md:text-xl text-slate-600 leading-8 max-w-xl">
                                Simplify your pickleball facility operations
                                with PickleBook. Manage reservations,
                                court availability, calendars, customers,
                                and payment records in one platform.
                            </p>

                            <div className="hero-animate hero-delay-3 mt-9 flex flex-wrap gap-4">
                                <a
                                    href="#pricing"
                                    className="cta-button pulse-glow inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-green-600/20"
                                >
                                    Get Started
                                    <ArrowRight size={19} />
                                </a>

                                <a
                                    href="#screenshots"
                                    className="cta-button inline-flex items-center gap-2 bg-white border border-green-200 hover:border-green-400 text-green-900 px-8 py-4 rounded-2xl font-bold"
                                >
                                    Explore Platform
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>

                            <div className="hero-animate hero-delay-3 mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-600">
                                {[
                                    "Complete System Access",
                                    "System Updates",
                                    "Technical Support"
                                ].map((item) => (
                                    <span key={item} className="flex items-center gap-2">
                                        <CircleCheck size={17} className="text-green-600" />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="relative hero-animate hero-delay-2">
                            <div className="absolute inset-0 bg-green-300/40 blur-3xl rounded-full floating-slow" />

                            <div className="relative bg-white p-3 md:p-4 rounded-[2rem] border border-green-100 shadow-2xl shadow-green-900/10">
                                <ProductImage
                                    src="/picklebook-banner.png"
                                    alt="PickleBook platform preview"
                                    className="w-full aspect-[4/3] object-cover rounded-[1.5rem]"
                                />

                                <div className="absolute -bottom-7 -left-5 md:-left-8 bg-white rounded-2xl p-5 shadow-xl border border-green-100 floating">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-700">
                                            <CalendarCheck size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">
                                                Court Management
                                            </p>
                                            <p className="font-extrabold text-green-950">
                                                All in one place
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =====================================
                INTRODUCTION
            ===================================== */}

            <section className="py-24">
                <Reveal className="max-w-4xl mx-auto px-6 text-center">
                    <span className="inline-flex items-center gap-2 text-green-700 font-bold text-sm uppercase tracking-widest">
                        <Sparkles size={16} />
                        Introducing PickleBook
                    </span>

                    <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight text-green-950">
                        Everything Your Court Needs.
                        <span className="block text-green-600">
                            One Organized Platform.
                        </span>
                    </h2>

                    <p className="mt-7 text-lg text-slate-600 leading-8">
                        Spend less time managing bookings manually.
                        Bring your essential court management activities
                        together with a platform designed for pickleball facilities.
                    </p>
                </Reveal>
            </section>

            {/* =====================================
                FEATURES
            ===================================== */}

            <section id="features" className="py-24 bg-green-50/70">
                <div className="max-w-7xl mx-auto px-6">

                    <Reveal className="max-w-2xl mb-14">
                        <span className="text-green-700 text-sm font-extrabold tracking-widest uppercase">
                            Powerful Features
                        </span>

                        <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-green-950">
                            Built for Better Court Operations
                        </h2>

                        <p className="mt-5 text-slate-600 leading-7">
                            The tools you need to organize your facility's
                            day-to-day management.
                        </p>
                    </Reveal>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <Reveal key={feature.title} delay={index * 90}>
                                    <div className="feature-card h-full bg-white border border-green-100 rounded-3xl p-8">
                                        <div className="feature-icon w-14 h-14 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                                            <Icon size={26} />
                                        </div>

                                        <h3 className="mt-7 text-xl font-extrabold text-green-950">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-3 text-slate-600 leading-7">
                                            {feature.description}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================
                SCREENSHOTS
            ===================================== */}

            <section id="screenshots" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <Reveal className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-green-700 text-sm font-extrabold tracking-widest uppercase">
                            Inside PickleBook
                        </span>

                        <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight text-green-950">
                            A Closer Look at the Platform
                        </h2>

                        <p className="mt-6 text-lg text-slate-600 leading-8">
                            Explore the interfaces that help keep your
                            reservations, schedules, and records organized.
                        </p>
                    </Reveal>

                    <div className="space-y-24">
                        {screenshots.map((item, index) => (
                            <div
                                key={item.number}
                                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                            >
                                <Reveal
                                    direction={index % 2 === 0 ? "left" : "right"}
                                    className={index % 2 === 1 ? "lg:order-2" : ""}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="w-11 h-11 rounded-xl bg-green-100 text-green-800 flex items-center justify-center font-black">
                                            {item.number}
                                        </span>

                                        <span className="text-xs uppercase tracking-widest font-bold text-green-700">
                                            System Preview
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black text-green-950 tracking-tight">
                                        {item.title}
                                    </h3>

                                    <p className="mt-6 text-lg text-slate-600 leading-8">
                                        {item.description}
                                    </p>

                                    <div className="mt-8 inline-flex items-center gap-3 bg-green-50 border border-green-100 px-4 py-3 rounded-xl text-green-800 text-sm font-bold">
                                        <CheckCircle2 size={19} />
                                        Included in PickleBook
                                    </div>
                                </Reveal>

                                <Reveal
                                    direction={index % 2 === 0 ? "right" : "left"}
                                    delay={120}
                                    className={`screenshot-card relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                                >
                                    <div className="absolute -inset-3 rounded-[2rem] bg-green-100/80 blur-xl" />

                                    <div className="relative bg-green-50 rounded-3xl p-3 md:p-5 border border-green-100 shadow-xl shadow-green-900/5 overflow-hidden">
                                        <ProductImage
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full aspect-[16/10] object-contain rounded-2xl bg-white"
                                        />
                                    </div>
                                </Reveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================
                WHY PICKLEBOOK
            ===================================== */}

            <section className="py-24 bg-green-950 text-white">
                <div className="max-w-7xl mx-auto px-6">

                    <Reveal className="max-w-3xl mx-auto text-center">
                        <span className="text-green-300 text-sm font-extrabold tracking-widest uppercase">
                            Why PickleBook
                        </span>

                        <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight">
                            Spend More Time Growing
                            <span className="block text-green-300">
                                Your Court Business.
                            </span>
                        </h2>

                        <p className="mt-6 text-green-100/70 text-lg leading-8">
                            Keep your essential management activities
                            organized with one connected platform.
                        </p>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-7 mt-16">
                        {[
                            {
                                icon: Zap,
                                title: "Organized Operations",
                                text: "Keep bookings, schedules, and records in one place."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Access Management",
                                text: "Use the available account and access management features."
                            },
                            {
                                icon: RefreshCw,
                                title: "Ongoing Improvements",
                                text: "Receive system updates and improvements included in the package."
                            }
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Reveal key={item.title} delay={index * 120}>
                                    <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition duration-300">
                                        <div className="w-14 h-14 rounded-2xl bg-green-400/15 text-green-300 flex items-center justify-center">
                                            <Icon size={27} />
                                        </div>

                                        <h3 className="mt-7 text-xl font-extrabold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-green-100/70 leading-7">
                                            {item.text}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================
                PRICING
            ===================================== */}

            <section id="pricing" className="py-24 bg-green-50">
                <div className="max-w-5xl mx-auto px-6">

                    <Reveal className="text-center mb-14">
                        <span className="text-green-700 text-sm font-extrabold tracking-widest uppercase">
                            Simple Package
                        </span>

                        <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight text-green-950">
                            Everything Included.
                        </h2>

                        <p className="mt-5 text-slate-600 text-lg">
                            Get access to the complete PickleBook package.
                        </p>
                    </Reveal>

                    <Reveal>
                        <div className="max-w-xl mx-auto bg-white rounded-[2rem] border border-green-200 shadow-2xl shadow-green-900/10 overflow-hidden hover:-translate-y-2 transition duration-500">

                            <div className="bg-gradient-to-br from-green-700 to-green-600 text-white p-8 md:p-10">
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-green-50">
                                        <Star size={17} />
                                        COMPLETE PACKAGE
                                    </span>

                                    <span className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-bold">
                                        Full Access
                                    </span>
                                </div>

                                <h3 className="mt-7 text-3xl font-black">
                                    PickleBook
                                </h3>

                                <p className="mt-2 text-green-100">
                                    Your court management solution.
                                </p>

                                <div className="mt-8 flex items-end gap-2">
                                    <span className="text-6xl font-black tracking-tight">
                                        ₱1,799
                                    </span>
                                </div>

                                <p className="mt-2 text-sm text-green-100">
                                    Contact us for billing and subscription details.
                                </p>
                            </div>

                            <div className="p-8 md:p-10">
                                <h4 className="font-extrabold text-green-950 text-lg">
                                    What's included
                                </h4>

                                <div className="mt-7 space-y-5">
                                    {[
                                        "Complete system access",
                                        "All available system features",
                                        "Reservation management",
                                        "Court availability and scheduling",
                                        "Calendar management",
                                        "Payment records",
                                        "System updates and improvements",
                                        "Technical support"
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={15} className="text-green-700" />
                                            </div>

                                            <span className="text-slate-700 font-medium">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={`mailto:${CONTACT.businessEmail}?subject=PickleBook%20Inquiry`}
                                    className="cta-button mt-10 w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-extrabold shadow-lg shadow-green-600/20"
                                >
                                    Get PickleBook
                                    <ArrowRight size={19} />
                                </a>

                                <p className="mt-5 text-center text-xs text-slate-400">
                                    Complete access, updates, and technical support included.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* =====================================
                FAQ
            ===================================== */}

            <section id="faq" className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">

                    <Reveal className="text-center mb-14">
                        <span className="text-green-700 text-sm font-extrabold tracking-widest uppercase">
                            FAQ
                        </span>

                        <h2 className="mt-5 text-4xl font-black text-green-950">
                            Frequently Asked Questions
                        </h2>

                        <p className="mt-5 text-slate-600">
                            Everything you need to know about PickleBook.
                        </p>
                    </Reveal>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <Reveal key={faq.question} delay={index * 60}>
                                <div className="border border-green-100 rounded-2xl overflow-hidden hover:border-green-300 transition">
                                    <button
                                        onClick={() =>
                                            setActiveFaq(activeFaq === index ? -1 : index)
                                        }
                                        className="w-full flex items-center justify-between gap-5 p-6 text-left hover:bg-green-50/70 transition"
                                    >
                                        <span className="font-bold text-green-950">
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            size={21}
                                            className={`shrink-0 text-green-700 transition-transform duration-300 ${
                                                activeFaq === index ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>

                                    <div className={`faq-answer ${activeFaq === index ? "open" : ""}`}>
                                        <div>
                                            <p className="px-6 pb-6 text-slate-600 leading-7">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================
                FINAL CTA
            ===================================== */}

            <section className="px-6 pb-24">
                <Reveal>
                    <div className="max-w-7xl mx-auto rounded-[2rem] bg-gradient-to-br from-green-700 to-green-900 p-10 md:p-16 text-center text-white relative overflow-hidden">

                        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-green-400/20 blur-3xl floating-slow" />
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-emerald-300/10 blur-3xl floating" />

                        <div className="relative">
                            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold">
                                <Sparkles size={16} />
                                Make Court Management Simpler
                            </span>

                            <h2 className="mt-7 text-4xl md:text-5xl font-black max-w-3xl mx-auto leading-tight">
                                Ready to Manage Your Courts Better?
                            </h2>

                            <p className="mt-6 text-green-100 text-lg leading-8 max-w-2xl mx-auto">
                                Discover how PickleBook can help organize your
                                reservations, schedules, and payment records.
                            </p>

                            <div className="mt-9 flex flex-wrap justify-center gap-4">
                                <a
                                    href={`mailto:${CONTACT.businessEmail}?subject=PickleBook%20Inquiry`}
                                    className="cta-button inline-flex items-center gap-3 bg-white text-green-800 hover:bg-green-50 px-8 py-4 rounded-2xl font-extrabold"
                                >
                                    Contact Us
                                    <ArrowRight size={19} />
                                </a>

                                <a
                                    href="#screenshots"
                                    className="cta-button inline-flex items-center gap-3 border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-bold"
                                >
                                    Explore Features
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* =====================================
                FOOTER
            ===================================== */}

            <footer className="bg-green-950 text-white py-12">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-green-600 flex items-center justify-center">
                                    <CalendarDays size={23} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-black">
                                        PickleBook
                                    </h3>
                                    <p className="text-xs text-green-300">
                                        Smart Court Management
                                    </p>
                                </div>
                            </div>

                            <p className="mt-5 max-w-md text-sm text-green-100/60 leading-7">
                                A court reservation management platform
                                designed to help pickleball facilities
                                organize their daily operations.
                            </p>
                        </div>

                        <div className="md:text-right">
                            <div className="flex md:justify-end flex-wrap gap-6 text-sm font-semibold text-green-100/70">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="hover:text-white transition"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            <p className="mt-7 text-sm text-green-100/40">
                                © {new Date().getFullYear()} PickleBook. All rights reserved.
                            </p>
                        </div>
                    </div>

                    {/* CONTACT LINKS AND DEVELOPER CREDIT */}

                    <div className="mt-10 pt-8 border-t border-white/10 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-xs font-extrabold tracking-[2px] uppercase text-green-300">
                                Connect with us
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">

                                {/* FACEBOOK */}

                                <a
                                    href={CONTACT.facebookPageUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
                                >
                                    <span className="w-[18px] h-[18px] rounded-full bg-white text-green-950 flex items-center justify-center font-black text-sm">
                                        f
                                    </span>
                                    Facebook Page
                                </a>

                                {/* VIBER */}

                                <a
                                    href={viberChatLink}
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
                                >
                                    <MessageCircle size={18} />
                                    Chat on Viber
                                </a>

                                {/* EMAIL */}

                                <a
                                    href={`mailto:${CONTACT.businessEmail}?subject=PickleBook%20Inquiry`}
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
                                >
                                    <Mail size={18} />
                                    Email Us
                                </a>
                            </div>
                        </div>

                        {/* MAKERTECH */}

                        <div className="md:text-right">
                            <p className="text-xs font-semibold uppercase tracking-[2px] text-green-300">
                                Developed and maintained by
                            </p>

                            <div className="mt-3 flex md:justify-end items-center gap-3">
                                <img
                                    src={CONTACT.makertechLogo}
                                    alt="MakerTech IT Solutions"
                                    className="w-12 h-12 object-contain rounded-lg"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />

                                <div className="md:text-right">
                                    <p className="text-xl font-black text-white">
                                        {CONTACT.businessName}
                                    </p>
                                    <p className="mt-1 text-sm text-green-100/60">
                                        IT Solutions • Software Development • Technical Support
                                    </p>
                                </div>
                            </div>

                            <p className="mt-3 text-xs font-semibold italic text-green-300">
                                {CONTACT.businessTagline}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
