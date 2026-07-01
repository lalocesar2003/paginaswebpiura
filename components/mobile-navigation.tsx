"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GENERAL_WHATSAPP_URL } from "@/lib/site";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "Preguntas frecuentes" },
];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="mobile-navigation">
      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="mobile-menu-layer">
          <button
            className="menu-backdrop"
            type="button"
            aria-label="Cerrar menú"
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
          />
          <nav
            ref={menuRef}
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Navegación móvil"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a
              className="btn mobile-menu-cta"
              href={GENERAL_WHATSAPP_URL}
              onClick={() => setOpen(false)}
            >
              Cotizar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
