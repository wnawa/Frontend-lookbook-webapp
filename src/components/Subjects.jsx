import react from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
function Subjects(Subject)
{

    return(
       
        <li key={Subject}> {Subject}</li>   
                   
          
   );
}
export default Subjects;