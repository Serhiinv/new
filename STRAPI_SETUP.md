# Strapi CMS Integration Guide

This guide will help you set up Strapi CMS and connect it to your Next.js project.

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn

## Part 1: Setting up Strapi

### 1. Create a new Strapi project

Open a new terminal window and run:

```bash
npx create-strapi-app@latest my-auction-cms --quickstart
```

Or if you want to use a specific database:

```bash
npx create-strapi-app@latest my-auction-cms
```

This will create a new folder called `my-auction-cms` with your Strapi installation.

### 2. Start Strapi

```bash
cd my-auction-cms
npm run develop
```

Strapi will open at `http://localhost:1337/admin`

### 3. Create your admin account

When you first open Strapi, you'll be prompted to create an admin account. Fill in the details and submit.

## Part 2: Creating Content Types

### 1. Create the "Page" Content Type

1. In the Strapi admin panel, go to **Content-Type Builder** (left sidebar)
2. Click **"Create new collection type"**
3. Enter display name: `Page`
4. Click **Continue**

### 2. Add fields to Page:

Add the following fields one by one:

#### Text Fields:
- **title** (Text - Short text) - Required
- **slug** (UID - Attached to title) - Required
- **description** (Text - Long text)

#### Rich Text:
- **content** (Rich Text - Full editor)

#### Component (for sections):
1. Click "Add another field"
2. Select "Component"
3. Name: `sections`
4. Click "Create a new component"
5. Category: `page-sections`
6. Name: `section`
7. Add these fields to the component:
   - **title** (Text - Short text)
   - **content** (Rich Text)
   - **type** (Enumeration: hero, features, text, cta, custom)
   - **order** (Number - integer)
   - **backgroundColor** (Text - Short text)
8. Select "Repeatable component"
9. Click Finish

#### SEO Component (optional but recommended):
1. Add another field
2. Select "Component"
3. Name: `seo`
4. Create new component:
   - Category: `shared`
   - Name: `seo`
5. Add fields:
   - **metaTitle** (Text - Short text)
   - **metaDescription** (Text - Long text)
   - **keywords** (Text - Short text)
   - **canonicalURL** (Text - Short text)
6. Click Finish

### 3. Save and Restart

Click **Save** at the top right. Strapi will restart to apply the changes.

## Part 3: Configure API Permissions

### 1. Set Public Permissions

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Click on **Public**
3. Under **Permissions**, expand **Page**
4. Check the following permissions:
   - ✅ find
   - ✅ findOne
5. Click **Save**

### 2. Create API Token (Recommended for production)

1. Go to **Settings** → **API Tokens**
2. Click **Create new API Token**
3. Name: `Next.js Frontend`
4. Token type: `Read-only`
5. Token duration: `Unlimited`
6. Click **Save**
7. **Copy the token** - you'll need this for your `.env.local` file

## Part 4: Connect Next.js to Strapi

### 1. Update Environment Variables

In your Next.js project, open `.env.local` and update:

```bash
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your_copied_token_here
```

Replace `your_copied_token_here` with the actual token from Step 3.2.

### 2. Create Sample Content

1. In Strapi admin, go to **Content Manager** → **Page**
2. Click **Create new entry**
3. Fill in:
   - **Title**: "About Us"
   - **Slug**: "about-us" (auto-generated)
   - **Description**: "Learn more about Auction Fusion"
   - **Content**: Add some sample content
4. Click **Save** and then **Publish**

### 3. Test the Integration

Visit your Next.js app at:
```
http://localhost:3000/about-us
```

You should see your Strapi content rendered!

## Part 5: Creating More Pages

### Add pages through Strapi:

1. Go to **Content Manager** → **Page**
2. Click **Create new entry**
3. Create pages like:
   - **pricing** (slug: pricing)
   - **services** (slug: services)
   - **blog** (slug: blog)
   - **team** (slug: team)

Each page will automatically be available at `http://localhost:3000/{slug}`

## Part 6: Advanced Features

### Using Sections

When creating a page, you can add dynamic sections:

1. Click **Add an entry** under Sections
2. Fill in:
   - **Title**: Section title
   - **Content**: Section content
   - **Type**: Choose from hero, features, text, cta, custom
   - **Order**: 1, 2, 3, etc. (controls display order)
   - **Background Color**: Optional (e.g., "#f5f5f5")

### SEO Optimization

For each page, fill in the SEO component:
- **Meta Title**: Optimized title for search engines
- **Meta Description**: Brief description (150-160 chars)
- **Keywords**: Comma-separated keywords
- **Canonical URL**: Full URL of the page

## Part 7: Production Deployment

### For Strapi:

