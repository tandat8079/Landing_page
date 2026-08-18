import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

export function Dining() {
  return (
    <section className="dining section" id="dining">
      <div className="dining__copy reveal">
        <SectionLabel>Ẩm thực</SectionLabel>
        <h2>
          Từ đất lành,
          <br />
          đến <em>bàn ăn.</em>
        </h2>
        <p>
          Bữa ăn tại An Nhiên bắt đầu từ những khu vườn nhỏ quanh thung lũng.
          Đầu bếp của chúng tôi tôn trọng mùa vụ và để từng nguyên liệu kể câu
          chuyện của vùng đất.
        </p>
        <a className="text-link" href="#contact">
          Khám phá ẩm thực <ArrowIcon />
        </a>
      </div>
      <div className="dining__image image-reveal">
        <Image
          src="/images/dining.png"
          alt="Bữa tối nhìn ra thung lũng"
          fill
          sizes="(max-width: 800px) 92vw, 58vw"
        />
      </div>
      <div className="dining__stamp" aria-hidden="true">
        <span>FARM · TO · TABLE · </span>
        <b>✦</b>
      </div>
    </section>
  );
}
