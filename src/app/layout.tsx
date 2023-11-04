import ThemeRegistry from "./_themeRegistry/ThemeRegisty";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <ThemeRegistry>{children}</ThemeRegistry>
        </body>
      </html>
    </>
  );
}
