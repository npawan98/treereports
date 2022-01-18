
import SnakeTable_NotKnown from "../../../../Components/Common/MUI-table/SnakePark/conservartionStatus/SnakeTable_NotKnown"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Snake_park_NotKnown() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Snake Park - Not Known" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Snake__Park-main" style={{display:'grid',placeItems:'center'}}>
                <SnakeTable_NotKnown/>
            </div>
        </div>
    )
}

export default Snake_park_NotKnown
