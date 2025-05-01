
import { useLanguage } from "@/context/LanguageContext";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GuestInfoPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO 
        title={`${t('guestInfo.title')} | Villa del Mare`}
        description="Important information for guests staying at Villa del Mare - check-in, rules, local guide, and more."
      />
      
      {/* Header */}
      <section className="py-16 bg-marea-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {t('guestInfo.title')}
          </h1>
          <p className="text-xl max-w-3xl">
            Everything you need to know for a perfect stay at Villa del Mare.
          </p>
        </div>
      </section>

      {/* Check-in & Check-out */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">
                  {t('guestInfo.checkIn.title')}
                </CardTitle>
                <CardDescription>
                  Important information about arrival and departure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 mb-2">
                      {t('guestInfo.checkIn.time')}
                    </p>
                    <p className="text-gray-600">
                      Please contact us if you plan to arrive outside these hours.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 mb-2">
                      {t('guestInfo.checkOut.time')}
                    </p>
                    <p className="text-gray-600">
                      Late check-out may be available upon request, subject to availability.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium text-lg mb-2">Check-in Process:</h3>
                  <p className="text-gray-600 mb-4">
                    {t('guestInfo.checkIn.process')}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">What to bring:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Your ID or passport</li>
                      <li>Booking confirmation</li>
                      <li>Credit card for security deposit</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* House Rules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center">
              {t('guestInfo.rules.title')}
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {t('guestInfo.rules.smoking')}
                </AccordionTrigger>
                <AccordionContent>
                  Smoking is strictly prohibited inside the villa. Guests are welcome to smoke in the designated outdoor areas where ashtrays are provided. Please dispose of cigarette butts properly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  {t('guestInfo.rules.pets')}
                </AccordionTrigger>
                <AccordionContent>
                  Well-behaved pets are welcome at Villa del Mare. Please let us know in advance if you're bringing a pet. Additional cleaning fees may apply. Pets must not be left unattended in the villa, and owners are responsible for cleaning up after their pets.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  {t('guestInfo.rules.parties')}
                </AccordionTrigger>
                <AccordionContent>
                  To maintain the peaceful atmosphere of the villa and respect our neighbors, we do not allow parties or events without prior approval. If you wish to host a special gathering, please contact us in advance to discuss the details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  {t('guestInfo.rules.quiet')}
                </AccordionTrigger>
                <AccordionContent>
                  We ask that all guests observe quiet hours from 10:00 PM to 8:00 AM out of respect for our neighbors and other guests. During this time, please keep noise levels to a minimum, particularly in outdoor areas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Villa Care
                </AccordionTrigger>
                <AccordionContent>
                  Please treat the villa and its contents with care. Any damage beyond normal wear and tear may result in charges. Turn off lights, air conditioning, and appliances when not in use. Close and lock all windows and doors when leaving the villa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">
                  {t('guestInfo.cancellation.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {t('guestInfo.cancellation.description')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-1/3 font-medium">Cancellation Window</div>
                    <div className="w-2/3">Refund Amount</div>
                  </div>
                  <div className="flex items-center p-4 border-b">
                    <div className="w-1/3">More than 30 days before check-in</div>
                    <div className="w-2/3 text-green-600">100% refund</div>
                  </div>
                  <div className="flex items-center p-4 border-b">
                    <div className="w-1/3">15-30 days before check-in</div>
                    <div className="w-2/3 text-amber-600">50% refund</div>
                  </div>
                  <div className="flex items-center p-4 border-b">
                    <div className="w-1/3">Less than 15 days before check-in</div>
                    <div className="w-2/3 text-red-600">No refund</div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-gray-500">
                  For cancellations due to exceptional circumstances (such as travel restrictions or health emergencies), please contact us directly to discuss options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif mb-8 text-center">
            {t('guestInfo.localGuide.title')}
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="beaches">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="beaches">Beaches</TabsTrigger>
                <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
                <TabsTrigger value="attractions">Attractions</TabsTrigger>
              </TabsList>
              
              {/* Beaches Tab */}
              <TabsContent value="beaches" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>La Pelosa</CardTitle>
                      <CardDescription>5 km from Villa del Mare</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                        alt="La Pelosa Beach" 
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="text-gray-600">
                        Often compared to the Caribbean for its crystal-clear turquoise waters and white sand. Perfect for families due to its shallow waters. Reservation required in peak season.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Cala Brandinchi</CardTitle>
                      <CardDescription>8 km from Villa del Mare</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                        alt="Cala Brandinchi Beach" 
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="text-gray-600">
                        Known as "Little Tahiti" for its stunning colors. Fine white sand and shallow waters make it ideal for swimming. Surrounded by pine forest providing natural shade.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Lu Impostu</CardTitle>
                      <CardDescription>10 km from Villa del Mare</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                        alt="Lu Impostu Beach" 
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="text-gray-600">
                        A long stretch of fine sand with stunning views. Less crowded than other nearby beaches. Backed by a lagoon and surrounded by Mediterranean vegetation.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Private Beach Access</CardTitle>
                      <CardDescription>Direct access from villa</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                        alt="Private Beach" 
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="text-gray-600">
                        Villa del Mare offers direct access to a semi-private beach. A path from the garden leads directly to this beautiful sandy stretch where sunbeds and umbrellas are provided for our guests.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Restaurants Tab */}
              <TabsContent value="restaurants" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>La Pinnetta</CardTitle>
                      <CardDescription>Seafood, 3 km</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Beachfront restaurant specializing in fresh seafood with stunning sunset views. Known for their seafood pasta and local wines.
                      </p>
                      <div className="flex items-center space-x-2 text-sm">
                        <span>€€€</span>
                        <span>•</span>
                        <span>Reservation recommended</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Il Pescatore</CardTitle>
                      <CardDescription>Traditional, 5 km</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Family-run restaurant offering traditional Sardinian cuisine. Their suckling pig and homemade pasta are local favorites.
                      </p>
                      <div className="flex items-center space-x-2 text-sm">
                        <span>€€</span>
                        <span>•</span>
                        <span>Open for lunch and dinner</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Da Tonino</CardTitle>
                      <CardDescription>Pizza, 2 km</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Casual pizzeria with wood-fired ovens. Great for families and offers authentic Italian pizza with a variety of toppings.
                      </p>
                      <div className="flex items-center space-x-2 text-sm">
                        <span>€</span>
                        <span>•</span>
                        <span>Takeaway available</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Agriturismo Su Gologone</CardTitle>
                      <CardDescription>Farm-to-table, 20 km</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Worth the drive for an authentic agriturismo experience. All produce comes from their farm and the menu changes daily based on what's fresh.
                      </p>
                      <div className="flex items-center space-x-2 text-sm">
                        <span>€€</span>
                        <span>•</span>
                        <span>Reservation essential</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Attractions Tab */}
              <TabsContent value="attractions" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>La Maddalena Archipelago</CardTitle>
                      <CardDescription>Boat trip, 30 km</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                        alt="La Maddalena" 
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="text-gray-600">
                        A stunning national park consisting of seven main islands with pink beaches and clear waters. Day trips available from nearby ports.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Tharros Archaeological Site</CardTitle>
                      <CardDescription>Historical, 45 km</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                        alt="Tharros" 
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="text-gray-600">
                        Ancient Phoenician and Roman ruins in a spectacular coastal setting. Visit in the late afternoon for stunning sunset views over the ruins.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Neptune's Caves</CardTitle>
                      <CardDescription>Natural wonder, 60 km</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                        alt="Neptune's Caves" 
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="text-gray-600">
                        Spectacular marine caves with impressive stalactites and stalagmites. Accessible by boat or via 656 steps from the cliff top.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Wine Tasting Tour</CardTitle>
                      <CardDescription>Culinary, 15 km</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                        alt="Wine Tasting" 
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="text-gray-600">
                        Visit local vineyards to sample Sardinian wines like Cannonau and Vermentino. Tours can be arranged with transportation included.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuestInfoPage;
