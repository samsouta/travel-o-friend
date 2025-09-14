import BigMoments from '@/components/group-travel/BigMoments'
import GroupTravelLanding from '@/components/group-travel/GroupTravelLanding'
import Hero from '@/components/group-travel/Hero'
import TravelAdvisorDirectory from '@/components/group-travel/TravelAdvisorDirectory'
import TravelServices from '@/components/group-travel/TravelServices'
import PayOverTime from '@/components/home/PayOverTime'
import RecentCustomerReviews from '@/components/home/RecentCustomerReviews'
import SponsoredVacations from '@/components/home/SponsoredVacations'
import React from 'react'

const GroupTravel = () => {
  return (
    <main
        className='min-h-screen'
    >
        <div>
            <Hero />
        </div>
        <div>
            <GroupTravelLanding />
        </div>
        <div>
            <BigMoments />
        </div>
        <div>
            <TravelServices />
        </div>
        <div className=' my-10' >
            <TravelAdvisorDirectory />
        </div>
        <div>
            <RecentCustomerReviews/>
        </div>
        <div>
            <SponsoredVacations/>
        </div>
        <div>
            <PayOverTime/>
        </div>
    </main>
  )
}

export default GroupTravel