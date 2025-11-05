  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

// Page types
export interface PageAttributes {
  title: string;
  slug: string;
  content?: string;
  description?: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  sections?: StrapiData<SectionAttributes>[];
  seo?: SeoAttributes;
}

export interface SectionAttributes {
  title?: string;
  content?: string;
  type: "hero" | "features" | "text" | "cta" | "custom";
  order?: number;
  backgroundColor?: string;
  data?: any; // For custom section data
}

export interface SeoAttributes {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  metaImage?: any;
  canonicalURL?: string;
}

export type Page = StrapiData<PageAttributes>;
export type Section = StrapiData<SectionAttributes>;
# Strapi API Configuration
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token_here

