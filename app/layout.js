import RootPage from "@/components/rootPage/RootPage";
import { Providers } from "@/store/provider";
import "./globals.css";

export const metadata = {
   title: "Nexo Server",
   description: "Nexo Server Desc",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         {/* <Head>
            <link rel="shortcut icon" href="/app/favicon.ico" />
         </Head> */}
         <body>
            <Providers>
               <RootPage>{children}</RootPage>
            </Providers>
         </body>
      </html>
   );
}
