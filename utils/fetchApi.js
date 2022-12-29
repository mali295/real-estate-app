import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

  export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'ca9b1d44fcmsha5707d398f99d36p1802b2jsnfe0aed783e5c',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data
  }