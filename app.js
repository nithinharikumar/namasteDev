import React from "react";
import ReactDOM from "react-dom/client";
import logo from "url:./assets/public/njanjan-logo.png";
import c2 from "url:./assets/public/download.jpeg";
import c3 from "url:./assets/public/download-1.jpeg";
import c4 from "url:./assets/public/pic1.png";

/**
 * App Architecture Plan:
 *
 * Header
 *  - Logo
 *  - Nav Items
 *
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, Cuisine, delivery time
 *
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => (
  <header className="header-container">
    <div className="flex items-center gap-3">
      <img className="h-12 w-auto rounded-xl" src={logo} alt="logo" />
      <span className="text-xl logo font-bold text-slate-800">Njam Njam</span>
    </div>
    <nav>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Cart</li>
      </ul>
    </nav>
  </header>
);
const resobj = {
  data: [
    {
      info: {
        id: "470982",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/bbc4fee6-b3d6-4d01-98c9-680f8f7779ac_470982.JPG",
        locality: "Eranjal Road",
        areaName: "Chalukunnu",
        costForTwo: "₹250 for two",
        cuisines: ["Desserts", "Ice Cream"],
        avgRating: 4.6,
        veg: true,
        parentId: "5588",
        avgRatingString: "4.6",
        totalRatingsString: "775",
        sla: {
          deliveryTime: 42,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-05-06 22:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹51",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-0c2b6977-9970-419a-bb8e-c7753c10d4aa",
      },
      cta: {
        link: "https://www.swiggy.com/city/kottayam/baskin-robbins-ice-cream-desserts-eranjal-road-chalukunnu-rest470982",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "261935",
        name: "Malabar Paradise 1965",
        cloudinaryImageId: "orgyx2lj48auaqwz9tr8",
        locality: "Kollam Theni Highway",
        areaName: "Kottayam",
        costForTwo: "₹200 for two",
        cuisines: ["Chinese", "South Indian", "Ice Cream", "Biryani", "Kerala"],
        avgRating: 4.2,
        parentId: "130702",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 51,
          lastMileTravel: 1.2,
          serviceability: "SERVICEABLE",
          slaString: "50-60 mins",
          lastMileTravelString: "1.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-05-06 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹19",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-0c2b6977-9970-419a-bb8e-c7753c10d4aa",
      },
      cta: {
        link: "https://www.swiggy.com/city/kottayam/malabar-paradise-1965-kollam-theni-highway-kottayam-rest261935",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "378010",
        name: "Ibaco",
        cloudinaryImageId: "kawgjvja4kmlhqsfti4o",
        locality: "Kanjikuzhi",
        areaName: "Kottayam",
        costForTwo: "₹300 for two",
        cuisines: ["Ice Cream"],
        avgRating: 4.8,
        veg: true,
        parentId: "3481",
        avgRatingString: "4.8",
        totalRatingsString: "772",
        sla: {
          deliveryTime: 48,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-05-06 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-0c2b6977-9970-419a-bb8e-c7753c10d4aa",
      },
      cta: {
        link: "https://www.swiggy.com/city/kottayam/ibaco-kanjikuzhi-kottayam-rest378010",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "815187",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/d9fe1651-b69a-412a-aec7-3faec9a7d935_815187.JPG",
        locality: "THEKKEKUTTU BUILDING",
        areaName: "Kottayam",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
        avgRating: 4.6,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.6",
        totalRatingsString: "755",
        sla: {
          deliveryTime: 53,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "50-60 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-05-07 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-0c2b6977-9970-419a-bb8e-c7753c10d4aa",
      },
      cta: {
        link: "https://www.swiggy.com/city/kottayam/the-belgian-waffle-co-thekkekuttu-building-kottayam-rest815187",
        type: "WEBLINK",
      },
    },
  ],
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  return (
    <div className="restaurant-card">
      <div className="h-48 overflow-hidden">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-slate-500 text-sm mb-4">
          {cuisines.join(", ")} • {avgRating}
        </p>
        <p className="text-slate-500 text-sm mb-4">{costForTwo}</p>
        <div className="flex justify-between items-center text-sm font-bold text-slate-600 pt-4 border-t border-slate-50">
          <span className="flex items-center gap-1 text-rose-500">
            ★ {avgRating}
          </span>
          <span>{sla.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

const Body = () => (
  <main className="max-w-7xl mx-auto">
    <div className="flex items-center gap-4 p-8">
      <input
        type="text"
        placeholder="Search for restaurants..."
        className="px-6 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 flex-grow max-w-md shadow-sm"
      />
      <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">
        Search
      </button>
    </div>
    <div className="restaurant-grid">
      {resobj.data.map((res) => (
        <RestaurantCard key={res.info.id} resData={res} />
      ))}
    </div>
  </main>
);

const Footer = () => (
  <footer className="flex justify-between items-center p-8 border-t border-slate-100 bg-slate-50 mt-12">
    <div className="text-slate-500 font-medium">
      © 2026 Njam Njam. All rights reserved.
    </div>
    <nav>
      <ul className="flex items-center gap-8 text-slate-600 font-medium">
        <li className="hover:text-rose-500 cursor-pointer transition-colors">
          Privacy Policy
        </li>
        <li className="hover:text-rose-500 cursor-pointer transition-colors">
          Terms of Service
        </li>
        <li className="hover:text-rose-500 cursor-pointer transition-colors">
          Contact Us
        </li>
      </ul>
    </nav>
  </footer>
);

const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
