import { Link } from "react-router-dom";
import { Music, Calendar, ArrowRight, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EMAIL_ADDRESS, INSTAGRAM_HANDLE } from "@/lib/constants";

const Home = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="stormy-section text-center">
        <div className="max-w-4xl mx-auto">
          <img src="/stormy-logo.png" alt="Stormy Logo" className="mx-auto" style={{ maxWidth: '400px' }} />
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
      <section className="stormy-section bg-card/30 pt-3">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl mb-6 text-primary">
                UNDERGROUND. AUTÊNTICO. BRUTAL.
              </h2>
              <p className="text-secondary-text text-lg mb-6">
                Desde 2018, a Stormy Prods & Records fortalece a cena independente de Joinville, trazendo bandas de relevância nacional e resgatando o espaço da cidade no circuito de shows alternativos.
              </p>
              <p className="text-secondary-text mb-8">
                Nosso compromisso é com o que é genuíno: punk, hardcore, shoegaze, indie, metal e rock em todas as suas formas. Valorizamos bandas ativas, com atitude, criando eventos que vão além da música e são encontros da cultura underground.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bebas text-primary">40+</div>
                  <div className="text-secondary-text text-sm">Eventos Produzidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bebas text-primary">4</div>
                  <div className="text-secondary-text text-sm">Lançamentos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bebas text-primary">2</div>
                  <div className="text-secondary-text text-sm">Bandas no Cast</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="h-64 bg-cover bg-center rounded-sm"
                style={{ backgroundImage: "url('https://i.pinimg.com/736x/64/4c/84/644c84e5926eba00a47d3cc55f935ceb.jpg')" }}
              />
              <div 
                className="h-64 bg-cover bg-center rounded-sm"
                style={{ backgroundImage: "url('https://i.pinimg.com/736x/65/c5/40/65c540d0f82040bd408c1e92d94096d2.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="stormy-section">
        <div className="max-w-4xl mx-auto pt-3">
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
                Na luta pela cena autoral de Joinville e região desde 2018.
              </p>
            </div>
            
            <div>
              <h4 className="font-bebas text-lg mb-4">CONTATO</h4>
              <div className="space-y-2 text-sm text-secondary-text">
                <div className="flex items-center">
                   <a href="mailto:stormyrecs@gmail.com" className="flex items-center item-hover">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      {EMAIL_ADDRESS}
                    </a>
                </div>
                <div className="flex items-center">
                  <a href="https://www.instagram.com/stormy_prods/" target="_blank" rel="noopener noreferrer" className="flex items-center item-hover">
                    <Instagram className="w-4 h-4 mr-2 text-primary" />
                    {INSTAGRAM_HANDLE}
                  </a>
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
            © 2025 Stormy Prods & Records. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;