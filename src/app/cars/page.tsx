"use client";

import { useState } from "react";
import Link from "next/link";
import { cars } from "@/data/cars";
import { MapPin, Shield, Filter, Search } from "lucide-react";

export default function CarsPage() {
  const [filterType, setFilterType] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(3000);

  const filteredCars = cars.filter((car) => {
    const matchType = filterType === "All" || car.type === filterType;
    const matchPrice = car.pricePerDay <= maxPrice;
    return matchType && matchPrice;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      {/* Page Header */}
      <div className="bg-primary text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-moroccan-pattern opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Notre Flotte</h1>
          <p className="text-primary-foreground/80 max-w-xl">
            Trouvez la voiture parfaite pour votre séjour au Maroc. Des citadines économiques aux SUV luxueux.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 flex-1 flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-border sticky top-24 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-lg font-semibold">
              <Filter className="h-5 w-5 text-primary" /> Filtres
            </div>

            {/* Car Type Filter */}
            <div className="mb-8">
              <h3 className="font-medium mb-3 text-sm">Catégorie</h3>
              <div className="space-y-2">
                {["All", "Economy", "SUV", "Luxury"].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="carType"
                      checked={filterType === type}
                      onChange={() => setFilterType(type)}
                      className="w-4 h-4 text-primary focus:ring-primary border-slate-300 rounded"
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {type === "All" ? "Toutes" : type === "Economy" ? "Économique" : type === "Luxury" ? "Luxe" : type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-medium mb-3 text-sm">Prix max par jour (MAD)</h3>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>100 dh</span>
                <span className="font-semibold text-primary">{maxPrice} dh</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Cars Grid */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">{filteredCars.length}</span> véhicules trouvés
            </p>
          </div>

          {filteredCars.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-border">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">Aucune voiture trouvée</h3>
              <p className="text-muted-foreground mb-6">Essayez d'ajuster vos filtres pour voir plus de résultats.</p>
              <button
                onClick={() => { setFilterType("All"); setMaxPrice(3000); }}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <div key={car.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                  <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-semibold text-primary">
                      {car.type}
                    </div>
                    {!car.available && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-bold">Indisponible</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold">{car.name}</h3>
                      <div className="text-right shrink-0">
                        <span className="text-lg font-bold text-primary">{car.pricePerDay}</span>
                        <span className="text-xs text-muted-foreground block"> dh/jour</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                      <div className="flex items-center gap-1.5">
                        <Shield className="h-3.5 w-3.5" /> {car.transmission}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {car.seats} places
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href={`/cars/${car.id}`}
                        className={`block w-full py-2.5 text-center rounded-xl font-medium transition-colors ${
                          car.available 
                            ? "bg-primary text-white hover:bg-primary/90" 
                            : "bg-muted text-muted-foreground pointer-events-none"
                        }`}
                      >
                        {car.available ? "Réserver" : "Voir les détails"}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
