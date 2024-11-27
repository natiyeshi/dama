import { MetadataRoute } from "next";

export default async function sitemap() : Promise<MetadataRoute.Sitemap>{
  const URL = "https://damasolutions.org/"
    return [
        {
            url : `${URL}/services`,
        },
    ]
}