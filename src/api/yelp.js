import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer n8T1cM4KwVZVNWLAdCdWkBDOkUNiz43zX6g0JKvWVjhHW57oA2V1j8xF9VeIZsCgt28v2XOm0UqR-OXA6t7pDnxmjVucCIEbWfAhYvyDjw2pRzcHvUzvu-_KVSi0Y3Yx'
    }
});