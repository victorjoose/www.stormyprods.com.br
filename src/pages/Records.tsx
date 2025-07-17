import { useState } from "react";
import { Music, ExternalLink, Instagram, Play, ShoppingCart, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Records = () => {
  const [activeSection, setActiveSection] = useState("bandas");

  const bands = [
    {
      id: 1,
      name: "VOID WALKER",
      genre: "Black Metal",
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop",
      bio: "Formada em 2020, a Void Walker traz o black metal mais sombrio do underground brasileiro.",
      spotify: "#",
      instagram: "#"
    },
    {
      id: 2,
      name: "DEAD DREAMS",
      genre: "Doom Metal",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      bio: "Desde 2018 explorando as profundezas do doom metal com letras introspectivas.",
      spotify: "#",
      instagram: "#"
    },
    {
      id: 3,
      name: "STORM BRIGADE",
      genre: "Thrash Metal",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=400&fit=crop",
      bio: "A energia pura do thrash metal dos anos 80 revivida para a nova geração.",
      spotify: "#",
      instagram: "#"
    }
  ];

  const releases = [
    {
      id: 1,
      title: "Eternal Void",
      artist: "Void Walker",
      date: "2024",
      format: ["Digital", "Vinil"],
      cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop",
      price: "R$ 45,00"
    },
    {
      id: 2,
      title: "Sleepless Nights",
      artist: "Dead Dreams", 
      date: "2023",
      format: ["Digital", "CD"],
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      price: "R$ 35,00"
    },
    {
      id: 3,
      title: "Thunder & Lightning",
      artist: "Storm Brigade",
      date: "2023",
      format: ["Digital", "Cassete"],
      cover: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300&h=300&fit=crop",
      price: "R$ 25,00"
    }
  ];

  const merch = [
    {
      id: 1,
      name: "Stormy Records Tee",
      price: "R$ 60,00",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: 2,
      name: "Void Walker Hoodie",
      price: "R$ 120,00", 
      image: "https://images.unsplash.com/photo-1556821840-3a9b904b874b?w=300&h=300&fit=crop",
      sizes: ["M", "G", "GG"]
    },
    {
      id: 3,
      name: "Underground Zine #1",
      price: "R$ 15,00",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      sizes: ["Único"]
    }
  ];

  const SubNav = () => (
    <div className="border-b border-border mb-8">
      <div className="flex space-x-8 overflow-x-auto">
        {[
          { id: "bandas", label: "Bandas" },
          { id: "lancamentos", label: "Lançamentos" },
          { id: "merch", label: "Merch" },
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
                    <div 
                      className="h-48 bg-cover bg-center mb-4 rounded-lg"
                      style={{ backgroundImage: `url(${band.image})` }}
                    />
                    <h3 className="font-bebas text-2xl mb-2 text-primary">
                      {band.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3">
                      {band.genre}
                    </Badge>
                    <p className="text-secondary-text mb-4 text-sm">
                      {band.bio}
                    </p>
                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Play className="w-4 h-4 mr-2" />
                        Ouvir
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Instagram className="w-4 h-4 mr-2" />
                        Follow
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
              {releases.map(release => (
                <Card key={release.id} className="stormy-card">
                  <CardContent className="p-6">
                    <div 
                      className="h-48 bg-cover bg-center mb-4 rounded-lg"
                      style={{ backgroundImage: `url(${release.cover})` }}
                    />
                    <h3 className="font-bebas text-xl mb-1">
                      {release.title}
                    </h3>
                    <p className="text-secondary-text text-sm mb-2">
                      {release.artist} • {release.date}
                    </p>
                    <div className="flex gap-2 mb-4">
                      {release.format.map(format => (
                        <Badge key={format} variant="outline" className="text-xs">
                          {format}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">
                        {release.price}
                      </span>
                      <Button size="sm" className="stormy-btn-primary">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Comprar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Merch */}
        {activeSection === "merch" && (
          <section className="stormy-section">
            <div className="stormy-grid">
              {merch.map(item => (
                <Card key={item.id} className="stormy-card">
                  <CardContent className="p-6">
                    <div 
                      className="h-48 bg-cover bg-center mb-4 rounded-lg"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <h3 className="font-semibold text-lg mb-2">
                      {item.name}
                    </h3>
                    <div className="flex gap-2 mb-3">
                      {item.sizes.map(size => (
                        <Badge key={size} variant="outline" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">
                        {item.price}
                      </span>
                      <Button size="sm" className="stormy-btn-primary">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Adicionar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Contato */}
        {activeSection === "contato" && (
          <section className="stormy-section">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-bebas text-3xl mb-6">PARCERIA MUSICAL</h2>
                <p className="text-secondary-text mb-6">
                  Interessado em fazer parte do catálogo Stormy Records? 
                  Entre em contato para envio de demos e propostas.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-4" />
                    <span>demo@stormyrecords.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-4" />
                    <span>+55 (11) 88888-8888</span>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="w-5 h-5 text-primary mr-4" />
                    <span>@stormyrecords</span>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <Input 
                    placeholder="Nome da banda"
                    className="bg-muted border-border"
                  />
                  <Input 
                    type="email"
                    placeholder="E-mail de contato"
                    className="bg-muted border-border"
                  />
                  <Input 
                    placeholder="Gênero musical"
                    className="bg-muted border-border"
                  />
                  <Textarea 
                    placeholder="Conte sobre sua banda e envie links"
                    rows={4}
                    className="bg-muted border-border"
                  />
                  <Button className="stormy-btn-primary w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Enviar Proposta
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

export default Records;