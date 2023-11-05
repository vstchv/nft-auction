import "../app/_styles/global.css";

import Header from "./_components/Header/Header";
import Providers from "./_providers/_themeRegistry/Providers";
import ThemeRegistry from "./_providers/_themeRegistry/ThemeRegisty";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <Providers>
            <Header />
            <div className="h-full overflow-auto flex-1">{children}</div>
          </Providers>
        </body>
      </html>
    </>
  );
}
