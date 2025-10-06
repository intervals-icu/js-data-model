// Generated from Intervals.icu source, do not edit
// (c) 2025 Intervals.icu Ltd

/**
 * A completed activity (Ride, Run etc.). Read and write custom fields from JavaScript using activity.[field code].
 * All fields are metric. Times are in seconds. Speeds are in meters / sec. Temperatures are in degrees C.
 */
export interface Activity {
    id?: string
    start_date_local?: string
    type?: string
    icu_ignore_time?: boolean
    icu_pm_cp?: number
    icu_pm_w_prime?: number
    icu_pm_p_max?: number
    icu_pm_ftp?: number
    icu_pm_ftp_secs?: number
    icu_pm_ftp_watts?: number
    icu_ignore_power?: boolean
    icu_rolling_cp?: number
    icu_rolling_w_prime?: number
    icu_rolling_p_max?: number
    icu_rolling_ftp?: number
    icu_rolling_ftp_delta?: number
    icu_training_load?: number
    icu_atl?: number
    icu_ctl?: number
    ss_p_max?: number
    ss_w_prime?: number
    ss_cp?: number
    paired_event_id?: number
    icu_ftp?: number
    icu_joules?: number
    icu_recording_time?: number
    elapsed_time?: number
    /** Normalized watts */
    icu_weighted_avg_watts?: number
    carbs_used?: number
    /** Total joules of work / icu_recording_time */
    icu_average_watts?: number
    icu_variability_index?: number
    strain_score?: number
    name?: string
    description?: string
    /** ISO-8601 UTC timezone e.g. 2022-12-28T05:56:38Z */
    start_date?: string
    distance?: number
    /** Use this one for distance. */
    icu_distance?: number
    moving_time?: number
    /** Time spend moving at 1km/h or more while producing 10w or less of power */
    coasting_time?: number
    total_elevation_gain?: number
    total_elevation_loss?: number
    /** Java timezone IDs e.g. Africa/Johannesburg */
    timezone?: string
    trainer?: boolean
    sub_type?: ActivitySubType
    max_speed?: number
    average_speed?: number
    device_watts?: boolean
    has_heartrate?: boolean
    max_heartrate?: number
    average_heartrate?: number
    average_cadence?: number
    calories?: number
    average_temp?: number
    min_temp?: number
    max_temp?: number
    avg_lr_balance?: number
    /** Gradient adjusted pace */
    gap?: number
    gap_model?: GapModel
    use_elevation_correction?: boolean
    gear?: StravaGear
    laps?: ActivityLap[]
    perceived_exertion?: number
    device_name?: string
    power_meter?: string
    power_meter_serial?: string
    power_meter_battery?: string
    /** In millimeters */
    crank_length?: number
    /** ID of the activity on the service it came from */
    external_id?: string
    /** For multisport files the index of this activity (0=first, 1=second etc.) */
    file_sport_index?: number
    /** Type of file: fit, tcx, gpx */
    file_type?: string
    icu_athlete_id?: string
    created?: string
    icu_sync_date?: string
    analyzed?: string
    icu_w_prime?: number
    p_max?: number
    threshold_pace?: number
    /** Max HR for each zone so last entry is athlete's max HR */
    icu_hr_zones?: number[]
    /** Percentage of threshold pace for the top of each zone */
    pace_zones?: number[]
    lthr?: number
    icu_resting_hr?: number
    icu_weight?: number
    /** Max watts for each zone as % of FTP with first entry Z1 */
    icu_power_zones?: number[]
    /** Sweet spot start as % of FTP (inclusive) */
    icu_sweet_spot_min?: number
    /** Sweet spot end as % of FTP (inclusive) */
    icu_sweet_spot_max?: number
    icu_power_spike_threshold?: number
    trimp?: number
    icu_warmup_time?: number
    icu_cooldown_time?: number
    icu_chat_id?: number
    icu_ignore_hr?: boolean
    ignore_velocity?: boolean
    ignore_pace?: boolean
    ignore_parts?: ActivityIgnore[]
    icu_training_load_data?: number
    icu_intervals?: Interval[]
    icu_groups?: IntervalGroup[]
    interval_summary?: string[]
    /** These are the stored streams. Others e.g. fixed_watts are computed on the fly */
    stream_types?: string[]
    has_weather?: boolean
    has_segments?: boolean
    /** The names of fields from FIT file that could provide power data */
    power_field_names?: string[]
    /** The name of the field providing power data for this activity */
    power_field?: string
    /** Seconds in each power zone */
    icu_zone_times?: ZoneTime[]
    /** Seconds in each heart rate zone */
    icu_hr_zone_times?: number[]
    /** Seconds in each pace zone */
    pace_zone_times?: number[]
    /** Seconds in each pace zone using gradient adjusted pace */
    gap_zone_times?: number[]
    use_gap_zone_times?: boolean
    custom_zones?: ActivityZoneSet[]
    tiz_order?: ZoneOrder
    polarization_index?: number
    icu_achievements?: IcuAchievement[]
    icu_intervals_edited?: boolean
    lock_intervals?: boolean
    icu_lap_count?: number
    icu_joules_above_ftp?: number
    icu_max_wbal_depletion?: number
    /** Total time for the activity with recording gaps longer than 30s removed */
    icu_hrr?: HRRecovery
    icu_sync_error?: string
    icu_color?: string
    icu_power_hr_z2?: number
    icu_power_hr_z2_mins?: number
    icu_cadence_z2?: number
    icu_rpe?: number
    feel?: number
    kg_lifted?: number
    decoupling?: number
    /** Median seconds between data ticks */
    icu_median_time_delta?: number
    p30s_exponent?: number
    /** How much to adjust the start of the workout relative to the activity */
    workout_shift_secs?: number
    /** For activities not from strava that replaced strava activities */
    strava_id?: string
    /** Number of lengths for pool swims */
    lengths?: number
    pool_length?: number
    compliance?: number
    coach_tick?: number
    source?: ActivitySource
    oauth_client_id?: number
    oauth_client_name?: string
    average_altitude?: number
    min_altitude?: number
    max_altitude?: number
    /** Training load computed from power data (TSS) */
    power_load?: number
    /** Training load computed from heart rate data */
    hr_load?: number
    /** Training load computed from pace data */
    pace_load?: number
    hr_load_type?: HRLoadModelType
    pace_load_type?: PaceTssCalcType
    tags?: string[]
    attachments?: Attachment[]
    /** When the user stopped the device in seconds since the start time */
    recording_stops?: number[]
    average_weather_temp?: number
    min_weather_temp?: number
    max_weather_temp?: number
    average_feels_like?: number
    min_feels_like?: number
    max_feels_like?: number
    average_wind_speed?: number
    average_wind_gust?: number
    prevailing_wind_deg?: number
    headwind_percent?: number
    tailwind_percent?: number
    average_clouds?: number
    max_rain?: number
    max_snow?: number
    carbs_ingested?: number
    route_id?: number
    /** Use icu_intensity instead */
    intensity?: number
    deleted?: boolean
    icu_training_load_edited?: boolean
    /** Activity has been newly created or its file is being re-processed. This allows activity field scripts to
     * transform fields read from FIT files once and not every time the activity is analyzed. */
    isNew?: boolean
    commute?: boolean
    race?: boolean
    icu_efficiency_factor?: number
    icu_power_hr?: number
    icu_intensity?: number
    /** In m/s. Uses moving time if available otherwise elapsed time. */
    pace?: number
    session_rpe?: number
    athlete_max_hr?: number
    /** Stride length in meters. */
    average_stride?: number
    [key: string]: boolean | number | number[] | string | string[] | null | Attachment[] | StravaGear | HRRecovery | ActivityLap[] | Interval[] | ActivityZoneSet[]
}

