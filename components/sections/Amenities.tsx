import Image from "next/image";
import { amenities } from "@/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Amenities() {
  return <section className="amenities section" id="amenities"><div className="amenities__image image-reveal"><Image src="/images/spa.png" alt="Hồ trị liệu bằng đá giữa rừng tre" fill sizes="(max-width: 900px) 100vw, 48vw" /></div><div className="amenities__content"><div className="reveal"><SectionLabel>Tiện nghi & dịch vụ</SectionLabel><h2>Mọi điều bạn cần,<br /><em>được chăm chút.</em></h2></div><div className="amenity-list">{amenities.map(([number, title, text]) => <article className="reveal" key={number}><small>{number}</small><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>;
}
