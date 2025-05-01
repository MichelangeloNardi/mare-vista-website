
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SEO from "@/components/SEO";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GalleryPage = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    { id: "livingRoom", name: t('gallery.livingRoom') },
    { id: "bedrooms", name: t('gallery.bedrooms') },
    { id: "kitchen", name: t('gallery.kitchen') },
    { id: "outdoor", name: t('gallery.outdoor') },
    { id: "views", name: t('gallery.views') },
  ];

  const galleryImages = {
    livingRoom: [
      { src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21", alt: "Living Room Sea View" },
      { src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb", alt: "Living Room Lounge" },
      { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", alt: "Living Room Dining Area" },
    ],
    bedrooms: [
      { src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21", alt: "Master Bedroom" },
      { src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb", alt: "Second Bedroom" },
      { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", alt: "Third Bedroom" },
    ],
    kitchen: [
      { src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21", alt: "Kitchen Main View" },
      { src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb", alt: "Kitchen Dining Area" },
      { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", alt: "Kitchen Appliances" },
    ],
    outdoor: [
      { src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21", alt: "Pool Area" },
      { src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb", alt: "Garden" },
      { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", alt: "Terrace" },
    ],
    views: [
      { src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21", alt: "Sea View" },
      { src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb", alt: "Beach View" },
      { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", alt: "Sunset View" },
    ],
  };

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SEO 
        title={`${t('gallery.title')} | Villa del Mare`}
        description="Browse our gallery of Villa del Mare - luxury beachfront villa in Sardinia."
      />
      
      {/* Header */}
      <section className="py-16 bg-marea-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {t('gallery.title')}
          </h1>
          <p className="text-xl max-w-3xl">
            Explore our beautiful villa through our image gallery. Click on any image to enlarge.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="livingRoom" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="overflow-x-auto sm:overflow-visible grid sm:grid-flow-col gap-4">
                {galleryCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {Object.entries(galleryImages).map(([category, images]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((image, index) => (
                    <div 
                      key={index} 
                      className="rounded-lg overflow-hidden shadow-soft cursor-pointer hover-scale"
                      onClick={() => openImage(image.src)}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                      <div className="p-4 bg-white">
                        <p className="text-gray-700 font-medium">{image.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeImage}>
        <DialogContent className="max-w-screen-lg p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Villa del Mare" 
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryPage;
