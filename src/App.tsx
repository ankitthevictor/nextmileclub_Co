import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PeersSection } from './components/PeersSection';
import { ConvenerSection } from './components/ConvenerSection';
import { ProtocolSection } from './components/ProtocolSection';
import { PhilosophyView } from './components/PhilosophyView';
import { InsightsView } from './components/InsightsView';
import { Footer } from './components/Footer';
import { PeerModal } from './components/PeerModal';
import { ConvenerBioModal } from './components/ConvenerBioModal';
import { ArticleModal } from './components/ArticleModal';
import { InvitationModal } from './components/InvitationModal';
import { MemberPortalModal } from './components/MemberPortalModal';
import { Peer, InsightArticle } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedPeer, setSelectedPeer] = useState<Peer | null>(null);
  const [isBioModalOpen, setIsBioModalOpen] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState<boolean>(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === 'hero' || sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(
      sectionId === 'philosophy'
        ? 'philosophy-section'
        : sectionId === 'cohort'
        ? 'peers-cohort-section'
        : sectionId === 'retreats'
        ? 'summit-protocol-section'
        : sectionId === 'insights'
        ? 'insights-section'
        : `${sectionId}-section`
    );

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f7] text-[#1a1c1b] flex flex-col selection:bg-[#3f4a3c] selection:text-[#fcfcfa]">
      {/* Sticky Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onRequestInvitation={() => setIsInvitationModalOpen(true)}
        onOpenPortal={() => setIsPortalModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection
          onRequestInvitation={() => setIsInvitationModalOpen(true)}
        />

        {/* 2. Section 01: The Peers */}
        <PeersSection
          onSelectPeer={(peer) => setSelectedPeer(peer)}
          onOpenAllPeers={() => handleNavigate('cohort')}
        />

        {/* 3. Section 02: The Convener */}
        <ConvenerSection
          onOpenBioModal={() => setIsBioModalOpen(true)}
        />

        {/* 4. Section 03: The Details & Summit Protocol */}
        <ProtocolSection
          onRequestInvitation={() => setIsInvitationModalOpen(true)}
        />

        {/* 5. Philosophy & Architectural Manifesto */}
        <PhilosophyView
          onRequestInvitation={() => setIsInvitationModalOpen(true)}
        />

        {/* 6. Insights & Monographs */}
        <InsightsView
          onSelectArticle={(article) => setSelectedArticle(article)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPortal={() => setIsPortalModalOpen(true)}
        onNavigateHome={() => handleNavigate('hero')}
      />

      {/* Modals & Dialogs */}
      {selectedPeer && (
        <PeerModal
          peer={selectedPeer}
          onClose={() => setSelectedPeer(null)}
          onRequestInvitation={() => setIsInvitationModalOpen(true)}
        />
      )}

      {isBioModalOpen && (
        <ConvenerBioModal
          isOpen={isBioModalOpen}
          onClose={() => setIsBioModalOpen(false)}
          onRequestInvitation={() => setIsInvitationModalOpen(true)}
        />
      )}

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      {isInvitationModalOpen && (
        <InvitationModal
          isOpen={isInvitationModalOpen}
          onClose={() => setIsInvitationModalOpen(false)}
        />
      )}

      {isPortalModalOpen && (
        <MemberPortalModal
          isOpen={isPortalModalOpen}
          onClose={() => setIsPortalModalOpen(false)}
        />
      )}
    </div>
  );
}
