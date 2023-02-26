import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Form from '@/component/Form'
import Layout from '@/component/layout/Layout'
import Header from '@/component/layout/Header'
import Footer from '@/component/layout/Footer'
import Link from 'next/link'

export default function Newsletter() {
  return (
        <Layout>
            <div className="flex flex-row m-0">
                <button className="absolute top-4rem right-4 transition-colors duration-150 border 
                border-slate-100 text-white font-semibold px-4 py-2 
                rounded-2xl shadow-lg mt-4 hover:bg-white hover:text-amber-400">
                    <Link href="/ ">Back</Link>
                </button>
                <div>
                    <img src='./form-side-bg.jpg' className='object-cover h-screen'/>
                </div>
                <Form/>
            </div>
        </Layout>
  )
}
