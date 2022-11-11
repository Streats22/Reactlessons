import "./Question.css";
import React from "react";

class Question extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
        }
    }

    onStarClicked = (rating) =>{
        this.setState({
            rating: rating,
        })


    }
    render(){
        let starsArray = [];
        for( let i = 1; i <= this.state.rating ; i++){
            starsArray.push(<i  onClick={()=>this.onStarClicked(i)}  className="question-star  fa-solid fa-star"></i>);
        }

        for(let i = this.state.rating +1; i<=5; i++){
            starsArray.push(<i  onClick={()=>this.onStarClicked(i)}  className="question-star fa-regular fa-star"></i>);
        }

    return(

      <>
          <article className="question">
              <header className="question-header">
                  <h2 className="question-heading">How good is your level in REACTJS</h2>
              </header>

              <section className="question-section">
                  <p className="question-text">(1) star is very bad and (5) stars means masterfull </p>
                  <div className="question-rating">
                      {starsArray}

                  </div>
              </section>
              <footer className="question-footer">
                  <button className="question-button">Previous</button>
                  <button className="question-button">Next</button>
              </footer>
          </article>

      </>
        );
    }
}
export default Question;