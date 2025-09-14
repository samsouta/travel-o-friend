import Hero from '@/components/flights/Hero'
import JoinOurNetwork from '@/components/home/JoinOurNetwork'
import PayOverTime from '@/components/home/PayOverTime'
import RecentCustomerReviews from '@/components/home/RecentCustomerReviews'
import SponsoredVacations from '@/components/home/SponsoredVacations'
import TheEnvoyageExperience from '@/components/home/TheEnvoyageExperience'
import React from 'react'

const page = () => {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <SponsoredVacations />
      </div>
      <div>
        <PayOverTime />
      </div>
      <div>
        <TheEnvoyageExperience />
      </div>
      <div>
        <RecentCustomerReviews />
      </div>
      <div>
        <JoinOurNetwork />
      </div>
    </main>
  )
}

export default page