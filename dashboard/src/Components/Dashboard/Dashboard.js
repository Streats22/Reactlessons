<<<<<<< Updated upstream
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

=======
/*REACT*/
import React from "react";
/*Own Components*/
import Rightpane from "../Rightpane/Rightpane";
import Leftpane from "../Leftpane/Leftpane";
import Popup from "../popup/Popup";
/*CSS*/
import "./Dashboard.css";
/* Helpers*/
import NavigationObject from "../../helpers/Navigation";
import productObject from "../Data/Products";
import chooseImage from "../../helpers/ChooseImage";
/*End of imports*/


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ProductCards: [], open: true};
    }

    onButtonClick = () => {
        this.setState({open: !this.state.open});

    }

    componentDidMount() {

        this.setState({ProductCards: productObject.products})

    }

    addButtonClick = (inputFromPopup) => {
      let imgFromHelper = chooseImage(inputFromPopup);

    let toBeAdded = [
        {
            name: inputFromPopup,
            img: imgFromHelper,
            key: this.state.ProductCards.length +1,
        }


    ]

        let mergedArrays = this.state.ProductCards.concat(toBeAdded);
        this.setState({
            ProductCards: mergedArrays,
            open: !this.state.open,
        })
    }
    ButtonText = "Go Premium";

    render(){
        let navigtionlistitems = NavigationObject.Navigation;

        if(this.state.open === true){
            return(

                <>
                    <article className="dashboard-section">
                        <Leftpane navigtionlistitems={navigtionlistitems}  ButtonText={this.ButtonText}/>
                        <Rightpane onButtonClick={this.onButtonClick} ProductCards={this.state.ProductCards} headerText="My dashboard" buttonText="Add a Product" buttonSymbol="+">
                        </Rightpane>
                    </article>
                </>
            );
        }
        return(
            <>
                <Popup addButtonClick={this.addButtonClick} />
            </>
        );
    }
>>>>>>> Stashed changes
}

export default Dashboard;