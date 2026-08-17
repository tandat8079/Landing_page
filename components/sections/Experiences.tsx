import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experiences } from "@/data/site";

export function Experiences() {
  return (
    <section className="experiences section" id="experience">
      <div className="experiences__heading reveal">
        <SectionLabel light>Trải nghiệm</SectionLabel>
        <h2>Đánh thức<br />mọi <em>giác quan.</em></h2>
      </div>
      <div className="experience-list">
        {experiences.map((item) => (
          <article className="experience-card reveal" key={item.number}>
            <small>{item.number}</small><h3>{item.title}</h3><p>{item.text}</p><a href="#contact" aria-label={`Tìm hiểu ${item.title}`}><ArrowIcon diagonal /></a>
          </article>
        ))}
      </div>
    </section>
  );
}
