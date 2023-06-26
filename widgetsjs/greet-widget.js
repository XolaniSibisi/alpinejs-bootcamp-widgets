document.addEventListener('alpine:init',()=>{
    Alpine.data('greetwidget',function(){
        return{
            name:'',
            message:'',
            showgreet: false,
            greetMe(){
                this.message=greet(this.name);
                setTimeout(()=>{
                    this.message='';
                    this.name='';
                },5000);
            }
        }
    });
})