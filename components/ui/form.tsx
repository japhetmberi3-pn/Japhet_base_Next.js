import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">Nom</Label>
        <Input id="name" placeholder="Votre nom" />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="email@example.com" />
      </div>

      <Button type="submit">
        Envoyer
      </Button>
    </form>
  );
}