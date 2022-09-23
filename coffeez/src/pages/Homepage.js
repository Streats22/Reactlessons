import Navigation from "../components/Navigation/JS/Navigation";
import Header from "../components/Header/JS/Header";
import Section from "../components/Section/JS/Section";
import Card from "../components/Card/JS/Card";

const Homepage =() => {
    return(
        <>
            <Navigation> </Navigation>
            <Header
                bigTitle="Coffeez"
                smallTitle="The coffee that will make you smile"
                buttonText="order now"

            />
            <Section titleH2="Dit is de Title">
                <Card text="The best Cappuccino near you" image="Cappuccino_02.jpg"  />
                <Card text="Freshly grinded everyday" image="Coffee_beans_grinding.jpg" />
                <Card text="Share Coffee share happieness" image="Coffee_House_fun.jpg"/>
                <Card text="The art of the Cappuccino" image="Cappuccino_01.jpg"/>
            </Section>
        </>
    )

}
export default Homepage;