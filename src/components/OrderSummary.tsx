
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Check, Flower2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from "@/integrations/supabase/client";

interface OrderSummaryProps {
  serviceId: string;
  date: Date | undefined;
  time: string | null;
  customerName: string;
  customerEmail: string;
  specialRequests: string;
  onConfirmBooking: () => void;
  isFormComplete: boolean;
  isSubmitting: boolean;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  serviceId,
  date,
  time,
  customerName,
  customerEmail,
  specialRequests,
  onConfirmBooking,
  isFormComplete,
  isSubmitting
}) => {
  const [service, setService] = useState<{ name: string, price: number }>({ name: 'Selected Service', price: 0 });
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchServiceDetails = async () => {
      if (!serviceId) return;
      
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('services')
          .select('name, price')
          .eq('id', serviceId)
          .single();
        
        if (error) {
          console.error('Error fetching service:', error);
          return;
        }
        
        if (data) {
          setService({
            name: data.name,
            price: data.price ? parseFloat(data.price.toString()) : 0
          });
        }
      } catch (err) {
        console.error('Exception fetching service:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchServiceDetails();
  }, [serviceId]);
  
  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Booking Summary</h2>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-floral-purple/20 p-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-floral-plum flex items-center">
            <Flower2 className="mr-2 text-floral-pink" size={20} />
            Booking Details
          </h3>
          {isFormComplete && (
            <span className="text-sm bg-floral-green/20 text-floral-plum px-3 py-1 rounded-full flex items-center">
              <Check size={14} className="mr-1" /> Ready to book
            </span>
          )}
        </div>
        
        <div className="p-6 space-y-4 divide-y divide-floral-pink/10">
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Service:</span>
            <span className="font-medium text-floral-plum">
              {loading ? 'Loading...' : service.name}
            </span>
          </div>
          
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Date & Time:</span>
            <span className="font-medium text-floral-plum">
              {date && time 
                ? `${format(date, 'MMM d, yyyy')} at ${time}` 
                : 'Not selected yet'}
            </span>
          </div>
          
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Customer:</span>
            <span className="font-medium text-floral-plum">{customerName || 'Not provided yet'}</span>
          </div>
          
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Contact:</span>
            <span className="font-medium text-floral-plum">{customerEmail || 'Not provided yet'}</span>
          </div>
          
          {specialRequests && (
            <div className="py-2">
              <span className="text-gray-600 block mb-1">Special Requests:</span>
              <p className="text-floral-plum text-sm bg-floral-yellow/20 p-3 rounded">{specialRequests}</p>
            </div>
          )}
          
          <div className="flex justify-between pt-4 pb-2">
            <span className="text-gray-600 font-medium">Total:</span>
            <span className="font-bold text-xl text-floral-plum">
              ${loading ? '...' : service.price.toFixed(2)}
            </span>
          </div>
        </div>
        
        <div className="p-6 bg-floral-green/5 border-t border-floral-green/10">
          <Button 
            onClick={onConfirmBooking}
            disabled={!isFormComplete || isSubmitting}
            className="w-full bg-floral-pink hover:bg-floral-pink/90 text-floral-plum font-medium py-6"
          >
            {isSubmitting ? 'Processing...' : (isFormComplete ? 'Confirm Booking' : 'Please Complete All Fields')}
          </Button>
          <p className="text-xs text-center mt-3 text-gray-500">
            By confirming, you agree to our booking terms and cancellation policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
