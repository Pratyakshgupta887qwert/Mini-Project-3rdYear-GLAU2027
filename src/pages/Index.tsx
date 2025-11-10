import { useState } from "react";
import { LogOut, Sparkles } from "lucide-react";
import { LoginForm } from "@/components/LoginForm";
import { SearchBar } from '@/components/SearchBar';
import { EventCard } from "@/components/EventCard";
import { RegisteredEvents } from "@/components/RegisteredEvents";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/events";
import { sendRegistrationEmail } from "@/lib/emailService";
import { useToast } from "@/hooks/use-toast";

interface User {
  name: string;
  email: string;
}

interface Registration {
  event: string;
  date: string;
}

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const { toast } = useToast();

  // POINT 2: Add filteredEvents state + handleSearch
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleSearch = (query: string) => {
    const lower = query.toLowerCase().trim();
    if (!lower) {
      setFilteredEvents(events);
      return;
    }
    const result = events.filter(
      (e) =>
        e.title.toLowerCase().includes(lower) ||
        e.type?.toLowerCase().includes(lower) ||
        e.location?.toLowerCase().includes(lower)
    );
    setFilteredEvents(result);
  };

  const handleLogin = (name: string, email: string) => {
    setUser({ name, email });
    toast({
      title: "Welcome!",
      description: `Signed in as ${name}`,
    });
  };

  const handleLogout = () => {
    setUser(null);
    setRegistrations([]);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const handleRegister = async (eventTitle: string, eventDate: string) => {
    if (!user) return;

    const alreadyRegistered = registrations.some((reg) => reg.event === eventTitle);
    if (alreadyRegistered) {
      toast({
        title: "Already registered",
        description: "You are already registered for this event.",
        variant: "destructive",
      });
      return;
    }

    setRegistrations([...registrations, { event: eventTitle, date: eventDate }]);
    
    const emailSent = await sendRegistrationEmail(user.name, user.email, eventTitle);
    
    toast({
      title: "Registration successful!",
      description: emailSent 
        ? `Confirmation email sent to ${user.email}`
        : "Registered successfully! Email notification failed.",
    });
  };

  if (!user) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Event Portal</h1>
          </div>

          {/* Search Bar in Header (minimal, no layout break) */}
          <div className="flex-1 max-w-md mx-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-2 text-foreground">
            Discover Events
          </h2>
          <p className="text-muted-foreground">
            Browse and register for upcoming events in your area
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Events Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {/* POINT 4: Use filteredEvents instead of events */}
            {filteredEvents.length === 0 ? (
              <p className="col-span-full text-center text-muted-foreground py-8">
                No events found. Try searching for "hackathon" or "tech".
              </p>
            ) : (
              filteredEvents.map((event, index) => (
                <div
                  key={event.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-fade-in"
                >
                  <EventCard
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    attendees={event.attendees}
                    description={event.description}
                    image={event.image}
                    onRegister={() => handleRegister(event.title, event.date)}
                    isRegistered={registrations.some((reg) => reg.event === event.title)}
                  />
                </div>
              ))
            )}
          </div>

          {/* Registered Events Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <RegisteredEvents registrations={registrations} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;