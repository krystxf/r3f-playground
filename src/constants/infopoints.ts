import type { Infopoints } from "@/components/react-three-fiber/InfoPoints/infopoints.types";

export const infopoints = {
    ingenuity: {
        info_blade: {
            label: "Blades",
            description: `Ingenuity has four carbon fiber blades fixed into two 4-foot-long (1.2-meter-long) counter-rotating rotors.`,
        },
        info_body: {
            label: "Avionics & body",
            description: `Avionics — or "brains" — help the helicopter function and navigate. The body has insulation and heaters to keep sensitive electronics warm and survive cold Martian nights.`,
        },
        info_leg: {
            label: "Legs",
            description: `Ultra-light legs made of carbon fiber tubes help it land after flight.`,
        },
        info_solar_panel: {
            label: "Solar Panel",
            description: `A solar panel helps keep the battery charged.`,
        },
        info_antenna: {
            label: "Antennas",
            description: `The radio antennas communicate with Earth using the Mars 2020 Perseverance rover and the Mars orbiters.`,
        },
    },
} satisfies Record<string, Infopoints>;
