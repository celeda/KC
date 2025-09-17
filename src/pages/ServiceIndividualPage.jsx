import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, User, ShieldCheck, Smile, Brain, Users, MessageSquare } from "lucide-react";
import AnimatedElement from "@/components/shared/AnimatedElement";
import useContent from '@/hooks/useContent';

const ServiceIndividualPage = () => {
  const { getValueByPath, isLoading } = useContent();

  const areasOfHelpKeys = [
    "serviceIndividualPage.areas.items[0]",
    "serviceIndividualPage.areas.items[1]",
    "serviceIndividualPage.areas.items[2]",
    "serviceIndividualPage.areas.items[3]",
    "serviceIndividualPage.areas.items[4]",
    "serviceIndividualPage.areas.items[5]",
    "serviceIndividualPage.areas.items[6]",
    "serviceIndividualPage.areas.items[7]",
    "serviceIndividualPage.areas.items[8]",
    "serviceIndividualPage.areas.items[9]",
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
            <User size={80} className="text-primary opacity-80" />
          </div>
          <h1 className="section-title">
            {getValueByPath("serviceIndividualPage.main.title", "Psychoterapia Indywidualna")}
          </h1>
          <p className="text-lg md:text-xl font-sans text-muted-foreground max-w-3xl mx-auto text-balance">
            {getValueByPath("serviceIndividualPage.main.subtitle", "Indywidualne spotkania z terapeutą, skoncentrowane na Twoich osobistych potrzebach, trudnościach i celach. To bezpieczna przestrzeń do eksploracji siebie i pracy nad zmianą.")}
          </p>
        </section>
      </AnimatedElement>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16 items-center">
        <AnimatedElement type="image" className="order-2 md:order-1">
          <img  alt="Symbol indywidualnej terapii - spokojna osoba w ciepłym świetle" className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover border-4 border-background" src="https://images.unsplash.com/photo-1584460225699-f331649ead39?q=80&w=1920&auto=format&fit=crop" />
        </AnimatedElement>
        <AnimatedElement type="text" delay={0.1} className="order-1 md:order-2">
          <h2 className="section-subtitle">
            {getValueByPath("serviceIndividualPage.forWhom.title", "Dla kogo?")}
          </h2>
          <p className="font-sans text-muted-foreground mb-6 leading-relaxed text-balance">
            {getValueByPath("serviceIndividualPage.forWhom.paragraph1", "Psychoterapia indywidualna jest formą pomocy skierowaną do osób dorosłych oraz młodzieży (od 16. roku życia), które doświadczają różnego rodzaju trudności emocjonalnych, psychicznych lub interpersonalnych, a także dla tych, którzy pragną lepiej zrozumieć siebie i rozwijać swój potencjał.")}
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed text-balance">
            {getValueByPath("serviceIndividualPage.forWhom.paragraph2", "Niezależnie od tego, czy zmagasz się z konkretnym problemem, czy po prostu czujesz, że potrzebujesz wsparcia w swoim życiu – terapia indywidualna może być cennym doświadczeniem.")}
          </p>
        </AnimatedElement>
      </div>

      <AnimatedElement type="section" className="mb-12 md:mb-16">
        <h2 className="section-subtitle text-center">
          {getValueByPath("serviceIndividualPage.areas.title", "Obszary, w których mogę pomóc:")}
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 font-sans text-muted-foreground max-w-4xl mx-auto mt-8">
          {areasOfHelpKeys.map((key, i) => (
            <AnimatedElement type="item" delay={i * 0.05} key={i}>
               <li className="flex items-start p-3 bg-card rounded-md shadow-sm hover:shadow-md transition-shadow border border-border/50">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-balance text-sm">
                  {getValueByPath(key)}
                </span>
              </li>
            </AnimatedElement>
          ))}
        </ul>
      </AnimatedElement>

      <AnimatedElement type="section" className="mb-12 md:mb-16 bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border/50">
        <h2 className="section-subtitle">
          {getValueByPath("serviceIndividualPage.process.title", "Jak wygląda proces?")}
        </h2>
        <div className="font-sans text-muted-foreground space-y-5 leading-relaxed text-balance">
          <div className="flex items-start">
            <MessageSquare className="h-8 w-8 text-primary mr-4 mt-1 flex-shrink-0 opacity-80" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                {getValueByPath("serviceIndividualPage.process.consultations.title", "Pierwsze konsultacje (1-3 spotkania)")}
              </h3>
              <p>
                {getValueByPath("serviceIndividualPage.process.consultations.description", "Służą wzajemnemu poznaniu się, omówieniu trudności oraz ustaleniu celów terapii. To także czas na podjęcie decyzji o dalszej współpracy.")}
              </p>
            </div>
          </div>
           <div className="flex items-start">
            <ShieldCheck className="h-8 w-8 text-primary mr-4 mt-1 flex-shrink-0 opacity-80" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                {getValueByPath("serviceIndividualPage.process.sessions.title", "Sesje terapeutyczne")}
              </h3>
              <p>
                {getValueByPath("serviceIndividualPage.process.sessions.description", "Regularne spotkania (zazwyczaj raz w tygodniu) trwające 50 minut. Pracujemy nad realizacją ustalonych celów poprzez rozmowę i techniki terapeutyczne.")}
              </p>
            </div>
          </div>
          <p>
            <strong>{getValueByPath("serviceIndividualPage.process.duration.title", "Czas trwania terapii:")}</strong> {getValueByPath("serviceIndividualPage.process.duration.description", "Jest indywidualny i zależy od rodzaju problemu oraz potrzeb klienta. Może to być terapia krótkoterminowa (kilka-kilkanaście spotkań) lub długoterminowa.")}
          </p>
          <p>
            <strong>{getValueByPath("serviceIndividualPage.process.ending.title", "Zakończenie terapii:")}</strong> {getValueByPath("serviceIndividualPage.process.ending.description", "Decyzja o zakończeniu terapii jest podejmowana wspólnie, gdy cele zostaną osiągnięte lub gdy poczujesz gotowość na samodzielne radzenie sobie z wyzwaniami.")}
          </p>
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="text-center parallax-bg py-16 rounded-lg shadow-inner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534531234200-9539f04220f8?q=80&w=1920&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-background/70 dark:bg-background/80 backdrop-blur-sm rounded-lg"></div>
        <div className="relative z-10 max-w-xl mx-auto px-4">
          <p className="font-serif text-xl md:text-2xl text-foreground/90 dark:text-foreground/80 mb-8 text-balance">
            {getValueByPath("serviceIndividualPage.cta.text", "Jeśli czujesz, że psychoterapia indywidualna może być dla Ciebie pomocna, zapraszam do kontaktu. Razem możemy odkryć Twoją drogę do lepszego samopoczucia.")}
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link to="/kontakt">
              <span>{getValueByPath("serviceIndividualPage.cta.buttonText", "Umów się na konsultację")}</span>
            </Link>
          </Button>
        </div>
      </AnimatedElement>
    </motion.div>
  );
};

export default ServiceIndividualPage;