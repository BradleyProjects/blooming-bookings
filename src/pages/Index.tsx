
import React from 'react';
import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import { Flower2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-floral-pink/10 bg-floral-pattern">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4 animate-gentle-sway">
            <Flower2 size={48} className="text-floral-pink mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-floral-plum">
            Beautiful Florals for Every Occasion
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Schedule a consultation or book our floral services for your special moments
          </p>
          <a 
            href="#booking" 
            className="inline-block bg-floral-pink text-floral-plum font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-lg"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
      
      {/* Services Overview */}
      <section id="services" className="py-16 px-4 bg-white/70 backdrop-blur-sm scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-floral-plum">Our Floral Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-floral-pink/10 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-floral-pink/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Flower2 size={24} className="text-floral-pink" />
              </div>
              <h3 className="text-xl font-medium text-center mb-3 text-floral-plum">Floral Consultation</h3>
              <p className="text-gray-600 text-center">
                One-on-one session with our floral designer to discuss your vision and preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-floral-pink/10 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-floral-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Flower2 size={24} className="text-floral-green" />
              </div>
              <h3 className="text-xl font-medium text-center mb-3 text-floral-plum">Custom Arrangements</h3>
              <p className="text-gray-600 text-center">
                Custom floral arrangement designed specifically for your event or space.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-floral-pink/10 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-floral-purple/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Flower2 size={24} className="text-floral-purple" />
              </div>
              <h3 className="text-xl font-medium text-center mb-3 text-floral-plum">Event Florals</h3>
              <p className="text-gray-600 text-center">
                Comprehensive floral design for weddings, parties, and special events.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-floral-pink/10 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-floral-yellow/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Flower2 size={24} className="text-floral-yellow" />
              </div>
              <h3 className="text-xl font-medium text-center mb-3 text-floral-plum">Flower Subscription</h3>
              <p className="text-gray-600 text-center">
                Regular delivery of fresh seasonal flowers to your home or office.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-floral-green/5 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-floral-plum">About Blooming Bookings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Florist arranging flowers" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4 text-floral-plum">Our Floral Journey</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Blooming Bookings has been creating breathtaking floral designs for over a decade. Our passionate team of florists combines artistic vision with botanical expertise to craft arrangements that capture the beauty of nature.
              </p>
              <p className="text-gray-600 mb-4">
                We source our flowers from sustainable, local growers whenever possible, ensuring the freshest blooms and supporting our community.
              </p>
              <p className="text-gray-600">
                Whether you're planning a wedding, corporate event, or simply want to brighten someone's day, our online booking system makes it easy to schedule consultations and order custom arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12 text-floral-plum">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-floral-pink/10">
              <p className="italic text-gray-600 mb-4">
                "The floral arrangements for my wedding were absolutely stunning. The online booking made planning so much easier!"
              </p>
              <p className="font-medium text-floral-plum">— Sarah M.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-floral-pink/10">
              <p className="italic text-gray-600 mb-4">
                "I love my bi-weekly flower subscription. It's so convenient to book online and the arrangements always brighten my home."
              </p>
              <p className="font-medium text-floral-plum">— James L.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-floral-pink/10">
              <p className="italic text-gray-600 mb-4">
                "The consultation helped me choose the perfect flowers for my event. Absolutely professional service from start to finish."
              </p>
              <p className="font-medium text-floral-plum">— Emma T.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking Form Section */}
      <section className="py-16 px-4 bg-floral-purple/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-floral-plum">Book Your Floral Service</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Schedule a consultation, order custom arrangements, or sign up for a subscription using our simple booking system.
          </p>
          
          <BookingForm />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-floral-pink/20 to-floral-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-floral-plum">Ready to Add Beauty to Your Life?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your floral service today and experience the difference of handcrafted arrangements.
          </p>
          <a 
            href="#booking" 
            className="inline-block bg-floral-pink text-floral-plum font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-lg"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
