"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Home, Mail, Phone, FileText, MessageCircle } from "lucide-react";
import { SITE } from "./data";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={`https://api.whatsapp.com/send?phone=${SITE.phoneRaw}&text=`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_8px_30px_-5px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_12px_40px_-5px_rgba(37,211,102,0.7)] transition-all"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 -z-10" />
      </a>

      {/* Back to top */}
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="hidden md:grid fixed bottom-24 right-6 z-40 h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-deep)] to-[var(--gold)] text-[var(--ink)] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 glass-dark border-t border-[var(--gold)]/30">
        <ul className="grid grid-cols-4">
          <MobileNavItem href="#home" icon={<Home className="h-5 w-5" />} label="Home" />
          <MobileNavItem
            href={`mailto:${SITE.email}`}
            icon={<Mail className="h-5 w-5" />}
            label="Mail"
          />
          <MobileNavItem
            href={`tel:${SITE.phoneRaw}`}
            icon={<Phone className="h-5 w-5" />}
            label="Call"
          />
          <MobileNavItem href="#enquiry" icon={<FileText className="h-5 w-5" />} label="Enquiry" />
        </ul>
      </nav>
    </>
  );
}

function MobileNavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium text-[var(--cream)]/70 hover:text-[var(--gold)] transition-colors"
      >
        <span className="text-[var(--gold)]">{icon}</span>
        {label}
      </a>
    </li>
  );
}
