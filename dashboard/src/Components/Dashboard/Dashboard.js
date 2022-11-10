import React from "react";
import Rightpane from "../Rightpane/Rightpane";
import Leftpane from "../Leftpane/Leftpane";
import Popup from "../popup/Popup";
import "./Dashboard.css";
import pokemon from "../../img/pokeball.jpg";
import cola from "../../img/coca-cola.jpg";
import milk from "../../img/milkl.jpg";
import watch from "../../img/Watch.jpg";
import phone from "../../img/phone.jpg";


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ProductCards: [], open:true};
    }
    onButtonClick = () => {
        this.setState({open: !this.state.open});

    }

    componentDidMount(){
      let ProductCards =[
            {
                name: "Cola",
                img: cola,


            },
            {
                name:"pokemon",
                img: pokemon,


            },
            {
                name:"placeholder",

            },

        ];
      this.setState({ProductCards: ProductCards})

    }

    addButtonClick = (inputFromPopup) =>{
        let tobeAddedImg;
        switch (inputFromPopup) {
            case("Pokemon"):
                tobeAddedImg = pokemon;
                break;
            case("Phone"):
                tobeAddedImg = phone;
                break;
            case("Watch"):
                tobeAddedImg = watch;
                break;
            case("Milk"):
                tobeAddedImg = milk;
                break;
            case("Cola"):
                tobeAddedImg = cola;
                break;
            default:
                tobeAddedImg = phone;
                break;
        }
        let toBeAdded = [
            {
                name: inputFromPopup,
                img: tobeAddedImg,
            }


        ]
        let mergedArrays = this.state.ProductCards.concat(toBeAdded);
        this.setState({
            ProductCards: mergedArrays,
            open: !this.state.open,
        })
    }

    render(){



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

     ButtonText = "Go Premium";



}

export default Dashboard;