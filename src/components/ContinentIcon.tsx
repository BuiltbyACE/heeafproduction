import { Globe } from "lucide-react";

export type Continent = "africa" | "americas" | "europe" | "asia";

export default function ContinentIcon({
  continent,
  className = "h-6 w-6",
}: {
  continent: Continent;
  className?: string;
}) {
  void continent;
  return <Globe className={`${className} text-gold`} strokeWidth={1.4} aria-hidden="true" />;
}