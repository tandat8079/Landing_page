"use client";

import { FormEvent, useMemo, useState } from "react";

export function BookingBar() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setMessage("");
    if (!checkIn || !checkOut || checkOut <= checkIn) {
      setError("Ngày trả phòng phải sau ngày nhận phòng.");
      return;
    }
    setError("");
    setMessage(
      "Còn 3 lựa chọn phù hợp · Giá từ 5.200.000 VNĐ/đêm. Xem các villa bên dưới.",
    );
    window.dispatchEvent(
      new CustomEvent("hotel:dates", { detail: { checkIn, checkOut, guests } }),
    );
    document.querySelector("#rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="booking" id="booking" aria-label="Kiểm tra phòng trống">
      <form onSubmit={submit}>
        <label>
          <span>Nhận phòng</span>
          <input
            required
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            aria-label="Ngày nhận phòng"
          />
        </label>
        <label>
          <span>Trả phòng</span>
          <input
            required
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            aria-label="Ngày trả phòng"
            aria-describedby="booking-error"
          />
        </label>
        <label>
          <span>Khách</span>
          <select
            aria-label="Số khách"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          >
            <option value="1">01 khách</option>
            <option value="2">02 khách</option>
            <option value="3">03 khách</option>
            <option value="4">04 khách</option>
          </select>
        </label>
        <button type="submit">
          Kiểm tra phòng <span>→</span>
        </button>
      </form>
      {(message || error) && (
        <p
          id="booking-error"
          className={`booking__message${error ? " booking__message--error" : ""}`}
          role={error ? "alert" : "status"}
        >
          {error || message}
        </p>
      )}
    </section>
  );
}
