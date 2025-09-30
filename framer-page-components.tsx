// Framer Page Components - Converted from React
// These are the main page layouts converted for Framer

import { addPropertyControls, ControlType } from "framer"

// ===== HOME PAGE COMPONENT =====
export function HomePage(props) {
    const {
        heroTitle,
        heroSubtitle,
        servicesTitle,
        aboutTitle,
        aboutText1,
        aboutText2,
        ctaTitle,
        ctaSubtitle,
        ...rest
    } = props

    const services = [
        {
            icon: "🤝",
            title: "Psychoterapia indywidualna",
            description: "Dla osób dorosłych i młodzieży. Praca nad osobistymi trudnościami, rozwojem i zrozumieniem siebie.",
            linkText: "Czytaj więcej"
        },
        {
            icon: "👥",
            title: "Psychoterapia par i relacji",
            description: "Wsparcie dla par w kryzysach, problemach komunikacyjnych i budowaniu zdrowych relacji.",
            linkText: "Czytaj więcej"
        },
        {
            icon: "💙",
            title: "Stany lękowe i depresyjne",
            description: "Pomoc w radzeniu sobie z lękiem, obniżonym nastrojem, stresem i wypaleniem.",
            linkText: "Czytaj więcej"
        },
        {
            icon: "🧠",
            title: "Traumatyczne doświadczenia",
            description: "Terapia skoncentrowana na przepracowaniu traumy i odzyskaniu równowagi psychicznej.",
            linkText: "Czytaj więcej"
        }
    ]

    const pageStyles = {
        width: "100%",
        minHeight: "100vh",
    }

    const servicesGridStyles = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "32px",
        padding: "0 20px",
        maxWidth: "1280px",
        margin: "0 auto",
    }

    const aboutSectionStyles = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        alignItems: "center",
        padding: "80px 20px",
        maxWidth: "1280px",
        margin: "0 auto",
    }

    const aboutImageStyles = {
        width: "100%",
        height: "550px",
        objectFit: "cover",
        borderRadius: "12px",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    }

    const aboutTextStyles = {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "16px",
        lineHeight: "1.6",
        color: "var(--muted-foreground)",
        marginBottom: "24px",
    }

    const ctaSectionStyles = {
        textAlign: "center",
        padding: "120px 20px",
        background: "linear-gradient(135deg, var(--primary-5), transparent, var(--primary-0))",
    }

    const ctaTitleStyles = {
        fontFamily: "Lora, serif",
        fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
        fontWeight: "500",
        color: "var(--foreground)",
        marginBottom: "24px",
        lineHeight: "1.3",
    }

    const ctaSubtitleStyles = {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "18px",
        color: "var(--muted-foreground)",
        maxWidth: "600px",
        margin: "0 auto 40px",
        lineHeight: "1.6",
    }

    return (
        <div style={pageStyles} {...rest}>
            {/* Hero Section */}
            <HeroSection
                title={heroTitle}
                subtitle={heroSubtitle}
                primaryButtonText="Poznaj mnie"
                secondaryButtonText="Umów spotkanie"
            />

            {/* Services Section */}
            <Section backgroundColor="var(--background)" paddingSize="large">
                <h2 style={{
                    fontFamily: "Lora, serif",
                    fontSize: "clamp(2.25rem, 5vw, 3rem)",
                    fontWeight: "600",
                    textAlign: "center",
                    marginBottom: "48px",
                    color: "var(--heading-color)"
                }}>
                    {servicesTitle}
                </h2>
                <div style={servicesGridStyles}>
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            linkText={service.linkText}
                        />
                    ))}
                </div>
            </Section>

            {/* About Section */}
            <Section backgroundColor="var(--secondary-30)" paddingSize="large">
                <div style={aboutSectionStyles}>
                    <img
                        src="https://images.unsplash.com/photo-1594824804732-5f8fcaf26be1?q=80&w=1920&auto=format&fit=crop"
                        alt="Katarzyna Celeda"
                        style={aboutImageStyles}
                    />
                    <div>
                        <h2 style={{
                            fontFamily: "Lora, serif",
                            fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                            fontWeight: "500",
                            marginBottom: "32px",
                            color: "var(--subheading-color)"
                        }}>
                            {aboutTitle}
                        </h2>
                        <p style={aboutTextStyles}>{aboutText1}</p>
                        <p style={aboutTextStyles}>{aboutText2}</p>
                        <Button
                            text="Moja filozofia pracy"
                            variant="primary"
                            size="large"
                            icon="→"
                            iconPosition="right"
                        />
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <div style={ctaSectionStyles}>
                <div style={{ fontSize: "64px", marginBottom: "24px", opacity: 0.8 }}>⚡</div>
                <h2 style={ctaTitleStyles}>{ctaTitle}</h2>
                <p style={ctaSubtitleStyles}>{ctaSubtitle}</p>
                <Button
                    text="Umów bezpłatną konsultację wstępną"
                    variant="primary"
                    size="large"
                />
            </div>
        </div>
    )
}

