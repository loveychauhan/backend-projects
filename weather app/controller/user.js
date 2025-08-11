import axios from 'axios'

export const home = (req, res) => {
    res.render('index')
}

export const getWeather = async (req, res) => {
    const city = req.query.city
    const apiKey = '62af3de5a0be52b130d5b53261c7a530'


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    let weather;
    let error = null
    try {
        const response = await axios.get(url)
        weather = response.data
    } catch (err) {
        weather = null
        error = "Error, Please Try again"

    }

    res.render('index', { weather, error })
}