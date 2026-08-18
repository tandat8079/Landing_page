import Image from "next/image";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Stay() {
  return (
    <section className="stay section" id="stay">
      <div className="stay__image image-reveal">
        <Image
          src="/images/suite.png"
          alt="Phòng Mountain Pool Villa"
          fill
          sizes="(max-width: 800px) 100vw, 60vw"
        />
      </div>
      <div className="stay__content reveal">
        <SectionLabel>Lưu trú</SectionLabel>
        <h2>
          Ngủ giữa
          <br />
          <em>mây ngàn.</em>
        </h2>
        <p>
          Mỗi căn villa là một khoảng riêng tư tuyệt đối — nơi ánh sáng, chất
          liệu bản địa và cảnh sắc núi rừng hòa vào nhau.
        </p>
        <div className="room-meta">
          <span>02 khách</span>
          <span>85 m²</span>
          <span>Hồ bơi riêng</span>
        </div>
        <a className="text-link" href="#rooms">
          Khám phá biệt thự <ArrowIcon />
        </a>
      </div>
      <p className="stay__index">
        01 <span>/ 03</span>
      </p>
    </section>
  );
}
