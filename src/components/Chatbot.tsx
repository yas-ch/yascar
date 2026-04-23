"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Salam 👋, kifach n9dr n3awnk ?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user"
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot thinking
    setTimeout(() => {
      const lowerInput = userMessage.text.toLowerCase();
      let botResponse = "";

      if (lowerInput.includes("prix") || lowerInput.includes("taman")) {
        botResponse = "Les prix kaybda mn 200dh/jour حتى 1000dh حسب نوع السيارة";
      } else if (lowerInput.includes("disponible") || lowerInput.includes("kayn")) {
        botResponse = "Rah kaynin Clio, Logan, SUV, w chi voitures luxe disponibles daba";
      } else if (lowerInput.includes("ville") || lowerInput.includes("mdina")) {
        botResponse = "Khdamin f Casablanca, Rabat, Marrakech, Tanger";
      } else {
        botResponse = "Marhba bik! T9dr tswlna 3la les prix, les voitures disponibles wla les villes.";
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), text: botResponse, sender: "bot" }
      ]);
    }, 600);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 p-4 rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform duration-300 hover:scale-110 z-50",
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        )}
        aria-label="Ouvrir le chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 w-80 sm:w-96 bg-background border border-border rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right",
          isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-primary p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageSquare className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">YasCar Assistant</h3>
              <p className="text-xs text-white/70">En ligne</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 h-80 overflow-y-auto flex flex-col gap-3 bg-muted/30">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                msg.sender === "user"
                  ? "bg-primary text-white self-end rounded-tr-sm"
                  : "bg-white dark:bg-slate-800 border border-border text-foreground self-start rounded-tl-sm shadow-sm"
              )}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <form onSubmit={handleSend} className="p-3 border-t border-border bg-background flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écrivez un message..."
            className="flex-1 bg-muted rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="p-2.5 rounded-full bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </>
  );
}
