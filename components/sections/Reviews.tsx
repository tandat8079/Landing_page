"use client";

import { useState } from "react";
import { reviews } from "@/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Reviews() {
  const [active, setActive] = useState(0);
  const review = reviews[active];
  return (
    <section className="reviews section" aria-labelledby="reviews-title">
      <div className="reviews__score reveal">
        <strong>4.9</strong>
        <span>★★★★★</span>
        <p>Từ 186 đánh giá của khách lưu trú*</p>
      </div>
      <div className="reviews__quote reveal">
        <SectionLabel>Chia sẻ từ khách</SectionLabel>
        <blockquote id="reviews-title">“{review.quote}”</blockquote>
        <p>
          <strong>{review.name}</strong>
          <span>{review.stay}</span>
        </p>
        <div className="reviews__controls">
          {reviews.map((_, index) => (
            <button
              key={index}
              aria-label={`Xem đánh giá ${index + 1}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <small>
          * Nội dung minh họa — cần thay bằng dữ liệu đánh giá xác thực trước
          khi xuất bản.
        </small>
      </div>
    </section>
  );
}
