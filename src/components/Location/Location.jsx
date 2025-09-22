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
          href="https://www.google.com/maps/place/7Carbon+LLC/@41.3781377,69.2945141,1298m/data=!3m2!1e3!4b1!4m6!3m5!1s0x38aef30754e648c9:0xa87188fc945844a3!8m2!3d41.3781377!4d69.297089!16s%2Fg%2F11xfstkgb8?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
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
