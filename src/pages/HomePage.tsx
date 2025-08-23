
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import { useScrollAnimation, useIntersectionObserver, useCountUp } from "@/hooks/useScrollAnimation";
import { Wifi, Home, MapPin, Waves } from "lucide-react";

const HomePage = () => {
  const { t } = useLanguage();
  const scrollY = useScrollAnimation();
  const [statsRef, statsInView] = useIntersectionObserver();
  const [guestsCount, setGuestsActive] = useCountUp(500);
  const [yearsCount, setYearsActive] = useCountUp(15);
  const [reviewsCount, setReviewsActive] = useCountUp(98);

  // Trigger counters when stats section comes into view
  if (statsInView && guestsCount === 0) {
    setGuestsActive(true);
    setYearsActive(true);
    setReviewsActive(true);
  }

  return (
    <>
      <SEO 
        title={`${t('home.title')} | ${t('home.subtitle')}`}
        description={t('home.description')}
      />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-[80vh] bg-hero-pattern bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 hero-overlay" style={{ transform: `translateY(${scrollY * -0.3}px)` }}></div>
        <ParallaxSection speed={-0.1}>
          <div className="relative container mx-auto px-4 h-[80vh] flex flex-col justify-center items-center text-center text-white">
            <ScrollReveal direction="fade" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
                {t('home.title')}
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={400}>
              <p className="text-xl md:text-2xl mb-3 max-w-2xl">
                {t('home.subtitle')}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={600}>
              <p className="text-lg md:text-xl mb-8">
                Pittulongu, Olbia
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={800}>
              <Button asChild size="lg" className="hover:scale-105 transition-transform duration-300">
                <Link to="/booking">
                  {t('home.cta')}
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </ParallaxSection>
      </section>

      {/* Villa Description with Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-gray-900">
                {t('home.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                {t('home.description')}
              </p>
            </div>
          </ScrollReveal>
          
          {/* Animated Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center">
                <div className="text-4xl font-bold text-marea-600 mb-2">{guestsCount}+</div>
                <div className="text-gray-600">Happy Guests</div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={400}>
              <div className="text-center">
                <div className="text-4xl font-bold text-marea-600 mb-2">{yearsCount}</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={600}>
              <div className="text-center">
                <div className="text-4xl font-bold text-marea-600 mb-2">{reviewsCount}%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* Features with Staggered Animation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center text-gray-900">
              {t('home.features.title')}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white p-4 rounded-lg shadow-soft hover-scale">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-marea-100 p-3 rounded-full mb-3">
                    <Home className="w-5 h-5 text-marea-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t('home.features.bedrooms')}</h3>
                  <p className="text-gray-600 text-sm">
                    Enjoy our spacious and comfortable bedrooms with premium bedding and sea views.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Feature 2 */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white p-4 rounded-lg shadow-soft hover-scale">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-marea-100 p-3 rounded-full mb-3">
                    <Waves className="w-5 h-5 text-marea-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t('home.features.pool')}</h3>
                  <p className="text-gray-600 text-sm">
                    Relax in our private pool with panoramic views of the Mediterranean Sea.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Feature 3 */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white p-4 rounded-lg shadow-soft hover-scale">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-marea-100 p-3 rounded-full mb-3">
                    <MapPin className="w-5 h-5 text-marea-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t('home.features.beach')}</h3>
                  <p className="text-gray-600 text-sm">
                    Direct access to a pristine beach just steps away from your door.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Feature 4 */}
            <ScrollReveal direction="up" delay={400}>
              <div className="bg-white p-4 rounded-lg shadow-soft hover-scale">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-marea-100 p-3 rounded-full mb-3">
                    <Wifi className="w-5 h-5 text-marea-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t('home.features.wifi')}</h3>
                  <p className="text-gray-600 text-sm">
                    Stay connected with complimentary high-speed WiFi throughout the property.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* Gallery Preview with Image Reveals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold font-serif text-gray-900">
                {t('home.gallery.title')}
              </h2>
              <Link to="/gallery" className="text-marea-600 hover:text-marea-800 font-medium story-link">
                {t('home.gallery.viewAll')} →
              </Link>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Image 1 - Interior */}
            <ScrollReveal direction="left" delay={100}>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-soft group">
                <img 
                  src="/images/soggiorno1.jpg"
                  alt="Interior View"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-2 bg-white">
                  <p className="text-gray-700 font-medium">Interior View</p>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Image 2 - Garden */}
            <ScrollReveal direction="up" delay={200}>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-soft group">
                <img 
                  src="/images/giardino.jpg"
                  alt="Garden View"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-2 bg-white">
                  <p className="text-gray-700 font-medium">Garden View</p>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Image 3 - Pool */}
            <ScrollReveal direction="up" delay={300}>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-soft group">
                <img 
                  src="/images/piscina.jpg"
                  alt="Pool Area"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-2 bg-white">
                  <p className="text-gray-700 font-medium">Pool Area</p>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Image 4 - Sea View */}
            <ScrollReveal direction="right" delay={400}>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-soft group">
                <img 
                  src="/images/mare1.jpg"
                  alt="Sea View"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-2 bg-white">
                  <p className="text-gray-700 font-medium">Sea View</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* History & Story with Progressive Text Reveal */}
      <section className="py-16 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: "url('/src/assets/ancient-map-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/90 via-amber-800/80 to-amber-900/95" style={{ transform: `translateY(${scrollY * 0.2}px)` }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="fade" delay={200}>
              <h2 className="text-4xl font-bold font-serif mb-8 text-center text-amber-100 drop-shadow-lg tracking-wide">
                The History of Zaratan
              </h2>
            </ScrollReveal>
            <div className="prose max-w-none mx-auto text-amber-50 leading-relaxed">
              <ScrollReveal direction="up" delay={300}>
                <p className="mb-4 text-lg drop-shadow-md font-medium">
                  Whale Island or Zaratan is a legendary sea monster, in the form of a huge whale or turtle. 
                  Its size is such that sailors can mistake it for an island and land there. If the Zaratan remains at 
                  the water's edge for a long time, its back can become covered with vegetation.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={500}>
                <p className="mb-4 text-lg drop-shadow-md font-medium">
                  The myth of an island-sized sea monster, which could be mistaken for an island by sailors, 
                  dates back at least to Norse mythology (the Örvar-Odds Saga and the Konungs skuggsjá) and 
                  unites Zaratan with other famous sea monsters, especially the Kraken. However, the Kraken is 
                  usually not depicted as a fish, but as an octopus or crab.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={700}>
                <p className="mb-4 text-lg drop-shadow-md font-medium">
                  An island whale appears in One Thousand and One Nights and meets Sindbad on his first voyage. 
                  The first reference to this monster in a non-fiction work dates back to about the same time, 
                  that is, in the ninth century. Al-Jahiz, an Arab zoologist, noted in his Book of animals:
                </p>
              </ScrollReveal>
              <ScrollReveal direction="fade" delay={900}>
                <blockquote className="italic border-l-4 border-amber-200 pl-6 py-4 my-6 bg-amber-900/50 rounded-r-lg backdrop-blur-sm shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <span className="text-xl font-serif text-amber-100 leading-relaxed drop-shadow-md">
                    'As for Zaratan, I have never met anyone who has seen it with their own eyes. There are sailors who 
                    claim to have gone to certain islands, to see wooded valleys and cracks in the rock, and to have 
                    landed to light a great fire; and that when the heat of the flames had reached the spine of the Zaratan, 
                    he began to dive into the water with them above him, and with all the plants that grew there, until only 
                    those able to swim could save themselves. It goes beyond even the bravest and most imaginative fictions.'
                  </span>
                </blockquote>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={1100}>
                <p className="text-center text-xl font-serif italic text-amber-200 drop-shadow-lg font-bold animate-pulse">
                  And you, dear guests, can you see the Zaratan?
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Location with Slide-in Effects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <ScrollReveal direction="left" className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold font-serif mb-6 text-gray-900">
                {t('home.location.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('home.location.description')}
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-300">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    View on Maps
                  </a>
                </Button>
                <Button asChild className="hover:scale-105 transition-transform duration-300">
                  <Link to="/guest-info">
                    Local Guide
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300">
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section with Final Animation */}
      <section className="py-16 bg-marea-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-marea-800 to-marea-600" style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal direction="up" delay={200}>
            <h2 className="text-3xl font-bold font-serif mb-6">
              Ready for an unforgettable vacation?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your stay at Casa Zaratan today and experience the beauty of Sardinia.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={600}>
            <Button size="lg" variant="secondary" asChild className="hover:scale-110 transition-transform duration-300 animate-pulse">
              <Link to="/booking">
                {t('common.bookNow')}
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default HomePage;
