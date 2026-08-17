import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stats } from "@/data/site";

export function Story() {
  return (
    <section className="story section" id="story">
      <div className="story__top reveal">
        <SectionLabel>Triết lý An Nhiên</SectionLabel>
        <h2>Không chỉ là một<br />nơi để <em>ở.</em></h2>
        <p>An Nhiên được tạo nên từ một niềm tin giản dị: kỳ nghỉ đẹp nhất không phải là đi thật xa, mà là tìm lại được sự kết nối — với thiên nhiên, với người thương và với bản thân.</p>
      </div>
      <div className="story__visual image-reveal">
        <Image src="/images/suite.png" alt="Không gian phòng nghỉ mở ra thiên nhiên" fill sizes="(max-width: 800px) 92vw, 56vw" />
        <div className="story__note"><b>“</b><p>Kiến trúc không đứng giữa thiên nhiên. Kiến trúc lùi lại, để thiên nhiên cất tiếng.</p></div>
      </div>
      <div className="stats reveal">
        {stats.map((stat) => <div key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
      </div>
    </section>
  );
}
