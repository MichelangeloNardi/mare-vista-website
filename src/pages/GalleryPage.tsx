
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SEO from "@/components/SEO";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GalleryPage = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    { id: "interior", name: "Interior" },
    { id: "garden", name: "Garden" },
    { id: "pool", name: "Pool" },
    { id: "nearby", name: "Nearby Sea" },
  ];

  const galleryImages = {
    interior: [
      { src: "/images/soggiorno1(1).png", alt: "Living Room" },
      { src: "/images/soggiorno1(2).png", alt: "Living Room" },
      { src: "/images/camera1(1).png", alt: "Master Bedroom" },
    ],
    garden: [
      { src: "/images/casa_zaratan_1.jpg", alt: "Garden View" },
      { src: "/images/casa_zaratan_2.jpg", alt: "Outdoor Dining Area" },
      { src: "/images/casa_zaratan_3.jpg", alt: "Garden Terrace" },
    ],
    pool: [
      { src: "/images/casa_zaratan_3.jpg", alt: "Pool View" },
      { src: "/images/casa_zaratan_4.jpg", alt: "Pool Lounge Area" },
      { src: "/images/casa_zaratan_1.jpg", alt: "Pool at Sunset" },
    ],
    nearby: [
      { src: "/images/casa_zaratan_4.jpg", alt: "Sea View at Sunset" },
      { src: "/images/casa_zaratan_3.jpg", alt: "Beach View" },
      { src: "/images/casa_zaratan_2.jpg", alt: "Coastal Path" },
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
        title={`${t('gallery.title')} | Casa Zaratan`}
        description="Browse our gallery of Casa Zaratan - luxury villa in Sardinia."
      />
      
      {/* Header */}
      <section className="py-16 bg-marea-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl max-w-3xl">
            Explore Casa Zaratan through our image gallery. Click on any image to enlarge.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="interior" className="w-full">
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
              alt="Casa Zaratan" 
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryPage;
