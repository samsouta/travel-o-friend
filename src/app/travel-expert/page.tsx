import JoinOurNetwork from '@/components/home/JoinOurNetwork'
import PayOverTime from '@/components/home/PayOverTime'
import RecentCustomerReviews from '@/components/home/RecentCustomerReviews'
import SponsoredVacations from '@/components/home/SponsoredVacations'
import TheEnvoyageExperience from '@/components/home/TheEnvoyageExperience'
import Hero from '@/components/travel-expert/Hero'
import TravelExpertsSearch from '@/components/travel-expert/TravelExpertsSearch'
import React from 'react'

const page = () => {
  return (
    <main>
      <div>
        <Hero/>
      </div>
      <div>
        <TravelExpertsSearch/>
      </div>
      <div>
        <SponsoredVacations/>
      </div>
      <div>
        <PayOverTime/>
      </div>
      <div>
        <TheEnvoyageExperience/>
      </div>
      <div>
        <RecentCustomerReviews/>
      </div>
      <div>
        <JoinOurNetwork/>
      </div>
       
    </main>
  )
}

export default page