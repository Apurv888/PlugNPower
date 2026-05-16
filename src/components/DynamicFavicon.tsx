import { useEffect } from "react";

const logoUrl = "/images/logo.png";

export function DynamicFavicon() {
  useEffect(() => {
    // Determine if we already generated a favicon
    if (document.getElementById("dynamic-favicon")) return;

    const img = new Image();
    img.src = logoUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      // Assuming the logo's height is its icon's width/height on the left side
      // Let's use the height as the square size
      const size = img.height;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      
      if (ctx) {
        // Draw the image onto the canvas, cropping the left square (size x size)
        ctx.drawImage(img, 0, 0, size, size, 0, 0, size, size);
        
        let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        if (!link) {
          link = document.createElement("link");
          link.rel = "icon";
          document.head.appendChild(link);
        }
        link.id = "dynamic-favicon";
        link.href = canvas.toDataURL("image/png");
      }
    };
  }, []);

  return null;
}
