import { Button } from "@/components/ui/button";
import { ArrowRight, Book, LayoutDashboard, Sparkles } from "lucide-react";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import HeroSection from "@/components/landing/hero-section";
import FeaturesSection from "@/components/landing/features-section";
import PricingSection from "@/components/landing/pricing-section";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/login" passHref>
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button variant="default" size="sm">
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <div className="container my-24 px-6 py-10 bg-dark-forest rounded-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 text-white">
              Ready to transform your manuscript?
            </h2>
            <p className="text-smoke-gray mb-6 max-w-2xl mx-auto">
              Join thousands of authors who use eZunder to create professional,
              beautifully formatted eBooks with AI-powered assistance.
            </p>
            <Link href="/signup" passHref>
              <Button className="bg-neon-green hover:bg-neon-green/90 text-dark-forest">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center p-6 rounded-lg border border-forest-teal/20 bg-dark-forest shadow-lg">
              <Book className="h-10 w-10 text-forest-teal mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Import Any Format
              </h3>
              <p className="text-smoke-gray text-center">
                Seamlessly import DOCX, TXT, EPUB, or PDF files with our smart formatting detection.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg border border-forest-teal/20 bg-dark-forest shadow-lg">
              <Sparkles className="h-10 w-10 text-warm-amber mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                AI-Powered Formatting
              </h3>
              <p className="text-smoke-gray text-center">
                Let our AI analyze your content and suggest the perfect typography and layout.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg border border-forest-teal/20 bg-dark-forest shadow-lg">
              <LayoutDashboard className="h-10 w-10 text-ember-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Export Anywhere
              </h3>
              <p className="text-smoke-gray text-center">
                Export to EPUB, MOBI, PDF, or HTML formats optimized for any platform or device.
              </p>
            </div>
          </div>
        </div>
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