HomePage.defaultProps = {
    heroTitle: "Katarzyna Celeda",
    heroSubtitle: "Psychoterapeutka. Twoja przestrzeń do rozmowy, zrozumienia i wzrostu. Odkryjmy razem Twoją ścieżkę.",
    servicesTitle: "W czym mogę być pomocna?",
    aboutTitle: "Poznajmy się bliżej",
    aboutText1: "Psychoterapia to dla mnie spotkanie – żywe, autentyczne, czasem trudne, ale zawsze pełne sensu. Zależy mi, by ta przestrzeń mogła służyć temu, co pojawia się tutaj, a nie temu, co myślę, z góry zakładam.",
    aboutText2: "Pracuję z osobami, które doświadczają kryzysu, straty, trudności rozwojowych. Ale też z tymi, którzy po prostu chcą lepiej poznać i zrozumieć siebie.",
    ctaTitle: "Zrób pierwszy krok ku zmianie",
    ctaSubtitle: "Niezależnie od tego, gdzie jesteś na swojej drodze, zasługujesz na wsparcie. Skontaktuj się, aby dowiedzieć się więcej o tym, jak możemy razem pracować.",
}

addPropertyControls(HomePage, {
    heroTitle: { type: ControlType.String, title: "Hero Title" },
    heroSubtitle: { type: ControlType.String, title: "Hero Subtitle" },
    servicesTitle: { type: ControlType.String, title: "Services Title" },
    aboutTitle: { type: ControlType.String, title: "About Title" },
    aboutText1: { type: ControlType.String, title: "About Text 1" },
    aboutText2: { type: ControlType.String, title: "About Text 2" },
    ctaTitle: { type: ControlType.String, title: "CTA Title" },
    ctaSubtitle: { type: ControlType.String, title: "CTA Subtitle" },
})

