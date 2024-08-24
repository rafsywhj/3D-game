AFRAME.registerComponent("movechar",{
    schema:{
        moveH:{type:"number",default:0},
        rotateH:{type:"number", default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.moveH=this.el.getAttribute("position")
            this.data.rotateH=this.el.getAttribute("rotation")
            var playerMove=this.data.moveH
            var playerRotate=this.data.rotateH
            if (e.key=="ArrowRight"||e.key=="d"){
                playerMove.x-=0.001
                playerRotate.y-=5
                this.el.setAttribute("rotation", playerRotate)
                this.el.setAttribute("position",playerMove)
                console.log("Hello")
            }
            if (e.key=="ArrowLeft"||e.key=="a"){
                playerMove.x+=0.001
                playerRotate.y+=5
                this.el.setAttribute("rotation", playerRotate)
                this.el.setAttribute("position",playerMove)
            }
            if (e.key=="ArrowUp"||e.key=="w"){
                playerMove.z+=0.001
                this.el.setAttribute("position",playerMove)
            }
            if (e.key=="ArrowDown"||e.key=="s"){
                playerMove.z-=0.001
                this.el.setAttribute("position",playerMove)
            }
        })
    }
})