export type ActivitySubType =  "NONE" | "COMMUTE" | "WARMUP" | "COOLDOWN" | "RACE";

export type GapModel =  "NONE" | "STRAVA_RUN";

/**
 * Bike or shoes.
 */
export interface StravaGear {
    id?: string
}

/**
 * Lap information from the original file. When an activity is analyzed with use laps set then the start and
 * end of each interval is taken from the laps.
 */
export interface ActivityLap {
    start_index?: number
    end_index?: number
    name?: string
    intensity?: ActivityIntensity
}

export type ActivityIntensity =  "ACTIVE" | "REST" | "WARMUP" | "COOLDOWN" | "RECOVERY" | "INTERVAL" | "OTHER";

/**
 * A part of the activity excluded from the analysis.
 */
export interface ActivityIgnore {
    start_index?: number
    end_index?: number
    power?: boolean
    pace?: boolean
    hr?: boolean
}

/**
 * Stats for a portion of an activity. Intervals do not overlap.
 */
export interface Interval {
    /** First data point for this interval in the activity streams. Use this to index over stream data for an interval.
     * Example: for (let i = interval.start_index; i < interval.end_index; i++) joules += watts[i] */
    start_index?: number
    distance?: number
    moving_time?: number
    elapsed_time?: number
    average_watts?: number
    average_watts_alt?: number
    average_watts_alt_acc?: number
    min_watts?: number
    max_watts?: number
    average_watts_kg?: number
    max_watts_kg?: number
    intensity?: number
    w5s_variability?: number
    weighted_average_watts?: number
    training_load?: number
    joules?: number
    joules_above_ftp?: number
    decoupling?: number
    avg_lr_balance?: number
    average_dfa_a1?: number
    average_epoc?: number
    wbal_start?: number
    wbal_end?: number
    average_respiration?: number
    average_tidal_volume?: number
    average_tidal_volume_min?: number
    zone?: number
    zone_min_watts?: number
    zone_max_watts?: number
    average_speed?: number
    min_speed?: number
    max_speed?: number
    gap?: number
    average_heartrate?: number
    min_heartrate?: number
    max_heartrate?: number
    average_cadence?: number
    min_cadence?: number
    max_cadence?: number
    average_torque?: number
    min_torque?: number
    max_torque?: number
    total_elevation_gain?: number
    min_altitude?: number
    max_altitude?: number
    average_gradient?: number
    average_smo2?: number
    average_thb?: number
    average_smo2_2?: number
    average_thb_2?: number
    average_temp?: number
    average_weather_temp?: number
    average_feels_like?: number
    average_wind_speed?: number
    average_wind_gust?: number
    prevailing_wind_deg?: number
    average_yaw?: number
    headwind_percent?: number
    tailwind_percent?: number
    strain_score?: number
    ss_p_max?: number
    ss_w_prime?: number
    ss_cp?: number
    average_stride?: number
    id?: number
    type?: IntervalType
    /** Last data point for this interval in the activity streams (exclusive). Use this to index over stream data for an interval. */
    end_index?: number
    group_id?: string
    segment_effort_ids?: number[]
    /** Start time in seconds relative to the start of the activity. Do not use this to loop over activity stream data, use
     * start_index and end_index instead. */
    start_time?: number
    end_time?: number
    label?: string
    [key: string]: boolean | number | number[] | string | null
}

/**
 * Intervals can be work or recovery. How this is assigned depends on the algorithm.
 */
export type IntervalType =  "RECOVERY" | "WORK";

/**
 * A group of similar intervals averaged stats.
 */
