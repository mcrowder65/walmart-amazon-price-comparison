import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers";

const typeDefs = `
type Query {
  item(itemId: String): Item
  searchItems(searchQuery: String): [Item]
}
type Item {
  itemId: String
  name: String
  msrp: Float
  salePrice: Float
  upc: Int #Hello there!
  shortDescription: String
  longDescription: String
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });


export default schema;


// "items": [
//   {
//     "itemId": 130154883,
//     "parentItemId": 130154883,
//     "name": "Refurbished Apple Ipad 2 16GB 9.7\" Touchscreen Wi-Fi Dual Cameras Tablet - White - MC979LLA",
//     "msrp": 114.99,
//     "salePrice": 99.95,
//     "upc": "754292148802",
//     "categoryPath": "Electronics/iPad & Tablets/All Tablets",
//     "shortDescription": "9.7-inch LED-backlit IPS LCD display1024 x 768 (4:3 aspect ratio) resolution with 132 ppiMulti-touch screen w/finger-print &amp; scratch resistant glassApple A5 1 GHz dual-core System-on-a-chip512 MB DDR2 RAM16 GB flash memoryUSB 2.0 interfaceBuilt-in IEEE 802.11a/b/g/n (Wi-Fi) connectivityBluetooth 2.1+EDR technologyProximity &amp; ambient light sensors3-axis accelerometerBuilt-in speaker and microphoneFront-facing cameraRear-facing HD camera (records up to 720p @ 30 FPS with audio)Built-in rechargeable lithium-ion battery (Up to 10 hours battery life)Maps location-based service &amp; digital compassAssisted GPS &amp; cellular location-based service3.5 mm earbuds jackHome &amp; sleep buttons for instant on/offScreen orientation lockSupports App Store add-onsMulti-language menu, dictionary, keyboard supportSupported Media:Audio: AAC, MP3, WAVVideo: AVI, H.264/AVC, Motion JPEG, MPEG-4, QuicktimeImage: BMP, GIF, JPEG, JPEG 2000, PNG, RAW, TIFFUnit Dimensions:9.50 x 7.31 x 0.346-inches (H x W x D)Weight: 1.34 lbPackage Includes:Apple iPad 2 16 GB WiFi Touchscreen Tablet30-pin Dock Connector to USB 2.0 cableUSB Power adapter (Input: 100-240V, 50/60Hz; Output: DC 5V, 1.5A)Refurbished Grade B Tablet is in very good working condition, has cosmetic blemishes, examples of which are (but not limited to):Scratches in case (particularly the back of the tablet or corners)Possible cracks in casing that does not affect usabilityPossible denting that does not affect usability (particularly on the corners)Scratches or scuffs in the screenBright or dead pixels",
//     "longDescription": "&lt;ul&gt;&lt;li&gt;Refurbished with 90 Day Warranty&lt;/li&gt;&lt;li&gt;9.7-inch LED-backlit IPS LCD display with 1024 x 768 (4:3 aspect ratio) resolution with 132 ppi and Multi-touch screen w/finger-print &amp; scratch resistant glass&lt;/li&gt;&lt;li&gt;Apple A5 1 GHz dual-core System-on-a-chip with 16 GB flash memory and 512 MB DDR2 RAM&lt;/li&gt;&lt;/ul&gt;",
//     "thumbnailImage": "https://i5.walmartimages.com/asr/21f86325-e66c-456d-9f68-da8bf079df28_1.3feccd60b0f5cbd259ede7734660b8eb.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
//     "mediumImage": "https://i5.walmartimages.com/asr/21f86325-e66c-456d-9f68-da8bf079df28_1.3feccd60b0f5cbd259ede7734660b8eb.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
//     "largeImage": "https://i5.walmartimages.com/asr/21f86325-e66c-456d-9f68-da8bf079df28_1.3feccd60b0f5cbd259ede7734660b8eb.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
//     "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FRefurbished-Apple-Ipad-2-16GB-9-7-Touchscreen-Wi-Fi-Dual-Cameras-Tablet-White-MC979LLA%252F130154883%253Faffp1%253DiKrWcL1m3S1J061omKvcyyfEqmoOHKifUbmgBMOcT9M%2526affilsrc%253Dapi",
//     "standardShipRate": 0,
//     "marketplace": false,
//     "modelNumber": "IPAD2-16GB-WHT-ETCH-3RCB",
//     "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FRefurbished-Apple-Ipad-2-16GB-9-7-Touchscreen-Wi-Fi-Dual-Cameras-Tablet-White-MC979LLA%2F130154883%3Faffp1%3DiKrWcL1m3S1J061omKvcyyfEqmoOHKifUbmgBMOcT9M%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
//     "customerRating": "3.143",
//     "numReviews": 21,
//     "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/3_1.gif",
//     "categoryNode": "3944_1078524_1078084",
//     "rhid": "27376",
//     "bundle": false,
//     "stock": "Available",
//     "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D130154883%7C1%26affp1%3DiKrWcL1m3S1J061omKvcyyfEqmoOHKifUbmgBMOcT9M%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
//     "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D130154883%257C1%2526affp1%253DiKrWcL1m3S1J061omKvcyyfEqmoOHKifUbmgBMOcT9M%2526affilsrc%253Dapi",
//     "giftOptions": {
//       "allowGiftWrap": false,
//       "allowGiftMessage": false,
//       "allowGiftReceipt": false
//     },
//     "imageEntities": [
//       {
//         "thumbnailImage": "https://i5.walmartimages.com/asr/c97f5715-0129-4072-8cd7-54d3af342ef6_1.a5d10b75eab576f430d3fce9a1cd2c73.png?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
//         "mediumImage": "https://i5.walmartimages.com/asr/c97f5715-0129-4072-8cd7-54d3af342ef6_1.a5d10b75eab576f430d3fce9a1cd2c73.png?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
//         "largeImage": "https://i5.walmartimages.com/asr/c97f5715-0129-4072-8cd7-54d3af342ef6_1.a5d10b75eab576f430d3fce9a1cd2c73.png?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
//         "entityType": "SECONDARY"
//       },
//       {
//         "thumbnailImage": "https://i5.walmartimages.com/asr/21f86325-e66c-456d-9f68-da8bf079df28_1.3feccd60b0f5cbd259ede7734660b8eb.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
//         "mediumImage": "https://i5.walmartimages.com/asr/21f86325-e66c-456d-9f68-da8bf079df28_1.3feccd60b0f5cbd259ede7734660b8eb.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
//         "largeImage": "https://i5.walmartimages.com/asr/21f86325-e66c-456d-9f68-da8bf079df28_1.3feccd60b0f5cbd259ede7734660b8eb.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
//         "entityType": "PRIMARY"
//       }
//     ],
//     "offerType": "ONLINE_ONLY",
//     "isTwoDayShippingEligible": false,
//     "availableOnline": true
//   },
// ]