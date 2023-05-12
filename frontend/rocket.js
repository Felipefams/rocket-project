// const local = 'https://rocket-project-3u8d65ezp-felipesilva-plank.vercel.app/';
const local = "http://localhost:8080";
const endpoint = 'rocket';

const getAll = async (url, endpoint) => {
    try {
        const response = await fetch(`${url}/${endpoint}`); 
        const data = await response.json();
        return data;
    }catch (error) {
        console.log(error);
    }
}

const k = getAll(local, endpoint);
console.log(k)