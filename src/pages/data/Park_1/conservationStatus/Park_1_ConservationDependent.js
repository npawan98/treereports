
import Park_1Table_ConservationDependent from "../../../../Components/Common/MUI-table/Park_1Park/conservartionStatus/Park_1Table_ConservationDependent"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Park_1_park_ConservationDependent() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Park_1 Park - Conservation Dependent" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Park_1__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Park_1Table_ConservationDependent/>
            </div>
        </div>
    )
}

export default Park_1_park_ConservationDependent
