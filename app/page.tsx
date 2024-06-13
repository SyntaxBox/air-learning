import {
  ContactUs,
  EmailSubmit,
  Footer,
  Header,
  Reviews,
  PricingPlans,
  ServiceFeatures,
  Navbar,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-[90px] bg-white">
        <Header />

        <ServiceFeatures />
        <Reviews />
        <EmailSubmit />
        <PricingPlans />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
