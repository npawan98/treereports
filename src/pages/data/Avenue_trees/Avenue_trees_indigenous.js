
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Table_Avenue_trees_indigenous from "../../../Components/Common/MUI-table/Avenue_trees/Table_Avenue_trees_indigenous"

function Avenue_trees_indigenous() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="avenue_trees Park - indigenous" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="avenue_trees__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Table_Avenue_trees_indigenous/>
            </div>
        </div>
    )
}

export default Avenue_trees_indigenous
