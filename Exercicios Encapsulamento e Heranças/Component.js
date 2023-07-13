export class Component{
    #elemento = null

    constructor(tag, parent, options){
        this.tag = tag
        this.parent = parent
        this.options = options
        this.construir()
    }

    ler(){
        return this.#elemento
    }

    construir(){
        this.#elemento = document.createElement(this.tag) 
        Object.assign(this.#elemento, this.options)
        return this
    }
    renderizar(){
        if(this.parent instanceof Component){
            this.parent.ler().append(this.#elemento)
        }else{
            document.getElementById(this.parent)
            append(this.#elemento)
        }
    }
}