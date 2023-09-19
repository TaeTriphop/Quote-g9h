import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

import AppFooter from "../footer/AppFooter";

interface QuoteItem {
  idQuote: number;
  quote: string;
}

const quote: QuoteItem[] = [
  { idQuote: 1, quote: "น้ำพริกหนุ่ม เก็บไว้นานๆจะแก่ไหมครับ?" },
  { idQuote: 2, quote: "ถ้าเราเอากาแฟให้คนตายกิน เขาจะตายตาหลับไหมครับ?" },
  { idQuote: 3, quote: "ถ้าเราปวดหลัง แล้วใครปวดก่อน?" },
  { idQuote: 4, quote: "ที่ผมมีวันนี้ได้ เพราะผมผ่านเมื่อวานมาแล้ว!" },
  { idQuote: 5, quote: "เมื่อก่อนผมสั้น แต่ตอนนี้ผมโสด!" },
  { idQuote: 6, quote: "กว่าจะงม คมตั้งนาน" },
  { idQuote: 7, quote: "เบื่อแล้วส้มตำ อย่างหม่ำส้นตีน" },
  { idQuote: 8, quote: "ถ้าที่ตรงนั้นไม่ใช่ที่ของเรา เราจะไม่มีโฉนด" },
  { idQuote: 9, quote: "กินผักมันขม กินยาสระผมดีกว่า" },
  {
    idQuote: 10,
    quote: "คิดว่าตัวเองสูง 180 มาตลอด พอไปวัดเท่านั้นแหละ เจอพระ!",
  },
  { idQuote: 11, quote: "เบื่อแล้วใส่บาตร อยากใส่เดียว!" },
  { idQuote: 12, quote: "คงมีแต่พระแค่นั้นแหละ ที่ต้องการฉัน!" },
  { idQuote: 13, quote: "ช่วงนี้มะนาวแพง แต่หอมฟรีนะ " },
  { idQuote: 14, quote: "มีแต่ลิฟต์เท่านั้นแหละที่เอาผมลง!" },
  { idQuote: 15, quote: "ส้นตีนนะไม่ใช่ปูไทย ที่จะอร่อยถึงใจเด็กไทยทุกคน" },
];

const randomQuote = Math.floor(Math.random() * quote.length);

export default function Quote() {
  const [currentQuote, setCurrentQuote] = useState(quote[randomQuote]);

  const shuffleQuote = () => {
    // ถ้า currentQuote ไม่เป็น null ให้เก็บ idQuote ที่เคยถูกเลือกไว้
    let selectedIds: number[] = [];
    if (currentQuote) {
      selectedIds.push(currentQuote.idQuote);
    }

    // สร้างรายการ quote ที่ไม่มี idQuote ที่ถูกเลือกไว้
    const availableQuotes = quote.filter(
      (item) => !selectedIds.includes(item.idQuote)
    );

    if (availableQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableQuotes.length);
      const newQuote = availableQuotes[randomIndex];
      setCurrentQuote(newQuote);
    } else {
      return null;
    }
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 min-h-[100vh]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mt-20 mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
              เต้พูดว่า
            </h2>
          </div>

          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <p>{currentQuote.quote}</p>
              <FontAwesomeIcon icon={faQuoteRight} />
            </blockquote>

            <figcaption className="mt-10">
              <div className="flex items-center justify-center gap-x-6">
                <button
                  onClick={shuffleQuote}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  เอาอีก &nbsp;
                  <FontAwesomeIcon icon={faShuffle} />
                </button>
              </div>
            </figcaption>
          </figure>
        </div>
        <AppFooter />
      </section>
    </>
  );
}
