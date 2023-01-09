class Students{
    name:string
    id:number
    face:boolean
    constructor(){
        this.name='xyz';
        this.id=123,
        this.face=true
    }
    withface(){
        console.log('they will smile')
    return this
    }
    withname(){
        console.log('we can call studet')
        return this
    }
}

var gopi=new Students()
gopi.withface().withname()