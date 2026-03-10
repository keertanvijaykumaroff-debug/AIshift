'use client';

import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import LLMAndAgents from '@/components/sections/LLMAndAgents';
import EvolutionTimeline from '@/components/sections/EvolutionTimeline';
import AILandscape from '@/components/sections/AILandscape';
import MajorCompanies from '@/components/sections/MajorCompanies';
import BusinessRevolution from '@/components/sections/BusinessRevolution';
import JobImpact from '@/components/sections/JobImpact';
import AnalyticsDeepDive from '@/components/sections/AnalyticsDeepDive';
import FinanceSection from '@/components/sections/FinanceSection';
import ProfessionalTools from '@/components/sections/ProfessionalTools';
import PromptEngineering from '@/components/sections/PromptEngineering';
import AIAutomation from '@/components/sections/AIAutomation';
import FreeVsPaidTools from '@/components/sections/FreeVsPaidTools';
import EthicsSection from '@/components/sections/EthicsSection';
import FuturePreparation from '@/components/sections/FuturePreparation';
import KeyTakeaways from '@/components/sections/KeyTakeaways';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="overflow-x-hidden">
        <HeroSection />
        <IntroductionSection />
        <LLMAndAgents />
        <EvolutionTimeline />
        <AILandscape />
        <MajorCompanies />
        <BusinessRevolution />
        <JobImpact />
        <AnalyticsDeepDive />
        <FinanceSection />
        <ProfessionalTools />
        <PromptEngineering />
        <AIAutomation />
        <FreeVsPaidTools />
        <EthicsSection />
        <FuturePreparation />
        <KeyTakeaways />
      </main>
    </div>
  );
}
