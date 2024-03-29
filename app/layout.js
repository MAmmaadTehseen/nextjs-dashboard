import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Navbar from "./components/Nabvar"
import Counter from './components/counter'


export const metadata = {
  title: 'Dashboard',
}
export default function RootLayout({
  children,
}) {
  return (
  
<>

        <Navbar/>
        <Counter/>

            <div className={`${inter.className} antialiased`}>{children}
            
            </div>

</>
   
    
  );
}
