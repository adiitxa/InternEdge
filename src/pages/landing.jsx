import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-3xl sm:text-5xl lg:text-8xl tracking-tighter py-4">
         One Platform
          <span className="flex items-center gap-2 sm:gap-6">
             Endless Internships.
            {/* <img
              src="/logo.png"
              className="h-14 sm:h-24 lg:h-32"
              alt="Hirrd Logo"
            /> */}
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
         InternEdge - Powering Startup Teams with the Next Generation of Talent.
        </p>
      </section>
      <div className="flex gap-4 justify-center">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Explore Internships
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="destructive" size="xl">
            Create Internships
          </Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <br />
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Card>
    <CardHeader>
      <CardTitle className="font-bold text-xl">For Intern Seekers</CardTitle>
    </CardHeader>
    <CardContent className="text-muted-foreground">
      Discover curated internship opportunities, save favorites, and apply with ease.
    </CardContent>
  </Card>
  <Card>
    <CardHeader>
      <CardTitle className="font-bold text-xl">For Startups</CardTitle>
    </CardHeader>
    <CardContent className="text-muted-foreground">
      Post internships, manage applications, and connect with top emerging talent.
    </CardContent>
  </Card>
</section>

<img src="/banner.png" className="w-100"/>

      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
