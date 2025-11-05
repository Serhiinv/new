import axios from "axios";
import qs from "qs";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
const strapiToken = process.env.STRAPI_API_TOKEN;

// Create axios instance with default config
export const strapiApi = axios.create({
  baseURL: `${strapiUrl}/api`,
  headers: {
    "Content-Type": "application/json",
    ...(strapiToken && { Authorization: `Bearer ${strapiToken}` }),
  },
});

// Generic fetch function for Strapi
export async function fetchAPI(
  path: string,
  urlParamsObject: any = {},
  options: any = {}
) {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        ...(strapiToken && { Authorization: `Bearer ${strapiToken}` }),
      },
      ...options,
    };

    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${strapiUrl}/api${path}${
      queryString ? `?${queryString}` : ""
    }`;

    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      console.error(`Strapi API error: ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching from Strapi:", error);
    return null;
  }
}

// Fetch a single page by slug
export async function getPageBySlug(slug: string) {
  const data = await fetchAPI("/pages", {
    filters: { slug: { $eq: slug } },
    populate: "*",
  });

  return data?.data?.[0] || null;
}

// Fetch all pages
export async function getAllPages() {
  const data = await fetchAPI("/pages", {
    populate: "*",
  });

  return data?.data || [];
}

// Fetch page content with sections
export async function getPageWithSections(slug: string) {
  const data = await fetchAPI("/pages", {
    filters: { slug: { $eq: slug } },
    populate: {
      sections: {
        populate: "*",
      },
      seo: {
        populate: "*",
      },
    },
  });

  return data?.data?.[0] || null;
}

