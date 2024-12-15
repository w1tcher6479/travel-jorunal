import globeImage from "../images/globe.png"

export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={globeImage} alt="globe icon" />
            <h1 className="logo-text">my travel journal.</h1>
        </header>
    )
}