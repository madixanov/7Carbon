import "./Location.css"

export default function Location() {
  return (
    <div style={{ width: "100%", height: "600px" }} className="map-container">
      <h1>Наш офис</h1>
      <iframe
        title="google-map"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "8px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m2!2m1!1s7carbon!3m1!1s0x0:0x0!2m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
      ></iframe>

      {/* Кнопка «Открыть в Google Maps» */}
      <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
        <a
          href="https://www.google.com/maps/place/?q=place_id:ChIJfUHVsrAi2z4RzW2wya3rQqM"
          target="_blank"
          rel="noopener noreferrer"
          style={{textDecoration: "none", color: "white"}}
        >
          <button className="link-button">Окрыть в Google Maps</button>
        </a>
      </div>
    </div>
  );
}
