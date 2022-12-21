export const login = async (apiCall: any, data: any) => {
  const res = await apiCall({
    customUrl: false,
    type: 'POST',
    url: '/Demo/login',
    data: data,
  });
  return res.data;
};

export const getStarWarChar = async (apiCall: any,) => {
  const res = await apiCall({
    customUrl: true,
    type: 'GET',
    url: 'https://swapi.dev/api/people',
  });
  return res.data;
};

export const getStarWarMovie = async (apiCall: any, url: any) => {
  const res = await apiCall({
    customUrl: true,
    type: 'GET',
    url: url,
  });
  return res.data;
};

