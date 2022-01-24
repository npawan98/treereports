
import Kslta_hort_deptTable_NotKnown from "../../../../Components/Common/MUI-table/Kslta_hort_dept/conservartionStatus/Kslta_hort_deptTable_NotKnown"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Kslta_hort_dept_NotKnown() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Kslta_hort_dept Park - Not Known" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Kslta_hort_dept__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Kslta_hort_deptTable_NotKnown/>
            </div>
        </div>
    )
}

export default Kslta_hort_dept_NotKnown
