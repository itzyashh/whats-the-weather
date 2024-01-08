
const getHour = (date) => {
    return date.getHours();
}
export const weatherInterpretation = [

    {
        codes: [0,1],
        label: 'Clear sky',
        icon: getHour(new Date()) > 6 && getHour(new Date()) < 18 ? 'sun' : 'moon'
    },
    {
        codes: [2],
        label: 'Few clouds',
        icon: getHour(new Date()) > 6 && getHour(new Date()) < 18 ? 'cloud-sun' : 'cloud-moon'
    },
    {
        codes: [3],
        label: 'Scattered clouds',
        icon: getHour(new Date()) > 6 && getHour(new Date()) < 18 ? 'cloud-sun' : 'cloud-moon'
    },

        { codes: [45, 48], label: 'Fog and depositing rime fog' },
        { codes: [51, 53, 55], label: 'Drizzle: Light, moderate, and dense intensity' },
        { codes: [56, 57], label: 'Freezing Drizzle: Light and dense intensity' },
        { codes: [61, 63, 65], label: 'Rain: Slight, moderate and heavy intensity' },
        { codes: [66, 67], label: 'Freezing Rain: Light and heavy intensity' },
        { codes: [71, 73, 75], label: 'Snow fall: Slight, moderate, and heavy intensity' },
        { codes: 77, label: 'Snow grains' },
        { codes: [80, 81, 82], label: 'Rain showers: Slight, moderate, and violent' },
        { codes: [85, 86], label: 'Snow showers slight and heavy' },
        { codes: [95], label: 'Thunderstorm: Slight or moderate' },
        { codes: [96, 99], label: 'Thunderstorm with slight and heavy hail' }
]

export const getWeatherInterpretation = (weatherCode) => {
    try {
        const interpretation = weatherInterpretation.find(interpretation => interpretation.codes.includes(weatherCode))
        return interpretation
    }
    catch (error) {
        console.log(error)
    }
}