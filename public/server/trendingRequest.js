const axios = require('axios');

async function trendingRequest(resource) {
  try {
  const apiKey="rFz4Lls6kITBvrWU8r31BbpWIQwivgU3"
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.giphy.com/v1/${resource}/trending?api_key=${apiKey}&limit=30&offset=0&rating=g&bundle=messaging_non_clips`,
    headers: { }
  };

    const response = await axios.request(config);
    // console.log(JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    console.log(error);
  }
}
module.exports=trendingRequest;