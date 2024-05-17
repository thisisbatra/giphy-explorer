const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.giphy.com/v1/gifs/trending?api_key=rFz4Lls6kITBvrWU8r31BbpWIQwivgU3&limit=5&offset=0&rating=g&bundle=messaging_non_clips',
  headers: { }
};

async function trendingRequest() {
  try {
    const response = await axios.request(config);
    // console.log(JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    console.log(error);
  }
}
module.exports=trendingRequest;