
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Please enter a valid phone number." }),
  guests: z.string().min(1, { message: "Please enter number of guests." }),
  checkIn: z.date({ required_error: "Check-in date is required." }),
  checkOut: z.date({ required_error: "Check-out date is required." }),
  message: z.string().optional(),
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

const BookingPage = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState("standard");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: "",
      message: "",
      terms: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Booking Request Submitted",
      description: "We'll contact you shortly to confirm your reservation.",
    });
    // In a real application, this would submit to a backend API
  };

  const calculatePrice = () => {
    const checkIn = form.getValues("checkIn");
    const checkOut = form.getValues("checkOut");
    const guests = parseInt(form.getValues("guests") || "1");
    
    if (!checkIn || !checkOut) return 0;
    
    // Calculate number of days
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Base price per night
    let basePrice = 0;
    switch (selectedPrice) {
      case "economy":
        basePrice = 150;
        break;
      case "standard":
        basePrice = 200;
        break;
      case "premium":
        basePrice = 300;
        break;
      default:
        basePrice = 200;
    }
    
    // Additional guest fee
    const additionalGuestFee = Math.max(0, guests - 2) * 25;
    
    // Calculate total price
    return (basePrice + additionalGuestFee) * diffDays;
  };

  return (
    <>
      <SEO 
        title={`${t('booking.title')} | Casa Zaratan`}
        description="Book your stay at Casa Zaratan in Sardinia"
      />
      
      {/* Header */}
      <section className="py-16 bg-marea-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            Book Your Stay
          </h1>
          <p className="text-xl max-w-3xl">
            Reserve your dream vacation at Casa Zaratan
          </p>
        </div>
      </section>
      
      {/* Booking Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-8">Check Availability</h2>
                  <div className="bg-white p-6 rounded-lg shadow-soft mb-8">
                    <Form {...form}>
                      <div className="grid gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="checkIn"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Check-in Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      initialFocus
                                      className={cn("p-3 pointer-events-auto")}
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="checkOut"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Check-out Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      initialFocus
                                      className={cn("p-3 pointer-events-auto")}
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="guests"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Number of Guests</FormLabel>
                              <FormControl>
                                <Input type="number" min="1" max="10" placeholder="1" {...field} />
                              </FormControl>
                              <FormDescription>
                                Maximum 10 guests allowed
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div>
                          <h3 className="font-semibold mb-3">Select Package</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card className={`cursor-pointer ${selectedPrice === "economy" ? "ring-2 ring-marea-500" : ""}`} 
                                  onClick={() => setSelectedPrice("economy")}>
                              <CardHeader>
                                <CardTitle>Economy</CardTitle>
                                <CardDescription>Basic amenities</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <p className="text-3xl font-bold">€150<span className="text-sm font-normal">/night</span></p>
                              </CardContent>
                            </Card>
                            
                            <Card className={`cursor-pointer ${selectedPrice === "standard" ? "ring-2 ring-marea-500" : ""}`} 
                                  onClick={() => setSelectedPrice("standard")}>
                              <CardHeader>
                                <CardTitle>Standard</CardTitle>
                                <CardDescription>All amenities included</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <p className="text-3xl font-bold">€200<span className="text-sm font-normal">/night</span></p>
                              </CardContent>
                            </Card>
                            
                            <Card className={`cursor-pointer ${selectedPrice === "premium" ? "ring-2 ring-marea-500" : ""}`} 
                                  onClick={() => setSelectedPrice("premium")}>
                              <CardHeader>
                                <CardTitle>Premium</CardTitle>
                                <CardDescription>Luxury experience</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <p className="text-3xl font-bold">€300<span className="text-sm font-normal">/night</span></p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                        
                        <Button type="button" className="w-full" onClick={() => setStep(2)}>
                          Continue to Personal Details
                        </Button>
                      </div>
                    </Form>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-soft">
                    <h3 className="text-xl font-bold mb-4">Pricing Information</h3>
                    <p className="text-gray-600 mb-4">
                      Our rates vary by season and availability. The base rates shown above are for:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                      <li>Low Season: January - April, October - December (excluding holidays)</li>
                      <li>Mid Season: May, June, September</li>
                      <li>High Season: July, August, and holiday periods</li>
                    </ul>
                    <p className="text-gray-600">
                      Additional fees: €20 per person for bed linen and towels (paid at check-in).
                    </p>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-8">Personal Details</h2>
                  <div className="bg-white p-6 rounded-lg shadow-soft">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="+1234567890" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Special Requests</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Any special requests or questions" 
                                  {...field}
                                  className="min-h-[100px]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="terms"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  I agree to the terms and conditions, including the house rules.
                                </FormLabel>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex justify-between">
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => setStep(1)}
                          >
                            Back
                          </Button>
                          <Button type="submit">
                            Submit Booking
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-in:</span>
                      <span className="font-semibold">
                        {form.getValues("checkIn") ? format(form.getValues("checkIn"), "PPP") : "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-out:</span>
                      <span className="font-semibold">
                        {form.getValues("checkOut") ? format(form.getValues("checkOut"), "PPP") : "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span className="font-semibold">{form.getValues("guests") || "1"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package:</span>
                      <span className="font-semibold capitalize">{selectedPrice}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-lg">€{calculatePrice()}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Plus €20 per person for bed linen and towels (paid at check-in)
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    A 20% deposit will be required to confirm your booking. The remaining balance is due 30 days before check-in.
                  </p>
                </CardFooter>
              </Card>
              
              <div className="mt-6 bg-white p-4 rounded-lg shadow-soft">
                <h3 className="font-bold mb-2">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  If you have any questions about booking or availability, please don't hesitate to contact us.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
