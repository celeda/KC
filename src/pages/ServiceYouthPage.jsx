import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/shared/AnimatedElement";
import { Smile, School, ShieldAlert, Brain, MessageSquare, UserCheck, ThumbsUp, Zap, Users } from "lucide-react";
import useContent from '@/hooks/useContent';

const ServiceYouthPage = () => {
  const { getValueByPath, isLoading } = useContent();

  const commonProblemsConfig = [
    { textKey: "serviceYouthPage.problems.items[0].text", icon: <Users size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { textKey: "serviceYouthPage.problems.items[1].text", icon: <School size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { textKey: "serviceYouthPage.problems.items[2].text", icon: <ShieldAlert size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { textKey: "serviceYouthPage.problems.items[3].text", icon: <Brain size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { textKey: "serviceYouthPage.problems.items[4].text", icon: <Smile size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { textKey: "serviceYouthPage.problems.items[5].text", icon: <MessageSquare size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { textKey: "serviceYouthPage.problems.items[6].text", icon: <Zap size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { textKey: "serviceYouthPage.problems.items[7].text", icon: <ShieldAlert size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { textKey: "serviceYouthPage.problems.items[8].text", icon: <UserCheck size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { textKey: "serviceYouthPage.problems.items[9].text", icon: <Zap size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
  ];

  const benefitsConfig = [
    {
      icon: <UserCheck size={24} className="text-primary mr-3 mt-1 flex-shrink-0" />,
      titleKey: "serviceYouthPage.benefits.items[0].title",
      descriptionKey: "serviceYouthPage.benefits.items[0].description",
    },
    {
      icon: <ThumbsUp size={24} className="text-primary mr-3 mt-1 flex-shrink-0" />,
      titleKey: "serviceYouthPage.benefits.items[1].title",
      descriptionKey: "serviceYouthPage.benefits.items[1].description",
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
            <Smile size={80} className="text-primary opacity-80" />
          </div>
          <h1 className="section-title">
            {getValueByPath("serviceYouthPage.main.title", "Psychoterapia Młodzieży")}
          </h1>
          <p className="text-lg md:text-xl font-sans text-muted-foreground max-w-3xl mx-auto text-balance">
            {getValueByPath("serviceYouthPage.main.subtitle", "Okres dojrzewania to czas wielu wyzwań i intensywnych zmian. Psychoterapia młodzieży oferuje wsparcie w radzeniu sobie z trudnościami emocjonalnymi, społecznymi i adaptacyjnymi.")}
          </p>
        </section>
      </AnimatedElement>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16 items-center">
        <AnimatedElement type="image" className="order-2 md:order-1">
          <img  alt="Nastolatek w zamyśleniu, w jasnym otoczeniu" className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover border-4 border-background" src="https://images.unsplash.com/photo-1580130379628-e709e769d498?q=80&w=1920&auto=format&fit=crop" />
        </AnimatedElement>
        <AnimatedElement type="text" delay={0.1} className="order-1 md:order-2">
          <h2 className="section-subtitle">
            {getValueByPath("serviceYouthPage.support.title", "Wsparcie dla Młodych Ludzi")}
          </h2>
          <p className="font-sans text-muted-foreground mb-6 leading-relaxed text-balance">
            {getValueByPath("serviceYouthPage.support.paragraph1", "Psychoterapia młodzieży (zazwyczaj od 12./13. do 18. roku życia) to forma pomocy dostosowana do specyficznych potrzeb tego okresu. Celem jest stworzenie bezpiecznej przestrzeni, w której młody człowiek może otwarcie mówić o swoich problemach.")}
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed text-balance">
            {getValueByPath("serviceYouthPage.support.paragraph2", "Terapeuta pomaga nastolatkowi lepiej zrozumieć siebie, rozwijać umiejętności radzenia sobie ze stresem i trudnymi emocjami, a także budować zdrowe relacje.")}
          </p>
        </AnimatedElement>
      </div>

      <AnimatedElement type="section" className="mb-12 md:mb-16">
        <h2 className="section-subtitle text-center">
          {getValueByPath("serviceYouthPage.problems.title", "Typowe problemy, z którymi zgłasza się młodzież:")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5 mt-8 font-sans text-muted-foreground max-w-5xl mx-auto">
          {commonProblemsConfig.map((problem, i) => (
             <AnimatedElement type="item" delay={i * 0.05} key={i}>
              <div className="bg-card p-4 rounded-md shadow-sm hover:shadow-md transition-shadow border border-border/50 flex items-center">
                {problem.icon}
                <span className="text-balance text-sm">
                  {getValueByPath(problem.textKey)}
                </span>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="mb-12 md:mb-16 bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border/50">
        <h2 className="section-subtitle">
          {getValueByPath("serviceYouthPage.process.title", "Jak przebiega terapia młodzieży?")}
        </h2>
        <div className="font-sans text-muted-foreground space-y-4 leading-relaxed text-balance">
          <p>
            <strong>{getValueByPath("serviceYouthPage.process.consultation.title", "Pierwsza konsultacja:")}</strong> {getValueByPath("serviceYouthPage.process.consultation.description", "Zazwyczaj odbywa się z rodzicami/opiekunami oraz nastolatkiem. Celem jest zebranie informacji o problemie i ustalenie zasad współpracy.")}
          </p>
          <p>
            <strong>{getValueByPath("serviceYouthPage.process.sessions.title", "Indywidualne sesje z nastolatkiem:")}</strong> {getValueByPath("serviceYouthPage.process.sessions.description", "Regularne spotkania (50 minut), podczas których terapeuta pracuje bezpośrednio z młodym człowiekiem, używając metod dostosowanych do jego wieku.")}
          </p>
          <p>
            <strong>{getValueByPath("serviceYouthPage.process.parentsCooperation.title", "Współpraca z rodzicami/opiekunami:")}</strong> {getValueByPath("serviceYouthPage.process.parentsCooperation.description", "Okresowe spotkania z rodzicami w celu omówienia postępów i udzielenia wskazówek, z poszanowaniem prywatności nastolatka.")}
          </p>
          <p>
            <strong>{getValueByPath("serviceYouthPage.process.confidentiality.title", "Poufność:")}</strong> {getValueByPath("serviceYouthPage.process.confidentiality.description", "Sesje terapeutyczne są objęte tajemnicą zawodową, tworząc atmosferę zaufania.")}
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {benefitsConfig.map((benefit, i) => (
              <AnimatedElement type="item" delay={0.1 + i * 0.1} key={i}>
                <div className="flex items-start p-4 bg-primary/5 rounded-md border border-primary/20 h-full">
                    {benefit.icon}
                    <div>
                        <h3 className="font-serif text-md text-foreground mb-1">
                          {getValueByPath(benefit.titleKey)}
                        </h3>
                        <p className="text-xs text-muted-foreground text-balance">
                          {getValueByPath(benefit.descriptionKey)}
                        </p>
                    </div>
                </div>
              </AnimatedElement>
            ))}
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="text-center">
        <p className="font-serif text-xl md:text-2xl text-primary/90 mb-8 text-balance">
          {getValueByPath("serviceYouthPage.cta.text", "Jeśli jesteś rodzicem zaniepokojonym samopoczuciem swojego dziecka, lub nastolatkiem szukającym wsparcia, zapraszam do kontaktu.")}
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Link to="/kontakt">
            <span>{getValueByPath("serviceYouthPage.cta.buttonText", "Skontaktuj się")}</span>
          </Link>
        </Button>
      </AnimatedElement>
    </motion.div>
  );
};

export default ServiceYouthPage;