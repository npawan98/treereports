
import VictoriaTable_CriticallyEndangered from "../../../../Components/Common/MUI-table/VictoriaPark/conservartionStatus/VictoriaTable_CriticallyEndangered"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Victoria_park_CriticallyEndangered() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Victoria Park - Critically Endangered" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Victoria__Park-main" style={{display:'grid',placeItems:'center'}}>
                <VictoriaTable_CriticallyEndangered/>
            </div>
        </div>
    )
}

export default Victoria_park_CriticallyEndangered
