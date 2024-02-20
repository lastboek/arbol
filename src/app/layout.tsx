export const metadata = {
  title: 'Arbol',
  description: 'fermented sauces',
}

import "~/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-masala-950 h-screen">
        {children}
      </body>
    </html>
  )
}
