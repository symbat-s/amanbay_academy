"use client";

import { useState } from "react";
import Image from "next/image";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

export default function Footer() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="bg-white">
      <div>
        <h1 className="font-bold text-5xl text-center mb-10" style={{ fontFamily: "Inter" }}>
          Контакты
        </h1>
        <iframe
          src="https://yandex.kz/map-widget/v1/?ll=66.904492%2C48.551793&z=4"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex flex-wrap justify-between px-30 mt-10 gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-4xl" style={{ fontFamily: "Inter" }}>Do you have any questions?</h1>
          <p className="mt-5 text-sm">Write to us and our manager will be happy to answer them.</p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-7">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              name="message"
              placeholder="Message text*"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <button type="submit"className="w-full bg-[#C01F26] hover:bg-red-700 text-white font-bold text-xl py-3 rounded">SEND</button>
          </form>
        </div>

        <div className="w-full md:w-1/3">
          <h1 className="font-bold text-4xl" style={{ fontFamily: "Inter" }}>Our address</h1>
          <p className="mt-3 text-sm">Shymkent, Konaev Avenue 20/1</p>

          <h1 className="font-bold text-4xl mt-10" style={{ fontFamily: "Inter" }}>Opening hours</h1>
          <p className="mt-3 text-sm">9:00 - 20:00</p>
          <div className="mt-7">
            <Image
                src="/insta.png"
                alt="insta"
                width={30}
                height={30}
                className="object-cover"
                priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
