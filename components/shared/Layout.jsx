import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className="h-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Easy Home | Home Care Simplified',
  description:
    'All of your regular home maintenance work done for one fair price.',
  keywords:
    'home, house, residential, chores, tasks, service, maintenance, lawn, garden, maid, cleaning, pet, grooming, auto detailing, car wash, gutters, pool',
}
