import { Cards } from "../ui-components/Cards"
import { ContactCard } from "../ui-components/ContactCard"
import { PageSeparator } from "../ui-components/PageSeparator"

export const LandingPage = () => {
  return (
    <div>
        <Cards />
        <PageSeparator />
        <ContactCard />
    </div>
  )
}
