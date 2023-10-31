import "./Calendar.css";
import "./carousel.css";
import "./footer.css";
import "./globals.css";
import "./Home.module.css";
import "./review.css";
import "./testimonials.css";

import { Inter, Fredoka, Nunito, Mukta } from "@next/font/google";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Header from "../components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: ` Get the Best Hair loss Treatment &amp; Diagnosis | Traya Health`,
  description: `When addressing a wide array of topics related to hair, such as "hair loss treatment," "hair growth products," "hair care tips," and "hair restoration options," this comprehensive approach covers various concerns and solutions in the realm of hair health. Additionally, if you're interested in understanding the root causes of "hair loss," or perhaps you prefer exploring "natural hair treatments" and "DIY hair masks," you'll find a wealth of information to help you maintain healthy and vibrant hair. Our platform also provides insights into "hair loss in women," the effectiveness of "hair growth shampoos," and the benefits of "scalp treatments" that cater to a diverse audience. Whether you're a seasoned professional or someone seeking a "hair loss clinic near me," our content is designed to offer valuable information and guidance to address all your hair-related needs.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="//traya.health/cdn/shop/files/favicon-32x32_256x256_1a53794d-d934-47fc-824d-b0e3862279e9.webp?crop=center&amp;height=32&amp;v=1665046231&amp;width=32"
        />
      </head>
      <body className={inter.className}>
        <Theme>
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
