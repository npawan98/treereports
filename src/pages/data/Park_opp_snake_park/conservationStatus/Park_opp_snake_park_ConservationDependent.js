
import Park_opp_snake_parkTable_ConservationDependent from "../../../../Components/Common/MUI-table/Park_opp_snake_park/conservartionStatus/Park_opp_snake_parkTable_ConservationDependent"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Park_opp_snake_park_ConservationDependent() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Park_opp_snake_park Park - Conservation Dependent" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Park_opp_snake_park__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Park_opp_snake_parkTable_ConservationDependent/>
            </div>
        </div>
    )
}

export default Park_opp_snake_park_ConservationDependent
