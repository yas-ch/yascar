import Link from "next/link";
import { Car, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Car className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Yas<span className="text-accent">Car</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 max-w-xs">
              La meilleure expérience de location de voitures au Maroc. Confort, sécurité et prix imbattables pour tous vos déplacements.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="/cars" className="text-sm hover:text-primary transition-colors">Nos Voitures</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">Conditions Générales</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Villes</h3>
            <ul className="space-y-3">
              <li className="text-sm">Casablanca</li>
              <li className="text-sm">Rabat</li>
              <li className="text-sm">Marrakech</li>
              <li className="text-sm">Tanger</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">123 Boulevard d'Anfa, Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">+212 6 00 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">contact@yascar.ma</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} YasCar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
