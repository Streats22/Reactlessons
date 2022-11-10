import pokemon from "../img/pokeball.jpg";
import cola from "../img/coca-cola.jpg";
import milk from "../img/milkl.jpg";
import watch from "../img/Watch.jpg";
import phone from "../img/phone.jpg";

function ChooseImage(inputFromPopup){
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
    return tobeAddedImg;
};

export default ChooseImage;
