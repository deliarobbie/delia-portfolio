import './globals.css';
import { ThemeProvider } from '../lib/ThemeContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import profile from '../data/profile';

export const metadata = {
  title: {
    default: `${profile.name} — Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.summary,
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="site-wrapper">
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <style>{`
          .site-wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          #main-content {
            flex: 1;
            padding-top: var(--nav-height);
          }
        `}</style>
      </body>
    </html>
  );
}

