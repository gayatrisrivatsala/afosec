//import Navbar from '../components/Navbar'
import Navbar from '@/components/Navbar'
import VideoBackground from '@/components/VideoBackground'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Navbar />
      <VideoBackground />
      
      {/* Add your main content here */}
    </main>
  )
}

