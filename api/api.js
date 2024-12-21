import axios from 'axios'

export const BLOG_GET_API = "https://script.google.com/macros/s/AKfycbxwijdk_hBKifCArjwv3kz0v0Aown2cA6ymT53190B8LiT51lGhlMifu_QMbLiibJihaA/exec";
export const BLOG_GET_API_SLUG = "http://localhost:3000/api/blogs?slug=";
export const BLOG_POST_API = "https://script.google.com/macros/s/AKfycbz4GnmS-AiDXO65_zqf9HKywCo2dH_sZU16VV_g-3LE7GOHKfDiui2cQS2MIt2XVsLT2A/exec";
// https://script.google.com/macros/s/AKfycbxQzJ4MAQFi93MDSjRq6_1R7i5ArxzvmuZfss8Fq-Sux7ykt-B0c3zRUJJJygYdwF9niw/exec?action=getBySlug&slug=test-3

const baseURL = process.env.NEXT_PUBLIC_API_URL
    , isServer = typeof window === 'undefined'

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})



export default api