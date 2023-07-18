import grid from "../images/card-img-svg.svg"
export default function Hero() {
    return (
        <section className="hero">
            <img src={grid} className="hero--photo" alt="this is " height="250px" weight="250px" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}