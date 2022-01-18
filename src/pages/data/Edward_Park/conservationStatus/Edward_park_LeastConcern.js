
import EdwardTable_LeastConcern from "../../../../Components/Common/MUI-table/EdwardPark/conservartionStatus/EdwardTable_LeastConcern"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Edward_park_LeastConcern() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Edward Park - Least Concern" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Edward__Park-main" style={{display:'grid',placeItems:'center'}}>
                <EdwardTable_LeastConcern/>
            </div>
        </div>
    )
}

export default Edward_park_LeastConcern
