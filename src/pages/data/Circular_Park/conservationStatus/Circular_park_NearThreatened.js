import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"
import CircularTable_NearThreatened from "../../../../Components/Common/MUI-table/circularPark/conservartionStatus/CircularTable_NearThreatened"

function Circular_park_NearThreatened() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Circular Park - Near Threatened" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Circular__Park-main" style={{display:'grid',placeItems:'center'}}>
                <CircularTable_NearThreatened/>
            </div>
        </div>
    )
}

export default Circular_park_NearThreatened
