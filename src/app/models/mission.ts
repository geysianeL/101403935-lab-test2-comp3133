export interface Mission {
  flight_number: number
  mission_name: string
  mission_id: string[]
  upcoming: boolean
  launch_year: string
  launch_date_unix: number
  launch_date_utc: string
  launch_date_local: string
  is_tentative: boolean
  tentative_max_precision: string
  tbd: boolean
  launch_window?: number
  rocket: Rocket
  ships: string[]
  telemetry: Telemetry
  launch_site: LaunchSite
  launch_success?: boolean
  launch_failure_details?: LaunchFailureDetails
  links: Links
  details?: string
  static_fire_date_utc?: string
  static_fire_date_unix?: number
  timeline?: Timeline
  crew?: any[]
  last_date_update?: string
  last_ll_launch_date?: string
  last_ll_update?: string
  last_wiki_launch_date?: string
  last_wiki_revision?: string
  last_wiki_update?: string
  launch_date_source?: string
}

export interface Rocket {
  rocket_id: string
  rocket_name: string
  rocket_type: string
  first_stage: FirstStage
  second_stage: SecondStage
  fairings?: Fairings
}

export interface FirstStage {
  cores: Core[]
}

export interface Core {
  core_serial?: string
  flight?: number
  block?: number
  gridfins?: boolean
  legs?: boolean
  reused?: boolean
  land_success?: boolean
  landing_intent?: boolean
  landing_type?: string
  landing_vehicle?: string
}

export interface SecondStage {
  block?: number
  payloads: Payload[]
}

export interface Payload {
  payload_id: string
  norad_id: number[]
  reused: boolean
  customers: string[]
  nationality?: string
  manufacturer?: string
  payload_type: string
  payload_mass_kg?: number
  payload_mass_lbs?: number
  orbit: string
  orbit_params: OrbitParams
  cap_serial?: string
  mass_returned_kg?: number
  mass_returned_lbs?: number
  flight_time_sec?: number
  cargo_manifest?: string
  uid?: string
}

export interface OrbitParams {
  reference_system?: string
  regime?: string
  longitude?: number
  semi_major_axis_km?: number
  eccentricity?: number
  periapsis_km?: number
  apoapsis_km?: number
  inclination_deg?: number
  period_min?: number
  lifespan_years?: number
  epoch?: string
  mean_motion?: number
  raan?: number
  arg_of_pericenter?: number
  mean_anomaly?: number
}

export interface Fairings {
  reused?: boolean
  recovery_attempt?: boolean
  recovered?: boolean
  ship?: string
}

export interface Telemetry {
  flight_club?: string
}

export interface LaunchSite {
  site_id: string
  site_name: string
  site_name_long: string
}

export interface LaunchFailureDetails {
  time: number
  altitude?: number
  reason: string
}

export interface Links {
  mission_patch?: string
  mission_patch_small?: string
  reddit_campaign?: string
  reddit_launch?: string
  reddit_recovery?: string
  reddit_media?: string
  presskit?: string
  article_link?: string
  wikipedia?: string
  video_link?: string
  youtube_id?: string
  flickr_images: string[]
}

export interface Timeline {
  webcast_liftoff?: number
  go_for_prop_loading?: number
  stage1_rp1_loading?: number
  stage1_lox_loading?: number
  stage2_rp1_loading?: number
  stage2_lox_loading?: number
  engine_chill?: number
  prelaunch_checks?: number
  propellant_pressurization?: number
  go_for_launch?: number
  ignition?: number
  liftoff?: number
  maxq?: number
  beco?: number
  side_core_sep?: number
  side_core_boostback?: number
  meco?: number
  center_stage_sep?: number
  second_stage_ignition?: number
  fairing_deploy?: number
  side_core_entry_burn?: number
  "seco-1"?: number
  side_core_landing?: number
  center_core_entry_burn?: number
  center_core_landing?: number
  payload_deploy?: number
  second_stage_restart?: number
  "seco-2"?: number
  "seco-3"?: number
  "seco-4"?: number
  rp1_loading?: number
  stage_sep?: number
  first_stage_boostback_burn?: number
  first_stage_entry_burn?: number
  first_stage_landing?: number
  dragon_separation?: number
  dragon_solar_deploy?: number
  dragon_bay_door_deploy?: number
  first_stage_landing_burn?: number
  payload_deploy_1?: number
  payload_deploy_2?: number
  center_core_boostback?: number
  webcast_launch?: number
}