export interface IntervalGroup {
    /** First data point for this interval in the activity streams. Use this to index over stream data for an interval.
     * Example: for (let i = interval.start_index; i < interval.end_index; i++) joules += watts[i] */
    start_index?: number
    distance?: number
    moving_time?: number
    elapsed_time?: number
    average_watts?: number
    average_watts_alt?: number
    average_watts_alt_acc?: number
    min_watts?: number
    max_watts?: number
    average_watts_kg?: number
    max_watts_kg?: number
    intensity?: number
    w5s_variability?: number
    weighted_average_watts?: number
    training_load?: number
    joules?: number
    joules_above_ftp?: number
    decoupling?: number
    avg_lr_balance?: number
    average_dfa_a1?: number
    average_epoc?: number
    wbal_start?: number
    wbal_end?: number
    average_respiration?: number
    average_tidal_volume?: number
    average_tidal_volume_min?: number
    zone?: number
    zone_min_watts?: number
    zone_max_watts?: number
    average_speed?: number
    min_speed?: number
    max_speed?: number
    gap?: number
    average_heartrate?: number
    min_heartrate?: number
    max_heartrate?: number
    average_cadence?: number
    min_cadence?: number
    max_cadence?: number
    average_torque?: number
    min_torque?: number
    max_torque?: number
    total_elevation_gain?: number
    min_altitude?: number
    max_altitude?: number
    average_gradient?: number
    average_smo2?: number
    average_thb?: number
    average_smo2_2?: number
    average_thb_2?: number
    average_temp?: number
    average_weather_temp?: number
    average_feels_like?: number
    average_wind_speed?: number
    average_wind_gust?: number
    prevailing_wind_deg?: number
    average_yaw?: number
    headwind_percent?: number
    tailwind_percent?: number
    strain_score?: number
    ss_p_max?: number
    ss_w_prime?: number
    ss_cp?: number
    average_stride?: number
    id?: string
    count?: number
}

export interface ZoneTime {
    id?: string
    secs?: number
}

/**
 * Time in zones for a set of custom zones.
 */
export interface ActivityZoneSet {
    code?: string
    zones?: ActivityZoneInfo[]
}

export interface ActivityZoneInfo {
    id?: string
    start?: number
    end?: number
    start_value?: number
    end_value?: number
    secs?: number
}

export type ZoneOrder =  "POWER_HR_PACE" | "POWER_PACE_HR" | "HR_POWER_PACE" | "HR_PACE_POWER" | "PACE_POWER_HR" |
    "PACE_HR_POWER";

/**
 * The athlete has done something spectacular on the activity.
 */
export interface IcuAchievement {
    id?: string
    type?: IcuAchievementType
    message?: string
    watts?: number
    secs?: number
    value?: number
    distance?: number
    pace?: number
    point?: DataCurvePt
}

export type IcuAchievementType =  "BEST_POWER" | "FTP_UP" | "LTHR_UP" | "BEST_PACE";

export interface DataCurvePt {
    start_index?: number
    end_index?: number
    secs?: number
    value?: number
}

/**
 * A HR recovery interval.
 */
export interface HRRecovery {
    start_index?: number
    end_index?: number
    start_time?: number
    end_time?: number
    start_bpm?: number
    end_bpm?: number
    average_watts?: number
    hrr?: number
}

export type ActivitySource =  "STRAVA" | "UPLOAD" | "MANUAL" | "GARMIN_CONNECT" | "OAUTH_CLIENT" | "DROPBOX" |
    "POLAR" | "SUUNTO" | "COROS" | "WAHOO" | "ZWIFT" | "ZEPP" | "CONCEPT2";

export type HRLoadModelType =  "AVG_HR" | "HR_ZONES" | "HRSS";

export type PaceTssCalcType =  "SWIM" | "RUN";

export interface Attachment {
    id?: string
    filename?: string
    mimetype?: string
}

/**
 * This is the 'icu' object provided to scripts for custom activity charts and custom activity fields.
 */
export interface ActivityJsData {
    /** The activity being analysed */
    activity: Activity
    athlete: Athlete
    /** For the sport of the activity */
    sportSettings: SportSettings
    /** Power, HR and other traces */
    streams: ActivityStreamSet
    /** Weight, resting HR etc. on the day of the activity */
    wellness: Wellness
    /** Planned workout or race paired with the activity */
    pairedEvent: Event
    /** Messages from the fit file (only for activity fields and streams with 'Processes fit file messages' set) */
    fit?: JsFit
    /** Misc methods for looking up names for fit file values etc. */
    fitSdk: JsFitSDK
    /** Power duration curve */
    powerCurve?: JsPowerCurve
    /** Power curve after sportSettings.after_kj0 kJ of work */
    powerCurveFatigued0?: JsPowerCurve
    /** Power curve after sportSettings.after_kj1 kJ of work */
    powerCurveFatigued1?: JsPowerCurve
    paceCurve?: JsPaceCurve
    /** Gradient adjusted pace curve */
    gapCurve?: JsPaceCurve
    /** Heart rate duration curve */
    hrCurve?: JsPaceCurve
    /** Athlete best power (MMP) to date including this activity */
    bestPower: JsDataCurveFactory
    /** Athlete best pace to date including this activity */
    bestPace: JsDataCurveFactory
    /** Athlete best GAP to date including this activity */
    bestGAP: JsDataCurveFactory
    /** Athlete best HR to date including this activity */
    bestHR: JsDataCurveFactory
    /** Athlete best power (MMP) to date before this activity */
    bestPowerBefore: JsDataCurveFactory
    /** Athlete best pace to date before this activity */
    bestPaceBefore: JsDataCurveFactory
    /** Athlete best GAP to date before this activity */
    bestGAPBefore: JsDataCurveFactory
    /** Athlete best HR to date before this activity */
    bestHRBefore: JsDataCurveFactory
    /** Utility methods to compute moving averages etc. */
    stats: JsStats
}

/**
 * Set of activity streams (data traces) and related objects loaded/created on demand. Acts as a map returning the
 * data for the stream. You can do `icu.streams.fixed_heartrate` or `icu.streams.fixed_watts` to get the data for
 * the heart rate or power stream (or null if none). Types: time, watts, cadence, heartrate, distance, altitude, latlng,
 * velocity_smooth, moving, grade_smooth, temp, torque, fixed_watts, fixed_heartrate, left_right_balance,
 * left_pedal_smoothness, right_pedal_smoothness, left_torque_effectiveness, right_torque_effectiveness,
 * smo2, thb, smo2_2, thb_2, dfa_a1, epoc, hrv, ga_velocity, fixed_altitude, corrupt_time, core_temperature,
 * skin_temperature, stride_length, w_bal, respiration, tidal_volume, tidal_volume_min, watts_alt, watts_alt_acc,
 * bloodglucose, artifacts, heat_strain_index, weather_temp, feels_like, wind_speed, wind_gust, wind_deg, bearing,
 * apparent_wind_deg, yaw, secondary_power.
 *
 * For latlng you need to do `let latlng = icu.streams.get('latlng'); let lat = latlng.data; let lng = latlng.data2`.
 */
