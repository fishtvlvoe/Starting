import { AboutSection } from "@/components/about-section";
import { BlogPreviewSection } from "@/components/blog-preview-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { ProductsSection } from "@/components/products-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";

export default function HomePage() {
	return (
		<>
			<HeroSection />

			<AboutSection />

			<ServicesSection />

			<FaqSection />

			<BlogPreviewSection />

			<ProductsSection />

			<ContactSection />
		</>
	);
}
