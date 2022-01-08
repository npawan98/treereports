
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Table_Rose_exotic from "../../../Components/Common/MUI-table/rosePark/Table_rose_exotic"

function Traingular_Park_exotic() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Rose Park - exotic" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Dog__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Table_Rose_exotic/>
            </div>
        </div>
    )
}

export default Traingular_Park_exotic