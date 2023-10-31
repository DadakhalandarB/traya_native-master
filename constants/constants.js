import Cookies from "js-cookie";
import { CDN_BASE_URL } from "./config";

export const COOKIES_EXPIRY = 60; // Days
var CONSULT_DOCTOR_FEES = "";
var MALE_RESULT_PAGE = "";
var FEMALE_RESULT_PAGE = "";

if (Cookies.get("DOCTOR_LANDING") == "landingV2") {
  CONSULT_DOCTOR_FEES = 399.0;
} else if (Cookies.get("DOCTOR_LANDING") == "landingV3") {
  CONSULT_DOCTOR_FEES = 299.0;
} else {
  CONSULT_DOCTOR_FEES = 499.0;
}

export var CONSULT_DOCTOR_FEES;

if (
  (typeof window !== "undefined" &&
    window.location.pathname == "/femaleV2/question") ||
  (typeof window !== "undefined" &&
    window.location.pathname == "/home/question")
) {
  MALE_RESULT_PAGE = "/pages/result4";
  FEMALE_RESULT_PAGE = "/pages/female-result";
} else {
  MALE_RESULT_PAGE = "https://traya.health/pages/result4";
  FEMALE_RESULT_PAGE = "https://traya.health/pages/female-result";
}
export var MALE_RESULT_PAGE;
export var FEMALE_RESULT_PAGE;

export const TRAYA_MINI_HOME_URL = "https://traya.health/pages/transplant";
export const APP_TRAYA_DASHBOARD = "https://app.traya.health/login/";
export const APP_DEV_TRAYA_DASHBOARD = "https://portal.dev.hav-g.in/login/";
export const DEFAULT_FORM_CATEGORY = "next_form";
export const WAIT_FOR_PAYMENT = 1000 * 60 * 3; // MilliSeconds

export const SHOPIFY_REPEAT_RESULT = "https://traya.health/pages/Result-repeat";
export const TRAYA_FEMALE_URL = "https://traya.health/pages/female";

export const CLICK_POST_URL = "https://trayahealth.clickpost.ai/returns";

export const PLATFORM = "web_native";

export const trayaLogo = require("../assets/images/traya_logo.jpg");
export const trayaLogoDark = `${CDN_BASE_URL}website_images/localImages/TrayaLogoDark.webp`;
export const traya = require("../assets/images/traya.png");
export const traya2x = require("../assets/images/traya@2x.png");
export const traya3x = require("../assets/images/traya@3x.png");
export const GooglePlayIcon = `${CDN_BASE_URL}website_images/localImages/play_store.webp`;
export const AppStoreIcon = `${CDN_BASE_URL}website_images/localImages/app_store.webp`;
export const trayalogo = `${CDN_BASE_URL}website_images/localImages/traya.webp`;

export const productArray = [
  "Digest Boost for Improved Digestivr Ability",
  "Consti Clear for Improved Bowel movement",
  "Cholest Vati Natural Metabolic Booster that Lowers Cholesterol",
  "Scalp Oil with Growth Therapy Booster Shots Regular price Regular priceSale price",
  "Scalp oil with Calm Therapy Booster Oil",
  "Scalp oil with Dandruff Therapy Booster Oil",
  "Scalp oil with Scalp Therapy Booster Oil",
  "Meno Santhulan Tablets",
  "Mom Santhulan Tablets",
  "PCOS Santhulan",
  "Thyro Santhulan Tablets",
  "Dandruff night lotion",
];
