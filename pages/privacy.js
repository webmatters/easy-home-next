import axios from 'axios'

import Layout from '@/components/shared/Layout'

export default function Privacy({ content }) {
  return (
    <Layout title="Privacy Policy">
      <p>{content}</p>
    </Layout>
  )
}

export async function getStaticProps() {
  const {
    data: {
      attributes: { content },
    },
  } = await axios.get(`http://localhost:1337/api/privacy`)

  return {
    props: { content },
    revalidate: 1,
  }
}