export interface ActivityStreamSet {
    /** Returns null if stream does not exist. */
    get(type: string): ActivityStream | null
    time?: number[] | null
    watts?: number[] | null
    cadence?: number[] | null
    heartrate?: number[] | null
    distance?: number[] | null
    altitude?: number[] | null
    velocity_smooth?: number[] | null
    moving?: boolean[] | null
    grade_smooth?: number[] | null
    temp?: number[] | null
    torque?: number[] | null
    fixed_watts?: number[] | null
    interpolated_watts?: number[] | null
    raw_watts?: number[] | null
    fixed_heartrate?: number[] | null
    interpolated_heartrate?: number[] | null
    raw_heartrate?: number[] | null
    left_right_balance?: number[] | null
    left_pedal_smoothness?: number[] | null
    right_pedal_smoothness?: number[] | null
    left_torque_effectiveness?: number[] | null
    right_torque_effectiveness?: number[] | null
    smo2?: number[] | null
    thb?: number[] | null
    smo2_2?: number[] | null
    thb_2?: number[] | null
    dfa_a1?: number[] | null
    epoc?: number[] | null
    hrv?: number[][] | null
    ga_velocity?: number[] | null
    fixed_altitude?: number[] | null
    corrupt_time?: number[] | null
    core_temperature?: number[] | null
    skin_temperature?: number[] | null
    stride_length?: number[] | null
    w_bal?: number[] | null
    mpa?: number[] | null
    strain?: number[] | null
    p_cp?: number[] | null
    p_pmax?: number[] | null
    p_wprime?: number[] | null
    respiration?: number[] | null
    tidal_volume?: number[] | null
    tidal_volume_min?: number[] | null
    watts_alt?: number[] | null
    watts_alt_acc?: number[] | null
    bloodglucose?: number[] | null
    artifacts?: number[] | null
    heat_strain_index?: number[] | null
    weather_temp?: number[] | null
    feels_like?: number[] | null
    wind_speed?: number[] | null
    wind_gust?: number[] | null
    wind_deg?: number[] | null
    bearing?: number[] | null
    apparent_wind_deg?: number[] | null
    yaw?: number[] | null
    secondary_power?: number[] | null
    [key: string]: boolean[] | number[] | number[][] | Function | null
}

/**
 * A value over time trace for an activity.
 */
export interface ActivityStream {
    type?: string
    name?: string
    /** Integer[], Float[], Boolean[], int[] (fixed_watts, interpolated_watts), short[][] (hrv) */
    data?: Object
    /** Float[] only for type latlng holding the longitude data (latitude is in data) */
    data2?: Object
    /** Each entry in data is an array of points. For better than 1 Hz custom streams. */
    valueTypeIsArray?: boolean
    anomalies?: ActivityStreamAnomaly[]
}

/**
 * Part of the stream was dodgy and the data was replaced.
 */
export interface ActivityStreamAnomaly {
    start_index?: number
    end_index?: number
    value?: number
    valueEnd?: number
}

/**
 * A user.
 */
export interface Athlete {
    id?: string
    name?: string
    firstname?: string
    lastname?: string
    profile_medium?: string
    measurement_preference?: string
    weight_pref_lb?: boolean
    fahrenheit?: boolean
    wind_speed?: WindSpeed
    rain?: Rain
    weight?: number
    email?: string
    sex?: string
    city?: string
    state?: string
    country?: string
    timezone?: string
    locale?: string
    icu_resting_hr?: number
    icu_weight?: number
    bio?: string
    website?: string
    icu_date_of_birth?: string
    icu_type_settings?: ActivityTypeSettings[]
    icu_form_as_percent?: boolean
    icu_mmp_days?: number
    wellness_last_prompt_date?: string
    icu_wellness_keys?: string[]
    height?: number
}

/**
 * Keep in sync with WindSpeed.js.
 */
export type WindSpeed =  "MPS" | "KNOTS" | "KMH" | "MPH" | "BFT";

export type Rain =  "MM" | "INCHES";

/**
 * These are used to adjust training load impact on fitness and fatigue from activities that are not cardio
 * (e.g. weight training).
 */
export interface ActivityTypeSettings {
    type?: ActivityType
    ctlFactor?: number
    atlFactor?: number
}

/**
 * Keep in sync with ActivityTypes.js.
 */
export type ActivityType =  "Ride" | "Run" | "Swim" | "WeightTraining" | "Hike" | "Walk" | "AlpineSki" |
    "BackcountrySki" | "Badminton" | "Canoeing" | "Crossfit" | "EBikeRide" | "EMountainBikeRide" | "Elliptical" |
    "Golf" | "GravelRide" | "TrackRide" | "Handcycle" | "HighIntensityIntervalTraining" | "Hockey" | "IceSkate" |
    "InlineSkate" | "Kayaking" | "Kitesurf" | "MountainBikeRide" | "NordicSki" | "OpenWaterSwim" | "Padel" |
    "Pilates" | "Pickleball" | "Racquetball" | "Rugby" | "RockClimbing" | "RollerSki" | "Rowing" | "Sail" |
    "Skateboard" | "Snowboard" | "Snowshoe" | "Soccer" | "Squash" | "StairStepper" | "StandUpPaddling" |
    "Surfing" | "TableTennis" | "Tennis" | "TrailRun" | "Transition" | "Velomobile" | "VirtualRide" |
    "VirtualRow" | "VirtualRun" | "VirtualSki" | "WaterSport" | "Wheelchair" | "Windsurf" | "Workout" | "Yoga" |
    "Other";

