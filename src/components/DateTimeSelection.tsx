
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';

interface DateTimeSelectionProps {
  selectedDate: Date | undefined;
  selectedTime: string | null;
  onSelectDate: (date: Date | undefined) => void;
  onSelectTime: (time: string) => void;
}

const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}) => {
  // Available time slots (would come from backend in real app)
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];
  
  // For a real app, this would be dynamically generated based on availability
  const disabledDates = (date: Date) => {
    // Disable past dates, Sundays, and full days (could be fetched from backend)
    return (
      date < new Date(new Date().setHours(0, 0, 0, 0)) || 
      date.getDay() === 0
    );
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Select Date & Time</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-medium mb-4 text-floral-plum">Select a Date</h3>
          <div className="border border-floral-pink/20 rounded-lg p-2 shadow-sm bg-white">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onSelectDate}
              disabled={disabledDates}
              className={cn("p-3 pointer-events-auto")}
            />
          </div>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-lg font-medium mb-4 text-floral-plum text-center md:text-left">Select a Time</h3>
          {selectedDate ? (
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => onSelectTime(time)}
                  className={`flex items-center justify-center p-3 rounded-lg border transition-all ${
                    selectedTime === time
                      ? 'bg-floral-green border-floral-green/70 text-floral-plum font-medium'
                      : 'border-gray-200 hover:border-floral-pink/50 bg-white'
                  }`}
                >
                  <Clock size={16} className="mr-2 opacity-70" />
                  {time}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-center p-8 border border-dashed rounded-lg border-floral-pink/30 bg-floral-pink/5">
              <p className="text-gray-500">Please select a date first</p>
            </div>
          )}
        </div>
      </div>
      
      {selectedDate && selectedTime && (
        <div className="mt-6 text-center bg-floral-purple/10 p-3 rounded-lg max-w-md mx-auto">
          <p className="text-floral-plum font-medium">
            Your appointment: {format(selectedDate, 'EEEE, MMMM d, yyyy')} at {selectedTime}
          </p>
        </div>
      )}
    </div>
  );
};

export default DateTimeSelection;
