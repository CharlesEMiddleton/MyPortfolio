export class WeatherClass{
    current
    location

    constructor(weatherData={}) {
        this.current = weatherData.current ? new Current(weatherData.current) : new Current()
        this.location = weatherData.location ? new Location(weatherData.location): new Location()
    }
}

class Current {
    cloud
    condition
    dewpoint_c
    dewpoint_f
    feelslike_c
    feelslike_f
    gust_kph
    gust_mph
    heatindex_c
    heatindex_f
    humidity
    is_day
    last_updated
    last_updated_epoch
    precip_in
    precip_mm
    pressure_in
    pressure_mb
    temp_c
    temp_f
    uv 
    vis_km
    vis_miles
    wind_degree
    wind_dir
    wind_kph
    wind_mph
    windchill_c
    windchill_f
    constructor(currentData={}) {
        this.cloud = currentData.cloud ? Number(currentData.cloud) : 0
        this.condition = currentData.condition? new Condition(currentData.condition): new Condition()
        this.dewpoint_c = currentData.dewpoint_c ? Number(currentData.dewpoint_c) : 0
        this.dewpoint_f = currentData.dewpoint_f ? Number(currentData.dewpoint_f) : 0
        this.feelslike_c = currentData.feelslike_c ? Number(currentData.feelslike_c):0
        this.feelslike_f = currentData.feelslike_f ? Number(currentData.feelslike_f):0
        this.gust_kph = currentData.gust_kph ? Number(currentData.gust_kph):0
        this.gust_mph = currentData.gust_mph ? Number(currentData.gust_mph):0
        this.heatindex_c= currentData.heatindex_c ? Number(currentData.heatindex_c):0
        this.heatindex_f = currentData.heatindex_f? Number(currentData.heatindex_f):0
        this.humidity = currentData.humidity ? Number(currentData.humidity):0
        this.is_day = currentData.is_day ? Number(currentData.is_day):0
        this.last_updated = currentData.last_updated ? String(currentData.last_updated): "uknown date of last update"
        this.last_updated_epoch = currentData.last_updated_epoch ? Number(currentData.last_updated_epoch): 0
        this.precip_in= currentData.precip_in ? Number(currentData.precip_in):0
        this.precip_mm = currentData.precip_mm ? Number(currentData.precip_mm):0
        this.pressure_in = currentData.pressure_in ? Number(currentData.pressure_in):0
        this.pressure_mb = currentData.pressure_mb ? Number(currentData.pressure_mb):0
        this.temp_c = currentData.temp_c ? Number(currentData.temp_c):0
        this.temp_f = currentData.temp_f ? Number(currentData.temp_f):0
        this.uv = currentData.uv ? Number(currentData.uv):0
        this.vis_km = currentData.vis_km ? Number(currentData.vis_km):0
        this.vis_miles = currentData.vis_miles ? Number(currentData.vis_miles):0
        this.wind_degree = currentData.wind_degree ? Number(currentData.wind_degree):0
        this.wind_dir = currentData.wind_dir ? String(currentData.wind_dir): "unknown wind direction"
        this.wind_kph = currentData.wind_kph ? Number(currentData.wind_kph):0   
        this.wind_mph = currentData.wind_mph ? Number(currentData.wind_mph):0
        this.windchill_c = currentData.windchill_c ? Number(currentData.windchill_c):0
        this.windchill_f = currentData.windchill_f ? Number(currentData.windchill_f):0
    }
}

class Location {
country
lat
localtime
localtime_epoch
lon
name
region
tz_id
constructor(locationData={}){
    this.country = locationData.country ? String(locationData.country): "unknown country"
    this.lat = locationData.lat ? Number(locationData.lat): 0
    this.localtime = locationData.localtime ? Number(locationData.localtime) : 0
    this.localtime_epoch = locationData.localtime_epoch ? Number(locationData.localtime_epoch):0
    this.lon= locationData.lon ? Number(locationData.lon):0
    this.name=locationData.name ? String(locationData.name):"unkown location name"
    this.region=locationData.region ? String(locationData.region):"unknown region"
    this.tz_id = locationData.tz_id ? String(locationData.tz_id): "uknown id"
}
}
class Condition{
    code
    icon
    text
    constructor(conditionData={}){
        this.code = conditionData.code ? Number(conditionData.code):0
        this.icon = conditionData.icon ? String(conditionData.icon): "unknown icon"
        this.text = conditionData.text ? String(conditionData.text): "unknown condition"
    }

}