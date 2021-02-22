const configObj = {
    development: {API_URL: "https://api.metro.net/agencies/"},
    production: {API_URL: "https://api.metro.net/agencies/"}
}

export const config = configObj[process.env.NODE_ENV]