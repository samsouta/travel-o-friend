import FeaturedTravelArticle from "@/components/home/FeaturedTravelArticle";
import FindYourExpert from "@/components/home/FindYourExpert";
import JoinOurNetwork from "@/components/home/JoinOurNetwork";
import OurLastUpdate from "@/components/home/OurLastUpdate";
import PayOverTime from "@/components/home/PayOverTime";
import PlanAGroupTrip from "@/components/home/PlanAGroupTrip";
import RecentCustomerReviews from "@/components/home/RecentCustomerReviews";
import SponsoredVacations from "@/components/home/SponsoredVacations";
import SuccessRate from "@/components/home/SuccessRate";
import TheEnvoyageExperience from "@/components/home/TheEnvoyageExperience";
import TravelerFavorites from "@/components/home/TravelerFavorites";
import TravelHomepage from "@/components/home/Hero";

export default function Home() {
  return (
    <main className=" overflow-hidden">
        {/* Demo page */}
        <TravelHomepage />
        {/* Success rate */}
        <SuccessRate />
        {/* Our last update */}
        <OurLastUpdate />
        {/* Find your expert */}
        <FindYourExpert />
        {/* Traveler favorites */}
        <TravelerFavorites />
        {/* Plan a group trip */}
        <PlanAGroupTrip />
        {/* Featured travel article */}
        <FeaturedTravelArticle />
        {/* Sponsored vacations */}
        <SponsoredVacations />
        {/* Pay over time */}
        <PayOverTime />
        {/* The Envoyage Experience */}
        <TheEnvoyageExperience />
        {/* Recent customer reviews */}
        <RecentCustomerReviews />
        {/* Join our network */}
        <JoinOurNetwork />
        
    </main>
  );
}
