
import Bal_bhavanTable_ConservationDependent from "../../../../Components/Common/MUI-table/Bal_bhavan/conservartionStatus/Bal_bhavanTable_ConservationDependent"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Bal_bhavan_ConservationDependent() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Bal_bhavan Park - Conservation Dependent" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Bal_bhavan__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Bal_bhavanTable_ConservationDependent/>
            </div>
        </div>
    )
}

export default Bal_bhavan_ConservationDependent
