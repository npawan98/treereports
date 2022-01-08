
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Table_Workers_indigenous from "../../../Components/Common/MUI-table/WorkersPark/Table_Workers_indigenous"

function Workers_park_indigenous() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Workers Park - indigenous" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Dog__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Table_Workers_indigenous/>
            </div>
        </div>
    )
}

export default Workers_park_indigenous
