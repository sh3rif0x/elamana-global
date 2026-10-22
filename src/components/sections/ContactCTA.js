import Container from "../layout/Container";
import Button from "../ui/Button";
import { waLink } from "../../lib/utils";

export default function ContactCTA() {
  return (
    <section className="cta">
      <Container>
        <h2>هل تبحث عن مورد موثوق لمحلك؟</h2>
        <p>تواصل معنا اليوم واحصل على عرض سعر خاص بك.</p>
        <div className="hero-actions center">
          <Button href="/تواصل-معنا" variant="light">اطلب عرض سعر</Button>
          <Button href={waLink("أريد عرض سعر")} external variant="outline-light">واتساب</Button>
        </div>
      </Container>
    </section>
  );
}
