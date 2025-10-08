import { useRef } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { LightGallery as ILightGallery } from "lightgallery/lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

export default function Gallery() {
  const lightGalleryRef = useRef<ILightGallery | null>(null);

  const galleryImages = [
    {
      src: "/gallery/line.png",
      responsive: "/gallery/line.png",
      thumb: "/gallery/line.png",
      subHtml: "<h4>Line Art</h4>",
    },
    {
      src: "/gallery/inverse.png",
      responsive: "/gallery/inverse.png",
      thumb: "/gallery/inverse.png",
      subHtml: "<h4>Inverse</h4>",
    },

    {
      src: "/gallery/charcoal1.png",
      responsive: "/gallery/charcoal1.png",
      thumb: "/gallery/charcoal1.png",
      subHtml: `<h4>Still Figures in Charcoal</h4>`,
    },
    {
      src: "/gallery/portrait.png",
      responsive: "/gallery/portrait.png",
      thumb: "/gallery/portrait.png",
      subHtml: `<h4>Self Portrait in Charcoal</h4>`,
    },
    // Add more images here
  ];

  const openGallery = (index: number) => {
    lightGalleryRef.current?.openGallery(index);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* LOWKEY FIX 'GALLERY' LOCATION like maybe 1/3 from top of page?*/}
      <h1 className="text-xl font-bold tracking-wide mb-40">gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openGallery(index)}
          >
            <img
              src={image.thumb}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto object-contain hover:opacity-90 transition-opacity"
            />
          </div>
        ))}
      </div>

      <LightGallery
        onInit={(detail) => {
          lightGalleryRef.current = detail.instance;
        }}
        dynamic={true}
        dynamicEl={galleryImages}
        plugins={[lgZoom, lgThumbnail]}
        speed={500}
      />
      <div className="mt-40">More Coming!</div>
    </div>
  );
}
