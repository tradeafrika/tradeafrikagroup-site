import CTASection2 from '@/components/pages/network/cta2'
import JoinNetworkHero from '@/components/pages/network/partner-join'
import FeaturedPrograms2 from '@/components/pages/network/programs'
import Ptr from '@/components/pages/network/ptr'
import Pyt from '@/components/pages/network/pyr'
import WhyJK from '@/components/pages/network/why'

export default function Page() {
    return (
        <div>
            <JoinNetworkHero/>
            <WhyJK/>
            <Ptr/>
            <FeaturedPrograms2/>
            <Pyt/>
            <CTASection2 />
        </div>
    )
}
