import { InfoPoints } from "@/components/r3f";
import { assets } from "@/utils";

const infoPointsData = {
  info_blade: {
    label: "Blades",
    description:
      "Made of carbon fiber foam core provide lift in the thin Mars atmosphere.",
  },
  info_body: {
    label: "Avionics & body",
    description: `Avionics — or "brains" — help the helicopter function and navigate. The body has insulation and heaters to keep sensitive electronics warm and survive cold Martian nights.`,
  },
  info_leg: {
    label: "Legs",
    description:
      "Ultra-light legs made of carbon fiber tubes help it land after flight.",
  },
  info_solar_panel: {
    label: "Solar Panel",
    description: "A solar panel helps keep the battery charged.",
  },
  info_antenna: {
    label: "Antennas",
    description:
      "Radio antennas talk to Earth via the Mars 2020 rover and the Mars orbiters.",
  },
};

export const IngenuityInfoPoints = () => {
  return (
    <InfoPoints
      infoPoints={infoPointsData}
      modelUrl={assets.ingenuity.info_points}
    />
  );
};
