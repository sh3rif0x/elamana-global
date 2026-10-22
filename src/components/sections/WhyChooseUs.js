import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { WHY } from "../../data/services";

export default function WhyChooseUs() {
  return (
    <section className="section section-soft">
      <Container>
        <SectionHeading title="لماذا تختارنا" />
        <div className="grid grid-4">
          {WHY.map((w) => (
            <article key={w.title} className="card">
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
