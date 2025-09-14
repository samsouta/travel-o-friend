import JoinOurNetwork from '@/components/home/JoinOurNetwork'
import PayOverTime from '@/components/home/PayOverTime'
import RecentCustomerReviews from '@/components/home/RecentCustomerReviews'
import SponsoredVacations from '@/components/home/SponsoredVacations'
import TheEnvoyageExperience from '@/components/home/TheEnvoyageExperience'
import AccessibilitySection from '@/components/travel-resources-hub/AccessibilitySection'
import Hero from '@/components/travel-resources-hub/Hero'
import SustainabilitySection from '@/components/travel-resources-hub/SustainabilitySection'
import TravelerTips from '@/components/travel-resources-hub/TravelerTips'
import TravelFAQ from '@/components/travel-resources-hub/TravelFAQ'
import TravelInsuranceHero from '@/components/travel-resources-hub/TravelInsuranceHero'
import TravelUpdates from '@/components/travel-resources-hub/TravelUpdates'
import React from 'react'

const page = () => {
  return (
    <main>
        <div>
            <Hero/>
        </div>
        <div>
            <TravelerTips/>
        </div>
        <div>
            <TravelUpdates/>
        </div>
        <div>
            <AccessibilitySection/>
        </div>
        <div>
            <TravelInsuranceHero/>
        </div>
        <div>
            <TravelFAQ/>
        </div>
        <div>
            <SustainabilitySection/>
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