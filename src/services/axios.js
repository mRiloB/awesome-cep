import axios from 'axios';

export default async function getCep(cep) {
    const res = await axios({
        method: 'GET',
        url: "https://cep.awesomeapi.com.br/json/" + cep
    });

    return res.data;
}
