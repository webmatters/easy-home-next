import Layout from '@/components/shared/Layout'
import { useState } from 'react'
import axios from 'axios'

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ServiceList from '@/components/ ServiceList'
import BlogSection from '@/components/BlogSection'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  const [error, setError] = useState('')
  const [alertMessage, setAlertMessage] = useState('')

  const addEmail = async email => {
    if (email) {
      try {
        const result = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/notify-emails`,
          {
            data: { email },
          }
        )
        setAlertMessage("We'll let you know when we launch.")
        await setTimeout(() => setAlertMessage(''), 3000)
      } catch (err) {
        if (
          err?.response?.data?.error?.message ===
          'This attribute must be unique'
        ) {
          setError('This email is already set to be notified.')
          await setTimeout(() => setError(''), 3000)
        } else {
          console.error(err)
        }
      }
    }
  }

  return (
    <Layout>
      <Hero addEmail={addEmail} error={error} alertMessage={alertMessage} />
      <Features />
      <ServiceList />
      {/* <BlogSection /> */}
      <ContactForm />
    </Layout>
  )
}
