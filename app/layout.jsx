import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
  title: "Jonathan's Website",
  description: 'Website Describing Jonathan\'s Portfolio & Skillset'
}


const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
          <div className='main'>
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </body>
    </html>
  )
}

export default RootLayout