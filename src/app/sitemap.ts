import { MetadataRoute } from "next";

export default async function sitemap() : Promise<MetadataRoute.Sitemap>{
  const URL = "https://damasolutions.vercel.app/"
    return [
        {
            url : `${URL}/services`,
        },
    ]
}