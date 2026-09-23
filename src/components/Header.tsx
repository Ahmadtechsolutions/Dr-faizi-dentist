import React, { useState, useEffect, useRef } from 'react';
import { DOCTOR_DATA } from '../data/doctorData';
import { 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  Menu, 
  X, 
  Calendar, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: (preselectedService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    { label: 'Primary Rhinoplasty', path: '/rhinoplasty', tag: 'Aesthetic & Airway' },
    { label: 'Complex Rhinoplasty', path: '/complex-rhinoplasty', tag: 'Trauma & Deviation' },
    { label: 'Revision Rhinoplasty', path: '/revision-rhinoplasty', tag: 'Secondary Correction' },
    { label: 'Functional Rhinoplasty', path: '/functional-rhinoplasty', tag: 'Septum & Airway' },
    { label: 'FESS (Sinus Surgery)', path: '/fess', tag: 'Endoscopic Sinus' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const isServiceActive = [
    '/rhinoplasty',
    '/fess',
    '/complex-rhinoplasty',
    '/revision-rhinoplasty',
    '/functional-rhinoplasty'
  ].includes(currentPath);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80' 
          : 'bg-white border-b border-neutral-200'
      }`}
    >
      {/* Top micro-announcement bar for verified surgeon credentials */}
      <div className="bg-neutral-900 text-neutral-300 text-xs py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Clean Bar: concise credentials + direct WhatsApp link */}
          <div className="flex sm:hidden items-center justify-between text-[11px] gap-2">
            <div className="flex items-center gap-1.5 truncate text-neutral-300 font-medium">
              <span className="text-white font-semibold">{DOCTOR_DATA.name}</span>
              <span className="text-neutral-600">·</span>
              <span className="truncate">{DOCTOR_DATA.qualifications}</span>
            </div>
            <a 
              href={DOCTOR_DATA.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1 text-emerald-400 font-semibold py-0.5 px-2 rounded bg-neutral-800/80 hover:bg-neutral-800 transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Tablet & Desktop Expanded Bar */}
          <div className="hidden sm:flex items-center justify-between">
            <div className="flex items-center gap-2 tracking-wide font-medium">
              <span className="text-neutral-100">{DOCTOR_DATA.profession}</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-300">{DOCTOR_DATA.qualifications}</span>
              <span className="hidden md:inline text-neutral-500">·</span>
              <span className="hidden md:inline text-neutral-400">{DOCTOR_DATA.professionalMembership}</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-300 text-xs">
              <a 
                href={`tel:${DOCTOR_DATA.contact.phone}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>{DOCTOR_DATA.contact.phoneFormatted}</span>
              </a>
              <a 
                href={DOCTOR_DATA.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 text-emerald-400 font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {DOCTOR_DATA.contact.whatsappFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Top Bar: Strictly follows 3-zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleLinkClick('/')}
          className="text-left group cursor-pointer"
        >
          <span className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
            {DOCTOR_DATA.brand}
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700">
          <button
            onClick={() => handleLinkClick('/')}
            className={`cursor-pointer transition-colors py-1 hover:text-neutral-950 ${
              currentPath === '/' ? 'text-neutral-950 font-semibold border-b-2 border-neutral-900' : ''
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleLinkClick('/about')}
            className={`cursor-pointer transition-colors py-1 hover:text-neutral-950 ${
              currentPath === '/about' ? 'text-neutral-950 font-semibold border-b-2 border-neutral-900' : ''
            }`}
          >
            About Dr. Faizi
          </button>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1 cursor-pointer transition-colors py-1 hover:text-neutral-950 ${
                isServiceActive ? 'text-neutral-950 font-semibold border-b-2 border-neutral-900' : ''
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 z-50 transition-all">
                <div className="px-3 py-1.5 text-xs uppercase tracking-wider text-neutral-400 font-semibold border-b border-neutral-100">
                  Surgical Procedures
                </div>
                {serviceLinks.map((service) => (
                  <button
                    key={service.path}
                    onClick={() => handleLinkClick(service.path)}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-neutral-50 transition-colors flex flex-col group cursor-pointer"
                  >
                    <span className="text-neutral-900 font-medium group-hover:text-neutral-950">
                      {service.label}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {service.tag}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleLinkClick('/before-after')}
            className={`cursor-pointer transition-colors py-1 hover:text-neutral-950 ${
              currentPath === '/before-after' ? 'text-neutral-950 font-semibold border-b-2 border-neutral-900' : ''
            }`}
          >
            Before & After
          </button>

          <button
            onClick={() => handleLinkClick('/reviews')}
            className={`cursor-pointer transition-colors py-1 hover:text-neutral-950 ${
              currentPath === '/reviews' ? 'text-neutral-950 font-semibold border-b-2 border-neutral-900' : ''
            }`}
          >
            Reviews
          </button>

          <button
            onClick={() => handleLinkClick('/faqs')}
            className={`cursor-pointer transition-colors py-1 hover:text-neutral-950 ${
              currentPath === '/faqs' ? 'text-neutral-950 font-semibold border-b-2 border-neutral-900' : ''
            }`}
          >
            FAQs
          </button>

          <button
            onClick={() => handleLinkClick('/contact')}
            className={`cursor-pointer transition-colors py-1 hover:text-neutral-950 ${
              currentPath === '/contact' ? 'text-neutral-950 font-semibold border-b-2 border-neutral-900' : ''
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={DOCTOR_DATA.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            WhatsApp Us
          </a>

          <button
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg transition-colors shadow-xs whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Consultation
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={DOCTOR_DATA.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 text-emerald-700 bg-emerald-50 rounded-md"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-neutral-800 hover:text-neutral-950 hover:bg-neutral-100 rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-5 py-4 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleLinkClick('/')}
              className={`text-left py-2 text-base font-medium ${
                currentPath === '/' ? 'text-neutral-950 font-bold' : 'text-neutral-700'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('/about')}
              className={`text-left py-2 text-base font-medium ${
                currentPath === '/about' ? 'text-neutral-950 font-bold' : 'text-neutral-700'
              }`}
            >
              About Dr. Faizi
            </button>

            {/* Mobile Services Accordion */}
            <div className="border-y border-neutral-100 py-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-left py-1 text-base font-medium text-neutral-800"
              >
                <span>Surgical Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 mt-2 space-y-2 border-l-2 border-neutral-200">
                  {serviceLinks.map((s) => (
                    <button
                      key={s.path}
                      onClick={() => handleLinkClick(s.path)}
                      className="w-full text-left py-1.5 text-sm text-neutral-600 hover:text-neutral-950 flex flex-col"
                    >
                      <span className="font-medium text-neutral-900">{s.label}</span>
                      <span className="text-xs text-neutral-400">{s.tag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('/before-after')}
              className={`text-left py-2 text-base font-medium ${
                currentPath === '/before-after' ? 'text-neutral-950 font-bold' : 'text-neutral-700'
              }`}
            >
              Before & After Gallery
            </button>

            <button
              onClick={() => handleLinkClick('/reviews')}
              className={`text-left py-2 text-base font-medium ${
                currentPath === '/reviews' ? 'text-neutral-950 font-bold' : 'text-neutral-700'
              }`}
            >
              Patient Reviews
            </button>

            <button
              onClick={() => handleLinkClick('/faqs')}
              className={`text-left py-2 text-base font-medium ${
                currentPath === '/faqs' ? 'text-neutral-950 font-bold' : 'text-neutral-700'
              }`}
            >
              FAQs
            </button>

            <button
              onClick={() => handleLinkClick('/contact')}
              className={`text-left py-2 text-base font-medium ${
                currentPath === '/contact' ? 'text-neutral-950 font-bold' : 'text-neutral-700'
              }`}
            >
              Contact & Location
            </button>
          </div>

          <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-neutral-950 text-white text-center font-medium rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Request Consultation
            </button>

            <a
              href={DOCTOR_DATA.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-600 text-white text-center font-medium rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: {DOCTOR_DATA.contact.whatsappFormatted}
            </a>

            <a
              href={`tel:${DOCTOR_DATA.contact.phone}`}
              className="w-full py-2 border border-neutral-300 text-neutral-800 text-center font-medium rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-neutral-600" />
              Call: {DOCTOR_DATA.contact.phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
