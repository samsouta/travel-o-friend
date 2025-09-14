import React from 'react'
import Hero from '../../components/irresistible-offers/Hero'
import EnvoyageFeatures from '@/components/irresistible-offers/EnvoyageFeatures'
import CurrentOffers from '@/components/irresistible-offers/CurrentOffers'
import TravelBooking from '@/components/irresistible-offers/TravelBooking'
import LastMinuteOffers from '@/components/irresistible-offers/LastMinuteOffers'
import RecentCustomerReviews from '@/components/home/RecentCustomerReviews'
import SponsoredVacations from '@/components/home/SponsoredVacations'
import PayOverTime from '@/components/home/PayOverTime'
import JoinOurNetwork from '@/components/home/JoinOurNetwork'

const IrresistibleOffers = () => {
  return (
    <main>
        <div>
            <Hero/>
        </div>
        <div>
            <EnvoyageFeatures/>
        </div>
        <div>
            <TravelBooking/>
        </div>
        <div>
            <CurrentOffers/>
        </div>
        <div>
            <LastMinuteOffers/>
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
        <div>
            <JoinOurNetwork/>
        </div>
    </main>
  )
}

export default IrresistibleOffers