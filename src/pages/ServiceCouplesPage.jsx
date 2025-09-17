import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/shared/AnimatedElement";
import { Users, MessageCircle, HeartCrack, GitFork } from "lucide-react";
import useContent from '@/hooks/useContent';

const ServiceCouplesPage = () => {
  const { getValueByPath, isLoading } = useContent();

  const featuresConfig = [
    {
      icon: <MessageCircle size={32} className="text-primary mb-4" />,
      titleKey: "serviceCouplesPage.goals.items[0].title",
      descriptionKey: "serviceCouplesPage.goals.items[0].description",
    },
    {
      icon: <GitFork size={32} className="text-primary mb-4 transform -rotate-90" />,
      titleKey: "serviceCouplesPage.goals.items[1].title",
      descriptionKey: "serviceCouplesPage.goals.items[1].description",
    },
    {
      icon: <HeartCrack size={32} className="text-primary mb-4" />, 
      titleKey: "serviceCouplesPage.goals.items[2].title",
      descriptionKey: "serviceCouplesPage.goals.items[2].description",
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
            <Users size={80} className="text-primary opacity-80" />
          </div>
          <h1 className="section-title">
            {getValueByPath("serviceCouplesPage.main.title", "Psychoterapia Par i Relacji")}
          </h1>
          <p className="text-lg md:text-xl font-sans text-muted-foreground max-w-3xl mx-auto text-balance">
            {getValueByPath("serviceCouplesPage.main.subtitle", "Terapia dla par to przestrzeń do wspólnej pracy nad trudnościami w związku, poprawy komunikacji i odbudowy wzajemnego zrozumienia oraz bliskości.")}
          </p>
        </section>
      </AnimatedElement>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16 items-center">
        <AnimatedElement type="image">
           <img  alt="Para rozmawiająca w przyjaznej, jasnej atmosferze" className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover border-4 border-background" src="https://images.unsplash.com/photo-1567440054400-9548902f9028?q=80&w=1920&auto=format&fit=crop" />
        </AnimatedElement>
        <AnimatedElement type="text" delay={0.1}>
          <h2 className="section-subtitle">
            {getValueByPath("serviceCouplesPage.whenToConsider.title", "Kiedy warto skorzystać?")}
          </h2>
          <p className="font-sans text-muted-foreground mb-4 leading-relaxed text-balance">
            {getValueByPath("serviceCouplesPage.whenToConsider.intro", "Psychoterapia par jest pomocna, gdy partnerzy doświadczają:")}
          </p>
          <ul className="font-sans text-muted-foreground list-disc list-inside space-y-1.5 mb-6 text-balance text-sm">
            <li>{getValueByPath("serviceCouplesPage.whenToConsider.listItem1", "Częstych kłótni i trudności w porozumieniu się")}</li>
            <li>{getValueByPath("serviceCouplesPage.whenToConsider.listItem2", "Poczucia oddalenia emocjonalnego, braku bliskości")}</li>
            <li>{getValueByPath("serviceCouplesPage.whenToConsider.listItem3", "Problemów z zaufaniem, np. po zdradzie")}</li>
            <li>{getValueByPath("serviceCouplesPage.whenToConsider.listItem4", "Trudności związanych z ważnymi zmianami życiowymi")}</li>
            <li>{getValueByPath("serviceCouplesPage.whenToConsider.listItem5", "Problemów w sferze intymnej")}</li>
            <li>{getValueByPath("serviceCouplesPage.whenToConsider.listItem6", "Rozważania o rozstaniu lub chęci poprawy jakości związku")}</li>
          </ul>
          <p className="font-sans text-muted-foreground leading-relaxed text-balance text-sm">
            {getValueByPath("serviceCouplesPage.whenToConsider.outro", "Terapia par może być również formą profilaktyki, pomagającą wzmocnić fundamenty związku i lepiej przygotować się na przyszłe wyzwania.")}
          </p>
        </AnimatedElement>
      </div>
      
      <AnimatedElement type="section" className="mb-12 md:mb-16">
        <h2 className="section-subtitle text-center">
          {getValueByPath("serviceCouplesPage.goals.title", "Główne cele terapii par:")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          {featuresConfig.map((feature, i) => (
            <AnimatedElement type="item" delay={i * 0.1} key={i}>
              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border/50 text-center flex flex-col items-center h-full">
                <div className="p-3 bg-primary/10 rounded-full mb-4">{feature.icon}</div>
                <h3 className="text-lg font-serif font-medium text-foreground mb-2">
                  {getValueByPath(feature.titleKey)}
                </h3>
                <p className="font-sans text-sm text-muted-foreground flex-grow text-balance">
                  {getValueByPath(feature.descriptionKey)}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="mb-12 md:mb-16 bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border/50">
        <h2 className="section-subtitle">
          {getValueByPath("serviceCouplesPage.process.title", "Przebieg terapii par")}
        </h2>
        <div className="font-sans text-muted-foreground space-y-4 leading-relaxed text-balance">
          <p>
            <strong>{getValueByPath("serviceCouplesPage.process.consultations.title", "Konsultacje wstępne:")}</strong> {getValueByPath("serviceCouplesPage.process.consultations.description", "Pierwsze spotkania (zwykle 1-2) odbywają się z obojgiem partnerów. Służą omówieniu problemów, oczekiwań oraz ustaleniu wspólnych celów terapeutycznych.")}
          </p>
          <p>
            <strong>{getValueByPath("serviceCouplesPage.process.sessions.title", "Sesje terapeutyczne:")}</strong> {getValueByPath("serviceCouplesPage.process.sessions.description", "Regularne spotkania pary z terapeutą, trwające zazwyczaj 60-90 minut, odbywające się co 1-2 tygodnie. Terapeuta pełni rolę bezstronnego moderatora.")}
          </p>
          <p>
            <strong>{getValueByPath("serviceCouplesPage.process.methods.title", "Metody pracy:")}</strong> {getValueByPath("serviceCouplesPage.process.methods.description", "Terapia par wykorzystuje różnorodne techniki, m.in. ćwiczenia komunikacyjne, psychoedukację, pracę nad zmianą wzorców myślenia i zachowania.")}
          </p>
          <p>
            <strong>{getValueByPath("serviceCouplesPage.process.commitment.title", "Zaangażowanie obojga partnerów:")}</strong> {getValueByPath("serviceCouplesPage.process.commitment.description", "Skuteczność terapii par w dużej mierze zależy od motywacji i zaangażowania obojga partnerów w proces zmiany.")}
          </p>
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="text-center">
        <p className="font-serif text-xl md:text-2xl text-primary/90 mb-8 text-balance">
          {getValueByPath("serviceCouplesPage.cta.text", "Jeśli chcecie wspólnie zadbać o Wasz związek i zbudować bardziej satysfakcjonującą relację, zapraszam na konsultację.")}
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Link to="/kontakt">
            <span>{getValueByPath("serviceCouplesPage.cta.buttonText", "Umówcie się na spotkanie")}</span>
          </Link>
        </Button>
      </AnimatedElement>
    </motion.div>
  );
};

export default ServiceCouplesPage;