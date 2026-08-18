"use client";

import Image from "next/image";
import { useState } from "react";
import { rooms } from "@/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Rooms() {
  const [active, setActive] = useState(0);
  const room = rooms[active];
  const bookRoom = () =>
    window.dispatchEvent(
      new CustomEvent("hotel:book", { detail: { roomIndex: active } }),
    );
  return (
    <section className="rooms section" id="rooms">
      <div className="rooms__head reveal">
        <SectionLabel>Các hạng villa</SectionLabel>
        <h2>
          Một khoảng riêng
          <br />
          cho <em>mỗi hành trình.</em>
        </h2>
      </div>
      <div className="rooms__viewer">
        <div className="rooms__photo image-reveal">
          <Image
            key={room.image}
            src={room.image}
            alt={room.name}
            fill
            sizes="(max-width: 900px) 100vw, 56vw"
          />
        </div>
        <div className="rooms__detail reveal">
          <p className="rooms__count">
            0{active + 1} / 0{rooms.length}
          </p>
          <h3>{room.name}</h3>
          <p className="rooms__meta">{room.meta}</p>
          <ul>
            {room.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <p className="rooms__price">
            Từ <strong>{room.price} VNĐ</strong> / đêm
          </p>
          <button type="button" onClick={bookRoom} className="solid-link">
            Chọn villa này <span>↗</span>
          </button>
        </div>
      </div>
      <div className="rooms__tabs" role="tablist" aria-label="Chọn hạng villa">
        {rooms.map((item, index) => (
          <button
            role="tab"
            aria-selected={active === index}
            key={item.name}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}
