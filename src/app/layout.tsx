import { Poppins } from "next/font/google";
import "./globals.css";
import { VariantProvider } from "@/utils/hooks";
import { constructMetadata } from "@/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // If you ever want to add dynamic styles to the body, set them here.
  // This ensures style={{}} is never rendered.
  const bodyStyle = undefined; // Or set to a style object if needed

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      <body
        className={poppins.className}
        {...(bodyStyle ? { style: bodyStyle } : {})}
      >
        <VariantProvider>{children}</VariantProvider>
      </body>
    </html>
  );
}