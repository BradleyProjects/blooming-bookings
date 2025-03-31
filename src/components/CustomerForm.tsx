
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

interface CustomerFormProps {
  customer: CustomerData;
  onCustomerChange: (field: keyof CustomerData, value: string) => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({
  customer,
  onCustomerChange,
}) => {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Information</h2>
      
      <div className="max-w-2xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-sm border border-floral-pink/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={customer.firstName}
              onChange={(e) => onCustomerChange('firstName', e.target.value)}
              placeholder="Enter your first name"
              className="border-floral-pink/20 focus:border-floral-pink"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={customer.lastName}
              onChange={(e) => onCustomerChange('lastName', e.target.value)}
              placeholder="Enter your last name"
              className="border-floral-pink/20 focus:border-floral-pink"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={customer.email}
            onChange={(e) => onCustomerChange('email', e.target.value)}
            placeholder="your.email@example.com"
            className="border-floral-pink/20 focus:border-floral-pink"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={customer.phone}
            onChange={(e) => onCustomerChange('phone', e.target.value)}
            placeholder="(123) 456-7890"
            className="border-floral-pink/20 focus:border-floral-pink"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="specialRequests">Special Requests or Notes</Label>
          <Textarea
            id="specialRequests"
            value={customer.specialRequests}
            onChange={(e) => onCustomerChange('specialRequests', e.target.value)}
            placeholder="Tell us about your event, preferred flowers, color scheme, or any special requirements"
            rows={4}
            className="border-floral-pink/20 focus:border-floral-pink"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
