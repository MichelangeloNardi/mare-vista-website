
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Wifi, Utensils, ParkingSquare, Accessibility, Bed, Waves } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HouseRules from "@/components/HouseRules";

const VillaDetailsPage = () => {
  const { t } = useLanguage();

  const amenities = [
    { name: t('villaDetails.amenities.wifi'), icon: <Wifi /> },
    { name: t('villaDetails.amenities.pool'), icon: <Waves /> },
    { name: t('villaDetails.amenities.kitchen'), icon: <Utensils /> },
    { name: t('villaDetails.amenities.parking'), icon: <ParkingSquare /> },
    { name: t('villaDetails.amenities.beach'), icon: <Accessibility /> },
    { name: t('villaDetails.amenities.ac'), icon: <Bed /> },
  ];

  return (
    <>
      <SEO 
        title={`${t('villaDetails.title')} | Casa Zaratan`}
        description={t('villaDetails.description')}
      />
      
      {/* Header */}
      <section className="py-16 bg-marea-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            Casa Zaratan
          </h1>
          <p className="text-xl max-w-3xl">
            Via Mar di Bering 4, Pittulongu
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold font-serif mb-6">
                Villa Overview
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Casa Zaratan is a luxurious beachfront property located on the pristine coast of Sardinia, offering an unparalleled vacation experience. The villa spans over 350 square meters with spacious interiors designed with both comfort and elegance in mind.
                </p>
                <p className="mb-4">
                  The property features spacious bedrooms, a large living room with panoramic sea views, a fully equipped modern kitchen, and multiple outdoor spaces perfect for relaxation and entertainment.
                </p>
                <p>
                  Situated just steps from the beach, the villa offers easy access to crystal-clear waters and is surrounded by lush Mediterranean gardens, creating a private oasis for your holiday.
                </p>
                <div className="mt-8 bg-marea-50 p-4 rounded-lg border border-marea-100">
                  <h3 className="font-bold text-marea-700 mb-2">Important Information</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><span className="font-semibold">WIFI SSID:</span> Zyxel_AA41</li>
                    <li><span className="font-semibold">Wireless Password:</span> 48KT47BX4D</li>
                    <li><span className="font-semibold">Emergency Number:</span> 112 (Single European number for emergencies: ambulances, police, carabinieri, fire brigade)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg h-full">
                <img 
                  src="/images/casa_zaratan_1.jpg" 
                  alt="Villa Overview" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* House Rules */}
      <HouseRules />

      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif mb-12 text-center">
            {t('villaDetails.amenities.title')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-soft flex flex-col items-center text-center hover-scale"
              >
                <div className="text-marea-600 mb-4">
                  {amenity.icon}
                </div>
                <span className="text-gray-900 font-medium">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif mb-12 text-center">
            {t('villaDetails.rooms.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Living Room */}
            <div className="bg-white rounded-lg shadow-soft overflow-hidden hover-scale">
              <img 
                src="/images/casa_zaratan_1.jpg" 
                alt="Living Room" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {t('villaDetails.rooms.livingRoom')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('villaDetails.rooms.livingRoom.description')}
                </p>
                <Link 
                  to="/gallery" 
                  className="text-marea-600 hover:text-marea-800 font-medium"
                >
                  {t('common.viewDetails')} →
                </Link>
              </div>
            </div>
            
            {/* Master Bedroom */}
            <div className="bg-white rounded-lg shadow-soft overflow-hidden hover-scale">
              <img 
                src="/images/casa_zaratan_2.jpg" 
                alt="Master Bedroom" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {t('villaDetails.rooms.masterBedroom')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('villaDetails.rooms.masterBedroom.description')}
                </p>
                <Link 
                  to="/gallery" 
                  className="text-marea-600 hover:text-marea-800 font-medium"
                >
                  {t('common.viewDetails')} →
                </Link>
              </div>
            </div>
            
            {/* Kitchen */}
            <div className="bg-white rounded-lg shadow-soft overflow-hidden hover-scale">
              <img 
                src="/images/casa_zaratan_3.jpg" 
                alt="Kitchen" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {t('villaDetails.rooms.kitchen')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('villaDetails.rooms.kitchen.description')}
                </p>
                <Link 
                  to="/gallery" 
                  className="text-marea-600 hover:text-marea-800 font-medium"
                >
                  {t('common.viewDetails')} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold font-serif mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What amenities does Casa Zaratan offer?</AccordionTrigger>
              <AccordionContent>
                Casa Zaratan features a private pool, modern fully equipped kitchen, comfortable bedrooms with premium linens, high-speed WiFi (Zyxel_AA41), air conditioning, and easy access to nearby beaches.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is the villa suitable for children?</AccordionTrigger>
              <AccordionContent>
                Yes, Casa Zaratan is family-friendly with amenities suitable for children such as a secure garden area and pool. We can provide additional items for children upon request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How close is the beach?</AccordionTrigger>
              <AccordionContent>
                The nearest beach is approximately 1.5 km from the villa. Bados beach has a café and restaurant on site and can be reached by a short car ride or bus connection.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is there parking available?</AccordionTrigger>
              <AccordionContent>
                Yes, Casa Zaratan provides free private parking on the premises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What is included in the rental price?</AccordionTrigger>
              <AccordionContent>
                The rental price includes accommodation, utilities (water, electricity, gas), and WiFi. Bed linens and towels cost €20 per person per stay, to be paid in cash upon check-in.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-marea-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Ready to experience Casa Zaratan?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your dream vacation in Sardinia now and enjoy all that our luxury villa has to offer.
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

export default VillaDetailsPage;
