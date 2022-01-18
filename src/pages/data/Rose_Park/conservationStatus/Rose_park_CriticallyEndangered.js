
import RoseTable_CriticallyEndangered from "../../../../Components/Common/MUI-table/RosePark/conservartionStatus/RoseTable_CriticallyEndangered"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Rose_park_CriticallyEndangered() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Rose Park - Critically Endangered" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Rose__Park-main" style={{display:'grid',placeItems:'center'}}>
                <RoseTable_CriticallyEndangered/>
            </div>
        </div>
    )
}

export default Rose_park_CriticallyEndangered