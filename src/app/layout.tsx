import Header from "./_components/Header/Header";
import ThemeRegistry from "./_themeRegistry/ThemeRegisty";
import "../app/_styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <ThemeRegistry>
            <Header />
            {children}
          </ThemeRegistry>
        </body>
      </html>
    </>
  );
}
