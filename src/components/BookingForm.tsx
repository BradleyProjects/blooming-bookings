
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import ServiceSelection from './ServiceSelection';
import DateTimeSelection from './DateTimeSelection';
import CustomerForm from './CustomerForm';
import OrderSummary from './OrderSummary';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, User, Flower, CheckCircle } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

const BookingForm = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('service');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCustomerChange = (field: keyof typeof customer, value: string) => {
    setCustomer((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedService(serviceId);
    // Auto-advance to next tab after selection
    setTimeout(() => setActiveTab('datetime'), 300);
  };

  const handleSelectDate = (date: Date | undefined) => {
    setSelectedDate(date);
    // Don't auto-advance here as user still needs to select time
  };

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    // Auto-advance to next tab after time selection
    setTimeout(() => setActiveTab('customer'), 300);
  };

  const isFormComplete = 
    selectedService !== '' && 
    selectedDate !== undefined && 
    selectedTime !== null &&
    customer.firstName !== '' &&
    customer.lastName !== '' &&
    customer.email !== '' &&
    customer.phone !== '';
  
  const handleConfirmBooking = async () => {
    if (!isFormComplete) {
      toast({
        title: "Please complete all required fields",
        description: "We need all information to confirm your booking.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Format the date for database storage
      const formattedDate = selectedDate?.toISOString().split('T')[0];
      
      // Save to Supabase
      const { data, error } = await supabase
        .from('bookings')
        .insert({
          service_id: selectedService,
          booking_date: formattedDate,
          booking_time: selectedTime,
          first_name: customer.firstName,
          last_name: customer.lastName,
          email: customer.email,
          phone: customer.phone,
          special_requests: customer.specialRequests || null
        });
      
      if (error) {
        console.error('Error saving booking:', error);
        toast({
          title: "Booking Failed",
          description: "We couldn't save your booking. Please try again.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Booking Confirmed!",
          description: "Your floral appointment has been scheduled successfully.",
          variant: "default"
        });
        
        // Reset form
        setSelectedService('');
        setSelectedDate(undefined);
        setSelectedTime(null);
        setCustomer({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          specialRequests: '',
        });
        setActiveTab('service');
      }
    } catch (err) {
      console.error('Exception saving booking:', err);
      toast({
        title: "Booking Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="booking" className="py-12 px-4 max-w-5xl mx-auto scroll-mt-24">
      <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-floral-pink/10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 bg-floral-purple/10 p-2 rounded-t-lg">
            <TabsTrigger 
              value="service" 
              className="data-[state=active]:bg-white data-[state=active]:text-floral-plum"
            >
              <Flower className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Service</span>
            </TabsTrigger>
            <TabsTrigger 
              value="datetime" 
              className="data-[state=active]:bg-white data-[state=active]:text-floral-plum"
              disabled={!selectedService}
            >
              <CalendarDays className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Date & Time</span>
            </TabsTrigger>
            <TabsTrigger 
              value="customer" 
              className="data-[state=active]:bg-white data-[state=active]:text-floral-plum"
              disabled={!selectedService || !selectedDate || !selectedTime}
            >
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Your Details</span>
            </TabsTrigger>
            <TabsTrigger 
              value="summary" 
              className="data-[state=active]:bg-white data-[state=active]:text-floral-plum"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Confirm</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="service" className="p-4">
            <ServiceSelection 
              selectedService={selectedService} 
              onSelectService={handleSelectService} 
            />
          </TabsContent>
          
          <TabsContent value="datetime" className="p-4">
            <DateTimeSelection 
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onSelectDate={handleSelectDate}
              onSelectTime={handleSelectTime}
            />
          </TabsContent>
          
          <TabsContent value="customer" className="p-4">
            <CustomerForm 
              customer={customer}
              onCustomerChange={handleCustomerChange}
            />
            <div className="flex justify-center mt-6">
              <button 
                onClick={() => setActiveTab('summary')}
                className="bg-floral-green hover:bg-floral-green/90 text-floral-plum font-medium px-6 py-2 rounded-full shadow-sm"
              >
                Continue to Summary
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="summary" className="p-4">
            <OrderSummary 
              serviceId={selectedService}
              date={selectedDate}
              time={selectedTime}
              customerName={`${customer.firstName} ${customer.lastName}`}
              customerEmail={customer.email}
              specialRequests={customer.specialRequests}
              onConfirmBooking={handleConfirmBooking}
              isFormComplete={isFormComplete}
              isSubmitting={isSubmitting}
            />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default BookingForm;