/**
 * Information about a route for a specific athlete.
 */
export interface AthleteRoute {
    athlete_id?: string
    route_id?: number
    name?: string
    rename_activities?: boolean
    commute?: boolean
    tags?: string[]
    description?: string
    replaced_by_route_id?: number
    latlngs?: number[][]
}

/**
 * A custom chart, field etc.
 */
export interface CustomItem {
    id?: number
    athlete_id?: string
    type?: CustomItemType
    visibility?: CustomItemVisibility
    name?: string
    description?: string
    image?: string
    content?: any
    usage_count?: number
    index?: number
    hide_script?: boolean
    hidden_by_id?: string
}

export type CustomItemType =  "FITNESS_CHART" | "TRACE_CHART" | "INPUT_FIELD" | "ACTIVITY_FIELD" |
    "INTERVAL_FIELD" | "ACTIVITY_STREAM" | "ACTIVITY_CHART" | "ACTIVITY_HISTOGRAM" | "ACTIVITY_HEATMAP" |
    "ACTIVITY_MAP" | "ACTIVITY_PANEL" | "ZONES";

export type CustomItemVisibility =  "PRIVATE" | "FOLLOWERS" | "PUBLIC";

/**
 * An event on a {@link IcuCalendar}.
 */
export interface Event {
    id?: number
    start_date_local?: string
    icu_training_load?: number
    icu_atl?: number
    icu_ctl?: number
    type?: string
    carbs_used?: number
    ss_p_max?: number
    ss_w_prime?: number
    ss_cp?: number
    calendar_id?: number
    uid?: string
    athlete_id?: string
    category?: EventCategory
    end_date_local?: string
    name?: string
    description?: string
    indoor?: boolean
    color?: string
    moving_time?: number
    icu_ftp?: number
    w_prime?: number
    p_max?: number
    atl_days?: number
    ctl_days?: number
    updated?: string
    not_on_fitness_chart?: boolean
    show_as_note?: boolean
    show_on_ctl_line?: boolean
    for_week?: boolean
    target?: WorkoutTarget
    joules?: number
    joules_above_ftp?: number
    workout_doc?: any
    push_errors?: EventPushError[]
    athlete_cannot_edit?: boolean
    hide_from_athlete?: boolean
    structure_read_only?: boolean
    created_by_id?: string
    shared_event_id?: number
    entered?: boolean
    carbs_per_hour?: number
    sub_type?: ActivitySubType
    tags?: string[]
    attachments?: Attachment[]
    oauth_client_id?: number
    external_id?: string
    load_target?: number
    time_target?: number
    distance_target?: number
    plan_athlete_id?: string
    plan_folder_id?: number
    plan_workout_id?: number
    plan_applied?: string
    distance?: number
    [key: string]: boolean | number | number[] | string | string[] | null | Attachment[]
}

export type EventCategory =  "WORKOUT" | "RACE_A" | "RACE_B" | "RACE_C" | "NOTE" | "PLAN" | "HOLIDAY" | "SICK" |
    "INJURED" | "SET_EFTP" | "FITNESS_DAYS" | "SEASON_START" | "TARGET" | "SET_FITNESS";

/**
 * How should workouts be performed? Target power, HR or pace?
 */
export type WorkoutTarget =  "AUTO" | "POWER" | "HR" | "PACE";

export interface EventPushError {
}

/**
 * Factory and cache for power, hr, GAP or pace curves for an athlete with a given start date.
 * - Use 42d, 84d etc. to get curve for given number of days
 * - Use s0, s1 etc. for this season, last season and so on
 * - Add -kj0 or -kj1 (e.g. 42d-kj0) to get fatigued curves (power only)
 *
 * Example usage in a custom activity chart script:
 * ```
 * let mmp42d = icu.bestPower['42d']
 * let best5mWatts = mmp42d.getWatts(5 * 60)
 * ```
 */
export interface JsDataCurveFactory {
    [key: string]: JsPowerCurve | JsHRCurve | JsPaceCurve | null
}

/**
 * Access to the messages read from the fit file. Acts as an array (all the messages in order) and as a map
 * where the keys are message names. Example: icu.fit.device_info returns an array of all the device_info messages.
 * For more info on the fit file format please visit [FIT SDK site](https://developer.garmin.com/fit/overview/).
 * You can also get all messages by number using m_[mesg num] as the name.
 */
export interface JsFit {
    [key: string]: JsFitMesg[] | null
}

/**
 * A field from a mesg in a fit file.
 */
export interface JsFitField {
    name?: string
    units?: string
    num?: number
    numValues?: number
    /** String, number or array. */
    value?: Object
    /** If the field is an enum then return name of the value if possible. Otherwise return it as a string or null
     * if the value is null. Note that this does not work for some fields in which case 'enumValueName' in
     * [JsFitSDK](#JsFitSDK) can be used. */
    valueName?: string
    isAccumulated?: boolean
}

/**
 * A mesg from a fit file. Acts as an array of all the fields and developer fields in order and as a map (keys
 * are field names). Example: di.manufacturer?.value returns the value of the manufacturer field or null if not
 * present. Fields can also be looked up by number using f_ prefix e.g. m.f_136. Has a few other attributes:
 */
export interface JsFitMesg {
    [key: string]: JsFitField | null | number | string
    /** The fit number of this message */
    _num : number
    /** The name of this message */
    _name : string
    /** The number of non-developer fields (they are first) */
    _numFields: number
}

/**
 * Provides access to misc things from the FIT SDK.
 */
