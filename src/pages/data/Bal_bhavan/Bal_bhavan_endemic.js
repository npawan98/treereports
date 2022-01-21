
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Table_Bal_bhavan_endemic from "../../../Components/Common/MUI-table/Bal_bhavan/Table_Bal_bhavan_endemic"

function Bal_bhavan_endemic() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Bal_bhavan Park - endemic" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Bal_bhavan__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Table_Bal_bhavan_endemic/>
            </div>
        </div>
    )
}

export default Bal_bhavan_endemic
