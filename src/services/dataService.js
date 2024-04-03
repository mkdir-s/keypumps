import { endpoints } from "./endpoints"

const headers= {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${token}`
}

export default class dataService {

    controller = new AbortController();

    getProducts = async () => {
        try {
            let res = await fetch(endpoints.allProducts, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                signal: this.controller.signal
            })

            return await res.json()
        } catch(err) {
            console.log(err);
        }
    }

    
    getCategories = async () => {
        try {
            let res = await fetch(endpoints.allCategories, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                signal: this.controller.signal
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    getPromos = async () => {
        try {
            let res = await fetch(endpoints.allPromos, {
                method: 'GET',
                mode: 'cors',
                headers,
                signal: this.controller.signal
            })

            return await res.json()
        } catch(err) {
            console.log(err);
        }
    }

    getArticles = async () => {
        try {
            let res = await fetch(endpoints.allArticles, {
                method: 'GET',
                mode: 'cors',
                headers,
                signal: this.controller.signal
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    getProductFilter = async (category, filters, priceFrom, priceTo, count, offset, sort) => {
       console.log(endpoints.filterProducts + `/?categoryTitle=${category}&filters=${filters?.join()}&priceFrom=${priceFrom}&priceTo=${priceTo}&countProduct=${count}&offset=${offset}&sort=${sort}`)
        try {   
            let res = await fetch(endpoints.filterProducts + `/?categoryTitle=${category}&filters=${filters?.join()}&priceFrom=${priceFrom}&priceTo=${priceTo}&countProduct=${count}&offset=${offset}&sort=${sort}`, {
                method: 'GET',
                mode: 'cors',
                headers,
                signal: this.controller.signal
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    getDetailProduct = async (name, id) => {
        try {
            let res = await fetch(endpoints.detailProduct + `&postTitle=${name}&id=${id}`, {
                method: 'GET',
                mode: 'cors',
                headers,
                signal: this.controller.signal
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    getDetailCategory = async (name) => {
        
        try {
            let res = await fetch(endpoints.detailCategory + `&postTitle=${name}`, {
                method: 'GET',
                mode: 'cors',
                headers,
                signal: this.controller.signal
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    getDetailArticle = async (name) => {
        try {
            let res = await fetch(endpoints.detailArticle + `&postTitle=${name}`, {
                method: 'GET',
                mode: 'cors',
                headers,
                signal: this.controller.signal
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    search = async (string, limit, control) => {
        
        try {
            let res = await fetch(endpoints.search + string + '&limit=' + limit, {
                method: 'GET',
                mode: 'cors',
                headers,
                signal: control.signal
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    getPopularProds = async (string) => {
        try {
            let res = await fetch(endpoints.popoularProds, {
                method: 'GET',
                mode: 'cors',
                headers,
                signal: this.controller.signal
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }


    order = async (data) => {
        try {
            let res = await fetch(endpoints.orderUrl, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'User-Agent': 'python-requests/2.22.0',
                    'Accept-Encoding': 'gzip, deflate',
                    'Accept': '*/*',
                    'Connection': 'keep-alive',
                    'Content-type': 'application/json',
                    
                },
                body: JSON.stringify(data)
                
            })

            return await res.json();
        } catch(err) {
            console.log(err)
        }
    }


    fb = async (data) => {
        try {
            let res = await fetch(endpoints.feedback, {
                method: 'POST',
                mode: 'cors',
                headers,
                body: JSON.stringify(data)
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }


    
}