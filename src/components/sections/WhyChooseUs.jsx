import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { WHY } from "../../data/services";
import { ShieldCheck, BadgePercent, PackageCheck, Truck } from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const ICONS = [ShieldCheck, BadgePercent, PackageCheck, Truck];

export default function WhyChooseUs() {
  return (
    <section className="section section-soft">
      <Container>
        <SectionHeading title="لماذا تختارنا" />
        <ul className={styles.list}>
          {WHY.map((w, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <li key={w.title} className={styles.item}>
                <span className={styles.icon}>
                  <Icon size={52} strokeWidth={1.5} />
                </span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
