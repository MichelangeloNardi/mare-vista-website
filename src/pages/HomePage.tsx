
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Wifi, Pool, Home, MapPin } from "lucide-react";

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
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in">
            {t('home.subtitle')}
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
                  <Pool className="w-6 h-6 text-marea-600" />
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

      {/* Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold font-serif text-gray-900">
              {t('home.gallery.title')}
            </h2>
            <Link to="/gallery" className="text-marea-600 hover:text-marea-800 font-medium">
              {t('home.gallery.viewAll')} →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                alt="Villa View"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 2 */}
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                alt="Villa Pool"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 3 */}
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
                alt="Villa Interior"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
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
            Book your stay at Villa del Mare today and experience the beauty of Sardinia.
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
