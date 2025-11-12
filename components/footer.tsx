import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Stats",
    href: "/#stats",
  },
  {
    title: "Preguntas Frecuentes",
    href: "/#faq",
  },
  {
    title: "Testimonios",
    href: "/#testimonials",
  },
];

const Footer = () => {
  return (
    <footer>
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()} NeurOS | Proyecto de Inteligencia Artificial Educativa.
              Desarrollado con Ollama y tecnologías open source.
            </span>
          </div>
        </div>
      </footer>
  );
};

export default Footer;