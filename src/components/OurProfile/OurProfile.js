import { useMemo } from "react"
import { useSelector } from "react-redux"
import { OUR_PROFILE } from "../../helpers/constants"
import { ourProfileRouteSelector } from "../../redux/slices/ourProfileSlice"
import ChangeUser from "../ChangeUser/ChangeUser"
import OurProfileMessages from "../OurProfileMessages/OurProfileMessages"

const [OURMESSAGES, CHANGEUSER] = OUR_PROFILE

const ourProfileComponent = {
    [OURMESSAGES]: <OurProfileMessages/>,
    [CHANGEUSER]: <ChangeUser/>
}

const OurProfile = () => {
    const ourProfileRoute = useSelector(ourProfileRouteSelector)

    const MainComponent = useMemo(() => ourProfileComponent[ourProfileRoute], [ourProfileRoute])

  return (
    <>
        {MainComponent}
    </>
  )
}

export default OurProfile
