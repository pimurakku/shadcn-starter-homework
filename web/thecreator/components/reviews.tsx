"use client"

import { useRef } from "react"

const CARD_WIDTH = 508
const CARD_GAP = 32 // gap-8 = 2rem = 32px

const reviews = [
  {
    name: "John Li",
    bg: "bg-pink-200",
    text: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
  },
  {
    name: "Amanda Steen",
    bg: "bg-pink-400",
    text: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
  },
  {
    name: "Nicholas Love",
    bg: "bg-pink-200",
    text: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
  },
]

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null)

  function scrollReviews(direction: -1 | 1) {
    if (!containerRef.current) return
    containerRef.current.scrollBy({
      left: direction * (CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    })
  }

  return (
    <section
      id="review"
      className="flex flex-col gap-8 md:gap-12 lg:gap-16 items-start overflow-hidden px-4 py-10 md:px-16 md:py-12 lg:px-40 lg:py-16 w-full"
    >
      <p className="text-xl leading-7 text-center text-foreground w-full">
        Hear from our customers from Top YouTube Channel
      </p>

      {/* Title block */}
      <div className="flex flex-col items-start gap-0">
        <h2
          className="font-bold text-foreground"
          style={{ fontSize: "clamp(36px, 3.9vw, 60px)", lineHeight: "60px" }}
        >
          We&apos;ve taught <strong>over 3,000 creators</strong>
        </h2>

        <h2
          className="font-bold text-foreground"
          style={{ fontSize: "clamp(36px, 3.9vw, 60px)", lineHeight: "60px" }}
        >
          how to <strong>grow on any Platform</strong>
        </h2>
      </div>

      <h2
        className="font-bold text-foreground"
        style={{
          fontSize: "clamp(36px, 3.9vw, 60px)",
          lineHeight: "60px",
          maxWidth: "922px",
        }}
      >
        Now we can do it for you
      </h2>

      {/* Subtitle & navigation buttons */}
      <div
        className="flex items-center justify-between w-full"
        style={{ maxWidth: "1272px" }}
      >
        <h3
          className="font-bold text-foreground"
          style={{ fontSize: "30px", lineHeight: "36px", width: "416px" }}
        >
          See what our famous clients write about us:
        </h3>
        <div className="flex gap-3 items-center">
          <button
            onClick={() => scrollReviews(-1)}
            className="flex items-center justify-center rounded-lg bg-secondary hover:bg-gray-200 transition-colors"
            style={{ width: "36px", height: "36px" }}
            aria-label="Previous review"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="#0a0a0a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => scrollReviews(1)}
            className="flex items-center justify-center rounded-lg bg-secondary hover:bg-gray-200 transition-colors"
            style={{ width: "36px", height: "36px" }}
            aria-label="Next review"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="#0a0a0a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Review Cards */}
      <div
        ref={containerRef}
        className="flex gap-8 items-start overflow-x-auto pb-2 w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            className={`flex flex-col gap-4 items-start overflow-hidden px-14 py-8 rounded-2xl flex-shrink-0 transition-transform duration-200 hover:-translate-y-1 ${review.bg}`}
            style={{ width: `${CARD_WIDTH}px` }}
          >
            <div
              className="rounded-full overflow-hidden bg-border"
              style={{ width: "80px", height: "80px" }}
            >
              <img
                src="/img/avatar.png"
                alt={review.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h4
              className="font-medium text-foreground"
              style={{ fontSize: "30px", lineHeight: "36px" }}
            >
              {review.name}
            </h4>
            <p className="text-xl leading-7 text-foreground">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
