import { CDN_BASE_URL } from "@/constants/config";
import { fredoka, nunito } from "@/constants/fontConfig";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";

const EssentialsData = [
  {
    url: "/products/meno-santulan-tablets-for-menopause-support-and-menopausal-hair-fall",
    img: `${CDN_BASE_URL}website_images/all_products/menoSantulan/menoSantulan6.png`,
    title: "Meno Santulan",
    description:
      "An ultimate herbal mix that controls hair fall in menopausal and perimenopausal women",
  },
  {
    url: "/products/herbal-tablets",
    img: `${CDN_BASE_URL}website_images/all_products/herbalTabletsTatva/herbalTabletsTatva09.png`,
    title: "Health Tatva",
    description:
      "Ayurvedic herbs to boost absorption of nutrients for improved energy and hair health",
  },
  {
    url: "/products/scalp-oil-with-dandruff-therapy-booster-shots",
    img: `${CDN_BASE_URL}website_images/all_products/scalpOilWithDandruffTherapyBoosterShots/scalpOilWithDandruffTherapyBoosterShots06.png`,
    title: "Scalp Oil",
    description:
      "Enriched with essential oils that remove dandruff and leave your scalp healthy.",
  },
  {
    url: "/products/shatavari-ghrita",
    img: `${CDN_BASE_URL}website_images/all_products/ghritaNasalDrops/ghritaNasalDrops09.png`,
    title: "Ghrit",
    description:
      "Ayurvedic nasal drops for nourishing hair follicles and reducing sleep-related hair loss",
  },
  {
    url: "/products/hair-growth-herbs",
    img: `${CDN_BASE_URL}website_images/all_products/HairRas/hairRas09.png`,
    title: "Hair Ras",
    description:
      "A herbal supplement with Shatavari and Bhringraj for better hair quality and delayed greying",
  },
  {
    url: "/products/avipattikar-digestion-tablets",
    img: `${CDN_BASE_URL}website_images/all_products/guttShuddhi/guttShuddhi09.png`,
    title: "Gutt Shuddhi",
    description: "Ayurvedic herbs for improved digestion,gut health and hair",
  },
  {
    url: "/products/shampoo",
    img: `${CDN_BASE_URL}website_images/all_products/defenceShampoo/defenceShampoo09.png`,
    title: "Defence Shampoo",
    description:
      "Sulphate-free hair and scalp cleansing shampoo with pea sprout extract",
  },
  {
    url: "/products/recap-serum-for-hair-fall-control",
    img: `${CDN_BASE_URL}website_images/all_products/recapSerum/recapSerum09.png`,
    title: "ReCaP Serum",
    description: "Advanced hair growth control serum with patented ingredients",
  },
  {
    url: "/products/hair-vitamins",
    img: `${CDN_BASE_URL}website_images/all_products/hairVitamins/hairVitamins09.png`,
    title: "Hair Vitamin",
    description:
      "100% Vegetarian hair vitamins to combat deficiency that leads to hair loss",
  },
  {
    url: "/products/anti-dandruff-shampoo",
    img: `${CDN_BASE_URL}website_images/all_products/antiDandruffShampoo/antiDandruffShampoo09.png`,
    title: "Anti-dandruff Solution Shampoo",
    description:
      "Made with anti-fungal ingredients to get rid of dandruff of all types",
  },
  {
    url: "/products/pcos-santulan-for-pcos-and-hormone-related-hair-loss",
    img: `${CDN_BASE_URL}website_images/all_products/pcosSantulan/pcosSantulan06.png`,
    title: "PCOS Santulan",
    description:
      "An Ayurvedic formulation that controls PCOS and hormone related hair fall and regularises menstrual cycles",
  },
  {
    url: "/products/mom-santulan-tablets-for-hair-fall-in-post-pregnancy-or-post-childbirth-period",
    img: `${CDN_BASE_URL}website_images/all_products/momSantulan/momSantulan06.png`,
    title: "Mom Santulan",
    description:
      "A restorative supplement that helps treat hair loss in women in the postpartum (post-childbirth) period.",
  },
  {
    url: "/products/thyro-santulan-tablets-for-supporting-thyroid-health",
    img: `${CDN_BASE_URL}website_images/all_products/thyroSantulanTablets/thyroSantulanTablets06.png`,
    title: "Thyro Santulan",
    description:
      "A dynamic combination of herbal constituents to tackle thyroid related hair fall",
  },
];

const FemaleEssentials = ({ props }) => {
  let productSettings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    lazyload: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: false,
          autoplaySpeed: 2000,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          infinite: true,
        },
      },
    ],
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow variant={"dark"} />,
    prevArrow: <SamplePrevArrow variant={"dark"} />,
  };

  return (
    <div>
      <div className="block mx-auto xl:w-full lg:w-full md:w-full w-11/12 mt-12 ">
        <div>
          <h1
            className={`${nunito.variable} xl:text-xx4l xs:text-[30px]  lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-[#000] xs:px-5 text-center`}
          >
            The Essentials
          </h1>
        </div>

        <Slider
          {...productSettings}
          className="2xl:w-[1330px] xl:w-9/12 lg:w-11/12 md:w-11/12 w-12/12 xl:py-9 md:py-9 lg:py-9 py-0 block mx-auto text-center"
        >
          {EssentialsData.map((value, index) => (
            <a
              href={value.url}
              className="productItem  xl:w-72 lg:w-72 md:w-72"
              key={index}
              style={{ marginTop: 2 }}
            >
              <Image
                src={value.img}
                className="mx-auto h-96"
                alt={`${value.title}`}
                height={399}
                width={368}
                responsive
                loading="lazy"
              />
              <div
                className="bg-white relative bottom-3 z-[5] shadow-lg border mx-auto xl:h-44 lg:h-44 md:h-44 h-fit py-4"
                style={{ borderRadius: 10 }}
              >
                <h1
                  className={`text-2xl font-bold text-black text-center py-2 ${fredoka.variable}`}
                >
                  {value.title}
                </h1>
                <h1 className="text-[15px] text-black text-center  px-2">
                  {value.description}
                </h1>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FemaleEssentials;
