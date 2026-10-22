import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

export const metadata = { title: "الصفحة غير موجودة" };

export default function NotFound() {
  return (
    <section className="section">
      <Container className="center">
        <h1>٤٠٤</h1>
        <p>عذرًا، الصفحة التي تبحث عنها غير موجودة.</p>
        <Button href="/">العودة للرئيسية</Button>
      </Container>
    </section>
  );
}
