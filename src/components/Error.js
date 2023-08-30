import { useRouteError } from "react-router-dom"

const Error=()=>{
    const error=useRouteError();
    return(
<div>
    <h1>we got error</h1>
    <h2>{error.status}</h2>
</div>
    );
}