"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageWithFallback({ src, fallbackSrc, alt, ...rest }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      alt={alt}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
