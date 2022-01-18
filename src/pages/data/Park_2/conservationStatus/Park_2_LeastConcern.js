
import Park_2Table_LeastConcern from "../../../../Components/Common/MUI-table/Park_2Park/conservartionStatus/Park_2Table_LeastConcern"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Park_2_park_LeastConcern() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Park_2 Park - Least Concern" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Park_2__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Park_2Table_LeastConcern/>
            </div>
        </div>
    )
}

export default Park_2_park_LeastConcern
