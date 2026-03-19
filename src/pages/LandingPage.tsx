import { Cards } from "../ui-components/Cards"
import { ContactCard } from "../ui-components/ContactCard"
import { PageSeparator } from "../ui-components/PageSeparator"

export const LandingPage = () => {
  return (
    <div className="bg-background">
        <Cards />
        <PageSeparator />
        <ContactCard />
    </div>
  )
}