export interface JsFitSDK {
    /** Returns the string name associated with a given enum value. If there is no such label, returns the string
     * representation of the numerical value instead. Note that 'valueName' in [JsFitField](#JsFitField) often
     * works and is easier to use. The profileType values are:
     *         ENUM,
     *         SINT8,
     *         UINT8,
     *         SINT16,
     *         UINT16,
     *         SINT32,
     *         UINT32,
     *         STRING,
     *         FLOAT32,
     *         FLOAT64,
     *         UINT8Z,
     *         UINT16Z,
     *         UINT32Z,
     *         BYTE,
     *         SINT64,
     *         UINT64,
     *         UINT64Z,
     *         BOOL,
     *         FILE,
     *         MESG_NUM,
     *         CHECKSUM,
     *         FILE_FLAGS,
     *         MESG_COUNT,
     *         DATE_TIME,
     *         LOCAL_DATE_TIME,
     *         MESSAGE_INDEX,
     *         DEVICE_INDEX,
     *         GENDER,
     *         LANGUAGE,
     *         LANGUAGE_BITS_0,
     *         LANGUAGE_BITS_1,
     *         LANGUAGE_BITS_2,
     *         LANGUAGE_BITS_3,
     *         LANGUAGE_BITS_4,
     *         TIME_ZONE,
     *         DISPLAY_MEASURE,
     *         DISPLAY_HEART,
     *         DISPLAY_POWER,
     *         DISPLAY_POSITION,
     *         SWITCH,
     *         SPORT,
     *         SPORT_BITS_0,
     *         SPORT_BITS_1,
     *         SPORT_BITS_2,
     *         SPORT_BITS_3,
     *         SPORT_BITS_4,
     *         SPORT_BITS_5,
     *         SPORT_BITS_6,
     *         SUB_SPORT,
     *         SPORT_EVENT,
     *         ACTIVITY,
     *         INTENSITY,
     *         SESSION_TRIGGER,
     *         AUTOLAP_TRIGGER,
     *         LAP_TRIGGER,
     *         TIME_MODE,
     *         BACKLIGHT_MODE,
     *         DATE_MODE,
     *         BACKLIGHT_TIMEOUT,
     *         EVENT,
     *         EVENT_TYPE,
     *         TIMER_TRIGGER,
     *         FITNESS_EQUIPMENT_STATE,
     *         TONE,
     *         AUTOSCROLL,
     *         ACTIVITY_CLASS,
     *         HR_ZONE_CALC,
     *         PWR_ZONE_CALC,
     *         WKT_STEP_DURATION,
     *         WKT_STEP_TARGET,
     *         GOAL,
     *         GOAL_RECURRENCE,
     *         GOAL_SOURCE,
     *         SCHEDULE,
     *         COURSE_POINT,
     *         MANUFACTURER,
     *         GARMIN_PRODUCT,
     *         ANTPLUS_DEVICE_TYPE,
     *         ANT_NETWORK,
     *         WORKOUT_CAPABILITIES,
     *         BATTERY_STATUS,
     *         HR_TYPE,
     *         COURSE_CAPABILITIES,
     *         WEIGHT,
     *         WORKOUT_HR,
     *         WORKOUT_POWER,
     *         BP_STATUS,
     *         USER_LOCAL_ID,
     *         SWIM_STROKE,
     *         ACTIVITY_TYPE,
     *         ACTIVITY_SUBTYPE,
     *         ACTIVITY_LEVEL,
     *         SIDE,
     *         LEFT_RIGHT_BALANCE,
     *         LEFT_RIGHT_BALANCE_100,
     *         LENGTH_TYPE,
     *         DAY_OF_WEEK,
     *         CONNECTIVITY_CAPABILITIES,
     *         WEATHER_REPORT,
     *         WEATHER_STATUS,
     *         WEATHER_SEVERITY,
     *         WEATHER_SEVERE_TYPE,
     *         TIME_INTO_DAY,
     *         LOCALTIME_INTO_DAY,
     *         STROKE_TYPE,
     *         BODY_LOCATION,
     *         SEGMENT_LAP_STATUS,
     *         SEGMENT_LEADERBOARD_TYPE,
     *         SEGMENT_DELETE_STATUS,
     *         SEGMENT_SELECTION_TYPE,
     *         SOURCE_TYPE,
     *         LOCAL_DEVICE_TYPE,
     *         BLE_DEVICE_TYPE,
     *         ANT_CHANNEL_ID,
     *         DISPLAY_ORIENTATION,
     *         WORKOUT_EQUIPMENT,
     *         WATCHFACE_MODE,
     *         DIGITAL_WATCHFACE_LAYOUT,
     *         ANALOG_WATCHFACE_LAYOUT,
     *         RIDER_POSITION_TYPE,
     *         POWER_PHASE_TYPE,
     *         CAMERA_EVENT_TYPE,
     *         SENSOR_TYPE,
     *         BIKE_LIGHT_NETWORK_CONFIG_TYPE,
     *         COMM_TIMEOUT_TYPE,
     *         CAMERA_ORIENTATION_TYPE,
     *         ATTITUDE_STAGE,
     *         ATTITUDE_VALIDITY,
     *         AUTO_SYNC_FREQUENCY,
     *         EXD_LAYOUT,
     *         EXD_DISPLAY_TYPE,
     *         EXD_DATA_UNITS,
     *         EXD_QUALIFIERS,
     *         EXD_DESCRIPTORS,
     *         AUTO_ACTIVITY_DETECT,
     *         SUPPORTED_EXD_SCREEN_LAYOUTS,
     *         FIT_BASE_TYPE,
     *         TURN_TYPE,
     *         BIKE_LIGHT_BEAM_ANGLE_MODE,
     *         FIT_BASE_UNIT,
     *         SET_TYPE,
     *         MAX_MET_CATEGORY,
     *         EXERCISE_CATEGORY,
     *         BENCH_PRESS_EXERCISE_NAME,
     *         CALF_RAISE_EXERCISE_NAME,
     *         CARDIO_EXERCISE_NAME,
     *         CARRY_EXERCISE_NAME,
     *         CHOP_EXERCISE_NAME,
     *         CORE_EXERCISE_NAME,
     *         CRUNCH_EXERCISE_NAME,
     *         CURL_EXERCISE_NAME,
     *         DEADLIFT_EXERCISE_NAME,
     *         FLYE_EXERCISE_NAME,
     *         HIP_RAISE_EXERCISE_NAME,
     *         HIP_STABILITY_EXERCISE_NAME,
     *         HIP_SWING_EXERCISE_NAME,
     *         HYPEREXTENSION_EXERCISE_NAME,
     *         LATERAL_RAISE_EXERCISE_NAME,
     *         LEG_CURL_EXERCISE_NAME,
     *         LEG_RAISE_EXERCISE_NAME,
     *         LUNGE_EXERCISE_NAME,
     *         OLYMPIC_LIFT_EXERCISE_NAME,
     *         PLANK_EXERCISE_NAME,
     *         PLYO_EXERCISE_NAME,
     *         PULL_UP_EXERCISE_NAME,
     *         PUSH_UP_EXERCISE_NAME,
     *         ROW_EXERCISE_NAME,
     *         SHOULDER_PRESS_EXERCISE_NAME,
     *         SHOULDER_STABILITY_EXERCISE_NAME,
     *         SHRUG_EXERCISE_NAME,
     *         SIT_UP_EXERCISE_NAME,
     *         SQUAT_EXERCISE_NAME,
     *         TOTAL_BODY_EXERCISE_NAME,
     *         TRICEPS_EXTENSION_EXERCISE_NAME,
     *         WARM_UP_EXERCISE_NAME,
     *         RUN_EXERCISE_NAME,
     *         WATER_TYPE,
     *         TISSUE_MODEL_TYPE,
     *         DIVE_GAS_STATUS,
     *         DIVE_ALERT,
     *         DIVE_ALARM_TYPE,
     *         DIVE_BACKLIGHT_MODE,
     *         SLEEP_LEVEL,
     *         SPO2_MEASUREMENT_TYPE,
     *         CCR_SETPOINT_SWITCH_MODE,
     *         DIVE_GAS_MODE,
     *         FAVERO_PRODUCT,
     *         SPLIT_TYPE,
     *         CLIMB_PRO_EVENT,
     *         GAS_CONSUMPTION_RATE_TYPE,
     *         TAP_SENSITIVITY,
     *         RADAR_THREAT_LEVEL_TYPE,
     *         MAX_MET_SPEED_SOURCE,
     *         MAX_MET_HEART_RATE_SOURCE,
     *         HRV_STATUS,
     *         NO_FLY_TIME_MODE */
    enumValueName(profileType: string, v: Number): string | null
}

