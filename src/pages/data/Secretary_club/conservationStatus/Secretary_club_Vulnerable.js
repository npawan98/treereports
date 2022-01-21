
import SecretaryTable_Vulnerable from "../../../../Components/Common/MUI-table/SecretaryClub/conservartionStatus/SecretaryTable_Vulnerable"
import SubBanner from "../../../../Components/Common/BannerImage/SubBanner/SubBanner"

function Secretary_club_Vulnerable() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Secretary Park - Vulnerable" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Secretary__Park-main" style={{display:'grid',placeItems:'center'}}>
                <SecretaryTable_Vulnerable/>
            </div>
        </div>
    )
}

export default Secretary_club_Vulnerable
