
import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { format } from 'date-fns';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

interface Booking {
  id: string;
  service: {
    name: string;
    price: number;
  };
  booking_date: string;
  booking_time: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  special_requests: string | null;
  created_at: string;
}

const BookingsList = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        
        // Fetch bookings with their related service information
        const { data, error } = await supabase
          .from('bookings')
          .select(`
            id, 
            booking_date, 
            booking_time, 
            first_name, 
            last_name, 
            email, 
            phone, 
            special_requests, 
            created_at,
            service:service_id (
              name, 
              price
            )
          `)
          .order('booking_date', { ascending: false });
        
        if (error) {
          throw error;
        }
        
        if (data) {
          setBookings(data as unknown as Booking[]);
        }
      } catch (err) {
        console.error('Error fetching bookings:', err);
        setError('Failed to load bookings. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-floral-pink/10 bg-floral-pattern">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-floral-plum">All Bookings</h1>
        
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-floral-pink" />
            <span className="ml-2 text-lg">Loading bookings...</span>
          </div>
        ) : error ? (
          <div className="bg-red-100 p-4 rounded-lg text-red-700">
            <p>{error}</p>
          </div>
        ) : bookings.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-lg text-gray-600">No bookings have been made yet.</p>
          </Card>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <Card key={booking.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-4 mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-floral-plum">
                      {booking.service.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Booked on {format(new Date(booking.created_at), 'PP')}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="font-bold text-floral-plum">
                      ${booking.service.price}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-floral-plum">Appointment Details</h3>
                    <p className="text-gray-700">
                      {format(new Date(booking.booking_date), 'PPPP')}
                    </p>
                    <p className="text-gray-700">{booking.booking_time}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-floral-plum">Customer Information</h3>
                    <p className="text-gray-700">{booking.first_name} {booking.last_name}</p>
                    <p className="text-gray-700">{booking.email}</p>
                    <p className="text-gray-700">{booking.phone}</p>
                  </div>
                </div>
                
                {booking.special_requests && (
                  <div className="mt-4 p-3 bg-floral-yellow/10 rounded-lg">
                    <h3 className="font-medium text-floral-plum">Special Requests</h3>
                    <p className="text-gray-700">{booking.special_requests}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default BookingsList;
