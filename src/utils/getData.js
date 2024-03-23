
const apiKey = 'OgH2E1n1ow92-1oWD0-krnmQazbBTyUKmmveuhUeg90qGknpOMCT9WiLRKM8EEVq7f3IwBka6yIiVKW3j3lgD6-05y-pHQ_N7boz_TXbqW0I2WkbyTq7I_Qwjwr_ZXYx';

async function search(searchTerm, location, sortBy) {
    
        const url = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
        const queryParams = `?location=${location}&term=${searchTerm}&sort_by=${sortBy}`;
        const urlToFetch = url + queryParams;
    
        try {
            const response = await fetch(urlToFetch, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            });
    
            if(response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.businesses.map((business) => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                  }));
            }
        }
        catch(error) {
            console.log(error);
        }
}

export {search}