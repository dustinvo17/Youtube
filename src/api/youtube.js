import axios from 'axios'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
    maxResults : '5',
    part: 'snippet',
    key : 'AIzaSyA7Z_gZJxxDf50xolwn0qdjUT5Snna8iGo'
    }

})