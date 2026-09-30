import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import bridal from "@/assets/SAM_7472.jpg.asset.json";
import detail from "@/assets/SAM_7460.jpg.asset.json";
import academy from "@/assets/WhatsApp_Image_2026-09-30_at_2.14.33_PM_1.jpeg.asset.json";
import hairBeforeAfter from "@/assets/WhatsApp_Image_2026-09-30_at_2.14.33_PM.jpeg.asset.json";
import hairFront from "@/assets/WhatsApp_Image_2026-09-30_at_2.14.31_PM.jpeg.asset.json";
import hairBack from "@/assets/WhatsApp_Image_2026-09-30_at_2.14.31_PM_1.jpeg.asset.json";
import hairSleek from "@/assets/WhatsApp_Image_2026-09-30_at_2.14.29_PM_2.jpeg.asset.json";
import bridalBeforeAfter from "@/assets/WhatsApp_Image_2026-09-30_at_2.14.24_PM_1.jpeg.asset.json";
import newHairLong from "@/assets/glossy-long-hair.jpeg.asset.json";
import newHairSleek from "@/assets/sleek-hair-finish.jpeg.asset.json";
import partyImage from "@/assets/party-makeup.jpg";
import festiveImage from "@/assets/festive-makeup.jpg";
import engagementImage from "@/assets/engagement-makeup.jpg";
import outstationImage from "@/assets/outstation-makeup.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Riyanka Styles | Makeup & Hair Artistry" },
    { name: "description", content: "Explore bridal, engagement, party, festive and outstation makeup pricing, signature hair artistry and booking details at Riyanka Styles." },
    { property: "og:title", content: "Riyanka Styles | Makeup & Hair Artistry" },
    { property: "og:description", content: "Bridal beauty, special-occasion makeup and signature hair artistry by Riyanka Choudhury. View services, prices and booking details." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

const nav = [
  ["About", "#about"], ["Services", "#services"], ["Portfolio", "#portfolio"], ["Experience", "#experience"], ["Contact", "#contact"],
];

const services = [
  { n: "01", name: "Bridal Makeup", price: "₹25,000", unit: "/ function", detail: "A personalized bridal look designed around your features, outfit and wedding styling.", image: bridal.url, alt: "Bridal makeup by Riyanka Styles", example: false },
  { n: "02", name: "Party Makeup — Family", price: "₹10,000", unit: "/ person", detail: "Camera-ready beauty for family members and guests at weddings and celebrations.", image: partyImage, alt: "Illustrative party makeup look", example: true },
  { n: "03", name: "Festive Makeup", price: "₹15,000", unit: "", detail: "A polished look to complement your festive outfit and occasion.", image: festiveImage, alt: "Illustrative festive makeup look", example: true },
  { n: "04", name: "Engagement Makeup", price: "₹20,000", unit: "", detail: "Refined, camera-ready makeup for your engagement celebration.", image: engagementImage, alt: "Illustrative engagement makeup look", example: true },
  { n: "05", name: "Outstation Makeup", price: "₹28,000", unit: "/ function", detail: "Professional makeup for destination and outstation functions.", image: outstationImage, alt: "Illustrative destination makeup look", example: true },
];

const portfolio = [
  { category: "Bridal", title: "A bridal moment", image: bridal.url, alt: "Bride in red with finished makeup and traditional styling" },
  { category: "Bridal", title: "The finer details", image: detail.url, alt: "Close-up of bridal eye makeup and jewellery" },
  { category: "Hair", title: "Softly sculpted", image: hairFront.url, alt: "Soft layered blowout" },
  { category: "Hair", title: "Evening waves", image: hairBack.url, alt: "Voluminous styled waves from behind" },
  { category: "Hair", title: "Sleek finish", image: hairSleek.url, alt: "Smooth glossy hair styling" },
  { category: "Hair", title: "Glossy lengths", image: newHairLong.url, alt: "Long glossy hair with smooth finish" },
  { category: "Hair", title: "Refined straightening", image: newHairSleek.url, alt: "Smooth straightened hair from behind" },
  { category: "Transformations", title: "Bridal transformation", image: bridalBeforeAfter.url, alt: "Before and after bridal makeup" },
  { category: "Transformations", title: "Hair transformation", image: hairBeforeAfter.url, alt: "Before and after hair styling" },
];

function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [enquiry, setEnquiry] = useState("");
  const [copied, setCopied] = useState(false);
  const visible = category === "All" ? portfolio : portfolio.filter((item) => item.category === category);

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hello Riyanka, I'd like to enquire about a booking.\nName: ${data.get("name")}\nWhatsApp: ${data.get("phone")}\nOccasion: ${data.get("occasion")}\nDate: ${data.get("date")}\nLocation: ${data.get("location")}\nDetails: ${data.get("details") || "Not specified"}`;
    setEnquiry(message);
    setCopied(false);
  }

  async function copyEnquiry() {
    try { await navigator.clipboard.writeText(enquiry); setCopied(true); }
    catch { setCopied(false); }
  }

  return <main>
    <div id="home" className="relative min-h-[740px] h-[min(850px,94svh)] max-h-[900px] bg-ink text-hero-text flex flex-col overflow-hidden">
      <img src={bridal.url} alt="Riyanka Styles bridal makeup artistry" className="absolute inset-0 h-full w-full object-cover object-[68%_32%] md:object-[center_40%]" />
      <div className="hero-shade absolute inset-0" />
      <header className="relative z-20 w-full mx-auto max-w-[1600px] px-6 md:px-12 py-6 md:py-8 grid grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4">
         <a href="#home" className="min-w-0 flex items-center gap-3" aria-label="Riyanka Styles, back to top"><img src={logo.url} alt="" className="w-12 h-12 md:w-14 md:h-14 object-cover shrink-0" /><span className="min-w-0 font-display text-xl md:text-2xl leading-none whitespace-nowrap">Riyanka<span className="text-gold">Styles</span><span className="block mt-2 font-sans text-[8px] uppercase tracking-[0.2em] text-hero-text/75">Makeup • Hair • Beauty</span></span></a>
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">{nav.map(([label, href]) => <a key={label} href={href} className="text-sm text-hero-text/80 hover:text-hero-text transition-colors">{label}</a>)}</nav>
        <div className="flex items-center justify-end gap-3"><Button variant="glass" size="editorial" asChild className="hidden sm:inline-flex"><a href="#contact">Book an appointment <ArrowUpRight /></a></Button><Button variant="glass" size="icon" className="lg:hidden rounded-full" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</Button></div>
      </header>
      {mobileOpen && <nav className="absolute top-20 inset-x-4 z-30 bg-ink border border-hero-text/20 p-6 grid gap-5 lg:hidden" aria-label="Mobile navigation">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMobileOpen(false)} className="text-hero-text text-lg">{label}</a>)}</nav>}
      <div className="relative z-10 flex-1 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-end md:justify-center pb-20 md:pb-10">
        <div className="max-w-[650px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold mb-6">Riyanka Styles · Since 2018</p>
          <h1 className="font-display text-[clamp(3.4rem,7vw,7rem)] leading-[1.07] font-normal max-w-[720px]">Where Beauty<br />Becomes <em className="font-normal">Art.</em></h1>
          <p className="mt-7 max-w-md text-base md:text-lg leading-relaxed text-hero-text/85">Professional makeup and hair artistry for brides, celebrations and the moments that stay with you.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button variant="light" size="editorial" asChild><a href="#contact">Book your appointment <ArrowUpRight /></a></Button><Button variant="glass" size="editorial" asChild><a href="#portfolio">Explore my work <ArrowRight /></a></Button></div>
        </div>
      </div>
      <div className="relative z-10 px-6 md:px-12 pb-6 max-w-[1600px] w-full mx-auto flex items-center justify-between gap-4 text-[10px] md:text-xs uppercase tracking-[0.18em] text-hero-text/75 border-t border-hero-text/20 pt-5"><span>Bridal · Engagement · Party · Hair</span><a href="#about" aria-label="Scroll to about Riyanka" className="hidden sm:flex items-center gap-2">Discover more <ChevronDown size={15} /></a></div>
    </div>

    <section id="about" className="bg-background py-24 md:py-32 scroll-mt-6">
      <div className="max-w-6xl mx-auto px-6"><div className="text-center mb-14 md:mb-20"><p className="text-xs uppercase tracking-[0.26em] text-muted-foreground mb-4">The artist behind the look</p><h2 className="font-display text-4xl md:text-6xl">Meet Riyanka</h2></div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center"><div className="relative max-w-[490px] mx-auto w-full"><img src={academy.url} alt="Riyanka at her Lakmé Academy certification" className="w-full aspect-[4/5] object-cover object-center" /><div className="absolute -bottom-5 -right-4 md:-right-8 bg-primary text-primary-foreground p-5 md:p-7"><span className="block font-display text-3xl">2018</span><span className="text-[10px] uppercase tracking-widest">Practicing since</span></div></div>
          <div className="pt-6"><p className="text-xs uppercase tracking-[0.24em] text-rose mb-6">Makeup artist & beauty specialist</p><h3 className="font-display text-3xl md:text-5xl leading-tight mb-7">Beauty that feels<br /><em>like you.</em></h3><p className="text-muted-foreground leading-8 mb-5">Riyanka Choudhury has been practicing makeup artistry since 2018. Trained at Lakmé Academy, she brings a thoughtful, personal approach to every face and every occasion.</p><p className="text-muted-foreground leading-8 mb-9">From bridal and engagement beauty to festive looks and professional hair styling, her work is designed to feel refined, comfortable and unmistakably yours.</p><Button variant="editorial" size="editorial" asChild><a href="#experience">Explore the experience <ArrowUpRight /></a></Button></div>
        </div>
      </div>
    </section>

    <section className="bg-secondary border-y border-border"><div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border py-10 md:py-14">{[["2018", "Practicing since"],["Lakmé", "Academy trained"],["Bridal", "Beauty specialist"],["On-location", "Services available"]].map(([big, small]) => <div key={big} className="px-4 md:px-8 first:pl-0 last:pr-0 text-center"><span className="block font-display text-2xl md:text-3xl">{big}</span><span className="block mt-2 text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">{small}</span></div>)}</div></section>

     <section id="services" className="py-24 md:py-32 bg-paper scroll-mt-6"><div className="max-w-6xl mx-auto px-6"><div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"><div><p className="text-xs uppercase tracking-[0.26em] text-rose mb-4">Services & pricing</p><h2 className="font-display text-4xl md:text-6xl">Beauty for every occasion</h2></div><p className="text-muted-foreground max-w-sm leading-7">Thoughtful artistry for the moments that matter most.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{services.map((service) => <a href="#contact" key={service.name} className="group lift-image block overflow-hidden bg-background"><div className="aspect-[4/3] overflow-hidden"><img src={service.image} alt={service.alt} className="h-full w-full object-cover" loading="lazy" width={768} height={1024} /></div><div className="p-6 md:p-8"><span className="text-xs text-rose">{service.n} / MAKEUP</span><h3 className="font-display text-2xl md:text-3xl mt-3 mb-2">{service.name}</h3><p className="font-display text-2xl text-ink-soft">{service.price} <span className="font-sans text-xs text-muted-foreground">{service.unit}</span></p><p className="text-sm leading-7 text-muted-foreground mt-4 min-h-14">{service.detail}</p><span className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-widest font-semibold border-b border-foreground pb-2">Enquire now <ArrowUpRight size={15} /></span></div></a>)}</div><p className="text-xs text-muted-foreground mt-8">Occasion portraits are illustrative; the portfolio below features Riyanka's actual work.</p></div></section>

     <section className="bg-secondary py-24 md:py-28"><div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-24 items-center"><div className="grid grid-cols-2 gap-3"><img src={newHairLong.url} alt="Long glossy hair styled by Riyanka" loading="lazy" className="w-full aspect-[3/4] object-cover" /><img src={newHairSleek.url} alt="Smooth straight hair styled by Riyanka" loading="lazy" className="w-full aspect-[3/4] object-cover" /></div><div><p className="text-xs uppercase tracking-[0.26em] text-rose mb-4">Hair artistry</p><h2 className="font-display text-4xl md:text-6xl leading-tight">Signature hair,<br /><em>your way.</em></h2><p className="text-muted-foreground leading-8 mt-7">From sleek finishes and soft waves to bridal and engagement styling, each look is tailored to you.</p><p className="text-sm text-muted-foreground mt-4">Hair styling pricing is available on enquiry.</p><Button variant="editorial" size="editorial" asChild className="mt-9"><a href="#contact">Discuss your look <ArrowUpRight /></a></Button></div></div></section>

    <section id="portfolio" className="py-24 md:py-32 bg-background scroll-mt-6"><div className="max-w-6xl mx-auto px-6"><div className="text-center mb-12"><p className="text-xs uppercase tracking-[0.26em] text-rose mb-4">Selected work</p><h2 className="font-display text-4xl md:text-6xl">The portfolio</h2><p className="mt-5 text-muted-foreground">A little of the artistry behind every look.</p></div><div className="flex justify-center flex-wrap gap-2 mb-10" role="group" aria-label="Filter portfolio">{["All", "Bridal", "Hair", "Transformations"].map((item) => <Button key={item} variant={category === item ? "editorial" : "outline"} size="sm" className="rounded-full px-5 h-9" onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</Button>)}</div><div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">{visible.map((item) => <figure key={item.title} className="relative group lift-image overflow-hidden aspect-[3/4] bg-secondary"><img src={item.image} alt={item.alt} loading="lazy" className="w-full h-full object-cover" /><div className="absolute inset-0 image-shade" /><figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-hero-text"><span className="text-[10px] uppercase tracking-widest text-hero-text/80">{item.category}</span><span className="font-display block text-lg md:text-2xl mt-1">{item.title}</span></figcaption></figure>)}</div></div></section>

    <section id="experience" className="bg-secondary py-24 md:py-32 scroll-mt-6"><div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center"><div><p className="text-xs uppercase tracking-[0.26em] text-rose mb-4">The Riyanka experience</p><h2 className="font-display text-4xl md:text-6xl leading-tight">Artistry with<br /><em>intention.</em></h2><p className="text-muted-foreground leading-8 mt-7">Every look starts with you: your features, your outfit, your occasion and the way you want to feel.</p><Button variant="editorial" size="editorial" asChild className="mt-9"><a href="#contact">Plan your look <ArrowUpRight /></a></Button></div><div className="grid sm:grid-cols-2 gap-8">{[["01", "Professional training", "Beauty techniques developed through Lakmé Academy."],["02", "Personalized looks", "Makeup and hair tailored to your features and style."],["03", "Premium products", "A carefully selected professional beauty portfolio."],["04", "Where you need her", "On-location and outstation services available."]].map(([n, title, body]) => <div key={n} className="border-t border-border pt-5"><span className="text-xs text-rose">{n}</span><h3 className="font-display text-2xl mt-5 mb-3">{title}</h3><p className="text-sm text-muted-foreground leading-7">{body}</p></div>)}</div></div></section>

    <section className="bg-paper py-20 md:py-24"><div className="max-w-6xl mx-auto px-6 text-center"><p className="text-xs uppercase tracking-[0.26em] text-rose mb-4">The kit</p><h2 className="font-display text-4xl md:text-5xl">Beauty, backed by the best</h2><p className="text-muted-foreground max-w-xl mx-auto leading-7 mt-5">Professional and premium products selected for their finish and performance.</p><div className="flex justify-center flex-wrap gap-x-10 gap-y-6 mt-12 border-y border-border py-10 font-display text-lg md:text-2xl text-ink-soft">{["DIOR", "MAKE UP FOR EVER", "GIVENCHY", "MAC", "BENEFIT", "SMASHBOX", "ESTÉE LAUDER", "PAC", "HUDA BEAUTY", "GUERLAIN"].map((brand) => <span key={brand}>{brand}</span>)}</div></div></section>

     <section className="bg-background py-24 md:py-32"><div className="max-w-4xl mx-auto px-6"><div className="text-center mb-12"><p className="text-xs uppercase tracking-[0.26em] text-rose mb-4">Good to know</p><h2 className="font-display text-4xl md:text-5xl">Booking information</h2></div><div className="grid md:grid-cols-2 gap-x-12">{[["How far ahead should I book?", "Please book at least four weeks in advance."],["Is an advance required?", "A 50% advance payment is required to confirm your booking."],["Do you travel for bookings?", "Outstation services are available. Details can be discussed with your enquiry."],["Can I book a makeup trial?", "Paid makeup trials are available. The trial fee will be adjusted against the final booking amount if the booking is confirmed."],["Can I book hair styling?", "Yes. Hair styling can be discussed as part of your occasion look or on its own; pricing is available on enquiry."]].map(([question, answer]) => <details key={question} className="group border-b border-border py-5"><summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-medium leading-6">{question}<ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" /></summary><p className="text-muted-foreground text-sm leading-7 pt-4">{answer}</p></details>)}</div></div></section>

    <section id="contact" className="bg-ink text-hero-text py-24 md:py-32 scroll-mt-6"><div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-24"><div><p className="text-xs uppercase tracking-[0.26em] text-gold mb-5">Your moment begins here</p><h2 className="font-display text-5xl md:text-7xl leading-tight">Let's create<br /><em>your look.</em></h2><p className="text-hero-text/75 max-w-sm leading-8 mt-7">Tell Riyanka about your occasion and prepare the details for your booking conversation.</p><p className="mt-14 border-t border-hero-text/20 pt-6 text-xs uppercase tracking-widest text-hero-text/65">Bridal · Engagement · Party · Festive · Hair</p></div><div><form onSubmit={prepareEnquiry} className="grid sm:grid-cols-2 gap-5">{[["Your name", "name", "text"],["WhatsApp number", "phone", "tel"],["Event date", "date", "date"],["Location", "location", "text"]].map(([label, name, type]) => <label key={name} className="text-xs uppercase tracking-widest text-hero-text/80">{label}<input required name={name} type={type} className="block mt-3 w-full bg-transparent border-b border-hero-text/40 focus:border-gold outline-none rounded-none py-3 text-base normal-case tracking-normal text-hero-text" /></label>)}<label className="sm:col-span-2 text-xs uppercase tracking-widest text-hero-text/80">Occasion<select name="occasion" required defaultValue="" className="block mt-3 w-full bg-ink border-b border-hero-text/40 focus:border-gold outline-none py-3 text-base normal-case tracking-normal text-hero-text"><option value="" disabled>Select an occasion</option>{["Bridal", "Engagement", "Party", "Festive", "Hair styling", "Other"].map((value) => <option key={value}>{value}</option>)}</select></label><label className="sm:col-span-2 text-xs uppercase tracking-widest text-hero-text/80">Anything else?<textarea name="details" rows={3} className="block mt-3 w-full bg-transparent border-b border-hero-text/40 focus:border-gold outline-none py-3 text-base normal-case tracking-normal text-hero-text resize-y" /></label><Button type="submit" variant="light" size="editorial" className="sm:col-span-2 justify-self-start mt-3">Prepare enquiry <ArrowUpRight /></Button></form>{enquiry && <div className="mt-7 border border-hero-text/30 p-5"><p className="text-sm mb-3">Your enquiry is ready to copy and send to Riyanka through your preferred contact channel.</p><pre className="whitespace-pre-wrap break-words font-sans text-xs leading-6 text-hero-text/75">{enquiry}</pre><Button variant="glass" size="sm" className="mt-4 rounded-full px-5" onClick={copyEnquiry}>{copied ? <><Check /> Copied</> : "Copy enquiry"}</Button></div>}</div></div></section>

     <footer className="bg-ink text-hero-text border-t border-hero-text/20 px-6 py-10 md:px-12"><div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8"><div><a href="#home" className="flex items-center gap-3 font-display text-2xl"><img src={logo.url} alt="" className="w-12 h-12 object-cover" />Riyanka<span className="text-gold -ml-3">Styles</span></a><p className="text-xs text-hero-text/65 mt-3 uppercase tracking-widest">Makeup • Hair • Beauty</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-hero-text/70">{nav.map(([label, href]) => <a key={label} href={href} className="hover:text-hero-text">{label}</a>)}</div><p className="text-xs text-hero-text/50">© 2026 Riyanka Styles</p></div></footer>
  </main>;
}