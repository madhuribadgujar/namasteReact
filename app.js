import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -search
 *  -RestaurentContainer
 *    -RestaurentCard-
 *      -img
 *      -Name of rest,star,delivery time,etc
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestCard = (props) => {
  const { restData } = props;
  console.log(restData);

  const restaurantName = restData?.info.name;
  const cuisines = restData?.info.cuisines;
  const avgRating = restData?.info.avgRating;
  const costForTwo = restData?.info.costForTwo;
  const cloudinaryImageId = restData?.info.cloudinaryImageId;
  console.log(costForTwo);

  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{restaurantName}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo} </h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {jsonData.map((rest) => {
          //  console.log(rest);
          return <RestCard key={rest.info.id} restData={rest} />;
        })}
      </div>
    </div>
  );
};
const jsonData = [
  {
    info: {
      id: "257428",
      name: "Raajbagh Restaurant ",
      cloudinaryImageId: "xvyrclhxftulsglktaek",
      locality: "Seoni Road",
      areaName: "Chhindwara Locality",
      costForTwo: "₹150 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Indian",
        "Chinese",
        "Fast Food",
        "Beverages",
      ],
      avgRating: 3.7,
      veg: true,
      parentId: "164019",
      avgRatingString: "3.7",
      totalRatingsString: "962",
      sla: {
        deliveryTime: 72,
        lastMileTravel: 10.5,
        serviceability: "SERVICEABLE",
        slaString: "70-75 mins",
        lastMileTravelString: "10.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-26 22:30:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/raajbagh-restaurant-seoni-road-chhindwara-locality-rest257428",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "151648",
      name: "Mr. Gurung Momo & Chinese Corner",
      cloudinaryImageId: "h7oibtpm7kqks8cqz3gh",
      locality: "Teacher's Colony",
      areaName: "Mohan Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Momos", "Chinese", "Fast Food"],
      avgRating: 4.2,
      veg: true,
      parentId: "140255",
      avgRatingString: "4.2",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 11.8,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-26 23:00:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "151649",
      name: "Hotel Sai Nath & Sai Restaurant",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      locality: "railway station",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.2,
      veg: true,
      parentId: "101802",
      avgRatingString: "4.2",
      totalRatingsString: "865",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 11.3,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-26 22:30:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE ITEM",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "151518",
      name: "Bakery World",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "40363",
      avgRatingString: "4.3",
      totalRatingsString: "236",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 12.3,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "12.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-26 22:30:00",
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
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "658210",
      name: "The Fusion Lounge",
      cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
      locality: "Triloki nagar",
      areaName: "Railway Station",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "395453",
      avgRatingString: "4.1",
      totalRatingsString: "261",
      sla: {
        deliveryTime: 56,
        lastMileTravel: 9.9,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "9.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-26 23:00:00",
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
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "234875",
      name: "Adil Hotel",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Rautha Wada",
      areaName: "Chhindwara Locality",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Biryani", "Tandoor"],
      avgRating: 4.3,
      parentId: "27123",
      avgRatingString: "4.3",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 10.9,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "10.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-26 23:00:00",
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
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "531441",
      name: "Gourmet Ice Cream Cakes by Baskin Robbins",
      cloudinaryImageId: "d679c532ca07a6f3fd6d89d603861412",
      locality: "Satkar Square",
      areaName: "Mohan Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream Cakes", "Desserts", "Ice Cream", "Bakery"],
      avgRating: 5,
      veg: true,
      parentId: "21932",
      avgRatingString: "5.0",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 64,
        lastMileTravel: 13.4,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "13.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-26 23:00:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/gourmet-ice-cream-cakes-by-baskin-robbins-satkar-square-mohan-nagar-rest531441",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "150591",
      name: "Satkar Restaurant",
      cloudinaryImageId: "rvxp5xbniat84r6efku2",
      locality: "Sinchai Colony",
      areaName: "Satkar Chowk",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Indian",
        "Salads",
        "Desserts",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "21553",
      avgRatingString: "4.3",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 13.4,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "13.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-26 22:45:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "531439",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "satkar square Prasia Road",
      areaName: "Chhindwara",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.9,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.9",
      totalRatingsString: "36",
      sla: {
        deliveryTime: 62,
        lastMileTravel: 13.4,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "13.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-26 23:00:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/baskin-robbins-ice-cream-desserts-satkar-square-prasia-road-chhindwara-rest531439",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "385824",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "Sinchai Colony",
      areaName: "Mohan Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.6",
      totalRatingsString: "277",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 11.2,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "11.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-26 22:45:00",
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
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "496348",
      name: "Pizza Box",
      cloudinaryImageId: "n7wbtvlifwbw5y4a7rrv",
      locality: "Sanchar Colony",
      areaName: "Chhindwara Locality",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Burgers", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "3045",
      avgRatingString: "4.3",
      totalRatingsString: "204",
      sla: {
        deliveryTime: 76,
        lastMileTravel: 14.5,
        serviceability: "SERVICEABLE",
        slaString: "75-80 mins",
        lastMileTravelString: "14.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-26 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/pizza-box-sanchar-colony-chhindwara-locality-rest496348",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "150597",
      name: "Scoops Fast Food And Ice Cream",
      cloudinaryImageId: "fm3rs3g6z7ibfhesmxnu",
      locality: "Irrigation Colony",
      areaName: "Khajri Road",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 4,
      veg: true,
      parentId: "179482",
      avgRatingString: "4.0",
      totalRatingsString: "383",
      sla: {
        deliveryTime: 78,
        lastMileTravel: 12.1,
        serviceability: "SERVICEABLE",
        slaString: "75-80 mins",
        lastMileTravelString: "12.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-26 22:30:00",
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
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/scoops-fast-food-and-ice-cream-irrigation-colony-khajri-road-rest150597",
      type: "WEBLINK",
    },
  },
];
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
