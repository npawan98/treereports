import './ReportsByZone.scss'
import SubBanner from '../Common/BannerImage/SubBanner/SubBanner'
import Button from '../Common/ButtonComponent/Button'
function ReportsByZone() {
    return (
        <div className="reports__zone">
             <div>
                <SubBanner imgURL="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" Title="Generate Reports" subTitle="By Zone"/>
            </div>

            <div className="reports__zone--main">
                <div>
                    <div className="zone__select">
                    <select>
                        <option>Zone1</option>
                        <option>Zone2</option>
                        <option>Zone3</option>
                    </select>
                    </div>

                    <div className="zone__btn--container">
                        <center>
                        <div className="zone__btn">
                            <h4>Fetch</h4>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default ReportsByZone
