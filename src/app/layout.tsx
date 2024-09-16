import "../app/_styles/global.css";

import HeaderWrapper from "./_components/Header/HeaderWrapper";
import Providers from "./_providers/Providers";

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
            <HeaderWrapper />
            <div className="h-full overflow-auto flex-1">{children}</div>
          </Providers>
        </body>
      </html>
    </>
  );
}
