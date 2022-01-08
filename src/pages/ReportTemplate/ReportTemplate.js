import "./ReportTemplate.scss";
function ReportTemplate({ props }) {
  return (
    <div className="report">
      <div className="header">
        <h1>{props.Scientific_name}</h1>
      </div>

      <div className="body_container">
        <div className="report_body">
          <div className="report__left">
            <h4>Family :</h4><br/>
            <h4>Origin :</h4><br/>
            <h4>Common Name :</h4><br/>
            <h4>Kannada Name :</h4><br/>
            <h4>Species type :</h4><br/>
            <h4>Conservation Status :</h4><br/>
            <h4>Phenology :</h4><br/>
            <h4>Flowering period :</h4><br/>
            <h4>Fruiting_period :</h4><br/>
          </div>
          <div className="report__right">
            <p>{props.Family_name}</p><br/>
            <p>{props.Origin}</p><br/>
            <p>{props.Common_name}</p><br/>
            <p>{props.Kannada_name}</p><br/>
            <p>{props.Species_type}</p><br/>
            <p>{props.Conservation_status}</p><br/>
            <p>{props.Phenology}</p><br/>
            <p>{props.Flowering_period}</p><br/>
            <p>{props.Fruiting_period}</p><br/>
            
          </div>
        </div>
        <div className="des">
            <h4>Description :</h4><p>{props.Description}</p><br/>
            <h4>Uses :</h4><p>{props.Uses}</p><br/>
        </div>
      </div>
    </div>
  );
}

export default ReportTemplate;
