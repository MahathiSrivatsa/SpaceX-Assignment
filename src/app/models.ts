export interface MissionDetail {
    flight_number: number;
    mission_name: string;
    mission_id: string[];
    launch_year: string;
    launch_success: boolean;
    rocket: { first_stage: { cores: Cores[] } };
    links: { mission_patch_small: string };
}

interface Cores {
    land_success: boolean;
}
