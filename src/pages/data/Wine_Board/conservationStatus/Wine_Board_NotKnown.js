
import WineTable_NotKnown from "../../../../Components/Common/MUI-table/WineBoard/conservartionStatus/WineTable_NotKnown"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Wine_Board_NotKnown() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Wine Park - Not Known" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Wine__Park-main" style={{display:'grid',placeItems:'center'}}>
                <WineTable_NotKnown/>
            </div>
        </div>
    )
}

export default Wine_Board_NotKnown