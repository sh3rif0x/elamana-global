import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { SERVICES } from "../../data/services";

export default function ServicesGrid({ title = "خدماتنا", subtitle }) {
  return (
    <section className="section section-soft">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="grid grid-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="card">
              <span className="icon" aria-hidden="true">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