1. Choose a hosting provider:
   - Railway.app (easiest)
   - Heroku
   - DigitalOcean
   - AWS

2. Deploy your Strapi instance

3. Update your Next.js `.env.local`:
```bash
NEXT_PUBLIC_STRAPI_API_URL=https://your-strapi-domain.com
STRAPI_API_TOKEN=your_production_token
```

### For Next.js:

Make sure to add environment variables in your deployment platform (Vercel, Netlify, etc.)

## Troubleshooting

### CORS Issues
If you get CORS errors:
1. In Strapi, go to `config/middlewares.js`
2. Update the CORS settings to include your Next.js domain

### Content Not Showing
- Check that content is **Published** (not just Saved)
- Verify API permissions are set correctly
- Check your API token is valid
- Check browser console for errors

### 404 Errors
- Run `npm run build` in your Next.js project to regenerate static pages
- Check that the slug in Strapi matches the URL you're visiting

## Useful Commands

### Strapi:
```bash
npm run develop    # Development mode
npm run build      # Build for production
npm run start      # Start production server
```

### Next.js:
```bash
npm run dev        # Development mode
npm run build      # Build static pages
npm run start      # Start production server
```

## Next Steps

1. Create more content types (Blog, Products, Team Members, etc.)
2. Add media library for images
3. Set up internationalization (i18n) if needed
4. Add user authentication
5. Create custom API endpoints
6. Add webhooks to trigger Next.js rebuilds

## Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi + Next.js Integration](https://strapi.io/integrations/nextjs-cms)

---

Need help? Check the Strapi Discord or Next.js GitHub discussions.
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Box, Typography, Container } from "@mui/material";
import Layout from "@/components/Layout";
import { getPageBySlug, getAllPages } from "@/lib/strapi";
import { Page } from "@/types/strapi";
import { useTheme } from "@mui/material/styles";

interface DynamicPageProps {
  page: Page | null;
}

export default function DynamicPage({ page }: DynamicPageProps) {
  const theme = useTheme();

  if (!page) {
    return (
      <Layout>
        <Container>
          <Typography variant="h4" sx={{ mt: 4 }}>
            Page not found
          </Typography>
        </Container>
      </Layout>
    );
  }

  const { title, content, description, seo } = page.attributes;
  const themeStyle = theme.palette.whites.main;

  return (
    <>
      <Head>
        <title>{seo?.metaTitle || title}</title>
        <meta
          name="description"
          content={seo?.metaDescription || description || ""}
        />
        {seo?.keywords && <meta name="keywords" content={seo.keywords} />}
        {seo?.canonicalURL && <link rel="canonical" href={seo.canonicalURL} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout
        showContactButton={true}
        logoVariant={themeStyle === theme.palette.primary.light ? "light" : "dark"}
        backgroundColor={themeStyle}
      >
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            padding: { xs: "30px 25px", md: "50px 70px" },
            maxWidth: { xs: "100%", md: "1600px" },
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 4,
            }}
          >
            {title}
          </Typography>

          {description && (
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                mb: 4,
                color: "text.secondary",
              }}
            >
              {description}
            </Typography>
          )}

          {content && (
            <Box
              sx={{
                "& p": { mb: 2, lineHeight: 1.8 },
                "& h2": { mt: 4, mb: 2, fontSize: "2rem" },
                "& h3": { mt: 3, mb: 2, fontSize: "1.5rem" },
                "& ul": { mb: 2, pl: 3 },
                "& ol": { mb: 2, pl: 3 },
              }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}

          {/* Render dynamic sections if available */}
          {page.attributes.sections && page.attributes.sections.length > 0 && (
            <Box sx={{ mt: 6 }}>
              {page.attributes.sections
                .sort((a, b) => (a.attributes.order || 0) - (b.attributes.order || 0))
                .map((section) => (
                  <Box
                    key={section.id}
                    sx={{
                      mb: 4,
                      p: 3,
                      backgroundColor: section.attributes.backgroundColor || "transparent",
                      borderRadius: 2,
                    }}
                  >
                    {section.attributes.title && (
                      <Typography variant="h4" sx={{ mb: 2 }}>
                        {section.attributes.title}
                      </Typography>
                    )}
                    {section.attributes.content && (
                      <Box
                        dangerouslySetInnerHTML={{ __html: section.attributes.content }}
                      />
                    )}
                  </Box>
                ))}
            </Box>
          )}
        </Box>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getAllPages();

  const paths = pages.map((page: Page) => ({
    params: { slug: page.attributes.slug },
  }));

  return {
    paths,
    fallback: "blocking", // or 'true' or 'false'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const page = await getPageBySlug(slug);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

