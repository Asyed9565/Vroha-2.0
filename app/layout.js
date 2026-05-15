import './globals.css'

export const metadata = {
  title: 'Vroha 2.0 - Business Website',
  description: 'Welcome to Vroha 2.0, your modern business solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
