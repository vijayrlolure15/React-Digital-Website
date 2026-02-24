import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    twitterHandle?: string;
}

export default function SEO({
    title = "Nvilo Infotech | Digital Solutions & IT Services",
    description = "Nvilo Infotech provides premium digital solutions, web development, IT services, and SEO strategies to empower businesses worldwide.",
    canonical = "https://nviloinfotech.in",
    ogType = "website",
    ogImage = "/images/og-image.jpg",
    twitterHandle = "@nviloinfotech"
}: SEOProps) {
    const siteTitle = title.includes("Nvilo Infotech") ? title : `${title} | Nvilo Infotech`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph tags */}
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="Nvilo Infotech" />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content={twitterHandle} />

            {/* Additional SEO tags */}
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#723FE4" />
        </Helmet>
    );
}
