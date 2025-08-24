import { useLanguage } from "@/context/LanguageContext";
import { Star } from "lucide-react";

const Reviews = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      id: 1,
      name: "Marco & Elena",
      country: "Italy",
      rating: 5,
      date: "September 2024",
      text: "Un soggiorno fantastico! La villa è perfetta, con una vista mozzafiato sul mare. La piscina privata e l'accesso diretto alla spiaggia hanno reso la nostra vacanza indimenticabile.",
      avatar: "M"
    },
    {
      id: 2,
      name: "James & Sarah",
      country: "UK",
      rating: 5,
      date: "August 2024",
      text: "Absolutely stunning villa! The location is perfect - we could walk to the beach in minutes. The house was immaculate and had everything we needed. Will definitely return!",
      avatar: "J"
    },
    {
      id: 3,
      name: "Familie Schmidt",
      country: "Germany",
      rating: 5,
      date: "July 2024",
      text: "Wundervolle Ferien mit der ganzen Familie! Das Haus ist sehr geräumig und der private Pool war perfekt für die Kinder. Die Gastgeber waren sehr hilfsbereit.",
      avatar: "F"
    },
    {
      id: 4,
      name: "Pierre & Marie",
      country: "France",
      rating: 5,
      date: "June 2024",
      text: "Villa exceptionnelle avec une vue magnifique sur la mer. L'emplacement est idéal pour explorer la côte sarde. Nous recommandons vivement cette propriété!",
      avatar: "P"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-gray-900">
            {t('home.testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what our guests say about their unforgettable stays at Casa Zaratan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-soft hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-marea-600 text-white rounded-full flex items-center justify-center font-semibold text-lg">
                    {review.avatar}
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{review.country} • {review.date}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-soft">
            <div className="flex mr-3">
              {renderStars(5)}
            </div>
            <span className="text-sm font-medium text-gray-700">
              4.9/5 • Based on 127+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;