
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Wifi, Home, MapPin, Waves } from "lucide-react";

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO 
        title={`${t('home.title')} | ${t('home.subtitle')}`}
        description={t('home.description')}
      />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 animate-fade-in">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-3 max-w-2xl animate-fade-in">
            {t('home.subtitle')}
          </p>
          <p className="text-lg md:text-xl mb-8 animate-fade-in">
            Pittulongu, Olbia
          </p>
          <Button asChild size="lg" className="animate-fade-in">
            <Link to="/booking">
              {t('home.cta')}
            </Link>
          </Button>
        </div>
      </section>

      {/* Villa Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-gray-900">
              {t('home.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('home.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif mb-12 text-center text-gray-900">
            {t('home.features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-soft hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="bg-marea-100 p-3 rounded-full mb-4">
                  <Home className="w-6 h-6 text-marea-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('home.features.bedrooms')}</h3>
                <p className="text-gray-600">
                  Enjoy our spacious and comfortable bedrooms with premium bedding and sea views.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-soft hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="bg-marea-100 p-3 rounded-full mb-4">
                  <Waves className="w-6 h-6 text-marea-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('home.features.pool')}</h3>
                <p className="text-gray-600">
                  Relax in our private pool with panoramic views of the Mediterranean Sea.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-soft hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="bg-marea-100 p-3 rounded-full mb-4">
                  <MapPin className="w-6 h-6 text-marea-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('home.features.beach')}</h3>
                <p className="text-gray-600">
                  Direct access to a pristine beach just steps away from your door.
                </p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-soft hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="bg-marea-100 p-3 rounded-full mb-4">
                  <Wifi className="w-6 h-6 text-marea-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('home.features.wifi')}</h3>
                <p className="text-gray-600">
                  Stay connected with complimentary high-speed WiFi throughout the property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center text-gray-900">
              The History of Zaratan
            </h2>
            <div className="prose max-w-none mx-auto text-gray-600">
              <p className="mb-4">
                Whale Island or Zaratan is a legendary sea monster, in the form of a huge whale or turtle. 
                Its size is such that sailors can mistake it for an island and land there. If the Zaratan remains at 
                the water's edge for a long time, its back can become covered with vegetation.
              </p>
              <p className="mb-4">
                The myth of an island-sized sea monster, which could be mistaken for an island by sailors, 
                dates back at least to Norse mythology (the Örvar-Odds Saga and the Konungs skuggsjá) and 
                unites Zaratan with other famous sea monsters, especially the Kraken. However, the Kraken is 
                usually not depicted as a fish, but as an octopus or crab.
              </p>
              <p className="mb-4">
                An island whale appears in One Thousand and One Nights and meets Sindbad on his first voyage. 
                The first reference to this monster in a non-fiction work dates back to about the same time, 
                that is, in the ninth century. Al-Jahiz, an Arab zoologist, noted in his Book of animals:
              </p>
              <blockquote className="italic border-l-4 border-marea-300 pl-4 py-2 my-4">
                'As for Zaratan, I have never met anyone who has seen it with their own eyes. There are sailors who 
                claim to have gone to certain islands, to see wooded valleys and cracks in the rock, and to have 
                landed to light a great fire; and that when the heat of the flames had reached the spine of the Zaratan, 
                he began to dive into the water with them above him, and with all the plants that grew there, until only 
                those able to swim could save themselves. It goes beyond even the bravest and most imaginative fictions.'
              </blockquote>
              <p className="text-center text-lg font-serif italic">
                And you, dear guests, can you see the Zaratan?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold font-serif text-gray-900">
              {t('home.gallery.title')}
            </h2>
            <Link to="/gallery" className="text-marea-600 hover:text-marea-800 font-medium">
              {t('home.gallery.viewAll')} →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Image 1 - Interior */}
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-soft">
              <img 
                src="/images/soggiorno1.jpg"
                alt="Interior View"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2 bg-white">
                <p className="text-gray-700 font-medium">Interior View</p>
              </div>
            </div>
            
            {/* Image 2 - Garden */}
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-soft">
              <img 
                src="/images/giardino.jpg"
                alt="Garden View"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2 bg-white">
                <p className="text-gray-700 font-medium">Garden View</p>
              </div>
            </div>
            
            {/* Image 3 - Pool */}
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-soft">
              <img 
                src="/images/piscina.jpg"
                alt="Pool Area"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2 bg-white">
                <p className="text-gray-700 font-medium">Pool Area</p>
              </div>
            </div>
            
            {/* Image 4 - Sea View */}
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-soft">
              <img 
                src="/images/mare1.jpg"
                alt="Sea View"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2 bg-white">
                <p className="text-gray-700 font-medium">Sea View</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold font-serif mb-6 text-gray-900">
                {t('home.location.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('home.location.description')}
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    View on Maps
                  </a>
                </Button>
                <Button asChild>
                  <Link to="/guest-info">
                    Local Guide
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-soft">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193806.07562748092!2d9.045886303173817!3d40.92580597930576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d99036ffd5f2a1%3A0x10ffed8070a1814!2sOlbia%2C%20Province%20of%20Sassari%2C%20Italy!5e0!3m2!1sen!2sus!4v1714350133381!5m2!1sen!2sus" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-marea-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Ready for an unforgettable vacation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay at Casa Zaratan today and experience the beauty of Sardinia.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/booking">
              {t('common.bookNow')}
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
