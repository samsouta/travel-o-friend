import GuidedTourOffers from '@/components/guide-tours/GuidedTourOffers'
import Hero from '@/components/guide-tours/Hero'
import OurGuide from '@/components/guide-tours/OurGuide'
import OurPartners from '@/components/guide-tours/OurPartners'
import PopularTourDestinations from '@/components/guide-tours/PopularTourDestinations'
import TypesofGuidedVacation from '@/components/guide-tours/TypesofGuidedVacation'
import PayOverTime from '@/components/home/PayOverTime'
import SponsoredVacations from '@/components/home/SponsoredVacations'
import TheEnvoyageExperience from '@/components/home/TheEnvoyageExperience'
import React from 'react'

const GuideTours = () => {
    return (
        <main className='min-h-screen'>
            <div>
                <Hero />
            </div>
            <div>
                <OurGuide />
            </div>
            <div>
                <GuidedTourOffers />
            </div>
            <div>
                <TypesofGuidedVacation />
            </div>
            <div>
                <OurPartners />
            </div>
            <div>
                <PopularTourDestinations />
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
        </main>
    )
}

export default GuideTours