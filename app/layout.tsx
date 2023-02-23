import React, { ReactElement, ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): ReactElement {
  return (
    <html lang="en">
      <head>
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/circular-bold.woff2"
          rel="preload"
          type="font/woff2"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
