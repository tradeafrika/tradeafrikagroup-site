import CTASection from '@/components/pages/home/CtaSection'
import OurDivisions from '@/components/pages/home/divisionsSection'
import FeaturedPrograms from '@/components/pages/home/featuresProgram'
import LandingFold from '@/components/pages/home/landing-fold'
import OurImpact from '@/components/pages/home/ourImpac'
import TrustedOrganizations from '@/components/pages/home/trustedOrganization'

export default function HomePage() {
    return (
        <div >
            <LandingFold />
            <OurDivisions />
            <FeaturedPrograms />
            {/* <TrustedOrganizations /> */}
            {/* <OurImpact /> */}
            <CTASection />
        </div>
    )
}
