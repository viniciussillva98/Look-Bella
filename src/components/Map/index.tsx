

import { ContainerMap } from "./styles";

function Map() {
  const address = "Avenida Independência, 1250, Centro, São Leopoldo, RS";

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <ContainerMap>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Look Bella"
      />
    </ContainerMap>
  );
}

export default Map;
