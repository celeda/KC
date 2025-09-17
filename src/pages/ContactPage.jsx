import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import AnimatedElement from "@/components/shared/AnimatedElement";
import useContent from '@/hooks/useContent';

const ContactPage = () => {
  const { toast } = useToast();
  const { getValueByPath, isLoading } = useContent();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Formularz nieaktywny",
      description: "Proszę o kontakt bezpośrednio na adres email podany obok. Dziękuję!",
      variant: "default",
    });
  };

  const contactDetailsConfig = [
    { icon: <Mail className="h-5 w-5 text-primary" />, labelKey: "contactPage.details.email.label", valueKey: "contactPage.details.email.value", hrefKey: "contactPage.details.email.href" },
    { icon: <Phone className="h-5 w-5 text-primary" />, labelKey: "contactPage.details.phone.label", valueKey: "contactPage.details.phone.value", hrefKey: "contactPage.details.phone.href" },
    { icon: <MapPin className="h-5 w-5 text-primary" />, labelKey: "contactPage.details.address.label", valueKey: "contactPage.details.address.value" },
    { icon: <Clock className="h-5 w-5 text-primary" />, labelKey: "contactPage.details.hours.label", valueKey: "contactPage.details.hours.value" },
  ];

  if (isLoading) {
    return <div className="page-container text-center py-20">Ładowanie treści...</div>;
  }

  return (
    <div className="page-container animate-fadeIn pt-28 md:pt-36">
      <AnimatedElement type="title">
        <section className="text-center mb-12 md:mb-16">
          <h1 className="section-title">
            {getValueByPath("contactPage.main.title", "Kontakt")}
          </h1>
          <p className="text-lg md:text-xl font-sans text-muted-foreground max-w-2xl mx-auto text-balance">
            {getValueByPath("contactPage.main.subtitle", "Masz pytania lub chcesz umówić się na konsultację? Jestem tutaj, aby pomóc. Skorzystaj z poniższych danych lub wypełnij formularz.")}
          </p>
        </section>
      </AnimatedElement>

      <div className="grid lg:grid-cols-5 gap-10 md:gap-16">
        <AnimatedElement type="section" delay={0.1} className="lg:col-span-2 bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50">
          <h2 className="section-subtitle text-primary mb-6 text-2xl">
            {getValueByPath("contactPage.details.title", "Dane kontaktowe")}
          </h2>
          <div className="space-y-5 font-sans">
            {contactDetailsConfig.map((item, index) => {
              const href = getValueByPath(item.hrefKey);
              return (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <div className="flex-shrink-0 mr-3.5 mt-1 p-2 bg-primary/10 rounded-full">{item.icon}</div>
                  <div>
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider">
                      {getValueByPath(item.labelKey)}
                    </span>
                    {href ? (
                      <a href={href} className="text-foreground hover:text-primary transition-colors text-sm md:text-base">
                        {getValueByPath(item.valueKey)}
                      </a>
                    ) : (
                      <span className="text-foreground text-sm md:text-base">
                        {getValueByPath(item.valueKey)}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-8">
             <h3 className="text-xl font-serif text-foreground mb-3">
               {getValueByPath("contactPage.map.title", "Lokalizacja Gabinetu")}
             </h3>
             <div className="aspect-video rounded-lg overflow-hidden shadow-md border border-border/50">
                <iframe 
                    src="https://www.openstreetmap.org/export/embed.html?bbox=20.99,52.22,21.03,52.24&layer=mapnik&marker=52.23,21.01" 
                    className="w-full h-full border-0"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa lokalizacji gabinetu"
                ></iframe>
             </div>
          </div>
        </AnimatedElement>

        <AnimatedElement type="section" delay={0.2} className="lg:col-span-3 bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50">
          <h2 className="section-subtitle text-primary mb-6 text-2xl">
            {getValueByPath("contactPage.form.title", "Napisz do mnie")}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5 font-sans">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name" className="text-foreground text-sm">
                  <span>{getValueByPath("contactPage.form.nameLabel", "Imię i nazwisko")}</span>
                </Label>
                <Input type="text" id="name" name="name" required className="mt-1.5 bg-background border-border focus:ring-primary focus:border-primary placeholder:text-muted-foreground/70" placeholder="Twoje imię i nazwisko" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground text-sm">
                  <span>{getValueByPath("contactPage.form.emailLabel", "Adres email")}</span>
                </Label>
                <Input type="email" id="email" name="email" required className="mt-1.5 bg-background border-border focus:ring-primary focus:border-primary placeholder:text-muted-foreground/70" placeholder="twoj@email.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground text-sm">
                <span>{getValueByPath("contactPage.form.messageLabel", "Wiadomość")}</span>
              </Label>
              <Textarea id="message" name="message" rows={6} required className="mt-1.5 bg-background border-border focus:ring-primary focus:border-primary placeholder:text-muted-foreground/70" placeholder="Twoja wiadomość..." />
            </div>
            <div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <span>{getValueByPath("contactPage.form.buttonText", "Wyślij wiadomość")}</span> <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
          <p className="mt-10 font-serif text-lg text-center text-primary/80">
            {getValueByPath("contactPage.form.signature", "Z ciepłem,<br />Kasia").split("<br />").map((line, i) => <React.Fragment key={i}>{line}{i < getValueByPath("contactPage.form.signature", "Z ciepłem,<br />Kasia").split("<br />").length - 1 && <br />}</React.Fragment>)}
          </p>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default ContactPage;