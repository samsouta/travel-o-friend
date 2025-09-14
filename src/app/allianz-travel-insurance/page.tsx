import React from 'react'
import AllianzTravelHero from '@/components/allianz-travel-insurance/Hero'
import TravelInsuranceHero from '@/components/allianz-travel-insurance/TravelInsuranceHero'
import FrequentlyAskedQuestions from '@/components/allianz-travel-insurance/FrequentlyAskedQuestions'
import AssistanceSection from '@/components/allianz-travel-insurance/AssistanceSection'
import SponsoredVacations from '@/components/home/SponsoredVacations'
import PayOverTime from '@/components/home/PayOverTime'
import TheEnvoyageExperience from '@/components/home/TheEnvoyageExperience'
import RecentCustomerReviews from '@/components/home/RecentCustomerReviews'
import JoinOurNetwork from '@/components/home/JoinOurNetwork'

const page = () => {
  return (
    <main>
      <div>
        <AllianzTravelHero/>
      </div>
      <div>
        <TravelInsuranceHero/>
      </div>
      <div>
        <FrequentlyAskedQuestions/>
      </div>
      <div>
        <AssistanceSection/>
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