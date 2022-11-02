import "./Leftpane.css";

const Leftpane = ({navigtionlistitems, ButtonText}) =>{
    let ToberenderdLi = navigtionlistitems.map(Object => {
        let message = null;
        if(Object.message > 0) {
            message = <div className="leftPane-message">{Object.message}</div>
        }
        return (
            <li className="dashboard-li">
                <a href="#" className="dashboard-link">{Object.name} {message}</a>
            </li>

        );
    });


    return(
      <section className="leftpane-wrapper">
          <nav className="leftpane-nav">
              <ul className="dashboard-ul ">
                  {ToberenderdLi}
              </ul>
          </nav>
          <button className="dashboard-button">{ButtonText || "Click Here!"}</button>
      </section>
    );
}

export default Leftpane;