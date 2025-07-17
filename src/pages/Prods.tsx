import { useState } from "react";
import { Calendar, MapPin, Users, ExternalLink, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Prods = () => {
  const [activeSection, setActiveSection] = useState("eventos");

  const upcomingEvents = [
    {
      id: 1,
      name: "UNDERGROUND FEST 2024",
      date: "15 MAR 2024",
      location: "São Paulo - SP",
      bands: ["Dead Dreams", "Void Walker", "Storm Brigade"],
      ticketLink: "#",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "O maior festival underground do país"
    },
    {
      id: 2,
      name: "METAL MAYHEM",
      date: "28 MAR 2024", 
      location: "Rio de Janeiro - RJ",
      bands: ["Iron Skulls", "Black Thunder"],
      ticketLink: "#",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop",
      description: "Noite de metal pesado"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      name: "CHAOS FESTIVAL 2023",
      date: "NOV 2023",
      location: "Belo Horizonte - MG",
      highlight: "SOLD OUT",
      photos: 45
    },
    {
      id: 2,
      name: "DARK NIGHTS TOUR", 
      date: "SET 2023",
      location: "Tour Nacional",
      highlight: "7 CIDADES",
      photos: 120
    }
  ];

  const services = [
    "Produção de eventos e turnês",
    "Booking de artistas",
    "Logística (transporte, hospedagem)",
    "Técnica de som/luz",
    "Assessoria de imprensa",
    "Marketing digital"
  ];

  const SubNav = () => (
    <div className="border-b border-border mb-8">
      <div className="flex space-x-8 overflow-x-auto">
        {[
          { id: "eventos", label: "Próximos Eventos" },
          { id: "historico", label: "Histórico" },
          { id: "servicos", label: "Serviços" },
          { id: "contato", label: "Contato" }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`py-3 px-1 border-b-2 transition-colors whitespace-nowrap ${
              activeSection === item.id
                ? 'border-primary text-primary'
                : 'border-transparent text-secondary-text hover:text-foreground'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="stormy-header">STORMY PRODS</h1>
          <p className="stormy-subtitle">
            Produção de eventos underground que marcam época
          </p>
        </div>

        <SubNav />

        {/* Próximos Eventos */}
        {activeSection === "eventos" && (
          <section className="stormy-section">
            <div className="stormy-grid">
              {upcomingEvents.map(event => (
                <Card key={event.id} className="stormy-card group overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center mb-4 rounded-lg"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <CardContent className="p-6">
                    <h3 className="font-bebas text-2xl mb-2 text-primary">
                      {event.name}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-secondary-text">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-secondary-text">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-secondary-text">
                        <Users className="w-4 h-4 mr-2" />
                        {event.bands.join(", ")}
                      </div>
                    </div>
                    <p className="text-muted-text mb-4">{event.description}</p>
                    <Button className="stormy-btn-primary w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Comprar Ingressos
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Histórico */}
        {activeSection === "historico" && (
          <section className="stormy-section">
            <div className="space-y-6">
              {pastEvents.map(event => (
                <Card key={event.id} className="stormy-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bebas text-2xl mb-2">
                          {event.name}
                        </h3>
                        <div className="space-y-1">
                          <div className="flex items-center text-secondary-text">
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-secondary-text">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                          {event.highlight}
                        </span>
                        <p className="text-secondary-text mt-2">
                          {event.photos} fotos
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Serviços */}
        {activeSection === "servicos" && (
          <section className="stormy-section">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-bebas text-3xl mb-8 text-center">
                NOSSOS SERVIÇOS
              </h2>
              <div className="grid gap-4">
                {services.map((service, index) => (
                  <Card key={index} className="stormy-card">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                        <p className="text-lg">{service}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contato */}
        {activeSection === "contato" && (
          <section className="stormy-section">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-bebas text-3xl mb-6">ENTRE EM CONTATO</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-4" />
                    <span>producao@stormyprods.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-4" />
                    <span>+55 (11) 99999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="w-5 h-5 text-primary mr-4" />
                    <span>@stormyprods</span>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <Input 
                    placeholder="Seu nome"
                    className="bg-muted border-border"
                  />
                  <Input 
                    type="email"
                    placeholder="Seu e-mail"
                    className="bg-muted border-border"
                  />
                  <Textarea 
                    placeholder="Sua mensagem"
                    rows={4}
                    className="bg-muted border-border"
                  />
                  <Button className="stormy-btn-primary w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Prods;