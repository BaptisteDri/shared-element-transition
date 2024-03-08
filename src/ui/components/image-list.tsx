"use client";

import { IMAGES_SRC } from "@/ui/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

export const ImageList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = parseInt(searchParams.get("id") as string) ?? 0;

  return (
    <section className="max-w-xl grid grid-cols-3 gap-4 mx-auto p-4">
      {IMAGES_SRC.map((src, i) => (
        <motion.div
          key={i}
          layoutId={`item-${i}`}
          onClick={() => router.push(`/movie?id=${i}`, { scroll: false })}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          // @TODO: improve the way to handle zIndex
          style={{ zIndex: i === id ? 1 : 0 }}
        >
          <div className="relative aspect-[458/688] rounded-md overflow-hidden">
            <img
              src={src.poster}
              alt="movie poster"
              className="pointer-events-none"
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
};
