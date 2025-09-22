import * as React from "react";

interface ImageGalleryProps {
  images?: {
    src: string;
    alt?: string;
  }[];
}

const defaultImages = [
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/ce67e5a2c06f49f2b966da9de9190ddd70517df4?placeholderIfAbsent=true&apiKey=2f5d6cb3b06340e59a369aed650b519e",
    alt: "Gallery image 1"
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/95795fa3a70dd4a5c060ae05899548e767a2f648?placeholderIfAbsent=true&apiKey=2f5d6cb3b06340e59a369aed650b519e",
    alt: "Gallery image 2"
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/268a6916078935abc6757dbb0596e65e6dd52328?placeholderIfAbsent=true&apiKey=2f5d6cb3b06340e59a369aed650b519e",
    alt: "Gallery image 3"
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/a312bab1b8630571e201c69821b6c056fdb344c6?placeholderIfAbsent=true&apiKey=2f5d6cb3b06340e59a369aed650b519e",
    alt: "Gallery image 4"
  }
];

function GalleryImage({ src, alt }: { src: string; alt?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="object-contain shrink-0 self-stretch my-auto w-60 rounded-none aspect-[0.56]"
    />
  );
}

function ImageGallery({ images = defaultImages }: ImageGalleryProps) {
  return (
    <section className="flex flex-wrap gap-7 justify-between items-center rounded-xl">
      {images.map((image, index) => (
        <GalleryImage
          key={index}
          src={image.src}
          alt={image.alt || `Gallery image ${index + 1}`}
        />
      ))}
    </section>
  );
}

export default ImageGallery;
