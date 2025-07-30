import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="lg:max-w-[880px] mx-auto px-4 md:px-8">
        <div className="grid gap-8 [&>section]:relative [&>section]:pb-8 [&>section]:last-of-type:pb-0 [&>section]:after:content-[''] [&>section]:after:border-b [&>section]:after:border-gray/15 [&>section]:after:border-dashed [&>section]:after:w-full [&>section]:after:h-1 [&>section]:after:absolute [&>section]:after:bottom-0 [&>section]:after:left-0 [&>section]:last-of-type:after:border-none">
          <Header />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
