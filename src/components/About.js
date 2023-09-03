import User from "./User";
import UserClass from "./UserClass";

const About=()=>
{
return(
<div>
    <h1>about page</h1>
    <User name={"Anjali (Function)"}/>
    <UserClass nameclass={"Anjali (Class)"}/>
</div>
)
}
export default About;