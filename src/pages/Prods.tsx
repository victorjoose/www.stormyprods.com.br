import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, Users, ExternalLink, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";

const Prods = () => {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.substring(1);
    const validSections = ["eventos", "historico", "servicos", "contato"];
    return validSections.includes(hash) ? hash : "eventos";
  });
  const [displayCount, setDisplayCount] = useState(6);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*');

        if (error) {
          throw error;
        }

        const fetchedUpcoming = data.filter(event => event.upcoming);
        const fetchedPast = data.filter(event => !event.upcoming);

        setUpcomingEvents(fetchedUpcoming);
        setPastEvents(fetchedPast);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        window.scrollTo(0, 0);
      }
    };

    fetchEvents();
  }, []);

  const services = [
    "Produção de eventos",
    "Produção de turnês",
    "Booking de artistas",
    "Aluguel de som",
    "Técnico de som",
  ];

  const SubNav = () => {
    const itemRefs = useRef(new Map());
    const scrollContainerRef = useRef(null);

    const handleItemClick = (id) => {
      setActiveSection(id);
    };

    useEffect(() => {
      const node = itemRefs.current.get(activeSection);
      const container = scrollContainerRef.current;

      if (node && container) {
        const scrollLeft = node.offsetLeft - (container.offsetWidth / 2) + (node.offsetWidth / 2);
        container.scrollTo({ left: scrollLeft });
      }
    }, [activeSection]);

    return (
      <div className="border-b border-border mb-8">
        <div ref={scrollContainerRef} className="flex space-x-8 overflow-x-auto">
          {[
            { id: "eventos", label: "Próximos Eventos" },
            { id: "historico", label: "Histórico" },
            { id: "servicos", label: "Serviços" },
            { id: "contato", label: "Contato" }
          ].map(item => (
            <button
              key={item.id}
              ref={el => itemRefs.current.set(item.id, el)}
              onClick={() => handleItemClick(item.id)}
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
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="stormy-header">STORMY PRODS</h1>
          <p className="stormy-subtitle">
            Na luta pela cena autoral de Joinville e região desde 2018
          </p>
        </div>

        <SubNav />

        {/* Próximos Eventos */}
        {activeSection === "eventos" && (
          <section className="stormy-section">
            <div className="stormy-grid">
              {upcomingEvents.map(event => (
                <Card key={event.id} className="stormy-card group overflow-hidden">
                  <div className="aspect-[1080/1350] w-full overflow-hidden rounded-lg mb-4">
                    <div 
                      className="h-full w-full bg-cover bg-center transition-transform duration-300"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                  </div>
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

                    <Button asChild className="stormy-btn-primary w-full">
                      <a href={event.ticketlink}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Comprar Ingressos
                      </a>
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
            <div className="stormy-grid">
              {[...pastEvents].reverse().slice(0, displayCount).map(event => (
                <Card key={event.id} className="stormy-card group overflow-hidden">
                  <div className="aspect-[1080/1350] w-full overflow-hidden rounded-lg mb-4">
                    <div 
                      className="h-full w-full bg-cover bg-center transition-transform duration-300"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                  </div>
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

                    {event.photos && (
                      <Button asChild className="stormy-btn-primary w-full">
                        <a href={event.photosUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Ver Fotos
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            {displayCount < pastEvents.length && (
              <div className="text-center mt-8">
                <Button 
                  onClick={() => setDisplayCount(prevCount => prevCount + 6)}
                  className="stormy-btn-primary"
                >
                  Carregar Mais Eventos
                </Button>
              </div>
            )}
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
            <Card className="max-w-4xl mx-auto p-6 md:p-8 rounded-lg border bg-card text-card-foreground shadow-sm stormy-card">
              <div className="grid md:grid-cols-1 gap-12">
                <div>
                  <h2 className="font-bebas text-3xl mb-6 text-center">ENTRE EM CONTATO</h2>
                  <div className="space-y-6 flex flex-col items-center">
                    <a href="mailto:stormyrecs@gmail.com" className="flex items-center item-hover">
                      <Mail className="w-5 h-5 text-primary mr-4" />
                      <span>stormyrecs@gmail.com</span>
                    </a>
                    <a href="https://www.instagram.com/stormy_prods/" target="_blank" rel="noopener noreferrer" className="flex items-center item-hover">
                      <Instagram className="w-5 h-5 text-primary mr-4" />
                      <span>@stormy_prods</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}
      </div>
    </div>
  );
};

export default Prods;