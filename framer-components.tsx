// Framer Component Code for Katarzyna Celeda Website
// Copy these into Framer's code components

import { addPropertyControls, ControlType } from "framer"

// ===== BUTTON COMPONENT =====
export function Button(props) {
    const {
        text,
        variant,
        size,
        icon,
        iconPosition,
        disabled,
        onClick,
        ...rest
    } = props

    const baseStyles = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "500",
        textDecoration: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.3s ease",
        border: "none",
        outline: "none",
    }

    const variants = {
        primary: {
            backgroundColor: "var(--primary)",
            color: "var(--primary-foreground)",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        },
        secondary: {
            backgroundColor: "transparent",
            color: "var(--primary)",
            border: "1px solid var(--primary)",
        },
        ghost: {
            backgroundColor: "transparent",
            color: "var(--primary)",
        }
    }

    const sizes = {
        small: {
            padding: "8px 16px",
            fontSize: "14px",
            height: "36px",
        },
        medium: {
            padding: "12px 24px",
            fontSize: "16px",
            height: "44px",
        },
        large: {
            padding: "16px 32px",
            fontSize: "18px",
            height: "52px",
        }
    }

    const hoverStyles = {
        primary: { backgroundColor: "var(--primary-hover)", transform: "scale(1.05)" },
        secondary: { backgroundColor: "var(--primary-light)" },
        ghost: { backgroundColor: "var(--primary-light)" }
    }

    return (
        <div
            style={{
                ...baseStyles,
                ...variants[variant],
                ...sizes[size],
                opacity: disabled ? 0.5 : 1,
            }}
            onClick={disabled ? undefined : onClick}
            onMouseEnter={(e) => {
                if (!disabled) {
                    Object.assign(e.target.style, hoverStyles[variant])
                }
            }}
            onMouseLeave={(e) => {
                if (!disabled) {
                    Object.assign(e.target.style, variants[variant])
                }
            }}
            {...rest}
        >
            {icon && iconPosition === "left" && (
                <span style={{ marginRight: "8px" }}>{icon}</span>
            )}
            {text}
            {icon && iconPosition === "right" && (
                <span style={{ marginLeft: "8px" }}>{icon}</span>
            )}
        </div>
    )
}

Button.defaultProps = {
    text: "Button",
    variant: "primary",
    size: "medium",
    iconPosition: "right",
    disabled: false,
}

addPropertyControls(Button, {
    text: { type: ControlType.String, title: "Text" },
    variant: {
        type: ControlType.Enum,
        title: "Variant",
        options: ["primary", "secondary", "ghost"],
    },
    size: {
        type: ControlType.Enum,
        title: "Size",
        options: ["small", "medium", "large"],
    },
    icon: { type: ControlType.String, title: "Icon (emoji or text)" },
    iconPosition: {
        type: ControlType.Enum,
        title: "Icon Position",
        options: ["left", "right"],
    },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
})

// ===== SERVICE CARD COMPONENT =====
export function ServiceCard(props) {
    const {
        icon,
        title,
        description,
        linkText,
        backgroundColor,
        onHover,
        ...rest
    } = props

    const cardStyles = {
        backgroundColor: backgroundColor || "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "32px 24px",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
    }

    const iconStyles = {
        fontSize: "48px",
        marginBottom: "20px",
        padding: "12px",
        backgroundColor: "var(--primary-light)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.3s ease",
    }

    const titleStyles = {
        fontFamily: "Lora, serif",
        fontSize: "20px",
        fontWeight: "500",
        color: "var(--primary)",
        marginBottom: "12px",
        lineHeight: "1.4",
    }

    const descriptionStyles = {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "14px",
        color: "var(--muted-foreground)",
        lineHeight: "1.6",
        marginBottom: "20px",
        flexGrow: 1,
    }

    const linkStyles = {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "14px",
        color: "var(--primary)",
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        transition: "all 0.3s ease",
    }

    return (
        <div
            style={cardStyles}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)"
                e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                const iconEl = e.currentTarget.querySelector('.service-icon')
                if (iconEl) iconEl.style.transform = "scale(1.1)"
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                const iconEl = e.currentTarget.querySelector('.service-icon')
                if (iconEl) iconEl.style.transform = "scale(1)"
            }}
            {...rest}
        >
            <div className="service-icon" style={iconStyles}>
                {icon}
            </div>
            <h3 style={titleStyles}>{title}</h3>
            <p style={descriptionStyles}>{description}</p>
            <a style={linkStyles}>
                {linkText} <span style={{ marginLeft: "6px" }}>→</span>
            </a>
        </div>
    )
}

