"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { rooms } from "@/data/site";

type Booking = {
  code: string; roomIndex: number; checkIn: string; checkOut: string; guests: number;
  fullName: string; email: string; phone: string; note: string; nights: number; total: number;
  createdAt: string; status: "confirmed";
};

const STORAGE_KEY = "an-nhien-demo-booking";
const money = new Intl.NumberFormat("vi-VN");
const prettyDate = (value: string) => value ? new Intl.DateTimeFormat("vi-VN", { weekday: "short", day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(`${value}T12:00:00`)) : "—";

export function BookingManager() {
  const [booking, setBooking] = useState<Booking | null>(null);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"form" | "success" | "detail" | "cancel">("form");
  const [roomIndex, setRoomIndex] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ fullName?: string; phone?: string }>({});
  const panelRef = useRef<HTMLDivElement>(null);
  const room = rooms[roomIndex];
  const nights = useMemo(() => checkIn && checkOut ? Math.max(0, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000)) : 0, [checkIn, checkOut]);
  const nightlyRate = Number(room.price.replaceAll(".", ""));
  const total = nightlyRate * nights;

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) try { setBooking(JSON.parse(saved)); } catch { localStorage.removeItem(STORAGE_KEY); }
    const openBooking = (event: Event) => {
      const detail = (event as CustomEvent<{ roomIndex?: number; checkIn?: string; checkOut?: string; guests?: number }>).detail || {};
      if (typeof detail.roomIndex === "number") setRoomIndex(detail.roomIndex);
      if (detail.checkIn) setCheckIn(detail.checkIn);
      if (detail.checkOut) setCheckOut(detail.checkOut);
      if (detail.guests) setGuests(detail.guests);
      setMode("form"); setOpen(true);
    };
    const dates = (event: Event) => {
      const detail = (event as CustomEvent<{ checkIn: string; checkOut: string; guests: number }>).detail;
      setCheckIn(detail.checkIn); setCheckOut(detail.checkOut); setGuests(detail.guests);
    };
    window.addEventListener("hotel:book", openBooking);
    window.addEventListener("hotel:dates", dates);
    return () => { window.removeEventListener("hotel:book", openBooking); window.removeEventListener("hotel:dates", dates); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) requestAnimationFrame(() => panelRef.current?.focus());
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", escape);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", escape); };
  }, [open]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!checkIn || !checkOut || nights < 1) { setError("Vui lòng chọn ngày trả phòng sau ngày nhận phòng."); return; }
    const fullName = String(data.get("fullName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").replace(/\D/g, "");
    if (!fullName || !email || !phone) { setError("Vui lòng điền đầy đủ họ tên, email và số điện thoại."); return; }
    const nextFieldErrors: { fullName?: string; phone?: string } = {};
    if (!/^[\p{L}\s.'’-]{2,}$/u.test(fullName)) nextFieldErrors.fullName = "Họ tên chỉ được chứa chữ, không được chứa số.";
    if (!/^0\d{9}$/.test(phone)) nextFieldErrors.phone = "Số điện thoại phải gồm đúng 10 chữ số và bắt đầu bằng 0.";
    if (Object.keys(nextFieldErrors).length) {
      setFieldErrors(nextFieldErrors);
      setError("Vui lòng kiểm tra lại các trường được đánh dấu bên dưới.");
      requestAnimationFrame(() => document.getElementById(nextFieldErrors.fullName ? "booking-full-name" : "booking-phone")?.focus());
      return;
    }
    setFieldErrors({});
    const newBooking: Booking = { code: `AN${Date.now().toString().slice(-6)}`, roomIndex, checkIn, checkOut, guests, fullName, email, phone, note: String(data.get("note") || ""), nights, total, createdAt: new Date().toISOString(), status: "confirmed" };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newBooking)); setBooking(newBooking); setError(""); setMode("success");
  };

  const cancelBooking = () => { localStorage.removeItem(STORAGE_KEY); setBooking(null); setMode("detail"); setOpen(false); };
  const showDetail = () => { setMode("detail"); setOpen(true); };
  const activeBooking = booking;
  const bookedRoom = activeBooking ? rooms[activeBooking.roomIndex] : room;

  return <>
    {booking && <button className="my-booking" onClick={showDetail}><span>✓</span><span>Đặt phòng của tôi<small>{booking.code}</small></span></button>}
    {open && <div className="booking-modal" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="booking-panel" ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="booking-panel-title" tabIndex={-1}>
        <button className="booking-panel__close" onClick={() => setOpen(false)} aria-label="Đóng cửa sổ đặt phòng">×</button>
        {mode === "form" && <>
          <div className="booking-panel__hero"><Image src={room.image} alt={room.name} fill sizes="480px"/><span>ĐẶT PHÒNG TRỰC TIẾP</span></div>
          <form className="booking-flow" onSubmit={submit}>
            <p className="booking-flow__step">BƯỚC 01 / 02</p><h2 id="booking-panel-title">Hoàn tất kỳ nghỉ</h2><p className="booking-flow__room">{room.name} · {room.meta}</p>
            {error && <p className="booking-flow__error" role="alert" tabIndex={-1}>{error}</p>}
            <fieldset><legend>Thời gian lưu trú</legend><div className="booking-flow__grid"><label>Nhận phòng<input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required/></label><label>Trả phòng<input type="date" value={checkOut} min={checkIn} onChange={(e) => setCheckOut(e.target.value)} required/></label><label>Số khách<select value={guests} onChange={(e) => setGuests(Number(e.target.value))}><option value="1">01 khách</option><option value="2">02 khách</option><option value="3">03 khách</option><option value="4">04 khách</option></select></label></div></fieldset>
            <fieldset><legend>Thông tin khách chính</legend><div className="booking-flow__grid"><label>Họ và tên<input id="booking-full-name" name="fullName" autoComplete="name" placeholder="Nguyễn Minh Anh" aria-invalid={!!fieldErrors.fullName} aria-describedby={fieldErrors.fullName ? "full-name-error" : undefined} onChange={() => fieldErrors.fullName && setFieldErrors((current) => ({ ...current, fullName: undefined }))} required/>{fieldErrors.fullName && <small id="full-name-error" className="field-error">{fieldErrors.fullName}</small>}</label><label>Email<input name="email" type="email" autoComplete="email" placeholder="minhanh@email.com" required/></label><label>Điện thoại<input id="booking-phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="0901234567" maxLength={14} aria-invalid={!!fieldErrors.phone} aria-describedby={fieldErrors.phone ? "phone-error" : "phone-help"} onChange={() => fieldErrors.phone && setFieldErrors((current) => ({ ...current, phone: undefined }))} required/><small id="phone-help" className="field-help">10 chữ số, bắt đầu bằng 0</small>{fieldErrors.phone && <small id="phone-error" className="field-error">{fieldErrors.phone}</small>}</label><label className="booking-flow__full">Lời nhắn (không bắt buộc)<textarea name="note" placeholder="Dị ứng thực phẩm, giờ đến dự kiến..."/></label></div></fieldset>
            <div className="booking-summary"><span>{nights || 0} đêm × {room.price} VNĐ</span><strong>{money.format(total)} VNĐ</strong><small>Đã bao gồm thuế phí · Chưa phát sinh thanh toán trong bản demo</small></div>
            <button className="booking-flow__submit" type="submit">Xác nhận đặt phòng <span>→</span></button>
          </form>
        </>}
        {mode === "success" && activeBooking && <div className="booking-state booking-state--success"><span className="booking-state__icon">✓</span><p>ĐẶT PHÒNG THÀNH CÔNG</p><h2 id="booking-panel-title">Hẹn gặp bạn<br/>giữa đại ngàn.</h2><p>Mã đặt phòng</p><strong>{activeBooking.code}</strong><p>Xác nhận demo đã được lưu trên trình duyệt này.</p><button onClick={() => setMode("detail")}>Xem chi tiết đặt phòng</button></div>}
        {(mode === "detail" || mode === "cancel") && activeBooking && <div className="booking-detail"><p className="booking-flow__step">CHI TIẾT ĐẶT PHÒNG</p><h2 id="booking-panel-title">{activeBooking.code}</h2><span className="booking-detail__status">● Đã xác nhận</span><div className="booking-detail__room"><Image src={bookedRoom.image} alt={bookedRoom.name} width={150} height={110}/><div><h3>{bookedRoom.name}</h3><p>{activeBooking.nights} đêm · {activeBooking.guests} khách</p></div></div><dl><div><dt>Nhận phòng</dt><dd>{prettyDate(activeBooking.checkIn)}<small>Sau 14:00</small></dd></div><div><dt>Trả phòng</dt><dd>{prettyDate(activeBooking.checkOut)}<small>Trước 12:00</small></dd></div><div><dt>Khách chính</dt><dd>{activeBooking.fullName}<small>{activeBooking.phone}</small></dd></div><div><dt>Email</dt><dd>{activeBooking.email}</dd></div><div><dt>Tổng dự kiến</dt><dd><b>{money.format(activeBooking.total)} VNĐ</b><small>Thanh toán tại khu nghỉ</small></dd></div></dl>{activeBooking.note && <p className="booking-detail__note"><b>Lời nhắn:</b> {activeBooking.note}</p>}{mode === "cancel" ? <div className="cancel-box" role="alert"><h3>Huỷ đặt phòng này?</h3><p>Thao tác sẽ xoá đặt phòng demo khỏi trình duyệt. Bạn không thể hoàn tác.</p><div><button onClick={() => setMode("detail")}>Giữ đặt phòng</button><button onClick={cancelBooking}>Xác nhận huỷ</button></div></div> : <div className="booking-detail__actions"><button onClick={() => setOpen(false)}>Đóng</button><button className="danger-link" onClick={() => setMode("cancel")}>Huỷ đặt phòng</button></div>}</div>}
      </div>
    </div>}
  </>;
}
