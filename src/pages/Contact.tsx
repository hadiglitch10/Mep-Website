import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ContactSection } from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <div className="pt-12 md:pt-0">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
