<template lang="">
    <div @click="bbb">
        我是home首页123456 11456 {{$log(aa)}}
    <p v-html="valueLog"></p>

    </div>
    <!-- <div v-html="valueLog"></div> -->
</template>
<script>
export default {
    data(){
        return {
            aa:'homehomehomehomehomehomehome',
            valueLog:'',
        }
    },
    created(){
        function reverseStr(str = "") {
            return str.split("").reduceRight((t, v) =>{
                return t + v
            },'10086');
        }
        const str = "reduce123";
        console.log(reverseStr(str)); // "321recuder"
        const num=5;
        console.log(!!(num & 1))
        console.log(!!(num % 2))


        console.log('!null====',!null)
        console.log('!undefined====',!undefined)
        console.log("!''====",!'')
        console.log("!100====",!100)
        console.log("!'abc'====",!'abc')

        var a=false ;
        if(!!a){
            console.log('我进来啦')
        }else{
            console.log(a instanceof Boolean)
            console.log('我没有进来')
        }
        console.log((num & 1))
        console.log((num % 2))


        
        // sum(1, 2)

        // const sum = function (a, b) {
        // return a + b
        // }



        const printNumbers = {
            phrase: 'The current value is:',
            numbers: [1, 2, 3, 4],

            loop(){
                this.numbers.forEach((number) => {
                console.log(this.phrase, number)
                })
            },
        }
        printNumbers.loop()

        console.log(printNumbers.loop.prototype)

        let func = ()=>{};
        console.log(func.prototype)
        const myArrowFunction = () => {}
        console.log(myArrowFunction.prototype)
        const arrowInstance = new myArrowFunction()
        console.log(arrowInstance)


    },
    methods:{
        aab () {
            this.aab = ()=>{
                console.log(2222)
            }
        },
        bbb(){
            console.log('mmm')
            this.aab()
        },
        upData (arr, index) {
            console.log('555')
        }
    },
    mounted(){

    },
}
</script>
<style  scope>
    .aaa{
        background: gainsboro;
        color: white;
    }
</style>