import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Council = () => {
  const councilMembers = [
    {
      name: "Member 1",
      title: "Conseiller Municipal",
      avatar: "/placeholder.svg"
    },
    {
      name: "Member 2",
      title: "Conseiller Municipal",
      avatar: "/placeholder.svg"
    },
    {
      name: "Member 3",
      title: "Conseiller Municipal",
      avatar: "/placeholder.svg"
    },
    {
      name: "Member 4",
      title: "Conseiller Municipal",
      avatar: "/placeholder.svg"
    },
    {
      name: "Member 5",
      title: "Conseiller Municipal",
      avatar: "/placeholder.svg"
    },
    {
      name: "Member 6",
      title: "Conseiller Municipal",
      avatar: "/placeholder.svg"
    },
    {
      name: "Member 7",
      title: "Conseiller Municipal",
      avatar: "/placeholder.svg"
    },
    {
      name: "Member 8",
      title: "Conseiller Municipal",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-8 md:pt-28">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Conseil Municipal de Mokolo
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Une équipe dévouée au service de notre communauté
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {councilMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 text-center">{member.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Council;