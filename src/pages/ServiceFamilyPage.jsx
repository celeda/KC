import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/shared/AnimatedElement";
import { Home, MessageSquare, GitFork, HeartHandshake, ShieldQuestion } from "lucide-react";
import useContent from '@/hooks/useContent';

const ServiceFamilyPage = () => {
  const { getValueByPath, isLoading } = useContent();

  const benefitsConfig = [
    {
      icon: <MessageSquare size={28} className="text-primary mb-3" />,
      titleKey: "serviceFamilyPage.benefits.items[0].title",
      descriptionKey: "serviceFamilyPage.benefits.items[0].description",
    },
    {
      icon: <GitFork size={28} className="text-primary mb-3 transform -rotate-90" />,
      titleKey: "serviceFamilyPage.benefits.items[1].title",
      descriptionKey: "serviceFamilyPage.benefits.items[1].description",
    },
    {
      icon: <HeartHandshake size={28} className="text-primary mb-3" />,
      titleKey: "serviceFamilyPage.benefits.items[2].title",
      descriptionKey: "serviceFamilyPage.benefits.items[2].description",
    },
    {
      icon: <ShieldQuestion size={28} className="text-primary mb-3" />,
      titleKey: "serviceFamilyPage.benefits.items[3].title",
      descriptionKey: "serviceFamilyPage.benefits.items[3].description",
    },
  ];

  if (isLoading) {
    return <div className="page-container text-center py-20">Ładowanie treści...</div>;
  }

  return (
    <motion.div
      className="page-container animate-fadeIn pt-28 md:pt-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedElement type="title">
        <section className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <Home size={80} className="text-primary opacity-80" />
          </div>
          <h1 className="section-title">
            {getValueByPath("serviceFamilyPage.main.title", "Psychoterapia Rodzinna")}
          </h1>
          <p className="text-lg md:text-xl font-sans text-muted-foreground max-w-3xl mx-auto text-balance">
            {getValueByPath("serviceFamilyPage.main.subtitle", "Terapia rodzinna to forma pomocy psychologicznej, w której uczestniczą członkowie rodziny. Celem jest poprawa wzajemnych relacji, komunikacji oraz rozwiązanie problemów wpływających na cały system rodzinny.")}
          </p>
        </section>
      </AnimatedElement>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16 items-center">
        <AnimatedElement type="image">
           <img  alt="Rodzina spędzająca razem czas w jasnym, przytulnym wnętrzu" className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover border-4 border-background" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=1920&auto=format&fit=crop" />
        </AnimatedElement>
        <AnimatedElement type="text" delay={0.1}>
          <h2 className="section-subtitle">
            {getValueByPath("serviceFamilyPage.whenToConsider.title", "Kiedy rodzina może potrzebować wsparcia?")}
          </h2>
          <p className="font-sans text-muted-foreground mb-4 leading-relaxed text-balance">
            {getValueByPath("serviceFamilyPage.whenToConsider.intro", "Terapia rodzinna jest wskazana, gdy:")}
          </p>
          <ul className="font-sans text-muted-foreground list-disc list-inside space-y-1.5 mb-6 text-balance text-sm">
            <li>{getValueByPath("serviceFamilyPage.whenToConsider.listItem1", "W rodzinie występują częste konflikty, napięcia")}</li>
            <li>{getValueByPath("serviceFamilyPage.whenToConsider.listItem2", "Członkowie rodziny mają trudności w porozumiewaniu się")}</li>
            <li>{getValueByPath("serviceFamilyPage.whenToConsider.listItem3", "Rodzina przeżywa kryzys (np. choroba, śmierć, problemy finansowe)")}</li>
            <li>{getValueByPath("serviceFamilyPage.whenToConsider.listItem4", "Problemy psychiczne lub uzależnienie jednego członka wpływają na pozostałych")}</li>
            <li>{getValueByPath("serviceFamilyPage.whenToConsider.listItem5", "Pojawiają się trudności wychowawcze")}</li>
            <li>{getValueByPath("serviceFamilyPage.whenToConsider.listItem6", "Rodzina przechodzi przez ważne zmiany (np. nowy członek, rozwód)")}</li>
          </ul>
        </AnimatedElement>
      </div>
      
      <AnimatedElement type="section" className="mb-12 md:mb-16">
        <h2 className="section-subtitle text-center">
          {getValueByPath("serviceFamilyPage.benefits.title", "Korzyści z terapii rodzinnej:")}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-8">
          {benefitsConfig.map((benefit, i) => (
            <AnimatedElement type="item" delay={i * 0.1} key={i}>
              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border/50 flex flex-col items-start h-full">
                <div className="p-2.5 bg-primary/10 rounded-full mb-3">{benefit.icon}</div>
                <h3 className="text-md font-serif font-medium text-foreground mb-1.5">
                  {getValueByPath(benefit.titleKey)}
                </h3>
                <p className="font-sans text-xs text-muted-foreground flex-grow text-balance">
                  {getValueByPath(benefit.descriptionKey)}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="mb-12 md:mb-16 bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border/50">
        <h2 className="section-subtitle">
          {getValueByPath("serviceFamilyPage.process.title", "Jak wygląda terapia rodzinna?")}
        </h2>
        <div className="font-sans text-muted-foreground space-y-4 leading-relaxed text-balance">
          <p>
            <strong>{getValueByPath("serviceFamilyPage.process.participants.title", "Uczestnicy:")}</strong> {getValueByPath("serviceFamilyPage.process.participants.description", "W sesjach mogą uczestniczyć wszyscy członkowie rodziny mieszkający razem, lub tylko niektórzy, w zależności od problemu.")}
          </p>
          <p>
            <strong>{getValueByPath("serviceFamilyPage.process.sessions.title", "Przebieg sesji:")}</strong> {getValueByPath("serviceFamilyPage.process.sessions.description", "Spotkania (60-90 minut) co 2-4 tygodnie. Terapeuta pomaga zidentyfikować wzorce komunikacji i interakcji. Wspólnie poszukuje się nowych, bardziej konstruktywnych sposobów funkcjonowania.")}
          </p>
          <p>
            <strong>{getValueByPath("serviceFamilyPage.process.therapistRole.title", "Rola terapeuty:")}</strong> {getValueByPath("serviceFamilyPage.process.therapistRole.description", "Terapeuta jest neutralny, tworzy bezpieczną atmosferę, moderuje rozmowę, pomaga zrozumieć perspektywę innych.")}
          </p>
          <p>
            <strong>{getValueByPath("serviceFamilyPage.process.systemicApproach.title", "Podejście systemowe:")}</strong> {getValueByPath("serviceFamilyPage.process.systemicApproach.description", "Rodzina jest systemem, w którym członkowie wzajemnie na siebie wpływają. Zmiana u jednej osoby może prowadzić do zmian w całym systemie.")}
          </p>
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="text-center">
        <p className="font-serif text-xl md:text-2xl text-primary/90 mb-8 text-balance">
          {getValueByPath("serviceFamilyPage.cta.text", "Jeśli czujecie, że Wasza rodzina potrzebuje wsparcia w pokonywaniu trudności i budowaniu lepszych relacji, zapraszam na konsultację.")}
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Link to="/kontakt">
            <span>{getValueByPath("serviceFamilyPage.cta.buttonText", "Umówcie konsultację rodzinną")}</span>
          </Link>
        </Button>
      </AnimatedElement>
    </motion.div>
  );
};

export default ServiceFamilyPage;