/**
 * A heart rate duration curve.
 */
export interface JsHRCurve {
    /** Time points. Note that not all seconds are included. The curve gets sparse as time goes out. */
    secs?: number[]
    /** HR for corresponding entry in secs. */
    bpm?: number[]
    /** Where corresponding point starts in the activity */
    start_index?: number[]
    /** Where corresponding point ends in the activity (exclusive) */
    end_index?: number[]
    /** What is the index of the point on the curve that has a duration of at least seconds? Returns -1 if the curve
     * is not that long. */
    indexOf(seconds: number): number
    getBpm(seconds: number): number | null
}

/**
 * A pace duration curve.
 */
export interface JsPaceCurve {
    /** Is this gradient adjusted pace? */
    isGap?: boolean
    /** Distance points. Note that not all distances are included. The curve gets sparse as time goes out. */
    distance?: number[]
    /** Time to cover the matching distance. */
    secs?: number[]
    /** Where corresponding point starts in the activity */
    start_index?: number[]
    /** Where corresponding point ends in the activity (exclusive) */
    end_index?: number[]
    /** What is the index of the point on the curve that has a distance of at least distance? Returns -1 if the curve
     * is not that long. */
    indexOf(distance: number): number
    /** Returns speed in meters/second or null if curve not that long. Note that the distance might be more than the
     * distance parameter. */
    getSpeed(distance: number): number | null
}

/**
 * A power duration curve.
 */
export interface JsPowerCurve {
    /** Time points. Note that not all seconds are included. The curve gets sparse as time goes out. */
    secs?: number[]
    /** Power for corresponding entry in secs. */
    watts?: number[]
    /** Power/weight for corresponding entry in secs. */
    watts_per_kg?: number[]
    /** Where corresponding point starts in the activity */
    start_index?: number[]
    /** Where corresponding point ends in the activity (exclusive) */
    end_index?: number[]
    /** If the curve is fatigued then this is the amount of work done before the curve. */
    after_kj?: number
    /** Sub-maximal power curves, each entry in the array is a curve (null for single activity curve) */
    submax_watts?: number[][]
    /** Sub-maximal w/kg curves, each entry in the array is a curve (null for single activity curve) */
    submax_watts_per_kg?: number[][]
    /** VO2max calculated from 5m watts/kg */
    vo2max_5m?: number
    /** Compound score calculated from 5m watts/kg */
    compound_score_5m?: number
    /** What is the index of the point on the curve that has a duration of at least seconds? Returns -1 if the curve
     * is not that long. */
    indexOf(seconds: number): number
    getWatts(seconds: number): number | null
    getWattsPerKg(seconds: number): number | null
}

export interface JsStats {
    /** Calculate a moving average for the series that is points wide. Nulls are treated as zero. */
    calcMovingAvg(series: number[], points: number): number[]
    /** Calculate a moving average for the series that is points wide. Nulls are treated as zero. */
    calcCenteredMovingAvg(series: number[], points: number): number[]
    /** Do piecewise/segmented linear regression. Returns a model for each segment that minimizes the total
     * squared error across all models and the breakpoint positions. Note that your script is likely to exceed
     * CPU time limits for 2 or more breakpoints and 500 data points. */
    piecewiseLinearRegression(x: number[], y: number[], numBreakpoints: number): PiecewiseLinearRegressionResult | null
}

export interface PiecewiseLinearRegressionResult {
    breakpoints?: number[]
    segments?: PiecewiseLinearRegressionModel[]
    iterations?: number
}

