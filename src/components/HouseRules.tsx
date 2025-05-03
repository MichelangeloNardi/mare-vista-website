
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";

const HouseRules = () => {
  const { t } = useLanguage();
  
  const rules = [
    "Do not sit on sofas and armchairs with wet suits/clothes/towels",
    "Take a shower before entering the pool so as not to bring sunscreen, sand or other dirt",
    "Rewind the curtain if you are not at home; the wind can suddenly rise and tear it",
    "Turn off the air conditioning and lights when you're not home or when you don't need them",
    "Close the windows if the air conditioning is on",
    "After 11 pm respect the sleep of the neighbours and the tranquillity of the place",
    "MAKE A SEPARATE COLLECTION: place the bins outside the portal on the days indicated in the calendar. A penalty of €100 will be applied if guests leave garbage in the house or leave the stove dirty. The sign with the precise days of the collection is available in the house",
    "The house is non-smoking",
    "Consume ecologically: do not waste water and electricity",
    "€20 per person per stay for bed linen and towels to be paid separately in cash upon check-in"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-6 text-center">House Rules</h2>
          <p className="text-gray-600 text-center mb-8">
            10 simple rules to follow to fully enjoy your stay and enjoy the magic of the place
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <ol className="list-decimal pl-5 space-y-4">
              {rules.map((rule, index) => (
                <li key={index} className="text-gray-700 pl-2">
                  {rule}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseRules;
