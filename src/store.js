import { reactive } from "vue";

export const store = reactive({
    movies:[],
    series:[],
    flags:[
        {
            language:'en',
            flag:'/public/united-kingdom.png'
        },
        {
            language:'it',
            flag:'/public/italy.png'
        },
        {
            language:'fr',
            flag:'/public/france.png'
        },
        {
            language:'es',
            flag:'/public/spain.png'
        },
        {
            language:'ja',
            flag:'/public/russia.png'
        }
    ]
});