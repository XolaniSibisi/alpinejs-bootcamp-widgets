document.addEventListener('alpine:init',()=>{
    Alpine.data('enoughairtime',function(){
        return{
            item:'',
            airtime:'',
            airtimeMessage:'',
            Calculate(){
               this.airtimeMessage= enoughAirtime(this.item, this.airtime)
               setTimeout(()=>{
                this.airtimeMessage='';
                this.item='';
                this.airtime='';
            },5000);
            }
        }
    });
})