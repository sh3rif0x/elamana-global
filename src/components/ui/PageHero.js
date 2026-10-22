import Container from "../layout/Container";
import Breadcrumbs from "./Breadcrumbs";

export default function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero">
      <Container>
        <Breadcrumbs current={title} />
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </Container>
    </section>
  );
}
