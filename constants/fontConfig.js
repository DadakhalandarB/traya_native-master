import { Inter, Fredoka, Nunito, Mukta } from "@next/font/google";

export const fredoka = Fredoka({
  family: "Fredoka One",
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  weight: ["600"],
  variable: "font-family",
});

export const nunito = Nunito({
  family: "Nunito",
  subsets: ["latin"],
  display: "swap",
  variable: "font-family",
  weight: ["400", "700"],
});

export const mukta = Mukta({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  variable: "font-family",
  weight: ["300"],
});
