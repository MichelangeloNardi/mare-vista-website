
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Wifi, Pool, Kitchen, ParkingMeter, Accessibility, Bed } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VillaDetailsPage = () => {
  const { t } = useLanguage();

  const amenities = [
    { name: t('villaDetails.amenities.wifi'), icon: <Wifi /> },
    { name: t('villaDetails.amenities.pool'), icon: <Pool /> },
    { name: t('villaDetails.amenities.kitchen'), icon: <Kitchen /> },
    { name: t('villaDetails.amenities.parking'), icon: <ParkingMeter /> },
    { name: t('villaDetails.amenities.beach'), icon: <Accessibility /> },
    { name: t('villaDetails.amenities.ac'), icon: <Bed /> },
  ];

  return (
    <>
      <SEO 
        title={`${t('villaDetails.title')} | Villa del Mare`}
        description={t('villaDetails.description')}
      />
      
      {/* Header */}
      <section className="py-16 bg-marea-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {t('villaDetails.title')}
          </h1>
          <p className="text-xl max-w-3xl">
            {t('villaDetails.description')}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold font-serif mb-6">
                {t('villaDetails.overview')}
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Villa del Mare is a luxurious beachfront property located on the pristine coast of Sardinia, offering an unparalleled vacation experience. The villa spans over 350 square meters with spacious interiors designed with both comfort and elegance in mind.
                </p>
                <p className="mb-4">
                  The property features 3 bedrooms accommodating up to 8 guests, a large living room with panoramic sea views, a fully equipped modern kitchen, and multiple outdoor spaces perfect for relaxation and entertainment.
                </p>
                <p>
                  Situated just steps from the beach, the villa offers direct access to crystal-clear waters and is surrounded by lush Mediterranean gardens, creating a private oasis for your holiday.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg h-full">
                <img 
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                  alt="Villa Overview" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
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
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
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
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
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

      {/* Accessibility */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold font-serif mb-8 text-center">
            {t('villaDetails.accessibility.title')}
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-soft">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Accessibility className="w-6 h-6 text-marea-600" />
              </div>
              <div>
                <p className="text-gray-600">
                  {t('villaDetails.accessibility.description')}
                </p>
                <p className="mt-4 text-gray-600">
                  Additional accessibility features include:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Wider doorways in ground floor areas</li>
                  <li>Grab bars in ground floor bathroom</li>
                  <li>Step-free shower on ground floor</li>
                  <li>Exterior pathway lighting</li>
                  <li>Elevator access to upper floors</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  Please contact us in advance if you have specific accessibility requirements, and we'll do our best to accommodate your needs.
                </p>
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
              <AccordionTrigger>How many guests can the villa accommodate?</AccordionTrigger>
              <AccordionContent>
                Villa del Mare can comfortably accommodate up to 8 guests with 3 bedrooms and sofa beds in the living area.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is the villa suitable for children?</AccordionTrigger>
              <AccordionContent>
                Yes, the villa is family-friendly with amenities suitable for children such as a secure garden area and shallow pool section. We can provide cribs and high chairs upon request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How close is the beach?</AccordionTrigger>
              <AccordionContent>
                The villa offers direct beach access. A private path leads from the villa's garden directly to the beach, which is approximately 50 meters away.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is there parking available?</AccordionTrigger>
              <AccordionContent>
                Yes, the villa provides free private parking with space for up to 3 vehicles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What is included in the rental price?</AccordionTrigger>
              <AccordionContent>
                The rental price includes accommodation, utilities (water, electricity, gas), WiFi, weekly cleaning service, and bed linens and towels. Additional services such as daily cleaning, private chef, or airport transfers are available for an extra charge.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-marea-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Ready to experience Villa del Mare?
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
