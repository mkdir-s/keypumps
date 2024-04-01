export const BASE_DOMAIN = 'https://keypumps.ru:3000';

export const endpoints = {
    allProducts: `${BASE_DOMAIN}/getPosts?postType=Product`,
    allCategories: `${BASE_DOMAIN}/getPosts?postType=Category`,
    allPromos: `${BASE_DOMAIN}/getPosts?postType=Promo`,
    allArticles: `${BASE_DOMAIN}/getPosts?postType=Article`,
    filterProducts: `${BASE_DOMAIN}/filterProducts`,
    detailProduct: `${BASE_DOMAIN}/getPost?postType=Product`,
    detailCategory: `${BASE_DOMAIN}/getPost?postType=Category`,
    detailArticle: `${BASE_DOMAIN}/getPost?postType=Article`,
    search: `${BASE_DOMAIN}/search?searchString=`,
    popoularProds: `${BASE_DOMAIN}/getMainPageProducts`,
    orderUrl: `http://keypumps.ru:5000/`,
    feedback: `https://cryptocitygame.ru/key_pumps/lead.php`
}



