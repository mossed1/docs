// Define product links by product ID and country code
export interface ProductLink {
  id: string;
  name: string;  // For reference/admin purposes
  countryLinks: Record<string, string>;
  defaultLink: string;  // Fallback when country-specific link isn't available
}

export const productLinks: Record<string, ProductLink> = {
  "bambu-lab-printer": {
    id: "bambu-lab-printer",
    name: "Bambu Lab Printer",
    countryLinks: {
      "US": "https://us.store.bambulab.com/collections/3d-printer",
      "CA": "https://ca.store.bambulab.com/collections/3d-printer",
    },
    defaultLink: "https://us.store.bambulab.com/collections/3d-printer"
  },
  "tpu-filament": {
    id: "tpu-filament",
    name: "TPU Filament (Bambu)",
    countryLinks: {
      "US": "https://us.store.bambulab.com/products/tpu-for-ams",
      "CA": "https://ca.store.bambulab.com/products/tpu-for-ams",
    },
    defaultLink: "https://us.store.bambulab.com/products/tpu-for-ams"
  },
  "petg-filament": {
    id: "petg-filament",
    name: "PETG Filament (Bambu)",
    countryLinks: {
      "US": "https://us.store.bambulab.com/products/petg-hf",
      "CA": "https://ca.store.bambulab.com/products/petg-hf",
    },
    defaultLink: "https://us.store.bambulab.com/products/petg-hf"
  },
  "pla-filament": {
    id: "pla-filament",
    name: "PLA Filament (Optional)",
    countryLinks: {
      "US": "https://us.store.bambulab.com/products/pla-basic-filament?skr=yes",
      "CA": "https://ca.store.bambulab.com/products/pla-basic-filament?skr=yes",
    },
    defaultLink: "https://us.store.bambulab.com/products/pla-basic-filament?skr=yes"
  },
  "raspberry-pi-5": {
    id: "raspberry-pi-5",
    name: "Raspberry Pi 5",
    countryLinks: {
      "US": "https://www.amazon.com/Raspberry-Pi-Quad-core-Cortex-A76-Processor/dp/B0CTQ3BQLS/",
    },
    defaultLink: "https://www.amazon.com/Raspberry-Pi-Quad-core-Cortex-A76-Processor/dp/B0CTQ3BQLS/"
  },
  "osoyoo-lcd": {
    id: "osoyoo-lcd",
    name: "OSOYOO 3.5\" LCD Display",
    countryLinks: {
      "US": "https://www.amazon.com/OSOYOO-3-5inch-Display-Protective-Raspberry/dp/B09CD9W6NQ/",
    },
    defaultLink: "https://www.amazon.com/OSOYOO-3-5inch-Display-Protective-Raspberry/dp/B09CD9W6NQ/"
  },
  "servo-driver": {
    id: "servo-driver",
    name: "PCA9685 Servo Driver",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B00EIB0U7A/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B00EIB0U7A/"
  },
  "buck-converter-12v-6v": {
    id: "buck-converter-12v-6v",
    name: "12V to 6V Buck Converter",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B07SGJSLDL/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B07SGJSLDL/"
  },
  "usb-buck-converter": {
    id: "usb-buck-converter",
    name: "USB Buck Converter",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B07X5H4M42/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B07X5H4M42/"
  },
  "usb-buck-converter-alt": {
    id: "usb-buck-converter-alt",
    name: "USB Buck Converter (Alternative)",
    countryLinks: {
      "US": "https://www.amazon.com/dp/B087RHWTJW",
    },
    defaultLink: "https://www.amazon.com/dp/B087RHWTJW"
  },
  "lipo-battery": {
    id: "lipo-battery",
    name: "LiPo Battery",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B0BYNSH6Q7/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B0BYNSH6Q7/"
  },
  "wire-connectors": {
    id: "wire-connectors",
    name: "PCT-214 Wire Connectors",
    countryLinks: {
      "US": "https://www.amazon.com/smseace-Conductor-Connectors-Connection-Terminal/dp/B087PBHG9L/",
    },
    defaultLink: "https://www.amazon.com/smseace-Conductor-Connectors-Connection-Terminal/dp/B087PBHG9L/"
  },
  "mg996r-servos": {
    id: "mg996r-servos",
    name: "MG996R Servos",
    countryLinks: {
      "US": "https://www.amazon.com/diymore-6-Pack-MG996R-Digital-Helicopter/dp/B0CGRP59HJ/",
    },
    defaultLink: "https://www.amazon.com/diymore-6-Pack-MG996R-Digital-Helicopter/dp/B0CGRP59HJ/"
  },
  "mg996r-servos-alt": {
    id: "mg996r-servos-alt",
    name: "MG996R Servos (Alternative)",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B0BMM1G74B/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B0BMM1G74B/"
  },
  "sg90-micro-servos": {
    id: "sg90-micro-servos",
    name: "SG90 Micro Servos",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B07L2SF3R4/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B07L2SF3R4/"
  },
  "bearings": {
    id: "bearings",
    name: "Bearings",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B07FW26HD4/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B07FW26HD4/"
  },
  "springs": {
    id: "springs",
    name: "Springs",
    countryLinks: {
      "US": "https://www.amazon.com/uxcell-Stainless-Compression-Spring-Capacity/dp/B09139BWH7",
    },
    defaultLink: "https://www.amazon.com/uxcell-Stainless-Compression-Spring-Capacity/dp/B09139BWH7"
  },
  "springs-alt-1": {
    id: "springs-alt-1",
    name: "Springs (Alternative 1)",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B076M6SFFP/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B076M6SFFP/"
  },
  "springs-alt-2": {
    id: "springs-alt-2",
    name: "Springs (Alternative 2)",
    countryLinks: {
      "US": "https://www.aliexpress.us/item/3256805126221346.html",
    },
    defaultLink: "https://www.aliexpress.us/item/3256805126221346.html"
  },
  "metal-rods-5mm": {
    id: "metal-rods-5mm",
    name: "Metal Rods 5mm",
    countryLinks: {
      "US": "https://www.amazon.com/dp/B005WPAKGC",
    },
    defaultLink: "https://www.amazon.com/dp/B005WPAKGC"
  },
  "metal-rods-3mm": {
    id: "metal-rods-3mm",
    name: "Metal Rods 3mm",
    countryLinks: {
      "US": "https://www.amazon.com/dp/B005WPAJKY",
    },
    defaultLink: "https://www.amazon.com/dp/B005WPAJKY"
  },
  "linkage": {
    id: "linkage",
    name: "Linkage",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B0CRDRWYXW/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B0CRDRWYXW/"
  },
  "servo-extension-wires": {
    id: "servo-extension-wires",
    name: "JR Servo Extension Wires",
    countryLinks: {
      "US": "https://www.amazon.com/OliYin-7-87in-Quadcopter-Extension-Futaba/dp/B0711TBZY2/",
    },
    defaultLink: "https://www.amazon.com/OliYin-7-87in-Quadcopter-Extension-Futaba/dp/B0711TBZY2/"
  },
  "usb-microphone": {
    id: "usb-microphone",
    name: "Mini USB Microphone",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B086DRRP79/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B086DRRP79/"
  },
  "audio-amplifier": {
    id: "audio-amplifier",
    name: "MAX98357 Audio Amplifier",
    countryLinks: {
      "US": "https://www.amazon.com/dp/B0BTBS5NW2/",
    },
    defaultLink: "https://www.amazon.com/dp/B0BTBS5NW2/"
  },
  "speaker": {
    id: "speaker",
    name: "3W 8Ω Speaker",
    countryLinks: {
      "US": "https://www.amazon.com/dp/B07GJ4GH67/",
    },
    defaultLink: "https://www.amazon.com/dp/B07GJ4GH67/"
  },
  "camera-module": {
    id: "camera-module",
    name: "OV5647 Camera Module",
    countryLinks: {
      "US": "https://a.co/d/50BbE8a",
    },
    defaultLink: "https://a.co/d/50BbE8a"
  },
  "camera-ribbon-cable": {
    id: "camera-ribbon-cable",
    name: "15Pin to 22Pin Camera Ribbon Cable",
    countryLinks: {
      "US": "https://www.amazon.com/Onyehn-Raspberry-Camera-Cable-Ribbon/dp/B07XZ5DX5H/",
    },
    defaultLink: "https://www.amazon.com/Onyehn-Raspberry-Camera-Cable-Ribbon/dp/B07XZ5DX5H/"
  },
  "m3-screw-kit": {
    id: "m3-screw-kit",
    name: "M3 Assorted Flat Head Screw Kit",
    countryLinks: {
      "US": "https://a.co/d/bC30GoT",
    },
    defaultLink: "https://a.co/d/bC30GoT"
  },
  "m3-grub-screws": {
    id: "m3-grub-screws",
    name: "M3 Asstd Grub Screws",
    countryLinks: {
      "US": "https://www.amazon.com/dp/B07N7C6HKP/",
    },
    defaultLink: "https://www.amazon.com/dp/B07N7C6HKP/"
  },
  "m2-self-tapping": {
    id: "m2-self-tapping",
    name: "M2.x Self Tapping",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B0BLY1MPLR/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B0BLY1MPLR/"
  }
};

// Helper function to get countries with available links for a product
export function getAvailableCountries(productId: string): string[] {
  const product = productLinks[productId];
  if (!product) return [];
  return Object.keys(product.countryLinks);
}

// Helper function to check if a product has links for a specific country
export function hasCountryLink(productId: string, countryCode: string): boolean {
  const product = productLinks[productId];
  if (!product) return false;
  return !!product.countryLinks[countryCode];
} 