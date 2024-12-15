import markerIcon from "../images/marker.png"

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="image-container">
                <img
                    className="image-container__image"
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </div>
            <div className="info-container">
                <img
                    className="info-container__marker"
                    src={markerIcon}
                    alt="map marker icon"
                />
                <span className="info-container__country">{props.country}</span>
                <a className="info-container__link" href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="info-container__entry-title">{props.title}</h2>
                <p className="info-container__trip-dates">{props.dates}</p>
                <p className="info-container__entry-text">{props.text}</p>
            </div>
        </article>
    )
}