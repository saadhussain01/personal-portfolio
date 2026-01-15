// import {Outfit, Ovo} from "next/font/google";
// import "./globals.css";

// const outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const ovo = Ovo({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// export const metadata = {
//   title: "Portfolio - Hasnain Ahmad",
//   description: "",
// };

// export default function RootLayout({children}) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
//         {children}
//       </body>
//     </html>
//   );
// }



//
import "./globals.css";
import { Outfit, Ovo } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Saad Hussain",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="dark:bg-darkTheme dark:text-white">{children}
        <SpeedInsights />
      </body>
    </html>
  );
}
