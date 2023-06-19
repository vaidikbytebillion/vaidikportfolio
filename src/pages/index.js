import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NavBar } from '@/components/NavBar'
import { HomeSection } from '@/components/HomeSection'
import { WorkSection } from '@/components/WorkSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.body}>
      <NavBar />
      
      <section className={styles.section} id="home">
       <HomeSection/>
        
      </section>
      <section id="works">
        <WorkSection/>
      </section>
      <section id="connect">
        <h1>Connect</h1>
        {/* Add your connect page content here */}
      </section>
    </div>
  )
}
