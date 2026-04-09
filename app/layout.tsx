import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'ax123\uC758 \uBE14\uB85C\uADF8',
    template: 'ax123 | %s',
  },
  description:
    'ax123\uC758 \uAC1C\uBC1C\uACFC \uBCF4\uC548 \uAE30\uB85D\uC744 \uB2F4\uC740 \uBE14\uB85C\uADF8\uC785\uB2C8\uB2E4.',
  keywords: ['ax123', 'blog', 'information security', 'CTF', 'BugBounty', 'wargame'],
  openGraph: {
    title: 'ax123\uC758 \uBE14\uB85C\uADF8',
    description:
      'ax123\uC758 \uAC1C\uBC1C\uACFC \uBCF4\uC548 \uAE30\uB85D\uC744 \uB2F4\uC740 \uBE14\uB85C\uADF8\uC785\uB2C8\uB2E4.',
    url: 'https://g0ldax123.github.io',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
