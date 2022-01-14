// Headphones images
import XX99 from "./images/product-xx99-mark-one-headphones/desktop/image-product.jpg"
import XX99One from "./images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
import XX99Two from "./images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
import XX99Three from "./images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"

import Mark2 from "./images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
import Mark2One from "./images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
import Mark2Two from "./images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
import Mark2Three from "./images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"

import XX59 from "./images/product-xx59-headphones/desktop/image-product.jpg"
import XX59One from "./images/product-xx59-headphones/desktop/image-gallery-1.jpg"
import XX59Two from "./images/product-xx59-headphones/desktop/image-gallery-2.jpg"
import XX59Three from "./images/product-xx59-headphones/desktop/image-gallery-3.jpg"

// Speaker Images
import ZX9 from "./images/product-zx9-speaker/desktop/image-product.jpg"
import ZX9One from "./images/product-zx9-speaker/desktop/image-gallery-1.jpg"
import ZX9Two from "./images/product-zx9-speaker/desktop/image-gallery-2.jpg"
import ZX9Three from "./images/product-zx9-speaker/desktop/image-gallery-3.jpg"

import ZX7 from "./images/product-zx7-speaker/desktop/image-category-page-preview.jpg"
import ZX7One from "./images/product-zx7-speaker/desktop/image-gallery-1.jpg"
import ZX7Two from "./images/product-zx7-speaker/desktop/image-gallery-2.jpg"
import ZX7Three from "./images/product-zx7-speaker/desktop/image-gallery-3.jpg"

// Earphone Images

import yx1 from "./images/product-yx1-earphones/desktop/image-product.jpg"
import yx1One from "./images/product-yx1-earphones/desktop/image-gallery-1.jpg"
import yx1Two from "./images/product-yx1-earphones/desktop/image-gallery-2.jpg"
import yx1Three from "./images/product-yx1-earphones/desktop/image-gallery-3.jpg"

export interface SectionInterface {
  id: number;
  name: string;
  products: ProductsInterface[];
}

export interface ProductsInterface {
  new: boolean;
  name: string;
  price: number;
  description: string;
  features: string;
  heroImage: string;
  images: string[]
  inTheBox: Array<string>;
}

export const data: Array<SectionInterface> = [
  {
    id: 1,
    name: "Headphones",
    products: [
      {
        new: true,
        name: "XX9 Mark II Headphones",
        price: 999.99,
        description:
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        features: "",
        heroImage: Mark2,
        images: [Mark2One, Mark2Two, Mark2Three],
        inTheBox: [""],
      },
      {
        new: false,
        name: "XX9 Mark I Headphones",
        price: 749.99,
        description:
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        features: "",
        heroImage: XX99,
        images: [XX99One, XX99Two, XX99Three],
        inTheBox: [""],
      },
      {
        new: false,
        name: "XX59 Headphones",
        price: 499.99,
        description:
          "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        features: "",
        heroImage: XX59,
        images: [XX59One, XX59Two, XX59Three],
        inTheBox: [""],
      },
    ],
  },
  {
    id: 2,
    name: "Speakers",
    products: [
      {
        new: true,
        name: "ZX9 Speaker",
        price: 1499.99,
        description:
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        features: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
        heroImage: ZX9,
        images: [ZX9One,ZX9Two,ZX9Three],
        inTheBox: [""],
      },
      {
        new: false,
        name: "ZX7 Speaker",
        price: 1999.99,
        description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        features: "",
        heroImage: ZX7,
        images: [ZX7One,ZX7Two,ZX7Three],
        inTheBox: [""],
      },
    ],
  },
  {
      id: 3,
      name: "Earphones",
      products: [
          {
              new: true,
              name: "YX1 Wireless Earphones",
              price: 399.99,
              description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
              features: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
              heroImage: yx1,
              images: [yx1One,yx1Two,yx1Three],
              inTheBox: [""]
          }
      ]
  }
];
