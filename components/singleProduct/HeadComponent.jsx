import { CDN_BASE_URL } from "@/constants/config";
import Head from "next/head";
import React from "react";

const HeadComponent = ({ currentProduct }) => {
  return (
    <>
      <Head>
        <title>{currentProduct?.metaTitle}</title>
        <meta name="title" content={currentProduct?.metaTitle} />
        <meta name="description" content={currentProduct?.metaDescription} />
        <meta property="og:site_name" content="Traya Health" />
        <meta
          property="og:url"
          content={typeof window !== "undefined" && window.location.href}
        />
        <meta property="og:title" content={currentProduct?.metaTitle} />
        <meta name="twitter:title" content={currentProduct?.metaTitle} />
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
      </Head>
    </>
  );
};

export default HeadComponent;
