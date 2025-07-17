import { Link } from "react-router-dom";
import { Music, Calendar, ArrowRight, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="stormy-section text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bebas tracking-wider mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              STORMY
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bebas tracking-wide text-secondary-text mb-8">
            PRODS & RECORDS
          </h2>
          <p className="text-lg md:text-xl text-secondary-text mb-12 max-w-2xl mx-auto">
            Produtora de eventos e selo musical dedicados ao underground brasileiro. 
            Onde a música extrema encontra seu palco.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/prods">
              <Button className="stormy-btn-primary group">
                <Calendar className="w-5 h-5 mr-3" />
                PRÓXIMOS EVENTOS
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/records">
              <Button className="stormy-btn-primary group">
                <Music className="w-5 h-5 mr-3" />
                NOSSO CATÁLOGO
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="stormy-section bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl mb-6 text-primary">
                UNDERGROUND. AUTÊNTICO. BRUTAL.
              </h2>
              <p className="text-secondary-text text-lg mb-6">
                Desde 2020, a Stormy Prods & Records vem moldando a cena underground 
                brasileira, produzindo eventos que marcam época e lançando álbuns 
                que definem gerações.
              </p>
              <p className="text-secondary-text mb-8">
                Nossa missão é dar voz ao que é real, autêntico e sem compromissos 
                comerciais. Do black metal ao doom, do thrash ao hardcore, 
                representamos a diversidade e a intensidade do metal nacional.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bebas text-primary">50+</div>
                  <div className="text-secondary-text text-sm">Eventos Produzidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bebas text-primary">25+</div>
                  <div className="text-secondary-text text-sm">Lançamentos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bebas text-primary">10+</div>
                  <div className="text-secondary-text text-sm">Bandas no Cast</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop')" }}
              />
              <div 
                className="h-64 bg-cover bg-center rounded-lg mt-8"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=400&fit=crop')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="stormy-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bebas text-4xl text-center mb-12">
            EXPLORE NOSSO UNIVERSO
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="stormy-card group">
              <CardContent className="p-8 text-center">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="font-bebas text-2xl mb-4">STORMY PRODS</h3>
                <p className="text-secondary-text mb-6">
                  Eventos underground que conectam bandas e público em experiências 
                  únicas e inesquecíveis.
                </p>
                <Link to="/prods">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Ver Eventos
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="stormy-card group">
              <CardContent className="p-8 text-center">
                <Music className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="font-bebas text-2xl mb-4">STORMY RECORDS</h3>
                <p className="text-secondary-text mb-6">
                  Selo independente que promove o melhor do metal nacional, 
                  do underground às grandes plateias.
                </p>
                <Link to="/records">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Ver Catálogo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Music className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bebas text-xl text-foreground">STORMY</h3>
                  <p className="text-xs text-secondary-text -mt-1">PRODS & RECORDS</p>
                </div>
              </div>
              <p className="text-secondary-text text-sm">
                Underground brasileiro autêntico desde 2020.
              </p>
            </div>
            
            <div>
              <h4 className="font-bebas text-lg mb-4">CONTATO</h4>
              <div className="space-y-2 text-sm text-secondary-text">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  contato@stormymusic.com
                </div>
                <div className="flex items-center">
                  <Instagram className="w-4 h-4 mr-2 text-primary" />
                  @stormyunderground
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bebas text-lg mb-4">NAVEGAÇÃO</h4>
              <div className="space-y-2 text-sm">
                <Link to="/prods" className="block text-secondary-text hover:text-primary transition-colors">
                  Produtora
                </Link>
                <Link to="/records" className="block text-secondary-text hover:text-primary transition-colors">
                  Selo Musical
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-text">
            © 2024 Stormy Prods & Records. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;