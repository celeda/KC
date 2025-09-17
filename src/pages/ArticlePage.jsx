import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare, BookOpen } from "lucide-react";
import AnimatedElement from "@/components/shared/AnimatedElement";
import useContent from '@/hooks/useContent';

const ArticlePage = () => {
  const { getValueByPath, isLoading } = useContent();

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
        <header className="text-center mb-12 md:mb-16">
          <BookOpen className="h-16 w-16 text-primary mx-auto mb-4 opacity-80" />
          <h1 className="section-title">
            {getValueByPath("articlePage.header.title", "Psychoterapia czy konsultacja psychologiczna – co wybrać?")}
          </h1>
          <p className="text-sm font-sans text-muted-foreground">
            {getValueByPath("articlePage.header.date", "Data publikacji: 27 maja 2025")}
          </p>
        </header>
      </AnimatedElement>

      <motion.article 
        className="max-w-3xl mx-auto font-sans text-muted-foreground leading-relaxed space-y-7 text-balance"
      >
        <AnimatedElement type="text" delay={0.1}>
          <p>
            {getValueByPath("articlePage.intro.paragraph1", "Często osoby poszukujące wsparcia psychologicznego zastanawiają się, jaka forma pomocy będzie dla nich najbardziej odpowiednia. Dwa najczęściej pojawiające się terminy to konsultacja psychologiczna i psychoterapia. Choć oba dotyczą zdrowia psychicznego i są prowadzone przez specjalistów, różnią się celem, zakresem i czasem trwania. Zrozumienie tych różnic może pomóc w podjęciu świadomej decyzji.")}
          </p>
        </AnimatedElement>

        <AnimatedElement type="section" delay={0.2} className="bg-card p-6 md:p-8 rounded-lg shadow-md border border-border/50">
          <h2 className="text-xl md:text-2xl font-serif font-medium text-primary mt-2 mb-4 flex items-center">
            <HelpCircle className="h-6 w-6 mr-3 flex-shrink-0" />
            {getValueByPath("articlePage.consultation.title", "Konsultacja psychologiczna – pierwsze spotkanie z problemem")}
          </h2>
          <div className="space-y-3 text-sm">
            <p>
              {getValueByPath("articlePage.consultation.paragraph1", "Konsultacja psychologiczna to zazwyczaj jedno lub kilka (do 3-5) spotkań z psychologiem. Jej głównym celem jest wstępne rozpoznanie problemu, z którym zgłasza się dana osoba. Podczas konsultacji psycholog zbiera wywiad, stara się zrozumieć naturę trudności, ich nasilenie oraz wpływ na codzienne funkcjonowanie.")}
            </p>
            <p>
              {getValueByPath("articlePage.consultation.paragraph2", "Konsultacja może być pomocna, gdy:")}
            </p>
            <ul className="list-disc list-inside ml-4 my-2 space-y-1.5 text-muted-foreground/90">
              <li>{getValueByPath("articlePage.consultation.listItem1", "Nie jesteś pewien/pewna, czy potrzebujesz psychoterapii.")}</li>
              <li>{getValueByPath("articlePage.consultation.listItem2", "Chcesz uzyskać poradę w konkretnej, doraźnej sprawie.")}</li>
              <li>{getValueByPath("articlePage.consultation.listItem3", "Potrzebujesz wsparcia w kryzysie i chcesz poznać dostępne formy pomocy.")}</li>
              <li>{getValueByPath("articlePage.consultation.listItem4", "Chcesz uzyskać diagnozę psychologiczną lub opinię.")}</li>
            </ul>
            <p>
              {getValueByPath("articlePage.consultation.paragraph3", "Efektem konsultacji może być zalecenie podjęcia psychoterapii, skierowanie do innego specjalisty, udzielenie konkretnych wskazówek lub psychoedukacja. Konsultacja sama w sobie rzadko prowadzi do głębokiej i trwałej zmiany, ale jest ważnym pierwszym krokiem.")}
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement type="section" delay={0.3} className="bg-card p-6 md:p-8 rounded-lg shadow-md border border-border/50">
          <h2 className="text-xl md:text-2xl font-serif font-medium text-primary mt-2 mb-4 flex items-center">
            <MessageSquare className="h-6 w-6 mr-3 flex-shrink-0" />
            {getValueByPath("articlePage.psychotherapy.title", "Psychoterapia – proces leczenia i rozwoju")}
          </h2>
          <div className="space-y-3 text-sm">
            <p>
              {getValueByPath("articlePage.psychotherapy.paragraph1", "Psychoterapia to regularny, długoterminowy proces leczenia zaburzeń psychicznych, rozwiązywania problemów emocjonalnych oraz wspierania rozwoju osobistego. Opiera się na relacji terapeutycznej – bezpiecznej i pełnej zaufania więzi między klientem a psychoterapeutą.")}
            </p>
            <p>
              {getValueByPath("articlePage.psychotherapy.paragraph2", "Psychoterapia jest wskazana, gdy:")}
            </p>
            <ul className="list-disc list-inside ml-4 my-2 space-y-1.5 text-muted-foreground/90">
              <li>{getValueByPath("articlePage.psychotherapy.listItem1", "Doświadczasz długotrwałych trudności emocjonalnych.")}</li>
              <li>{getValueByPath("articlePage.psychotherapy.listItem2", "Masz problemy w relacjach z innymi ludźmi.")}</li>
              <li>{getValueByPath("articlePage.psychotherapy.listItem3", "Chcesz przepracować trudne doświadczenia z przeszłości.")}</li>
              <li>{getValueByPath("articlePage.psychotherapy.listItem4", "Pragniesz lepiej zrozumieć siebie, swoje wzorce myślenia i zachowania.")}</li>
              <li>{getValueByPath("articlePage.psychotherapy.listItem5", "Chcesz wprowadzić trwałe zmiany w swoim życiu i poprawić jego jakość.")}</li>
            </ul>
            <p>
              {getValueByPath("articlePage.psychotherapy.paragraph3", "Psychoterapia może być prowadzona w różnych nurtach, a wybór odpowiedniego podejścia zależy od specyfiki problemu. Sesje odbywają się zazwyczaj raz w tygodniu i trwają 50 minut. Czas trwania procesu jest indywidualny.")}
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement type="text" delay={0.4}>
          <h2 className="text-xl md:text-2xl font-serif font-medium text-primary mt-8 mb-3">
            {getValueByPath("articlePage.summary.title", "Podsumowanie – co wybrać?")}
          </h2>
          <p>
            {getValueByPath("articlePage.summary.paragraph1", "Decyzja o wyborze między konsultacją a psychoterapią zależy od Twoich indywidualnych potrzeb i celów.")}
          </p>
          <ul className="list-disc list-inside ml-4 my-2 space-y-1.5">
            <li>{getValueByPath("articlePage.summary.listItem1", "Jeśli potrzebujesz doraźnej porady, wstępnego rozpoznania problemu lub nie jesteś pewien, jakiej pomocy potrzebujesz – konsultacja psychologiczna będzie dobrym początkiem.")}</li>
            <li>{getValueByPath("articlePage.summary.listItem2", "Jeśli zmagasz się z długotrwałymi trudnościami, chcesz głębiej zrozumieć siebie i wprowadzić trwałe zmiany – warto rozważyć psychoterapię.")}</li>
          </ul>
          <p className="mt-2">
            {getValueByPath("articlePage.summary.paragraph2", "Pamiętaj, że często konsultacja psychologiczna jest pierwszym etapem przed podjęciem psychoterapii. Psycholog podczas konsultacji może pomóc Ci ocenić, czy psychoterapia jest dla Ciebie wskazana.")}
          </p>
        </AnimatedElement>

        <AnimatedElement type="section" delay={0.5} className="mt-12 text-center">
          <p className="font-serif text-lg text-primary/90 mb-6 text-balance">
            {getValueByPath("articlePage.cta.text", "Jeśli masz wątpliwości lub pytania, zapraszam do kontaktu. Chętnie pomogę Ci wybrać najlepszą formę wsparcia.")}
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link to="/kontakt">
              <span>{getValueByPath("articlePage.cta.buttonText", "Skontaktuj się")}</span>
            </Link>
          </Button>
        </AnimatedElement>
      </motion.article>
    </motion.div>
  );
};

export default ArticlePage;