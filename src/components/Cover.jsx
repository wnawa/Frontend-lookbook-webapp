import react from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const API="https://covers.openlibrary.org/b/id/"
//1542906
//-M.jpg

function Cover(cover_id){
    const src=`https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
    return (
        <img src={src}/>
    );

}
export default Cover;