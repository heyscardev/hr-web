import { Inter, Red_Hat_Text } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });

export const titleFont = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable:'--font-hr-title'
});
