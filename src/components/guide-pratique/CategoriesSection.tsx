import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { categories } from "@/data/guidePratiqueData";
import { MapPin, Calendar, Hotel, Utensils, Camera } from "lucide-react";

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "hotel":
      return <Hotel className="h-5 w-5" />;
    case "utensils":
      return <Utensils className="h-5 w-5" />;
    case "camera":
      return <Camera className="h-5 w-5" />;
    case "calendar":
      return <Calendar className="h-5 w-5" />;
    default:
      return null;
  }
};

export const CategoriesSection = () => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4 mb-12">
      {categories.map((category) => (
        <AccordionItem
          key={category.id}
          value={category.id}
          className="border rounded-lg bg-white shadow-sm"
        >
          <AccordionTrigger className="px-4 hover:no-underline">
            <div className="flex items-center gap-3">
              {getIconComponent(category.iconName)}
              <span className="font-semibold">{category.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-4">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gray-50 space-y-2"
                >
                  <h3 className="font-semibold">{item.name}</h3>
                  {item.description && (
                    <p className="text-sm text-gray-600">{item.description}</p>
                  )}
                  {item.address && (
                    <p className="text-sm text-gray-600">
                      <MapPin className="inline-block w-4 h-4 mr-1" />
                      {item.address}
                    </p>
                  )}
                  {item.contact && (
                    <p className="text-sm text-gray-600">{item.contact}</p>
                  )}
                  {item.date && (
                    <p className="text-sm text-gray-600">
                      <Calendar className="inline-block w-4 h-4 mr-1" />
                      {item.date}
                    </p>
                  )}
                  {item.location && (
                    <p className="text-sm text-gray-600">
                      <MapPin className="inline-block w-4 h-4 mr-1" />
                      {item.location}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};