// ===== ABOUT PAGE COMPONENT =====
export function AboutPage(props) {
    const {
        pageTitle,
        pageSubtitle,
        experienceTitle,
        experienceText1,
        experienceText2,
        experienceText3,
        philosophyTitle,
        philosophyText1,
        philosophyText2,
        philosophyText3,
        philosophyText4,
        quoteText,
        quoteAuthor,
        ...rest
    } = props

    const pageHeaderStyles = {
        textAlign: "center",
        padding: "120px 20px 80px",
        maxWidth: "800px",
        margin: "0 auto",
    }

    const pageTitleStyles = {
        fontFamily: "Lora, serif",
        fontSize: "clamp(2.25rem, 5vw, 3rem)",
        fontWeight: "600",
        color: "var(--heading-color)",
        marginBottom: "24px",
    }

    const pageSubtitleStyles = {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
        color: "var(--muted-foreground)",
        lineHeight: "1.6",
    }

    const contentSectionStyles = {
        display: "grid",
        gridTemplateColumns: "2fr 3fr",
        gap: "64px",
        alignItems: "start",
        padding: "0 20px 80px",
        maxWidth: "1280px",
        margin: "0 auto",
    }

    const imageStyles = {
        width: "100%",
        height: "auto",
        borderRadius: "12px",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    }

    const sectionTitleStyles = {
        fontFamily: "Lora, serif",
        fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
        fontWeight: "500",
        color: "var(--subheading-color)",
        marginBottom: "24px",
    }

    const textStyles = {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "16px",
        lineHeight: "1.6",
        color: "var(--muted-foreground)",
        marginBottom: "16px",
    }

    const philosophyCardStyles = {
        backgroundColor: "var(--card)",
        padding: "48px",
        borderRadius: "12px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        border: "1px solid var(--border-50)",
        margin: "80px 20px",
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
    }

    const quoteStyles = {
        textAlign: "center",
        padding: "80px 20px",
        backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1920&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "12px",
        margin: "0 20px",
        position: "relative",
    }

    const quoteOverlayStyles = {
        position: "absolute",
        inset: 0,
        backgroundColor: "var(--background-60)",
        backdropFilter: "blur(4px)",
        borderRadius: "12px",
    }

    const quoteContentStyles = {
        position: "relative",
        zIndex: 10,
        maxWidth: "600px",
        margin: "0 auto",
        padding: "0 20px",
    }

    const quoteTextStyles = {
        fontFamily: "Lora, serif",
        fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
        fontStyle: "italic",
        color: "var(--foreground-90)",
        marginBottom: "12px",
        lineHeight: "1.5",
    }

    const quoteAuthorStyles = {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "16px",
        color: "var(--muted-foreground)",
    }

    return (
        <div style={{ paddingTop: "120px" }} {...rest}>
            {/* Page Header */}
            <div style={pageHeaderStyles}>
                <h1 style={pageTitleStyles}>{pageTitle}</h1>
                <p style={pageSubtitleStyles}>{pageSubtitle}</p>
            </div>

            {/* Experience Section */}
            <div style={contentSectionStyles}>
                <img
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1920&auto=format&fit=crop"
                    alt="Katarzyna Celeda"
                    style={imageStyles}
                />
                <div>
                    <h2 style={sectionTitleStyles}>{experienceTitle}</h2>
                    <p style={textStyles}>{experienceText1}</p>
                    <p style={textStyles}>{experienceText2}</p>
                    <p style={textStyles}>{experienceText3}</p>
                </div>
            </div>

            {/* Philosophy Section */}
            <div style={philosophyCardStyles}>
                <h2 style={{ ...sectionTitleStyles, textAlign: "center" }}>{philosophyTitle}</h2>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <p style={textStyles}>{philosophyText1}</p>
                    <p style={textStyles}>{philosophyText2}</p>
                    <p style={textStyles}>{philosophyText3}</p>
                    <p style={textStyles}>{philosophyText4}</p>
                </div>
            </div>

            {/* Quote Section */}
            <div style={quoteStyles}>
                <div style={quoteOverlayStyles}></div>
                <div style={quoteContentStyles}>
                    <div style={{ fontSize: "56px", marginBottom: "24px", opacity: 0.8 }}>📖</div>
                    <p style={quoteTextStyles}>{quoteText}</p>
                    <p style={quoteAuthorStyles}>{quoteAuthor}</p>
                </div>
            </div>
        </div>
    )
}

AboutPage.defaultProps = {
    pageTitle: "O Mnie",
    pageSubtitle: "Nazywam się Katarzyna Celeda. Jestem psycholożką i certyfikowaną psychoterapeutką. Moją pasją jest towarzyszenie ludziom w ich drodze do głębszego zrozumienia siebie i budowania bardziej satysfakcjonującego życia.",
    experienceTitle: "Wykształcenie i Doświadczenie",
    experienceText1: "Ukończyłam jednolite studia magisterskie z psychologii na Uniwersytecie Warszawskim. Następnie kontynuowałam naukę w Szkole Psychoterapii Poznawczo-Behawioralnej Uniwersytetu SWPS, zdobywając kompleksowe przygotowanie do prowadzenia terapii.",
    experienceText2: "Posiadam wieloletnie doświadczenie w pracy klinicznej, zdobywane m.in. w poradniach zdrowia psychicznego oraz na oddziałach szpitalnych. Regularnie uczestniczę w superwizjach oraz szkoleniach, aby stale podnosić swoje kwalifikacje i oferować pomoc na najwyższym poziomie.",
    experienceText3: "Jestem członkinią Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej (PTTPB). W swojej pracy kieruję się zasadami kodeksu etycznego psychoterapeuty.",
    philosophyTitle: "To, co mnie ukształtowało - Moja filozofia pracy",
    philosophyText1: "Wierzę, że każdy człowiek posiada wewnętrzne zasoby do radzenia sobie z trudnościami i rozwoju. Moja rola jako psychoterapeutki polega na stworzeniu bezpiecznej, pełnej akceptacji i zaufania przestrzeni, w której możliwe staje się odkrywanie tych zasobów.",
    philosophyText2: "Pracuję w nurcie integracyjnym, czerpiąc z różnych podejść terapeutycznych, głównie z terapii poznawczo-behawioralnej (CBT), terapii schematów oraz terapii akceptacji i zaangażowania (ACT). Pozwala mi to elastycznie dopasowywać metody pracy do indywidualnych potrzeb i problemów osoby zgłaszającej się po pomoc.",
    philosophyText3: "Kluczowe dla mnie jest budowanie autentycznej relacji terapeutycznej opartej na empatii, szacunku i współpracy. Wspólnie z klientem określamy cele terapii i krok po kroku dążymy do ich realizacji. Skupiam się nie tylko na redukcji objawów, ale przede wszystkim na zrozumieniu ich przyczyn i budowaniu trwałej zmiany.",
    philosophyText4: "Psychoterapia to dla mnie podróż w głąb siebie, która może prowadzić do większej samoświadomości, akceptacji, a w konsekwencji – do pełniejszego i bardziej satysfakcjonującego życia. To zaszczyt móc towarzyszyć w tej podróży.",
    quoteText: "\"Największym odkryciem mojego pokolenia jest to, że człowiek może zmienić swoje życie, zmieniając swoje nastawienie.\"",
    quoteAuthor: "- William James",
}

