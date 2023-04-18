import axios from 'axios';
import legiscanApiKey from '../keys/apiKeys.js';
export const showBills = (keywords) =>
    axios
        .get(
            'https://api.legiscan.com/?key=${api_key}&op=search&state=${state}&query=${keyword}',
            {
                params: {
                    key: legiscanApiKey,
                    op: 'search',
                    state: 'ri',
                    query: keywords.split().join(','),
                },
            }
        )
        .then((response) => {
            const result = response.data.searchresult;
            delete result.summary;
            return Object.values(result);
        })
        .catch(() => []);
