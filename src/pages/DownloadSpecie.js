import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReportTemplate from "./ReportTemplate/ReportTemplate";

function DownloadSpecie() {
  const { Snum } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8081/search?Code=${Snum}`).then((res) => {
      console.log("hello new", res.data);
      setData(res.data);
    });
  }, [Snum]);
  return (
    <div>
      {data.map((item,index) => {
        return (
          <ReportTemplate 
            props={item} 
            key={index}/>
        );
      })}
    </div>
  );
}

export default DownloadSpecie;
