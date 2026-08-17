import { offers } from "@/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Offers() {
  return <section className="offers section" id="offers"><div className="offers__head reveal"><SectionLabel light>Gói nghỉ</SectionLabel><h2>Những ngày thật<br /><em>đáng nhớ.</em></h2><p>Giá tham khảo đã bao gồm thuế phí. Ưu đãi có thể thay đổi theo mùa và tình trạng villa.</p></div><div className="offer-grid">{offers.map((offer, index) => <article className="offer-card reveal" key={offer.title}><p className="offer-card__tag">{offer.tag}</p><small>0{index + 1}</small><h3>{offer.title}</h3><p>{offer.nights}</p><ul>{offer.includes.map(item => <li key={item}>{item}</li>)}</ul><strong>{offer.price}</strong><a href="#booking">Kiểm tra ngày trống <span>↗</span></a></article>)}</div></section>;
}
