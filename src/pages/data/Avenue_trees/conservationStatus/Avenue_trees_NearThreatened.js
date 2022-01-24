
import Avenue_treesTable_NearThreatened from "../../../../Components/Common/MUI-table/Avenue_trees/conservartionStatus/Avenue_treesTable_NearThreatened"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Avenue_trees_NearThreatened() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Avenue_trees Park - Near Threatened" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Avenue_trees__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Avenue_treesTable_NearThreatened/>
            </div>
        </div>
    )
}

export default Avenue_trees_NearThreatened
