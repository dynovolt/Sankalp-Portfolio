import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sankalp S | Digital Headquarters",
    short_name: "Sankalp",
    description: "Personal website representing Sankalp S as an AI Engineer, Software Developer, Researcher, and Product Builder.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#09090B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
