import { useState, useRef, useEffect } from "react";
import { Instagram, Play, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { bands, releases } from "@/lib/recordsConstants";

const Records = () => {
  const [activeSection, setActiveSection] = useState("bandas");

  const services = ["Mixagem", "Masterização", "Captação"];

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
            { id: "bandas", label: "Bandas" },
            { id: "lancamentos", label: "Lançamentos" },
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
          <h1 className="stormy-header">STORMY RECORDS</h1>
          <p className="stormy-subtitle">
            Selo independente dedicado ao underground nacional
          </p>
        </div>

        <SubNav />

        {/* Bandas */}
        {activeSection === "bandas" && (
          <section className="stormy-section">
            <div className="stormy-grid">
              {bands.map(band => (
                <Card key={band.id} className="stormy-card group">
                  <CardContent className="p-6">
                    <a href={band.spotify} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={band.image} 
                        alt={band.name} 
                        className="w-full h-auto object-contain mb-4"
                      />
                    </a>
                    <a href={band.spotify} target="_blank" rel="noopener noreferrer">
                      <h3 className="font-bebas text-2xl mb-2 text-primary hover:underline">
                        {band.name}
                      </h3>
                    </a>
                    <Badge variant="secondary" className="mb-3">
                      {band.genre}
                    </Badge>
                    <p className="text-secondary-text mb-4 text-sm">
                      {band.bio}
                    </p>
                    <div className="flex space-x-3">
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <a href={band.spotify} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-2" />
                          Ouvir
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <a href={band.instagram} target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-4 h-4 mr-2" />
                          Instagram
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Lançamentos */}
        {activeSection === "lancamentos" && (
          <section className="stormy-section">
            <div className="stormy-grid">
              {[...releases].reverse().map(release => (
                <Card key={release.id} className="stormy-card">
                  <CardContent className="p-6">
                    <div className="w-full mb-4">
                      <img 
                        src={release.cover} 
                        alt={release.title} 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <h3 className="font-bebas text-xl mb-1">
                      {release.title}
                    </h3>
                    <p className="text-secondary-text text-sm mb-5">
                      <a href={release.artistUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        {release.artist}
                      </a> • {release.date}
                    </p>
                    <div className="flex items-center justify-between">
                      <Button asChild size="sm" className="stormy-btn-primary w-full">
                        <a href={release.url} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-2" />
                          Ouvir Agora
                        </a>
                      </Button>
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
            <Card className="max-w-4xl mx-auto p-6 md:p-8 rounded-lg border bg-card text-card-foreground shadow-sm stormy-card">
              <div className="grid md:grid-cols-1 gap-12">
                <div>
                  <h2 className="font-bebas text-3xl mb-6 text-center">PARCERIA MUSICAL</h2>
                  <p className="text-secondary-text mb-6 text-center">
                    Interessado em fazer parte do catálogo Stormy Records? 
                    Entre em contato para envio de demos e propostas.
                  </p>
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

export default Records;