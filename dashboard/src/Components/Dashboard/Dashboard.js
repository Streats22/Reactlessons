import Rightpane from "../Rightpane/Rightpane";
import Leftpane from "../Leftpane/Leftpane";
import "./Dashboard.css";


const Dashboard = () =>{
    let navigtionlistitems =
        [
            {
                name: "Home",
                message: 0,
            },
            {
                name: "Invoices",
                message: 0,
            },
            {
                name: "Orders",
                message: 3,
            },
            {
                name: "Returns",
                message: 1,
            },
            {
                name: "Contact",
                message: 2,

            },


    ];
    let ButtonText = "Go Premium";

    let ProductCards =[
        {
            name: "flowers",


        },
        {
            name:"placeholder",


        },
        {
            name:"placeholder",
            img: ""
        },

    ];
    return(

      <>
          <article className="dashboard-section">

             <Leftpane navigtionlistitems={navigtionlistitems}  ButtonText={ButtonText}/>
              <Rightpane ProductCards={ProductCards} headerText="My dashboard" buttonText="Add a Product" buttonSymbol="+">

              </Rightpane>
          </article>
      </>
    );

}

export default Dashboard;