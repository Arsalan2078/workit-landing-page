import ButtonLink from "./components/ButtonLink";
import Logo from "./components/Logo";
import SocMeds from "./components/SocMeds";

export default function Home() {
  return <div>
    <nav>
      <Logo logo="light"/>
      <ButtonLink href="#" variation="secondary">Apply for access</ButtonLink>
    </nav>
    

    <h1>Data tailored to your needs.</h1>

    <ButtonLink href="#">Learn more</ButtonLink>

    1

    Actionable insights

    Optimize your products, improve customer satisfaction and stay ahead of the competition 
    with our product data analytics.

    2

    Data-driven decisions

    Make data-driven decisions with our product data analytics. Our AI-generated reports help 
    you unlock insights hidden in your product data.

    3

    Always affordable

    Always affordable pricing that scales with your business. Get top-quality product data 
    analytics services without hidden costs or unexpected fees.

    Be the first to test

    Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a 
    beta tester for our app and kickstart your company. Apply for access below and I’ll be 
    in touch to schedule a call.

    <ButtonLink href="#">Apply for access</ButtonLink>

    <footer>
      <Logo />
      <SocMeds />
    </footer>
  </div>;
}
