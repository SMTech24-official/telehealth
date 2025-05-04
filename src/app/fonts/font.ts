import { Outfit } from "next/font/google";
import { Poppins } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"], // Add subsets if needed
  weight: ["400", "500", "600", "700"], // Specify available weights
  variable: "--font-outfit", // Define a meaningful CSS variable
});

export const poppins = Poppins({
  subsets: ["latin"], // Add subsets if needed
  weight: ["400", "500", "600", "700"], // Specify available weights
  variable: "--font-poppins", // Define a meaningful CSS variable
});
