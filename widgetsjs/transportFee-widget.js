document.addEventListener('alpine:init',()=>{
    Alpine.data('transportwidget',function(){
        return{
            shift:'',
            shiftMessage:'',
            shiftprice(){
                this.shiftMessage=transportFee(this.shift)
                setTimeout(()=>{
                    this.shiftMessage='';
                    this.shift='';
                },5000);
            
            }
        }
    });
})