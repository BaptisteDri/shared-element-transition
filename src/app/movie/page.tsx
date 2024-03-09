"use client";

import { IMAGES_SRC } from "@/ui/constants";
import { NextPage } from "next";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { useState } from "react";
import Image from "next/image";

const MoviePage: NextPage = () => {
  const [scale, setScale] = useState(1);
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const searchParams = useSearchParams();
  const id = parseInt(searchParams.get("id") as string) ?? 0;
  const router = useRouter();
  const movie = IMAGES_SRC[id];

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYPosition(latest);
  });

  return (
    <motion.div
      onPan={(_, info) => {
        const scale = 1 - info.offset.y / 1000;

        if (scale < 0.8) return router.push(`/?id=${id}`, { scroll: false });
        if (scale > 1) return setScale(1);
        return setScale(scale);
      }}
      onPanEnd={() => parseInt(scale.toFixed(1)) !== 0.8 && setScale(1)}
      animate={{
        scale,
      }}
      className={"overflow-hidden touch-none"}
    >
      <motion.div
        layoutId={`item-${id}`}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="w-full relative aspect-[458/688] overflow-hidden"
        animate={{ borderRadius: scale === 1 ? 0 : 24 }}
      >
        <Image src={movie.poster} alt="movie poster" fill />
      </motion.div>
      <motion.div
        className="p-4"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.15, duration: 0.3, ease: "easeInOut" },
        }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          voluptas, dolor quae similique cupiditate mollitia, doloribus dicta
          velit libero non eligendi fuga consequuntur. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aut veniam illum fugit consequuntur
          similique ducimus alias ad perferendis, commodi aspernatur minus quae
          ut eius sed nisi modi dolore voluptatibus illo? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quis voluptas, dolor quae similique
          cupiditate mollitia, doloribus dicta velit libero non eligendi fuga
          consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aut veniam illum fugit consequuntur similique ducimus alias ad
          perferendis, commodi aspernatur minus quae ut eius sed nisi modi
          dolore voluptatibus illo?
        </p>
      </motion.div>
    </motion.div>
  );
};

export default MoviePage;
