
import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ServiceSelectionProps {
  selectedService: string;
  onSelectService: (serviceId: string) => void;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ 
  selectedService, 
  onSelectService 
}) => {
  const [services, setServices] = useState<ServiceOption[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Default service images
  const serviceImages = {
    'Floral Consultation': 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    'Custom Arrangement': 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    'Event Florals': 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    'Flower Subscription': 'https://images.unsplash.com/photo-1567696153798-068fd02a0869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('services').select('*');
        
        if (error) {
          throw error;
        }
        
        if (data) {
          // Map the data to include images
          const servicesWithImages = data.map(service => ({
            ...service,
            image: serviceImages[service.name as keyof typeof serviceImages] || 'https://images.unsplash.com/photo-1567696153798-068fd02a0869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
          }));
          setServices(servicesWithImages);
        }
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load services. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="py-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Loading Services...</h2>
        <div className="flex justify-center items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-floral-pink animate-bounce"></div>
          <div className="w-3 h-3 rounded-full bg-floral-purple animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 rounded-full bg-floral-green animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-6 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-red-500">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Select a Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
              selectedService === service.id 
                ? 'border-floral-pink shadow-lg scale-[1.02]' 
                : 'border-transparent shadow hover:shadow-md hover:scale-[1.01]'
            }`}
            onClick={() => onSelectService(service.id)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
            <img 
              src={service.image} 
              alt={service.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 relative z-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-floral-plum">{service.name}</h3>
                {selectedService === service.id && (
                  <span className="bg-floral-green text-floral-plum p-1 rounded-full">
                    <Check size={16} />
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              <p className="font-medium text-floral-plum">
                Starting at ${service.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
