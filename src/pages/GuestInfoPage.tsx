
import { useLanguage } from "@/context/LanguageContext";
import SEO from "@/components/SEO";
import { MapPin, Phone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GuestInfoPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO 
        title={`${t('guestInfo.title')} | Casa Zaratan`}
        description="Essential information for guests staying at Casa Zaratan"
      />
      
      {/* Header */}
      <section className="py-16 bg-marea-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            Guest Information
          </h1>
          <p className="text-xl max-w-3xl">
            Everything you need to know to make your stay at Casa Zaratan comfortable and enjoyable.
          </p>
        </div>
      </section>

      {/* Check-in & Out */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold font-serif mb-8 text-center">
            Check-in & Check-out
          </h2>
          <div className="bg-gray-50 rounded-lg p-6 shadow-soft mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Check-in</h3>
                <p className="text-gray-600 mb-2">Standard check-in time: 3:00 PM - 8:00 PM</p>
                <p className="text-gray-600">Our property manager will meet you at the villa to hand over the keys and show you around.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Check-out</h3>
                <p className="text-gray-600 mb-2">Check-out time: by 11:00 AM</p>
                <p className="text-gray-600">Please leave the keys on the dining table before you leave. Don't forget to close all windows and lock the door.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-soft">
            <h3 className="text-xl font-semibold mb-3">Accessibility Notes</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Step-free entrance to the main living area</li>
              <li>Ground floor bedroom and bathroom</li>
              <li>Wide doorways in common areas</li>
              <li>Please note there are some steps to access the pool area</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tabs for Local Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif mb-8 text-center">
            Local Guide
          </h2>
          
          <Tabs defaultValue="restaurants" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
              <TabsTrigger value="beaches">Beaches</TabsTrigger>
              <TabsTrigger value="services">Local Services</TabsTrigger>
              <TabsTrigger value="tours">Boat Tours</TabsTrigger>
            </TabsList>
            
            {/* Restaurants Tab */}
            <TabsContent value="restaurants">
              <div className="bg-white rounded-lg shadow-soft p-6">
                <div className="space-y-8">
                  {/* Pittulongu */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-marea-700">Pittulongu</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-bold text-lg">Il gatto fuori</h4>
                        <p className="text-gray-600">Restaurant/pizzeria (600 m from the house)</p>
                        <div className="flex items-center mt-2">
                          <MapPin className="text-marea-600 w-4 h-4 mr-1" />
                          <span className="text-gray-600 text-sm">Via Pittulongu 82</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone className="text-marea-600 w-4 h-4 mr-1" />
                          <span className="text-gray-600 text-sm">+39 333 762 4905</span>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-bold text-lg">Lo squalo</h4>
                        <p className="text-gray-600">Very nice on the beach</p>
                        <div className="flex items-center mt-2">
                          <MapPin className="text-marea-600 w-4 h-4 mr-1" />
                          <span className="text-gray-600 text-sm">Via degli Estesi 10</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone className="text-marea-600 w-4 h-4 mr-1" />
                          <span className="text-gray-600 text-sm">+39 0789 39021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Golfo Aranci */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-marea-700">Golfo Aranci</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-bold text-lg">Lo scorfano allegro</h4>
                        <p className="text-gray-600">Beautiful beachfront location</p>
                        <div className="flex items-center mt-1">
                          <Phone className="text-marea-600 w-4 h-4 mr-1" />
                          <span className="text-gray-600 text-sm">+39 333 137 6530</span>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-bold text-lg">La Perla</h4>
                        <p className="text-gray-600">An excellent fishmonger (eat on site)</p>
                        <div className="flex items-center mt-1">
                          <Phone className="text-marea-600 w-4 h-4 mr-1" />
                          <span className="text-gray-600 text-sm">+39 0789 46240</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Olbia */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-marea-700">Olbia</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-bold text-lg">Trattoria il Gambero</h4>
                        <div className="flex items-center mt-2">
                          <MapPin className="text-marea-600 w-4 h-4 mr-1" />
                          <span className="text-gray-600 text-sm">Via la Marmora 6/A</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone className="text-marea-600 w-4 h-4 mr-1" />
                          <span className="text-gray-600 text-sm">+39 0789 23874</span>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-bold text-lg">L'officina del gusto</h4>
                        <div className="flex items-center mt-2">
                          <MapPin className="text-marea-600 w-4 h-4 mr-1" />
                          <span className="text-gray-600 text-sm">Piazza Matteotti 1</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone className="text-marea-600 w-4 h-4 mr-1" />
                          <span className="text-gray-600 text-sm">+39 0789 28701</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* San Pantaleo */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-marea-700">San Pantaleo</h3>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <p className="text-gray-600">Ideal for an aperitif.</p>
                      <p className="text-gray-600 mt-2 font-semibold">Every Thursday from May to September: Craft Market</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Beaches Tab */}
            <TabsContent value="beaches">
              <div className="bg-white rounded-lg shadow-soft p-6">
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-bold mb-2">Bados</h3>
                    <p className="text-gray-600 mb-2">1.5 km from the house</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Café/restaurant on the beach</li>
                      <li>Bus connections available</li>
                    </ul>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-bold mb-2">Cala Moresca</h3>
                    <p className="text-gray-600 mb-2">12 km from the house</p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Walk to Promontorio di Capo Figari</li>
                    </ul>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-bold mb-2">Costa Smeralda: Capriccioli</h3>
                    <p className="text-gray-600">The best place of Costa Smeralda</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-bold mb-2">South of Olbia: Cala Brandinchi, Lo Impostu</h3>
                    <p className="text-gray-600">Large, wide, beautiful beaches</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tavolara Island</h3>
                    <p className="text-gray-600 mb-2">Boat from Porto San Paolo, 22 km away</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Beaches</li>
                      <li>Restaurants</li>
                      <li>Walks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Local Services Tab */}
            <TabsContent value="services">
              <div className="bg-white rounded-lg shadow-soft p-6">
                <h3 className="text-xl font-bold mb-6">Shopping & Services</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Nearby Convenience Store</h4>
                    <p className="text-gray-600">Little grocery within walking distance from the villa</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Centro commerciale Gallura</h4>
                    <p className="text-gray-600">7 minutes by car</p>
                    <p className="text-gray-600">Large supermarket and shopping mall</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Centro commerciale Terranova</h4>
                    <p className="text-gray-600">13 minutes by car</p>
                    <p className="text-gray-600">Shopping center with various stores and restaurants</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Guides & Extras</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600">Sardinia guides in different languages are at your disposal—please leave them in the house for the next guests.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Boat Tours Tab */}
            <TabsContent value="tours">
              <div className="bg-white rounded-lg shadow-soft p-6">
                <h3 className="text-xl font-bold mb-6">Boat Tours & Excursions</h3>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Antonello Nonne</h4>
                    <div className="flex items-center mt-1">
                      <Phone className="text-marea-600 w-4 h-4 mr-1" />
                      <span className="text-gray-600 text-sm">+39 348 854 4850 (FB)</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Aldo and Silvia (Olbia)</h4>
                    <div className="flex items-center mt-1">
                      <Phone className="text-marea-600 w-4 h-4 mr-1" />
                      <span className="text-gray-600 text-sm">+39 340 972 940</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Sardinia Blue Services (Cannigione)</h4>
                    <div className="flex items-center mt-1">
                      <Phone className="text-marea-600 w-4 h-4 mr-1" />
                      <span className="text-gray-600 text-sm">+39 331 752 9615</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Summer Service Boat Rental (Porto Rotondo)</h4>
                    <div className="flex items-center mt-1">
                      <Phone className="text-marea-600 w-4 h-4 mr-1" />
                      <span className="text-gray-600 text-sm">+39 344 1630659</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Cancellation Policy */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold font-serif mb-8 text-center">
            Cancellation Policy
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-soft">
            <p className="text-gray-600 mb-4">
              Free cancellation up to 30 days before check-in. If cancelled less than 30 days before check-in, 50% of the total amount will be refunded.
            </p>
            <p className="text-gray-600">
              No refund for cancellations less than 7 days before check-in or in case of no-show.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-marea-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Ready to book your stay?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the charm and comfort of Casa Zaratan in beautiful Sardinia.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/booking">
              Book Now
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default GuestInfoPage;
