import { Link } from 'react-router-dom'
import BannerImage from '../Common/BannerImage/BannerImage'
import Button from '../Common/ButtonComponent/Button'
import './GenerateReportsComponent.scss'
function GenerateReportsComponent() {
    return (
        <div className="Generate__report--container">

            <div>
                <BannerImage imgURL="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" Title="Generate Reports"/>
            </div>

            <div className="Generate__report--container--main">
                <div>
                    <Link to="/all-trees" style={{textDecoration:"none"}}>
                    <div>
                        <Button btn_text="Total Overview"/>
                    </div>
                    </Link>
                    <Link to="/generate_by_zone" style={{textDecoration:"none"}}>
                    <div>
                        <Button btn_text="By Zone"/>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GenerateReportsComponent
