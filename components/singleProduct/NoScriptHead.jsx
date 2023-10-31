import { CDN_BASE_URL } from "@/constants/config";
import Head from "next/head";
import React from "react";

const NoScriptHead = ({props,currentProduct}) => {
  return (
    <Head>
      <title>{props?.serverSideCurrProd?._currentProduct?.metaTitle}</title>
      <meta
        name="title"
        content={props?.serverSideCurrProd?._currentProduct?.metaTitle}
      />
      <meta
        name="description"
        content={props?.serverSideCurrProd?._currentProduct?.metaDescription}
      />
      <meta property="og:site_name" content="Traya Health" />
      <meta
        property="og:url"
        content={typeof window !== "undefined" && window.location.href}
      />
      <meta
        property="og:title"
        content={props?.serverSideCurrProd?._currentProduct?.metaTitle}
      />
      <meta
        name="twitter:title"
        content={props?.serverSideCurrProd?._currentProduct?.metaTitle}
      />
      <meta
        name="twitter:description"
        content={currentProduct?.metaDescription}
      />
      <meta
        property="og:description"
        content={currentProduct?.metaDescription}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`${CDN_BASE_URL}website_images/localImages/traya_logo.webp`}
      />
      <meta
        property="og:image:secure_url"
        content={`${CDN_BASE_URL}website_images/localImages/traya_logo.webp`}
      />
      <meta property="og:image:width" content="603" />
      <meta property="og:image:height" content="189" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:image"
        content={`${CDN_BASE_URL}website_images/localImages/traya_logo.webp`}
      ></meta>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "${props?.serverSideCurrProd?._currentProduct?.long_title}",
              "description": "${props?.serverSideCurrProd?._currentProduct?.long_description?.content}",
              "image": "${props?.serverSideCurrProd?._currentProduct?.product_media[0]?.url}",
              "url": "${props?.serverSideCurrProd?._currentProduct?.Url}",
              "brand": {
                "@type": "Brand",
                "name": "Traya Health"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "price": "${props?.serverSideCurrProd?._currentProduct?.price?.amount}",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating":{"@type":"AggregateRating","ratingValue":4.31,"reviewCount":1403}}
            }`,
        }}
      />
    </Head>
  );
};

export default NoScriptHead;
