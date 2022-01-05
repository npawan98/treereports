
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Table_Rose_deciduous from "../../../Components/Common/MUI-table/rosePark/Table_rose_deciduous"

function Snake_park_deciduous() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Snake Park - Deciduous" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Dog__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Table_Rose_deciduous/>
            </div>
        </div>
    )
}

export default Snake_park_deciduous
