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
import navigation from "../../helpers/Navigation";
import Products from "../Data/Products";
/*End of imports*/


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ProductCards: [],
            open: true,
            cardClicked: {},
            editMode: false,
        };
    }

    onButtonClick = (inputFromPopup) => {
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
            id: this.state.ProductCards.length + 1,
        }


    ]

        let mergedArrays = this.state.ProductCards.concat(toBeAdded);
        this.setState({
            ProductCards: mergedArrays,
            open: !this.state.open,
        })
    }

    onCardClicked = (IdFromCard) =>{
        if(this.state.ProductCards[IdFromCard -1].name === "placeholder"){
            this.setState({
                editMode: false,
            });
        }
        else{
            this.setState({
                editMode: true,
            });
        }

        this.setState({

            open: !this.state.open,
            cardClicked: this.state.ProductCards[IdFromCard -1],
        });

       this.setState({
           open: !this.state.open,
           cardClicked: this.state.ProductCards[IdFromCard - 1],
           }
       );
    }

    editButtonClicked = (inputFromPopup) =>{
        let productCards = this.state.ProductCards;
        let newStates = productCards.map(product => {
            if(this.state.cardClicked.id === product.id){
                product.name = inputFromPopup;
                return product;
            } else{
                return product;
            }        });
        this.setState({ productCards: newStates, open:true});

    }


    ButtonText = "Go Premium";

    render(){
        let navigtionlistitems = NavigationObject.Navigation;

        console.log('help',navigtionlistitems)

        if(this.state.open === true){
            return(

                <>
                    <article className="dashboard-section">
                        <Leftpane navigtionlistitems={navigtionlistitems}  ButtonText={this.ButtonText}/>
                        <Rightpane onProductCardClicked={this.onCardClicked} onButtonClick={this.onButtonClick} ProductCards={this.state.ProductCards} headerText="My dashboard" buttonText="Add a Product" buttonSymbol="+">
                        </Rightpane>
                    </article>
                </>
            );
        }
        return(
            <>
                <Popup editButtonClicked={this.editButtonClicked}  editMode={this.state.editMode} cardClicked={this.state.cardClicked} addButtonClick={this.addButtonClick} />
            </>
        );
    }
}

export default Dashboard;