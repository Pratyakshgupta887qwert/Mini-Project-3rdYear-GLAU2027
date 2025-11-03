import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Registration {
  event: string;
  date: string;
}

interface RegisteredEventsProps {
  registrations: Registration[];
}

export const RegisteredEvents = ({ registrations }: RegisteredEventsProps) => {
  if (registrations.length === 0) {
    return (
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="text-xl">Your Registrations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">No events registered yet</p>
            <p className="text-sm text-muted-foreground mt-1">
              Browse events below and register for your first event!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl">Your Registrations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {registrations.map((reg, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-accent rounded-lg border border-border animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <div>
                  <p className="font-medium text-foreground">{reg.event}</p>
                  <p className="text-sm text-muted-foreground">{reg.date}</p>
                </div>
              </div>
              <div className="text-xs font-medium text-success bg-success/10 px-3 py-1 rounded-full">
                Confirmed
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
