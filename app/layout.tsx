import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import SideNav from "./ui/dashboard/sidenav";
import NavLinks from "./ui/dashboard/nav-links";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={inter.style}>
        <NavLinks />
        <div>{children}</div>
      </body>
    </html>
  );
}
