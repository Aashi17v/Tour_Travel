import Link from "next/link";
import "../../../public/sass/homepage/last_section.scss";

export default function Last_section(){
    return(
        <>
        <div className="outer">
            <div className="inner_area">
                <h2>Ready to Explore Incredible India?</h2>
                <p>Your dream Indian adventure awaits.Book your customized tour today and create memories that last a lifetime.</p>
                <Link href="/ticket_booking">
                <button>Book Your Trip Now</button>
                </Link>
            </div>
        </div>
        </>
    )
}