import Banner from "../components/banner";
import Card_section from "../components/card_section";
import Feedback from "../components/feedback";
import Footer from "../components/footer";
import Header from "../components/header";
import Heritage from "../components/heritage";
import Last_section from "../components/last_section";
import Qualities from "../components/qualities";

export default function Homepage(){
    return(
        <>
        <Banner />
        <Card_section />
        <Heritage />
        <Qualities />
        <Feedback />
        <Last_section /> 
        </>
    )
        
}