import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact__bg" />
      <div className="contact__content reveal">
        <SectionLabel light>Lời mời từ núi</SectionLabel>
        <h2>
          Sẵn sàng cho một
          <br />
          <em>khoảng lặng?</em>
        </h2>
        <p>Hãy để chúng tôi cùng bạn thiết kế một kỳ nghỉ thật riêng.</p>
        <a href="#booking">
          Bắt đầu hành trình <span>↗</span>
        </a>
      </div>
    </section>
  );
}
