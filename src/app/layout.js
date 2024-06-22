import "./globals.css";

export const metadata = {
  title: "Hovme",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-black'>{children}</body>
    </html>
  );
}