import axios from 'axios'
import ReactMarkdown from 'react-markdown'

import Layout from '@/components/shared/Layout'
import React from 'react'

export default function Privacy({ content }) {
  return (
    <Layout title="Privacy Policy">
      <main className="prose mt-8 mx-auto max-w-6xl">
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const {
    data: { data },
  } = await axios.get(`${process.env.API_URL}/privacy`)

  const { content } = data.attributes
  return {
    props: { content },
    revalidate: 1,
  }
}
