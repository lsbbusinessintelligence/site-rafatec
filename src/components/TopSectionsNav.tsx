const items = [
  { label: "Início", href: "#home" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const TopSectionsNav = () => (
  <header
    className="fixed top-0 inset-x-0 z-40 backdrop-blur-md"
    style={{
      background: "hsl(220 60% 8% / 0.95)",
      borderBottom: "1px solid hsl(220 60% 30% / 0.30)",
    }}
  >
    <div className="container py-2.5">
      <div className="flex gap-2 overflow-x-auto no-scrollbar items-center">
        {/* Brand */}
        <a
          href="#home"
          className="shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm"
          style={{ border: "1px solid hsl(220 40% 22%)" }}
          aria-label="RAFATEC - Ir para o topo"
        >
          <img
            src="/images/rafatec/RAFATEC-LOGO.jpeg"
            alt="RAFATEC Encanamento a Gás Logo"
            className="h-7 w-auto rounded-sm object-contain"
          />
          <span className="font-bold text-sm" style={{ color: "hsl(37 95% 60%)" }}>RAFATEC</span>
        </a>

        {/* Nav items */}
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 inline-flex items-center justify-center text-center rounded-sm px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200"
            style={{
              border: "1px solid hsl(220 30% 20%)",
              background: "hsl(220 30% 10% / 0.6)",
              color: "hsl(220 20% 72%)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "hsl(220 70% 30%)";
              el.style.color = "#fff";
              el.style.borderColor = "hsl(220 70% 42% / 0.6)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "hsl(220 30% 10% / 0.6)";
              el.style.color = "hsl(220 20% 72%)";
              el.style.borderColor = "hsl(220 30% 20%)";
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </header>
);

export default TopSectionsNav;
