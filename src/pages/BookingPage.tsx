
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const BookingPage = () => {
  const { t } = useLanguage();
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();
  const [guestsCount, setGuestsCount] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Dummy pricing function - in a real app, this would be fetched from a backend
  const calculatePrice = () => {
    if (!checkInDate || !checkOutDate) return { nightlyRate: 350, total: 0 };
    
    const nights = Math.round((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
    const baseRate = 350; // Base rate in EUR
    const seasonMultiplier = checkInDate.getMonth() >= 5 && checkInDate.getMonth() <= 8 ? 1.5 : 1; // Summer season
    const guestsMultiplier = parseInt(guestsCount) > 4 ? 1.2 : 1; // More guests
    
    const nightlyRate = Math.round(baseRate * seasonMultiplier * guestsMultiplier);
    const total = nights * nightlyRate;
    
    return { nightlyRate, total };
  };

  const { nightlyRate, total } = calculatePrice();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!checkInDate || !checkOutDate || !name || !email || !phone || !agreedToTerms) {
      alert("Please fill in all required fields and agree to terms and conditions.");
      return;
    }
    
    // Show loading state
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, send data to backend here
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("There was an error processing your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title={`${t('booking.title')} | Villa del Mare`}
        description="Book your stay at Villa del Mare, luxury beachfront villa in Sardinia."
      />
      
      {/* Header */}
      <section className="py-16 bg-marea-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {t('booking.title')}
          </h1>
          <p className="text-xl max-w-3xl">
            Check availability and book your stay at Villa del Mare.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {submitted ? (
              <div className="bg-green-50 p-8 rounded-lg shadow-soft text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold font-serif mb-4">
                  Thank You for Your Booking Request!
                </h2>
                <p className="text-lg mb-6">
                  We have received your booking request for Villa del Mare. Our team will review your request and get back to you within 24 hours to confirm your reservation.
                </p>
                <p className="text-lg mb-8">
                  Please check your email ({email}) for further details. If you have any questions, feel free to contact us.
                </p>
                <Button onClick={() => setSubmitted(false)}>
                  Make Another Booking
                </Button>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Date Selection and Price Calculator */}
                <div className="lg:w-1/2">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-soft mb-8">
                    <h2 className="text-2xl font-bold font-serif mb-6">
                      {t('booking.availability')}
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Check-in Date */}
                      <div>
                        <Label htmlFor="check-in">{t('booking.checkIn')}</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              id="check-in"
                              variant="outline"
                              className="w-full justify-start text-left mt-2"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkInDate ? (
                                format(checkInDate, "PPP")
                              ) : (
                                <span>{t('booking.selectDates')}</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={checkInDate}
                              onSelect={setCheckInDate}
                              disabled={(date) => 
                                date < new Date() || 
                                (checkOutDate ? date >= checkOutDate : false)
                              }
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      {/* Check-out Date */}
                      <div>
                        <Label htmlFor="check-out">{t('booking.checkOut')}</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              id="check-out"
                              variant="outline"
                              className="w-full justify-start text-left mt-2"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkOutDate ? (
                                format(checkOutDate, "PPP")
                              ) : (
                                <span>{t('booking.selectDates')}</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={checkOutDate}
                              onSelect={setCheckOutDate}
                              disabled={(date) => 
                                date <= new Date() || 
                                (checkInDate ? date <= checkInDate : false)
                              }
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      {/* Guests */}
                      <div>
                        <Label htmlFor="guests">{t('booking.guests')}</Label>
                        <Select value={guestsCount} onValueChange={setGuestsCount}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select number of guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'guest' : 'guests'}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price Calculator */}
                  {checkInDate && checkOutDate && (
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-soft">
                      <h2 className="text-2xl font-bold font-serif mb-6">
                        {t('booking.price')}
                      </h2>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>€{nightlyRate} x {Math.round((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))} nights</span>
                          <span>€{total}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Cleaning fee</span>
                          <span>€150</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Service fee</span>
                          <span>€{Math.round(total * 0.1)}</span>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200 flex justify-between items-center font-bold">
                          <span>{t('booking.total')}</span>
                          <span>€{total + 150 + Math.round(total * 0.1)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Booking Form */}
                <div className="lg:w-1/2">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-soft">
                    <h2 className="text-2xl font-bold font-serif mb-6">
                      {t('booking.form.title')}
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">{t('booking.form.name')}*</Label>
                        <Input 
                          id="name" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mt-2"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">{t('booking.form.email')}*</Label>
                        <Input 
                          id="email" 
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-2"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">{t('booking.form.phone')}*</Label>
                        <Input 
                          id="phone" 
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="mt-2"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">{t('booking.form.message')}</Label>
                        <Textarea 
                          id="message" 
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="mt-2"
                          rows={4}
                        />
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="terms" 
                          checked={agreedToTerms}
                          onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          {t('booking.form.termsAgree')}*
                        </Label>
                      </div>
                      
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Processing..." : t('booking.form.submit')}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
