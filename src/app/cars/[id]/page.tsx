import { notFound } from "next/navigation";
import Link from "next/link";
import { cars } from "@/data/cars";
import { ArrowLeft, Check, Shield, MapPin, Fuel, Settings, Users, Calendar } from "lucide-react";

export function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

export default async function CarDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);

  if (!car) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <Link href="/cars" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Retour aux voitures
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image & Specs */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-border shadow-sm">
              <div className="aspect-[16/9] relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm dark:bg-slate-900/90 px-4 py-1.5 rounded-full text-sm font-semibold text-primary">
                  {car.type === "Economy" ? "Économique" : car.type === "Luxury" ? "Luxe" : car.type}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Spécifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center p-4 bg-muted/50 rounded-2xl text-center">
                  <Fuel className="h-8 w-8 text-primary mb-3" />
                  <span className="text-xs text-muted-foreground mb-1">Carburant</span>
                  <span className="font-semibold text-sm">{car.fuel}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted/50 rounded-2xl text-center">
                  <Settings className="h-8 w-8 text-primary mb-3" />
                  <span className="text-xs text-muted-foreground mb-1">Boîte</span>
                  <span className="font-semibold text-sm">{car.transmission}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted/50 rounded-2xl text-center">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <span className="text-xs text-muted-foreground mb-1">Places</span>
                  <span className="font-semibold text-sm">{car.seats} Personnes</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted/50 rounded-2xl text-center">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <span className="text-xs text-muted-foreground mb-1">Assurance</span>
                  <span className="font-semibold text-sm">Tous Risques</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Ce qui est inclus</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Kilométrage illimité",
                  "Assurance tous risques",
                  "Assistance 24/7",
                  "Annulation gratuite (jusqu'à 48h)",
                  "Deuxième conducteur gratuit",
                  "Taxes incluses"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-border shadow-xl sticky top-24">
              <div className="mb-6 pb-6 border-b border-border">
                <h1 className="text-2xl font-bold mb-2">{car.name}</h1>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-extrabold text-primary">{car.pricePerDay}</span>
                  <span className="text-muted-foreground pb-1">MAD / jour</span>
                </div>
              </div>

              {car.available ? (
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Lieu de prise en charge
                    </label>
                    <select className="w-full bg-muted border border-transparent rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors">
                      <option>Aéroport Mohammed V - Casablanca</option>
                      <option>Centre ville - Casablanca</option>
                      <option>Aéroport - Rabat</option>
                      <option>Aéroport - Marrakech</option>
                      <option>Aéroport - Tanger</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" /> Début
                      </label>
                      <input type="date" className="w-full bg-muted border border-transparent rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" /> Fin
                      </label>
                      <input type="date" className="w-full bg-muted border border-transparent rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-4 font-bold text-lg transition-all shadow-lg shadow-primary/25">
                      Réserver maintenant
                    </button>
                    <p className="text-center text-xs text-muted-foreground mt-3">
                      Aucun paiement requis pour le moment.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 mb-4">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Non Disponible</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Ce véhicule est actuellement en cours de location.
                  </p>
                  <Link href="/cars" className="block w-full bg-muted hover:bg-muted/80 text-foreground rounded-xl py-3 font-medium transition-colors">
                    Voir d'autres voitures
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
