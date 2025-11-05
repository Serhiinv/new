import { GetStaticProps } from "next";
import Head from "next/head";
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";
import Layout from "@/components/Layout";
import { getAllPages } from "@/lib/strapi";
import { Page } from "@/types/strapi";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

interface PagesListProps {
  pages: Page[];
}

export default function PagesList({ pages }: PagesListProps) {
  const theme = useTheme();
  const themeStyle = theme.palette.whites.main;

  return (
    <>
      <Head>
        <title>All Pages - Auction Fusion</title>
        <meta name="description" content="Browse all pages" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout
        showContactButton={true}
        logoVariant={themeStyle === theme.palette.primary.light ? "light" : "dark"}
        backgroundColor={themeStyle}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            All Pages
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 4, color: "text.secondary" }}
          >
            Content managed through Strapi CMS
          </Typography>

          <Grid container spacing={3}>
            {pages.map((page) => (
              <Grid item xs={12} sm={6} md={4} key={page.id}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {page.attributes.title}
                    </Typography>
                    {page.attributes.description && (
                      <Typography variant="body2" color="text.secondary">
                        {page.attributes.description}
                      </Typography>
                    )}
                  </CardContent>
                  <CardActions>
                    <Link href={`/${page.attributes.slug}`} passHref legacyBehavior>
                      <Button size="small" color="primary">
                        View Page
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {pages.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h5" color="text.secondary">
                No pages found. Create some pages in Strapi!
              </Typography>
            </Box>
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pages = await getAllPages();

  return {
    props: {
      pages: pages || [],
    },
    revalidate: 60,
  };
};