addPropertyControls(AboutPage, {
    pageTitle: { type: ControlType.String, title: "Page Title" },
    pageSubtitle: { type: ControlType.String, title: "Page Subtitle" },
    experienceTitle: { type: ControlType.String, title: "Experience Title" },
    experienceText1: { type: ControlType.String, title: "Experience Text 1" },
    experienceText2: { type: ControlType.String, title: "Experience Text 2" },
    experienceText3: { type: ControlType.String, title: "Experience Text 3" },
    philosophyTitle: { type: ControlType.String, title: "Philosophy Title" },
    philosophyText1: { type: ControlType.String, title: "Philosophy Text 1" },
    philosophyText2: { type: ControlType.String, title: "Philosophy Text 2" },
    philosophyText3: { type: ControlType.String, title: "Philosophy Text 3" },
    philosophyText4: { type: ControlType.String, title: "Philosophy Text 4" },
    quoteText: { type: ControlType.String, title: "Quote Text" },
    quoteAuthor: { type: ControlType.String, title: "Quote Author" },
})

// ===== CONTACT PAGE COMPONENT =====
export function ContactPage(props) {
    const {
        pageTitle,
        pageSubtitle,
        contactDetailsTitle,
        email,
        phone,
        address,
        hours,
        formTitle,
        ...rest
    } = props

    const pageStyles = {
        paddingTop: "120px",
        paddingBottom: "80px",
    }

    const headerStyles = {
        textAlign: "center",
        padding: "0 20px 80px",
        maxWidth: "800px",
        margin: "0 auto",
    }

    const contentGridStyles = {
        display: "grid",
        gridTemplateColumns: "2fr 3fr",
        gap: "64px",
        padding: "0 20px",
        maxWidth: "1280px",
        margin: "0 auto",
    }

    const cardStyles = {
        backgroundColor: "var(--card)",
        padding: "48px",
        borderRadius: "12px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        border: "1px solid var(--border-50)",
        height: "fit-content",
    }

    const contactItemStyles = {
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "32px",
    }

    const iconStyles = {
        marginRight: "16px",
        marginTop: "4px",
        padding: "8px",
        backgroundColor: "var(--primary-light)",
        borderRadius: "50%",
        fontSize: "20px",
    }

    const labelStyles = {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "12px",
        color: "var(--muted-foreground)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        marginBottom: "4px",
    }

    const valueStyles = {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "16px",
        color: "var(--foreground)",
        lineHeight: "1.5",
    }

    const formStyles = {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    }

    const inputStyles = {
        padding: "12px 16px",
        borderRadius: "8px",
        border: "1px solid var(--border)",
        backgroundColor: "var(--background)",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "16px",
        color: "var(--foreground)",
        outline: "none",
        transition: "border-color 0.3s ease",
    }

    const textareaStyles = {
        ...inputStyles,
        minHeight: "120px",
        resize: "vertical",
    }

    return (
        <div style={pageStyles} {...rest}>
            {/* Page Header */}
            <div style={headerStyles}>
                <h1 style={{
                    fontFamily: "Lora, serif",
                    fontSize: "clamp(2.25rem, 5vw, 3rem)",
                    fontWeight: "600",
                    color: "var(--heading-color)",
                    marginBottom: "24px",
                }}>
                    {pageTitle}
                </h1>
                <p style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
                    color: "var(--muted-foreground)",
                    lineHeight: "1.6",
                }}>
                    {pageSubtitle}
                </p>
            </div>

            {/* Content Grid */}
            <div style={contentGridStyles}>
                {/* Contact Details */}
                <div style={cardStyles}>
                    <h2 style={{
                        fontFamily: "Lora, serif",
                        fontSize: "24px",
                        fontWeight: "500",
                        color: "var(--primary)",
                        marginBottom: "32px",
                    }}>
                        {contactDetailsTitle}
                    </h2>

                    <div style={contactItemStyles}>
                        <div style={iconStyles}>📧</div>
                        <div>
                            <div style={labelStyles}>Email</div>
                            <div style={valueStyles}>{email}</div>
                        </div>
                    </div>

                    <div style={contactItemStyles}>
                        <div style={iconStyles}>📞</div>
                        <div>
                            <div style={labelStyles}>Telefon</div>
                            <div style={valueStyles}>{phone}</div>
                        </div>
                    </div>

                    <div style={contactItemStyles}>
                        <div style={iconStyles}>📍</div>
                        <div>
                            <div style={labelStyles}>Adres Gabinetu</div>
                            <div style={valueStyles}>{address}</div>
                        </div>
                    </div>

                    <div style={contactItemStyles}>
                        <div style={iconStyles}>🕒</div>
                        <div>
                            <div style={labelStyles}>Godziny pracy</div>
                            <div style={valueStyles}>{hours}</div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div style={{ marginTop: "32px" }}>
                        <h3 style={{
                            fontFamily: "Lora, serif",
                            fontSize: "20px",
                            color: "var(--foreground)",
                            marginBottom: "16px",
                        }}>
                            Lokalizacja Gabinetu
                        </h3>
                        <div style={{
                            width: "100%",
                            height: "200px",
                            backgroundColor: "var(--muted)",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--muted-foreground)",
                            fontSize: "14px",
                        }}>
                            🗺️ Mapa lokalizacji
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div style={cardStyles}>
                    <h2 style={{
                        fontFamily: "Lora, serif",
                        fontSize: "24px",
                        fontWeight: "500",
                        color: "var(--primary)",
                        marginBottom: "32px",
                    }}>
                        {formTitle}
                    </h2>

                    <form style={formStyles}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                            <div>
                                <label style={labelStyles}>Imię i nazwisko</label>
                                <input
                                    type="text"
                                    placeholder="Twoje imię i nazwisko"
                                    style={inputStyles}
                                />
                            </div>
                            <div>
                                <label style={labelStyles}>Adres email</label>
                                <input
                                    type="email"
                                    placeholder="twoj@email.com"
                                    style={inputStyles}
                                />
                            </div>
                        </div>
                        <div>
                            <label style={labelStyles}>Wiadomość</label>
                            <textarea
                                placeholder="Twoja wiadomość..."
                                style={textareaStyles}
                            />
                        </div>
                        <Button
                            text="Wyślij wiadomość ✉️"
                            variant="primary"
                            size="large"
                        />
                    </form>

                    <p style={{
                        fontFamily: "Lora, serif",
                        fontSize: "18px",
                        textAlign: "center",
                        color: "var(--primary-80)",
                        marginTop: "40px",
                        lineHeight: "1.5",
                    }}>
                        Z ciepłem,<br />Kasia
                    </p>
                </div>
            </div>
        </div>
    )
}

ContactPage.defaultProps = {
    pageTitle: "Kontakt",
    pageSubtitle: "Masz pytania lub chcesz umówić się na konsultację? Jestem tutaj, aby pomóc. Skorzystaj z poniższych danych lub wypełnij formularz.",
    contactDetailsTitle: "Dane kontaktowe",
    email: "kontakt@katarzynaceleda.pl",
    phone: "+48 123 456 789",
    address: "ul. Przykładowa 123, 00-001 Warszawa",
    hours: "Poniedziałek - Piątek: 9:00 - 19:00 (umówione wizyty)",
    formTitle: "Napisz do mnie",
}

addPropertyControls(ContactPage, {
    pageTitle: { type: ControlType.String, title: "Page Title" },
    pageSubtitle: { type: ControlType.String, title: "Page Subtitle" },
    contactDetailsTitle: { type: ControlType.String, title: "Contact Details Title" },
    email: { type: ControlType.String, title: "Email" },
    phone: { type: ControlType.String, title: "Phone" },
    address: { type: ControlType.String, title: "Address" },
    hours: { type: ControlType.String, title: "Hours" },
    formTitle: { type: ControlType.String, title: "Form Title" },
})