import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-primary text-white py-16 relative overflow-hidden mb-12">
        <div className="absolute inset-0 bg-moroccan-pattern opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-primary-foreground/80">
            Notre équipe est à votre disposition pour toute question ou demande de réservation spécifique.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-border shadow-sm text-center">
            <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-bold mb-2">Téléphone</h3>
            <p className="text-sm text-muted-foreground mb-1">+212 6 00 00 00 00</p>
            <p className="text-sm text-muted-foreground">Lun-Dim: 8h - 20h</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-border shadow-sm text-center">
            <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground mb-1">contact@yascar.ma</p>
            <p className="text-sm text-muted-foreground">Réservations & Support</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-border shadow-sm text-center">
            <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-bold mb-2">Agence</h3>
            <p className="text-sm text-muted-foreground mb-1">123 Blvd d'Anfa</p>
            <p className="text-sm text-muted-foreground">Casablanca, Maroc</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nom complet</label>
                  <input type="text" placeholder="Karim B." className="w-full bg-muted border border-transparent rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Téléphone</label>
                  <input type="tel" placeholder="+212 6..." className="w-full bg-muted border border-transparent rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" placeholder="karim@example.com" className="w-full bg-muted border border-transparent rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea rows={4} placeholder="Comment pouvons-nous vous aider ?" className="w-full bg-muted border border-transparent rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3.5 font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-primary/20">
                <Send className="h-4 w-4" /> Envoyer le message
              </button>
            </form>
          </div>

          {/* WhatsApp Direct & Map */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white shadow-lg shadow-green-500/20">
              <h2 className="text-2xl font-bold mb-2">Besoin d'une réponse rapide ?</h2>
              <p className="text-green-50 mb-6">
                Contactez-nous directement sur WhatsApp pour une assistance immédiate concernant votre réservation.
              </p>
              <a href="#" className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-green-50 font-bold py-3 px-6 rounded-xl transition-colors">
                <MessageCircle className="h-5 w-5" /> Discuter sur WhatsApp
              </a>
            </div>

            <div className="bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden h-64 relative border border-border">
              {/* This is a placeholder for a Google Map iframe */}
              <div className="absolute inset-0 flex items-center justify-center flex-col text-muted-foreground">
                <MapPin className="h-8 w-8 mb-2 opacity-50" />
                <p className="font-medium">Carte de l'agence (Casablanca)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
