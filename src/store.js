import { reactive } from "vue";

export const store = reactive({
    movies:[],
    series:[],
    flags:{

        en:"/public/united-kingdom.png",
        it:"/public/italy.png",
        es:"/public/spain.png",
        fr:"/public/france.png",
        ru:"/public/russia.png"
    }

});