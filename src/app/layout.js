import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Affiliate MOVI',
  description: 'Ministry Of Vape Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar/>
          </div>
          {children}
          <div>
            <Footer/>
            </div>
            </body>
    </html>
  )
}
