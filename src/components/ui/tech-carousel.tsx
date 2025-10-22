"use client";

import Image from "next/image";

const techLogos = [
  { name: "PHP", src: "/img/php.svg" },
  { name: "JavaScript", src: "/img/javascript.svg" },
  { name: "Next.js", src: "/img/next-js.svg" },
  { name: "React", src: "/img/react.svg" },
  { name: "TypeScript", src: "/img/typescript.svg" },
  { name: "Tailwind CSS", src: "/img/tailwind.svg" },
  { name: "Database", src: "/img/database.svg" },
  { name: "MySQL", src: "/img/mysql.svg" },
  { name: "PostgreSQL", src: "/img/postgresql.svg" },
];

export default function TechCarousel() {
  return (
    <div className="w-full overflow-hidden bg-primary py-8">
      <div className="relative">
        {/* Infinite scrolling logos */}
        <div className="flex animate-scroll-left space-x-16">
          {[...techLogos, ...techLogos, ...techLogos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={64}
                height={64}
                className="w-16 h-16 object-contain filter brightness-0"
                title={`${logo.name} logo`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}