import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
  description: string;
  image: string;
  onRegister: () => void;
  isRegistered?: boolean;
}

export const EventCard = ({
  title,
  date,
  location,
  attendees,
  description,
  image,
  onRegister,
  isRegistered = false,
}: EventCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg animate-scale-in group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {isRegistered && (
          <Badge className="absolute top-4 right-4 bg-success text-success-foreground">
            Registered
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            {date}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            {location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2 text-primary" />
            {attendees} attendees
          </div>
        </div>

        <Button 
          onClick={onRegister} 
          disabled={isRegistered}
          className="w-full"
        >
          {isRegistered ? "Already Registered" : "Register Now"}
        </Button>
      </CardContent>
    </Card>
  );
};
