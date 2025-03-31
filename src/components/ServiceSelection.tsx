
import React from 'react';
import { Check } from 'lucide-react';

interface ServiceOption {
  id: string;
  title: string;
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
  const services: ServiceOption[] = [
    {
      id: 'consultation',
      title: 'Floral Consultation',
      description: 'One-on-one session with our floral designer to discuss your vision and preferences.',
      price: 50,
      image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'custom-arrangement',
      title: 'Custom Arrangement',
      description: 'Custom floral arrangement designed specifically for your event or space.',
      price: 85,
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'event-flowers',
      title: 'Event Florals',
      description: 'Comprehensive floral design for weddings, parties, and special events.',
      price: 150,
      image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'subscription',
      title: 'Flower Subscription',
      description: 'Regular delivery of fresh seasonal flowers to your home or office.',
      price: 95,
      image: 'https://images.unsplash.com/photo-1567696153798-068fd02a0869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    }
  ];

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
              alt={service.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 relative z-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-floral-plum">{service.title}</h3>
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
