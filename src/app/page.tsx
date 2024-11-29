import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Verifiable Identity",
      description: "Securely manage your on-chain credentials through Verax attestations"
    },
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      title: "Achievement System",
      description: "Build your reputation across the Linea ecosystem"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Community Access",
      description: "Join exclusive communities with verified credentials"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <img 
                src="./favicon.ico" 
                alt="Logo" 
                className="w-12 h-12" 
              />
              <span className="text-xl font-bold text-gray-900">  Linea Passport</span>
            </div>
            <Button 
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              Launch App
            </Button>
          </nav>

          <div className="py-20 text-center">
            <h1 className="text-7xl font-bold text-gray-900 mb-6">
              Your Digital Identity on{" "}
              <span className="text-green-600">Linea</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              A decentralized identity system powered by Verax attestations. 
              Build your reputation, verify credentials, and access the entire Linea ecosystem.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powered by Verax Attestations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing community of Linea users managing their digital identity with verifiable credentials.
          </p>
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700"
          >
            Launch App
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <img 
              src="./favicon.ico" 
              alt="Logo" 
              className="w-8 h-8" 
            />
            <span className="font-bold text-gray-900">Linea Passport</span>
          </div>
          <p className="text-gray-600">
            Built on Linea • Powered by Verax • Made by Abhirup
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;