
import Central_libraryTable_Vulnerable from "../../../../Components/Common/MUI-table/Central_library/conservartionStatus/Central_libraryTable_Vulnerable"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Central_library_Vulnerable() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Central_library Park - Vulnerable" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Central_library__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Central_libraryTable_Vulnerable/>
            </div>
        </div>
    )
}

export default Central_library_Vulnerable