/**
 * Data for a custom activity stream. There is one entry for each record message used from the fit file. The time
 * of each entry is the timestamp of the corresponding record less the startTimestamp of first record used i.e.
 * seconds since the start of the activity. Acts as an array but setAt(timestamp, value) is likely the easiest
 * way to fill it with data.
 */
export interface JsStreamData {
    /** Start of the activity stream in seconds since UTC 00:00 Dec 31 1989 */
    startTimestamp?: number
    /** Duration of the activity in seconds */
    duration?: number
    /** The seconds trace (first entry is 0) since the start of the activity */
    time?: number[]
    /** Set the value at the closest position on or after timestamp. If timestamp is before the start of the stream or
     * after the end then nothing is done. The timestamp parameter is seconds since UTC 00:00 Dec 31 1989 which is
     * the standard way timestamps are stored in fit files. */
    setAt(timestamp: number, value: Object): void
    [index: number]: number | number[] | null
}

export interface PiecewiseLinearRegressionModel {
    startIndex?: number
    endIndex?: number
    slope?: number
    intercept?: number
    r2?: number
    sumSquaredErrors?: number
}

/**
 * FTP, training zones etc. for some sports.
 */
export interface SportSettings {
    id?: number
    athlete_id?: string
    types?: ActivityType[]
    warmup_time?: number
    cooldown_time?: number
    ftp?: number
    indoor_ftp?: number
    w_prime?: number
    p_max?: number
    power_zones?: number[]
    sweet_spot_min?: number
    sweet_spot_max?: number
    power_spike_threshold?: number
    power_zone_names?: string[]
    ftp_est_min_secs?: number
    use_laps_for_power_intervals?: boolean
    keep_all_laps_for_power_intervals?: boolean
    after_kj0?: number
    after_kj1?: number
    power_field?: string
    lthr?: number
    max_hr?: number
    hr_zones?: number[]
    hr_zone_names?: string[]
    hr_load_type?: HRLoadModelType
    hrrc_min_percent?: number
    threshold_pace?: number
    pace_units?: PaceUnits
    pace_zones?: number[]
    pace_zone_names?: string[]
    pace_load_type?: PaceTssCalcType
    gap_model?: GapModel
    elevation_correction?: ElevationCorrection
    use_gap_zone_times?: boolean
    best_effort_distances?: number[]
    pace_curve_start?: number
    /** Priority for calculating training load */
    load_order?: ZoneOrder
    /** Priority for calculating time in zones */
    tiz_order?: ZoneOrder
    /** Priority for executing workouts */
    workout_order?: ZoneOrder
    /** Priority for displaying intervals */
    interval_display?: ZoneOrder
    default_gear_id?: string
    default_indoor_gear_id?: string
    /** Extract workouts from activity files if possible */
    extract_workouts?: boolean
    show_pauses?: number
    ignore_velocity?: boolean
    default_workout_time?: string
    /** Custom activity fields captured for this sport and copied onto activities */
    custom_field_ids?: number[]
    /** Captured custom activity field values by code */
    custom_field_values?: any
    /** Custom zones enabled for this sport */
    custom_zones_ids?: number[]
}

/**
 * Units for threshold pace.
 */
export type PaceUnits =  "SECS_100M" | "SECS_100Y" | "MINS_KM" | "MINS_MILE" | "SECS_500M";

export type ElevationCorrection =  "NO" | "AUTO" | "YES";

/**
 * Daily values for an athlete.  Read and write custom fields from JavaScript using wellness.[field code].
 */
export interface Wellness {
    id?: string
    ctl?: number
    atl?: number
    rampRate?: number
    ctlLoad?: number
    atlLoad?: number
    sportInfo?: WellnessFitnessSportInfo[]
    weight?: number
    restingHR?: number
    /** rMSSD */
    hrv?: number
    hrvSDNN?: number
    menstrualPhase?: MenstrualPhase
    menstrualPhasePredicted?: MenstrualPhase
    kcalConsumed?: number
    sleepSecs?: number
    sleepScore?: number
    /** Poor(4), Avg(3), Good(2), Excellent(1) */
    sleepQuality?: number
    avgSleepingHR?: number
    /** None(0), Low(1), Avg(2), High(3), Extreme(4) */
    soreness?: number
    /** None(0), Low(1), Avg(2), High(3), Extreme(4) */
    fatigue?: number
    /** None(0), Low(1), Avg(2), High(3), Extreme(4) */
    stress?: number
    /** Poor(4), Avg(3), Good(2), Excellent(1) */
    mood?: number
    /** Poor(4), Avg(3), Good(2), Excellent(1) */
    motivation?: number
    /** Injured(4), Poor(3), Niggle(2), Excellent(1) */
    injury?: number
    /** 0-100% */
    spO2?: number
    /** blood pressure mmHg */
    systolic?: number
    diastolic?: number
    /** Well Hydrated (1), Hydrated(2), Dehydrated(3), Very Dehydrated(4) */
    hydration?: number
    /** litres consumed */
    hydrationVolume?: number
    readiness?: number
    baevskySI?: number
    /** mmol/L */
    bloodGlucose?: number
    /** mmol/L */
    lactate?: number
    /** % */
    bodyFat?: number
    /** cm */
    abdomen?: number
    /** ml/kg/min */
    vo2max?: number
    comments?: string
    /** rMSSD */
    steps?: number
    respiration?: number
    /** Updates via API and integrations ignored */
    locked?: boolean
    /** Indicates value was updated from athlete settings and is not authoritative */
    tempWeight?: boolean
    tempRestingHR?: boolean
    [key: string]: string | number | boolean | null | WellnessFitnessSportInfo[]
}

export interface WellnessFitnessSportInfo {
    type?: ActivityType
    eftp?: number
    wPrime?: number
    pMax?: number
}

export type MenstrualPhase =  "PERIOD" | "FOLLICULAR" | "OVULATING" | "LUTEAL" | "NONE";

