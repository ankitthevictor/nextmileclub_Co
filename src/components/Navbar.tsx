import React, { useState } from 'react';
import { PearLogo } from './PearLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onRequestInvitation: () => void;
  onOpenPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onRequestInvitation,
  onOpenPortal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'cohort', label: 'The Cohort' },
    { id: 'retreats', label: 'Retreats' },
    { id: 'insights', label: 'Insights' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navigation-header"
      className="sticky top-0 z-40 w-full bg-[#f9f9f7]/95 backdrop-blur-[2px] border-b border-[#e5e5e5] transition-colors"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <PearLogo onClick={() => handleNavClick('hero')} />
        </div>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-[13px] tracking-[0.08em] font-sans transition-colors duration-200 py-1 relative ${
                  isActive
                    ? 'text-[#141e13] font-medium'
                    : 'text-[#444842] hover:text-[#141e13]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#141e13]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-request-invitation-btn"
            onClick={onRequestInvitation}
            className="px-6 py-2.5 bg-[#141e13] hover:bg-[#3f4a3c] text-[#fcfcfa] text-[12px] font-semibold tracking-[0.1em] uppercase font-sans transition-all duration-200 shadow-sm active:translate-y-[1px]"
            style={{ borderRadius: 0 }}
          >
            REQUEST AN INVITATION
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center md:hidden gap-3">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#141e13] hover:bg-[#eeeeec] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-b border-[#e5e5e5] bg-[#f9f9f7] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm tracking-[0.08em] uppercase py-2 border-b border-[#eeeeec] font-sans ${
                  activeSection === item.id
                    ? 'text-[#141e13] font-semibold'
                    : 'text-[#444842]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              id="mobile-request-invitation-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestInvitation();
              }}
              className="w-full py-3 bg-[#141e13] text-[#fcfcfa] text-xs font-semibold tracking-[0.1em] uppercase text-center"
              style={{ borderRadius: 0 }}
            >
              REQUEST AN INVITATION
            </button>
            <button
              id="mobile-portal-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full py-2.5 border border-[#c4c8c0] text-[#141e13] text-xs font-mono tracking-wider uppercase text-center flex items-center justify-center gap-1.5"
              style={{ borderRadius: 0 }}
            >
              <span>Member Portal</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
