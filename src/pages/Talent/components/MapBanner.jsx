import LatamUSMap from "./LatamUSMap";

export default function MapBanner() {
  return (
    <section className="t-map">
      <div className="section-inner">
        <div className="t-map-head t-map-head-flush">
          <p className="t-map-line">
            Engineers in <span className="t-place">14 LATAM countries.</span> Roles at U.S.
            companies from <span className="t-place">San Francisco</span> to{" "}
            <span className="t-place">New York.</span> Same hours. Same standards.
          </p>
        </div>
        <div className="t-map-canvas">
          <LatamUSMap />
        </div>
      </div>
    </section>
  );
}
