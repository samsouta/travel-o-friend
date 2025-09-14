import JoinOurNetwork from '@/components/home/JoinOurNetwork'
import PayOverTime from '@/components/home/PayOverTime'
import RecentCustomerReviews from '@/components/home/RecentCustomerReviews'
import SponsoredVacations from '@/components/home/SponsoredVacations'
import TheEnvoyageExperience from '@/components/home/TheEnvoyageExperience'
import FeaturedCruiseOperators from '@/components/recommendations/FeaturedCruiseOperators'
import HotelPartnersPage from '@/components/recommendations/HotelPartnersPage'
import TravelRecommendations from '@/components/recommendations/TravelRecommendations'
import React from 'react'

const page = () => {
  return (
    <main>
      <div>
        <TravelRecommendations/>
      </div>
      <div>
        <HotelPartnersPage/>
      </div>
      <div>
        <FeaturedCruiseOperators/>
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