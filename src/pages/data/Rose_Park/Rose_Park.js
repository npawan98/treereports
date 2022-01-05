import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import RoseTable from "../../../Components/Common/MUI-table/rosePark/roseTable"

function Rose_Park() {
    return (
        <div className="Dog__Park">
            <SubBanner Title="Generate report" subTitle="Rose Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
        
            <div className="Dog__Park-main" style={{display:'grid',placeItems:'center'}}>
                <RoseTable/>
            </div>
        
        
        </div>
    )
}

export default Rose_Park
