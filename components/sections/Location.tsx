import { SectionLabel } from "@/components/ui/SectionLabel";

export function Location() {
  return (
    <section className="location section" id="location">
      <div
        className="location__map"
        aria-label="Bản đồ minh họa vị trí An Nhiên Retreat"
      >
        <div className="map-ring map-ring--one" />
        <div className="map-ring map-ring--two" />
        <span className="map-pin">
          A<small>AN NHIÊN</small>
        </span>
        <p>THUNG NAI · HÒA BÌNH</p>
      </div>
      <div className="location__copy reveal">
        <SectionLabel>Vị trí</SectionLabel>
        <h2>
          Gần đủ để đến,
          <br />
          xa đủ để <em>quên.</em>
        </h2>
        <p>
          An Nhiên nằm bên lòng hồ Hòa Bình, giữa những dãy núi đá vôi và mặt
          nước tĩnh lặng.
        </p>
        <dl>
          <div>
            <dt>Từ Hà Nội</dt>
            <dd>2 giờ 15 phút</dd>
          </div>
          <div>
            <dt>Sân bay Nội Bài</dt>
            <dd>2 giờ 45 phút</dd>
          </div>
          <div>
            <dt>Bến thuyền Thung Nai</dt>
            <dd>12 phút</dd>
          </div>
        </dl>
        <p className="location__address">
          Thung Nai, Cao Phong, Hòa Bình, Việt Nam
          <br />
          Có bãi đỗ xe và dịch vụ đưa đón riêng.
        </p>
        <a
          className="text-link"
          href="https://maps.google.com/?q=Thung+Nai+Hoa+Binh"
          target="_blank"
          rel="noreferrer"
        >
          Mở Google Maps <span>↗</span>
        </a>
      </div>
    </section>
  );
}
