import Link from "next/link";
import Image from "next/image";
import { cars } from "@/data/cars";
import { Calendar, MapPin, Search, Shield, Clock, ThumbsUp, Star } from "lucide-react";

export default function Home() {
  const featuredCars = cars.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-moroccan-pattern opacity-50 z-0"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Louez votre voiture <span className="text-primary font-arabic">بسهولة</span> au Maroc
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Découvrez une large gamme de véhicules pour vos déplacements professionnels ou touristiques. Des prix imbattables et un service premium.
            </p>
          </div>

          {/* Search Form */}
          <div className="glass max-w-4xl mx-auto rounded-3xl p-4 md:p-6 shadow-2xl relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5 px-4 py-2 border-b md:border-b-0 md:border-r border-border/50">
                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Ville de départ
                </label>
                <select className="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 outline-none cursor-pointer">
                  <option>Casablanca</option>
                  <option>Rabat</option>
                  <option>Marrakech</option>
                  <option>Tanger</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-1.5 px-4 py-2 border-b md:border-b-0 md:border-r border-border/50">
                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> Date de début
                </label>
                <input type="date" className="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 outline-none" />
              </div>
              
              <div className="flex flex-col gap-1.5 px-4 py-2 border-b md:border-b-0 md:border-r border-border/50">
                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> Date de fin
                </label>
                <input type="date" className="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 outline-none" />
              </div>
              
              <div className="px-2 py-2 flex items-center justify-center">
                <button className="w-full h-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 md:py-0 font-medium flex items-center justify-center gap-2 transition-all shadow-md shadow-primary/20">
                  <Search className="h-4 w-4" /> Rechercher
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Nos Voitures Populaires</h2>
              <p className="text-muted-foreground">Choisissez parmi notre flotte premium</p>
            </div>
            <Link href="/cars" className="text-primary font-medium hover:underline hidden sm:block">
              Voir tout →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-semibold text-primary">
                    {car.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{car.name}</h3>
                    <div className="text-right">
                      <span className="text-xl font-bold text-primary">{car.pricePerDay}</span>
                      <span className="text-sm text-muted-foreground"> dh/j</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1.5">
                      <Shield className="h-4 w-4" /> {car.transmission}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" /> {car.seats} places
                    </div>
                  </div>
                  <Link
                    href={`/cars/${car.id}`}
                    className="block w-full py-3 text-center bg-muted hover:bg-primary hover:text-white rounded-xl font-medium transition-colors"
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/cars" className="text-primary font-medium hover:underline">
              Voir toutes les voitures →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi choisir YasCar ?</h2>
            <p className="text-muted-foreground">Nous offrons plus qu'une simple location de voiture. Nous garantissons une expérience sans stress.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sécurité Garantie</h3>
              <p className="text-muted-foreground text-sm">Tous nos véhicules sont récents, régulièrement entretenus et assurés tous risques pour votre tranquillité.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-accent/5 border border-accent/10 text-center">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                <ThumbsUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Meilleur Prix</h3>
              <p className="text-muted-foreground text-sm">Pas de frais cachés. Nos tarifs sont transparents et parmi les plus compétitifs du marché marocain.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-slate-100 dark:bg-slate-800 border border-border text-center">
              <div className="w-16 h-16 mx-auto bg-slate-200 dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-6 text-foreground">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Support 24/7</h3>
              <p className="text-muted-foreground text-sm">Notre équipe est disponible 7j/7 pour répondre à vos questions et vous assister sur la route.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Ce que disent nos clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Karim B.", city: "Casablanca", text: "Service impeccable! J'ai loué une Dacia Logan pour un weekend, la voiture était très propre et le prix excellent." },
              { name: "Sarah M.", city: "Paris", text: "Réservation très facile depuis la France. À mon arrivée à l'aéroport de Marrakech, la voiture m'attendait déjà. Je recommande." },
              { name: "Youssef T.", city: "Rabat", text: "Le service client est au top. J'ai eu un petit changement de programme et ils ont été très flexibles. Merci YasCar." }
            ].map((testimonial, i) => (
              <div key={i} className="glass p-8 rounded-2xl">
                <div className="flex gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mb-6 text-sm italic text-muted-foreground">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
