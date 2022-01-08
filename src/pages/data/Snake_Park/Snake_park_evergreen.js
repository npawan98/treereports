
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Table_Snake_evergreen from "../../../Components/Common/MUI-table/SnakePark/Table_Snake_evergreen"

function Snake_park_evergreen() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Snake Park - Evergreen" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Dog__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Table_Snake_evergreen/>
            </div>
        </div>
    )
}

export default Snake_park_evergreen
