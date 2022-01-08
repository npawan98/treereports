
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Table_Park_2_deciduous from "../../../Components/Common/MUI-table/Park_2Park/Table_Park_2_deciduous"

function Park_2_park_deciduous() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Park_2 Park - Deciduous" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Dog__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Table_Park_2_deciduous/>
            </div>
        </div>
    )
}

export default Park_2_park_deciduous