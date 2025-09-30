import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, ChevronDown, Users, Heart, Brain, HeartHandshake as Handshake } from 'lucide-react';
import AnimatedElement from "@/components/shared/AnimatedElement";
import useContent from '@/hooks/useContent';

const HomePage = () => {
  const { getValueByPath, isLoading } = useContent();
  const { scrollYProgress } = useScroll();
  const heroImageScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.97]);
  const heroImageOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.6]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.1], ["0%", "-30%"]);

  const mainImageUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1920&auto=format&fit=crop";
  const aboutMeImageUrl = "https://images.unsplash.com/photo-1594824804732-5f8fcaf26be1?q=80&w=1920&auto=format&fit=crop";

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      titleKey: "homePage.services.items[0].title",
      descriptionKey: "homePage.services.items[0].description",
      linkTextKey: "homePage.services.items[0].linkText",
      icon: <Handshake size={48} className="text-primary group-hover:scale-110 transition-transform" />,
      link: "/uslugi/psychoterapia-indywidualna",
      bgColor: "bg-card",
      textColor: "text-primary"
    },
    {
      titleKey: "homePage.services.items[1].title",
      descriptionKey: "homePage.services.items[1].description",
      linkTextKey: "homePage.services.items[1].linkText",
      icon: <Users size={48} className="text-primary group-hover:scale-110 transition-transform" />,
      link: "/uslugi/psychoterapia-par",
      bgColor: "bg-card",
      textColor: "text-primary"
    },
    {
      titleKey: "homePage.services.items[2].title",
      descriptionKey: "homePage.services.items[2].description",
      linkTextKey: "homePage.services.items[2].linkText",
      icon: <Heart size={48} className="text-primary group-hover:scale-110 transition-transform" />, 
      link: "/uslugi/psychoterapia-indywidualna", 
      bgColor: "bg-card",
      textColor: "text-primary"
    },
    {
      titleKey: "homePage.services.items[3].title",
      descriptionKey: "homePage.services.items[3].description",
      linkTextKey: "homePage.services.items[3].linkText",
      icon: <Brain size={48} className="text-primary group-hover:scale-110 transition-transform" />,
      link: "/uslugi/psychoterapia-indywidualna",
      bgColor: "bg-card",
      textColor: "text-primary"
    },
  ];

  if (isLoading) {
    return <div className="page-container text-center py-20">Ładowanie treści...</div>;
  }

  return (
    <div className="animate-fadeIn">
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background dark:from-background dark:via-secondary/10 dark:to-background">
        <div className="absolute inset-0">
          <motion.img
            src={mainImageUrl}
            alt="Katarzyna Celeda - profesjonalne, ciepłe zdjęcie portretowe"
            className="object-cover w-full h-full object-center sm:object-[center_30%] md:object-[center_25%]"
            style={{
              scale: heroImageScale,
              opacity: heroImageOpacity,
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent dark:from-background dark:via-background/80"></div>
        </div>

        <div className="relative z-10 page-container pt-32 pb-16 md:pt-40 md:pb-20 text-center flex flex-col items-center justify-end flex-grow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            style={{ opacity: heroTextOpacity, y: heroTextY }}
            className="bg-background/80 dark:bg-background/70 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-foreground leading-tight text-balance mb-4">
              {getValueByPath("homePage.hero.title", "Katarzyna Celeda")}
            </h1>
            <p className="text-lg md:text-xl font-sans text-muted-foreground mb-8 text-balance">
              {getValueByPath("homePage.hero.subtitle", "Psychoterapeutka. Twoja przestrzeń do rozmowy, zrozumienia i wzrostu. Odkryjmy razem Twoją ścieżkę.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Link to="/o-mnie">
                  <span>{getValueByPath("homePage.hero.button1Text", "Poznaj mnie")}</span> <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:border-primary/70 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <Link to="/kontakt">
                  <span>{getValueByPath("homePage.hero.button2Text", "Umów spotkanie")}</span>
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.button
            onClick={scrollToServices}
            className="mt-12 md:mt-16 text-muted-foreground hover:text-primary transition-colors animate-bounce"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
            aria-label="Przewiń do usług"
          >
            <ChevronDown className="h-10 w-10" />
          </motion.button>
        </div>
      </section>

      <section id="services-section" className="py-16 md:py-24 bg-background">
        <div className="page-container">
          <AnimatedElement type="title">
            <h2 className="section-title">
              {getValueByPath("homePage.services.title", "W czym mogę być pomocna?")}
            </h2>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedElement type="item" delay={index * 0.1} key={index}>
                <Link to={service.link} className={`block p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 ${service.bgColor} border border-border/50 group`}>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-5 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className={`text-lg md:text-xl font-serif font-medium mb-3 ${service.textColor}`}>
                      {getValueByPath(service.titleKey)}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground mb-5 flex-grow">
                      {getValueByPath(service.descriptionKey)}
                    </p>
                    <span className={`inline-flex items-center font-sans text-sm ${service.textColor} group-hover:underline`}>
                      <span>{getValueByPath(service.linkTextKey, "Czytaj więcej")}</span> <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/50">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedElement type="image" className="relative">
              <div className="absolute -top-3 -left-3 w-24 h-24 bg-primary/10 rounded-full animate-subtleFloat opacity-80 dark:opacity-60 -z-10"></div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border-4 border-primary/20 rounded-full animate-subtleFloat animation-delay-1000 opacity-80 dark:opacity-60 -z-10"></div>
              <img  alt="Katarzyna Celeda - zdjęcie portretowe, przyjazne i profesjonalne" className="rounded-lg shadow-xl w-full h-auto max-h-[550px] object-cover relative z-10" src={aboutMeImageUrl} />
            </AnimatedElement>
            <AnimatedElement type="text" delay={0.2}>
              <h2 className="section-subtitle text-left">
                {getValueByPath("homePage.aboutMe.title", "Poznajmy się bliżej")}
              </h2>
              <p className="font-sans text-muted-foreground mb-6 leading-relaxed text-balance">
                {getValueByPath("homePage.aboutMe.paragraph1", "Psychoterapia to dla mnie spotkanie – żywe, autentyczne, czasem trudne, ale zawsze pełne sensu. Zależy mi, by ta przestrzeń mogła służyć temu, co pojawia się tutaj, a nie temu, co myślę, z góry zakładam.")}
              </p>
              <p className="font-sans text-muted-foreground mb-8 leading-relaxed text-balance">
                {getValueByPath("homePage.aboutMe.paragraph2", "Pracuję z osobami, które doświadczają kryzysu, straty, trudności rozwojowych. Ale też z tymi, którzy po prostu chcą lepiej poznać i zrozumieć siebie.")}
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Link to="/o-mnie">
                  <span>{getValueByPath("homePage.aboutMe.buttonText", "Moja filozofia pracy")}</span> <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-primary/0 dark:from-primary/2 dark:via-transparent dark:to-transparent">
         <div className="page-container text-center">
          <AnimatedElement type="title">
            <Zap className="h-16 w-16 text-primary mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6 text-balance">
              {getValueByPath("homePage.cta.title", "Zrób pierwszy krok ku zmianie")}
            </h2>
            <p className="text-lg font-sans text-muted-foreground max-w-xl mx-auto mb-10 text-balance">
              {getValueByPath("homePage.cta.subtitle", "Niezależnie od tego, gdzie jesteś na swojej drodze, zasługujesz na wsparcie. Skontaktuj się, aby dowiedzieć się więcej o tym, jak możemy razem pracować.")}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link to="/kontakt">
                <span>{getValueByPath("homePage.cta.buttonText", "Umów bezpłatną konsultację wstępną")}</span>
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default HomePage;