ServiceCard.defaultProps = {
    icon: "🤝",
    title: "Service Title",
    description: "Service description goes here with details about what this service offers.",
    linkText: "Learn More",
}

addPropertyControls(ServiceCard, {
    icon: { type: ControlType.String, title: "Icon" },
    title: { type: ControlType.String, title: "Title" },
    description: { type: ControlType.String, title: "Description" },
    linkText: { type: ControlType.String, title: "Link Text" },
    backgroundColor: { type: ControlType.Color, title: "Background Color" },
})

// ===== HERO SECTION COMPONENT =====
export function HeroSection(props) {
    const {
        backgroundImage,
        title,
        subtitle,
        primaryButtonText,
        secondaryButtonText,
        showScrollIndicator,
        ...rest
    } = props

    const heroStyles = {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        textAlign: "center",
        padding: "0 20px",
    }

    const overlayStyles = {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, var(--background), var(--background-70), transparent)",
    }

    const contentStyles = {
        position: "relative",
        zIndex: 10,
        maxWidth: "800px",
        backgroundColor: "var(--background-80)",
        backdropFilter: "blur(12px)",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    }

    const titleStyles = {
        fontFamily: "Lora, serif",
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: "600",
        color: "var(--foreground)",
        marginBottom: "16px",
        lineHeight: "1.2",
    }

    const subtitleStyles = {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
        color: "var(--muted-foreground)",
        marginBottom: "32px",
        lineHeight: "1.6",
    }

    const buttonContainerStyles = {
        display: "flex",
        gap: "16px",
        justifyContent: "center",
        flexWrap: "wrap",
    }

    const scrollIndicatorStyles = {
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        animation: "bounce 2s infinite",
        cursor: "pointer",
        color: "var(--muted-foreground)",
    }

    return (
        <section style={heroStyles} {...rest}>
            <div style={overlayStyles}></div>
            <div style={contentStyles}>
                <h1 style={titleStyles}>{title}</h1>
                <p style={subtitleStyles}>{subtitle}</p>
                <div style={buttonContainerStyles}>
                    <Button text={primaryButtonText} variant="primary" size="large" />
                    <Button text={secondaryButtonText} variant="secondary" size="large" />
                </div>
            </div>
            {showScrollIndicator && (
                <div style={scrollIndicatorStyles}>
                    <div style={{ fontSize: "40px" }}>↓</div>
                </div>
            )}
        </section>
    )
}

HeroSection.defaultProps = {
    backgroundImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1920&auto=format&fit=crop",
    title: "Katarzyna Celeda",
    subtitle: "Psychoterapeutka. Twoja przestrzeń do rozmowy, zrozumienia i wzrostu. Odkryjmy razem Twoją ścieżkę.",
    primaryButtonText: "Poznaj mnie",
    secondaryButtonText: "Umów spotkanie",
    showScrollIndicator: true,
}

addPropertyControls(HeroSection, {
    backgroundImage: { type: ControlType.Image, title: "Background Image" },
    title: { type: ControlType.String, title: "Title" },
    subtitle: { type: ControlType.String, title: "Subtitle" },
    primaryButtonText: { type: ControlType.String, title: "Primary Button" },
    secondaryButtonText: { type: ControlType.String, title: "Secondary Button" },
    showScrollIndicator: { type: ControlType.Boolean, title: "Show Scroll Indicator" },
})

// ===== HEADER COMPONENT =====
export function Header(props) {
    const {
        logoLight,
        logoDark,
        isDarkTheme,
        isScrolled,
        showMobileMenu,
        ...rest
    } = props

    const headerStyles = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "12px 32px",
        transition: "all 0.3s ease",
        backgroundColor: isScrolled ? "var(--background-80)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--border-50)" : "none",
        boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
    }

    const containerStyles = {
        maxWidth: "1280px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const logoStyles = {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        fontSize: "24px",
        fontFamily: "Lora, serif",
        fontWeight: "600",
        color: "var(--primary)",
        textDecoration: "none",
        transition: "opacity 0.3s ease",
    }

    const navStyles = {
        display: "flex",
        gap: "20px",
        alignItems: "center",
    }

    const navLinkStyles = {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "14px",
        color: "var(--foreground-80)",
        textDecoration: "none",
        padding: "8px 0",
        transition: "color 0.3s ease",
        cursor: "pointer",
    }

    const themeToggleStyles = {
        padding: "8px",
        borderRadius: "50%",
        backgroundColor: "transparent",
        border: "none",
        color: "var(--foreground-80)",
        cursor: "pointer",
        transition: "all 0.3s ease",
    }

    return (
        <header style={headerStyles} {...rest}>
            <div style={containerStyles}>
                <a style={logoStyles}>
                    <img 
                        src={isDarkTheme ? logoDark : logoLight}
                        alt="Logo"
                        style={{ height: "48px", width: "auto" }}
                    />
                </a>
                <nav style={navStyles}>
                    <a style={navLinkStyles}>Strona Główna</a>
                    <a style={navLinkStyles}>O Mnie</a>
                    <a style={navLinkStyles}>Usługi</a>
                    <a style={navLinkStyles}>Artykuł</a>
                    <a style={navLinkStyles}>Kontakt</a>
                    <button style={themeToggleStyles}>
                        {isDarkTheme ? "☀️" : "🌙"}
                    </button>
                </nav>
            </div>
        </header>
    )
}

