import { useHistory} from "react-router-dom";
import Sidebar from "../Sidebar";
import Card from "../Card";
        
const AdminHome = (props) => {

    const history = useHistory()

    const user = JSON.parse(localStorage.getItem('user'))

    const logOut = () => {
        props.setLoggedIn(false)
        localStorage.clear();
        history.replace("/")
    };

    return ( 
        

<div>

<Sidebar />

<div className="homeContent">



        <div className="wrapper">
            <Card title="Users Online" description="456" button="View"></Card>
            <Card title="Unenrolled Courses" description="12" button="View"></Card>
            <Card title="Incomplete Courses" description="10" button="View"></Card>
            <Card title="Pending Payments" description="13" button="View"></Card>
            </div>
            </div>
            </div>
        );
}
 
export default AdminHome;