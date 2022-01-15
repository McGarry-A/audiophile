// Headphones images
import XX99 from "./images/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import XX99One from "./images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import XX99Two from "./images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import XX99Three from "./images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";

import Mark2 from "./images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import Mark2One from "./images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import Mark2Two from "./images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import Mark2Three from "./images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

import XX59 from "./images/product-xx59-headphones/desktop/image-product.jpg";
import XX59One from "./images/product-xx59-headphones/desktop/image-gallery-1.jpg";
import XX59Two from "./images/product-xx59-headphones/desktop/image-gallery-2.jpg";
import XX59Three from "./images/product-xx59-headphones/desktop/image-gallery-3.jpg";

// Speaker Images
import ZX9 from "./images/product-zx9-speaker/desktop/image-product.jpg";
import ZX9One from "./images/product-zx9-speaker/desktop/image-gallery-1.jpg";
import ZX9Two from "./images/product-zx9-speaker/desktop/image-gallery-2.jpg";
import ZX9Three from "./images/product-zx9-speaker/desktop/image-gallery-3.jpg";

import ZX7 from "./images/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import ZX7One from "./images/product-zx7-speaker/desktop/image-gallery-1.jpg";
import ZX7Two from "./images/product-zx7-speaker/desktop/image-gallery-2.jpg";
import ZX7Three from "./images/product-zx7-speaker/desktop/image-gallery-3.jpg";

// Earphone Images

import yx1 from "./images/product-yx1-earphones/desktop/image-product.jpg";
import yx1One from "./images/product-yx1-earphones/desktop/image-gallery-1.jpg";
import yx1Two from "./images/product-yx1-earphones/desktop/image-gallery-2.jpg";
import yx1Three from "./images/product-yx1-earphones/desktop/image-gallery-3.jpg";

export interface SectionInterface {
  id: number;
  name: string;
  products: ProductsInterface[];
}

interface InTheBoxItem {
  BoxItem: string;
  BoxItemNumber: number;
}

export interface ProductsInterface {
  id: string;
  new: boolean;
  name: string;
  price: number;
  description: string;
  features: Array<string>;
  heroImage: string;
  images: string[];
  inTheBox: Array<InTheBoxItem>;
}

export const data: Array<SectionInterface> = [
  {
    id: 1,
    name: "headphones",
    products: [
      {
        id: "h1",
        new: true,
        name: "XX9 Mark II Headphones",
        price: 999.99,
        description:
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        features: [
          "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
          "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        ],
        heroImage: Mark2,
        images: [Mark2One, Mark2Two, Mark2Three],
        inTheBox: [
          {
            BoxItem: "Headphone Unit",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "Replacement Cups",
            BoxItemNumber: 2,
          },
          {
            BoxItem: "User Manual",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "3.5mm 5m Audio Cable",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "Travel Bag",
            BoxItemNumber: 1,
          },
        ],
      },
      {
        id: "h2",
        new: false,
        name: "XX9 Mark I Headphones",
        price: 749.99,
        description:
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        features: [
          "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
          "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
        ],
        heroImage: XX99,
        images: [XX99One, XX99Two, XX99Three],
        inTheBox: [
          {
            BoxItem: "Headphone Unit",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "Replacement Cups",
            BoxItemNumber: 2,
          },
          {
            BoxItem: "User Manual",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "3.5mm 5m Audio Cable",
            BoxItemNumber: 1,
          },
        ],
      },
      {
        id: "h3",
        new: false,
        name: "XX59 Headphones",
        price: 499.99,
        description:
          "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        features: [
          "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
          "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        ],
        heroImage: XX59,
        images: [XX59One, XX59Two, XX59Three],
        inTheBox: [
          {
            BoxItem: "Headphone Unit",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "Replacement Cups",
            BoxItemNumber: 2,
          },
          {
            BoxItem: "User Manual",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "3.5mm 5m Audio Cable",
            BoxItemNumber: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "speakers",
    products: [
      {
        id: "s1",
        new: true,
        name: "ZX9 Speaker",
        price: 1499.99,
        description:
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        features: [
          "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
          "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
        ],
        heroImage: ZX9,
        images: [ZX9One, ZX9Two, ZX9Three],
        inTheBox: [
          {
            BoxItem: "Speaker Unit",
            BoxItemNumber: 2,
          },
          {
            BoxItem: "Speaker Cloth Panel",
            BoxItemNumber: 2,
          },
          {
            BoxItem: "User Manual",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "3.5mm 10m Audio Cable",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "10m Optical Cable",
            BoxItemNumber: 1,
          },
        ],
      },
      {
        id: "s2",
        new: false,
        name: "ZX7 Speaker",
        price: 1999.99,
        description:
          "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        features: [
          "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
          "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
        ],
        heroImage: ZX7,
        images: [ZX7One, ZX7Two, ZX7Three],
        inTheBox: [
          {
            BoxItem: "Speaker Unit",
            BoxItemNumber: 2,
          },
          {
            BoxItem: "Speaker Cloth Panel",
            BoxItemNumber: 2,
          },
          {
            BoxItem: "User Manual",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "3.5mm 7.5m Audio Cable",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "7.5m Optical Cable",
            BoxItemNumber: 1,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "earphones",
    products: [
      {
        id: "e1",
        new: true,
        name: "YX1 Wireless Earphones",
        price: 399.99,
        description:
          "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        features: [
          "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
          "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
        ],
        heroImage: yx1,
        images: [yx1One, yx1Two, yx1Three],
        inTheBox: [
          {
            BoxItem: "Earphone Unit",
            BoxItemNumber: 2,
          },
          {
            BoxItem: "Multi-size Earplugs",
            BoxItemNumber: 6,
          },
          {
            BoxItem: "User Manual",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "USB C Charging Cable",
            BoxItemNumber: 1,
          },
          {
            BoxItem: "Travel Pouch",
            BoxItemNumber: 1,
          },
        ],
      },
    ],
  },
];