Header.defaultProps = {
    logoLight: "https://images.unsplash.com/photo-1594824804732-5f8fcaf26be1?q=80&w=200&auto=format&fit=crop",
    logoDark: "https://images.unsplash.com/photo-1594824804732-5f8fcaf26be1?q=80&w=200&auto=format&fit=crop",
    isDarkTheme: false,
    isScrolled: false,
}

addPropertyControls(Header, {
    logoLight: { type: ControlType.Image, title: "Light Logo" },
    logoDark: { type: ControlType.Image, title: "Dark Logo" },
    isDarkTheme: { type: ControlType.Boolean, title: "Dark Theme" },
    isScrolled: { type: ControlType.Boolean, title: "Scrolled State" },
})

// ===== SECTION WRAPPER COMPONENT =====
export function Section(props) {
    const {
        children,
        backgroundColor,
        paddingSize,
        maxWidth,
        centerContent,
        ...rest
    } = props

    const paddingSizes = {
        small: "40px 20px",
        medium: "80px 20px",
        large: "120px 20px",
    }

    const sectionStyles = {
        backgroundColor: backgroundColor || "var(--background)",
        padding: paddingSizes[paddingSize],
        width: "100%",
    }

    const containerStyles = {
        maxWidth: maxWidth || "1280px",
        margin: "0 auto",
        textAlign: centerContent ? "center" : "left",
    }

    return (
        <section style={sectionStyles} {...rest}>
            <div style={containerStyles}>
                {children}
            </div>
        </section>
    )
}

Section.defaultProps = {
    paddingSize: "medium",
    maxWidth: "1280px",
    centerContent: false,
}

addPropertyControls(Section, {
    backgroundColor: { type: ControlType.Color, title: "Background Color" },
    paddingSize: {
        type: ControlType.Enum,
        title: "Padding Size",
        options: ["small", "medium", "large"],
    },
    maxWidth: { type: ControlType.String, title: "Max Width" },
    centerContent: { type: ControlType.Boolean, title: "Center Content" },
})

// ===== CSS VARIABLES FOR FRAMER =====
// Add this to your Framer project's custom CSS:
/*
:root {
  --background: hsl(35, 60%, 97%);
  --foreground: hsl(30, 30%, 28%);
  --foreground-80: hsl(30, 30%, 28%, 0.8);
  --card: hsl(35, 50%, 94%);
  --primary: hsl(30, 45%, 55%);
  --primary-foreground: hsl(35, 60%, 97%);
  --primary-hover: hsl(30, 45%, 50%);
  --primary-light: hsl(30, 45%, 55%, 0.1);
  --secondary: hsl(30, 30%, 85%);
  --muted-foreground: hsl(30, 25%, 55%);
  --border: hsl(30, 35%, 88%);
  --border-50: hsl(30, 35%, 88%, 0.5);
  --background-70: hsl(35, 60%, 97%, 0.7);
  --background-80: hsl(35, 60%, 97%, 0.8);
}

.dark {
  --background: hsl(220, 25%, 12%);
  --foreground: hsl(35, 50%, 92%);
  --foreground-80: hsl(35, 50%, 92%, 0.8);
  --card: hsl(220, 22%, 15%);
  --primary: hsl(30, 55%, 70%);
  --primary-foreground: hsl(220, 25%, 10%);
  --primary-hover: hsl(30, 55%, 65%);
  --primary-light: hsl(30, 55%, 70%, 0.1);
  --secondary: hsl(220, 15%, 25%);
  --muted-foreground: hsl(35, 35%, 75%);
  --border: hsl(220, 20%, 25%);
  --border-50: hsl(220, 20%, 25%, 0.5);
  --background-70: hsl(220, 25%, 12%, 0.7);
  --background-80: hsl(220, 25%, 12%, 0.8);
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0,-30px,0);
  }
  70% {
    transform: translate3d(0,-15px,0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
}
*/