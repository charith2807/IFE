import NavMain from "./components/NavMain";
import { Providers } from "./providers";
import "./globals.css";
import { appVersion } from "../lib/versionHelper";
export const metadata = {
  title: "IFE-poc",
  description: "ife-poc integrated with cms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="dark:bg-gray-900">
        <Providers>
          <NavMain />
          <main>{children}</main>
          <footer className="glass-footer text-black p-4 text-center isBordered">
            © 2024 OSI-IFE-POC - V{appVersion}
          </footer>
        </Providers>
      </body>
    </html>
  );
}
