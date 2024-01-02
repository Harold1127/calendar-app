import "./styles/globals.css";
import { Providers } from "../redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
