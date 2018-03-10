    <template>
    <div id="idhome">
        <div class="colunm" v-on:click="activeclass = !activeclass">
                     <menu class="menu-form">
                    <div>
                        <img src="../img/logo.png" alt="">
                    </div>
                    <div>
                        <a class="np" v-on:click="activebutton = !activebutton"  href="#">
                            <p>Login</p>
                            <i v-bind:class="{active:activebutton}" >
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="9" viewBox="0 0 10 9">
                            <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
                            <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        ">
                            <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                            <rdf:Description rdf:about=""/>
                            </rdf:RDF>
                            </x:xmpmeta>                     
                            <?xpacket end="w"?></metadata>
                            <image id="arrow-right" width="10" height="9" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAQAAAChr3WYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAIdUAACHVAQSctJ0AAAAHdElNRQfiAwkMByDQxWoYAAAAbklEQVQI112LMQ6CQAAEh3iE+AJjDK0dHdY+WW2MxhcQK35gAS+wkAIYCj007ha7mWSQTy/u4w8ALLlS8CRGzLzZmc8OGDz7cPVFkninpKZlzQhAQhUYgJ4X3QzFhQcbN7/6e07q7h+mHm3cRjgBwH5S/4dLouAAAAAASUVORK5CYII="/>
                            </svg>
                            </i>
                        </a>
                    </div>
                </menu>
            <div class="slide-form">
               <div class="column-form">
                <form action="#" method="get">
                    <div class="div-col">
                        <div class="input-col">
                            <input required type="text" name="Name" id="name">
                            <span class="bar"></span>
                            <label>Nome</label>
                        </div>
                        <div class="input-col">
                            <input required type="text" name="Sobrenone" id="sobrenome">
                            <span class="bar"></span>
                            <label>Sobrenone</label>
                        </div>
                    </div>
                    <div class="div-col">
                        <div class="input-col-on">
                            <input required type="email" name="Email" id="sobrenome">
                            <span class="bar"></span>
                            <label>Email</label>
                        </div>
                    </div>
                    <div class="div-col">
                        <div class="input-col-on">
                            <input required type="password" name="Sobrenone" id="sobrenome">
                            <span class="bar"></span>
                            <label>Nova Senha</label>
                        </div>
                    </div>
                </form>
               </div>
               <div class="column-form">
                <form action="#" method="get">
                    <div class="div-col">
                        <div class="input-col">
                            <input required type="text" name="Name" id="name">
                            <span class="bar"></span>
                            <label>Nome</label>
                        </div>
                        <div class="input-col">
                            <input required type="text" name="Sobrenone" id="sobrenome">
                            <span class="bar"></span>
                            <label>Sobrenone</label>
                        </div>
                    </div>
                    <div class="div-col">
                        <div class="input-col-on">
                            <input required type="text" name="Sobrenone" id="sobrenome">
                            <span class="bar"></span>
                            <label>Email</label>
                        </div>
                    </div>
                    <div class="div-col">
                        <div class="input-col-on">
                            <input required type="text" name="Sobrenone" id="sobrenome">
                            <span class="bar"></span>
                            <label>Nova Senha</label>
                        </div>
                    </div>
                    <div class="div-col">
                        <div class="input-col-on">
                            <input required type="text" name="Sobrenone" id="sobrenome">
                            <span class="bar"></span>
                            <label>Repetir Senha</label>
                        </div>
                    </div>
                </form>
               </div>
            </div>
                <div class="div-col-bottom" >
                        <button  class="register" type="button">{{ this.nameButtonPan }}</button>
                        <span class="or">ou</span>
                        <button class="facebook" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="20" viewBox="0 0 12 20">
                        <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
                        <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        ">
                        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                        <rdf:Description rdf:about=""/>
                        </rdf:RDF>
                        </x:xmpmeta>                         
                        <?xpacket end="w"?></metadata>
                        <image id="logo_4_" data-name="logo (4)" width="12" height="20" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAQAAAAT+RSaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAIdUAACHVAQSctJ0AAAAHdElNRQfiAwkLIiVNE1j1AAAAyklEQVQY04WQMQ/BQBzFf1eNRYw2SQcRErH5EmIyMvVj2KqD0XfwAWw6mcwSi0EiMREDIiESg2pr6N2ppom3vLv37v3v7okhXzg2bWqUgJWZkD06epM3tDxKyHCWCafAQIsXfNZqVIM4+6bHjIBQGUXJR3caL9Qd7xRrYy/5pQwR2bQIKdMF4M4EH58N0TLKgmdwIgtzg2amcTVxsYAqfQBujBEIFiIu0amwA2Dr1n+fa0nOpf8RSg7SRpA68D+hWJWJavfJA4CDMj5mGUXHBgYiMQAAAABJRU5ErkJggg=="/>
                        </svg>
                        </button>
                        <button class="google" type="butotn"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="23" viewBox="0 0 22 23">
                        <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
                        <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        ">
                        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                        <rdf:Description rdf:about=""/>
                        </rdf:RDF>
                        </x:xmpmeta>                         
                        <?xpacket end="w"?></metadata>
                        <image id="_2000px-Google__G__Logo.svg" data-name="2000px-Google__G__Logo.svg" width="22" height="23" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAAP6L+eAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAACHVAAAh1QEEnLSdAAAAB3RJTUUH4gMJCyoiG65HXgAABLNJREFUOMuNlVuIVVUYx3/fWmvvc/Z45j6jo2kWg6nThbIySutBfRopkqIiIpAuVNIFeugCob704EMXGYheejCVjPClEkkrIhEUMrphWjhlkzU1NjPNmbPP2Xuv9fVwJtQk9P+6vu+/Ft/6/7+/6CbAAgoTh64iG2/FJRlqFcWsVm/Wgi4HLgdmAdPACTEckiy8j4TPTKSoESakSmECRgXHfyCAIoPBm43ActD/lrQD8zSwUp19FuSAaNgoEj6h2YugGNpnSttBTEDVbA3Ih03SC0EBWRnUfey92RbEGKuernQMxxEHBlChKOLdWtJ1cmHG81BoXIvCBPOnhtm5ZD2udrAfRMmSZKiYU15nohzCeX0p8DUwAXQA1ypSkpkxBbHPRZpt6Zs8wY6lD7Dx5i24eqUXFb0t79INVs6QqgoiVIXwkqjuVGP+KOUNrA/kSdTn4cHCu+fVmDdm18a2SO033l72MC/d8jJd9XEk3dpL/UT7sXT/JVfYSoa05mgQTOR/EFilhR1JGimzsr/4O+klNQndjOOqo5DHHcTRxHBnPzuWrGP70rtpyWt0NsYRPcoK9Ryo7e2jurOfEAxRdz0thWxBYdzpzuqfoIGdV93Du4sGUQxz6mMsOX2c6059xdHZA2xbehe/tM5l4dQpkiLFi0XyfdEQUdjg+jzZtxUm31qM/tjytLPF1kpjnMNXD/Dqiof4ovtKYp+R+AapLZPZmBafkoujLZuivTFFEHNGtvn+6DDKjQC2L8f/FqX5l10dJi6yklZZH73DLrmTm6ZHMBoGVWTtjM7wYjEakHO1LkDdAZczoy9/KkYqxZFkcDQjAC3Q9rnn0u/BtvYB3C7w2L8Mhv+Hm7FpE1bR1P5ZpAZHgHLAZjkag5oGwOhFynrK0fR+8q/EIpv1YmeOI0hCRO5BQgxIx/kcgkoBks9M4cyLh4EeAZzLqBelZbvzeXHZZpkwzUmBLgMhGgeVYzNGAQEJggQBQ4wmS87aKyL5fjfkJGzABb6rd/P4+K0cpPOZVpO9jplmLmX6Ru9H08WonUBNDiHChIRgUrK248RTAy/Ek8teDm66+a/qvOhHrCDiwPbpK3h+8iYaWPpNNZ2IdEGk5nQUjxJCRMvYIFFtGWBQW0UZo949hS/PouPYHb+bRtscdQ0klAhu8oS8t+cyvmzMOT5UvXpRj6vRKykBQ0P0B2PDKrE64rWODQ1MPhd8CRtNUS/9ROnv9bSNPLqPPFoToioomKxCo+vIi+YRv5w3ZeFD/XaSHjIKDAEoBbPI5faoenlGfMtsU/SgdpIQjRKk3mK0fJfJqt+Y6WhNc7SKFAnBpnne+vNrcs2uezEKcWaHxBYbClcgetbiVAHRs7dbBVgM0hOiX3G166mc3IytdaExVAf23pd1fL9L2k7NbaaGK7js0A27W053rSvK9YuQavNyXxrGZvOZ9fNmnO9+JZ+371lCcq4bB/avonNk3tYsSZ/Ui6AGkODwpZNgOjdXjj2xyY3NBpef60rjDeqKpwqVtapy+IKkCmqKg4HO1SGUNmEKNBZCOTs/TAE8sgc1eyx+tRhdq8q5KS06jMohb8IHuPBpMAHrY1AH0kyKfwC3zCzT21iH/AAAAABJRU5ErkJggg=="/>
                        </svg>
                        </button>
                    </div>
        </div>
        <div class="colunm">
            <div class="cicle" v-bind:class="{active:this.activeclass}" >
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 192 192">
                <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
                <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        ">
                <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                <rdf:Description rdf:about=""/>
                </rdf:RDF>
                </x:xmpmeta>                         
                <?xpacket end="w"?></metadata>
                <image id="Layer_0" data-name="Layer 0" width="192" height="192" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAQAAAD41aSMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiAwoAOyyxLwlGAAAFFElEQVR42u3dTW9UZRjG8es+aSgoIt3YF0AtNW0TEBdaFyrRstGYGNRAd8REKMgXMMTEl7ow8SsIghETE2ujO7uqJF0Ya2IIQbRYaFLrtEhikRd5SfB20Y7TlrYzc54ZrvE81281ZSY398w/MwNzYI5hBW7Yhm50oR0P4R7cCynVNVzDBEYxgm9x2nz5G9pyV/gG7McetLLvSQacw3EcttzSVy4ZwJvxHl5DPXvzDLmJo+izC3decUcANxzEB7ifvXEGXcIhfLT45WhRAG/AMexkb5phX+F1uzT/FxYE8GYMYht7x4w7g+dtsvDjvAC+EcN4mL1fBMbxTOEtOclf8AYM6uG/K1ox6P+9x84FcMNRbGFvFo1HcdznXnvyz4CDeJm9VVReQu/sBQMAb8QvWM/eKTIz6LQ/8s+APj38d10D3gUAA7wJ41jN3idCN7HZcgmAN/TwU9RjH2Bu+BVt7F0iNYZ288dwkr1HxLYm6GbvELUdCZ5g7xC1rgSd7B2i1pFgI3uHqG1KcB97h6itM/9n+ePCUnVu7uFTJL0kfISEUAAyBSBTADIFIFMAMgUgUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIAsOYEWUMaqnyKT+kif1F9sqDdRjE7rxIcZqKkA87JZN2gk7hE7sw1SlpipA2ey2fYzH8X1lpilAKjaF7sokUICU7DpewXT4HAVIzabwdvgUBQhxDOdCRyhAALuNgdAZChDmm9ABChBmPHSAAoQJ/guZAgSxW6ETFIBMAcgUgEwByKIM4Lu9ZNXeJcoAtUQByBSATAHIFIBMAcgUgEwByBSArK7qv0Pp/57tN+YDwVL1ANbDvou1TS9BZApApgBkCkCmAGQKQKYAZApApgBkCkCmAGQKQKYAZApAVvWPo313yTf9ziapjwVF9Q/IfFHyLXvKOHiTGXoJIlMAMgUgUwCy6r8J1yDrRznfY1RVegaQKQCZApApAJkCBPFVoRMUIExL6AAFCNMaOkABwrwYOkABAngdXg2doQAh9mJz6AgFSM1b0Bc+RQFS8jX4Go3hcxQgFW/BCXRVYpIClM3rfD9+xJOVmRblx9Hp+Co0oQ0vYFf4W2+BVf8bcWQlegkiUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIEug/ynP5Amus3eI2t8JrrB3iNrlJM4TideMiQSj7B2idjbBD+wdojaSYIi9Q9SGDPBRtLP3iNQY2hMAn7P3iNan5gZ4E85jDXuXCN1Am+USwKbxCXuXKB2xHGZPZuON+BkN7H0iM4MOuzj3YZxdwFvsfaLzpl0EUDidkw+EfxO4lOxLmzvJaSHAegxjK3uvSJzCdrs8e3HeCc18A4bDzwghRZ3Hdsvlf5h3QMZ+x9M4yd4u837Cs4WHf9ERMZvCcxhgb5hp/Xhq4WmrFx2StL9sFw5ghr1nJv2JXuvJv/bnLXlSS38A72AvVrM3zpAbOIL3Z//gudCyZxX1ZvRiDx5hb54BZ/EZDtv00lcWOa2rb8EOdKEDD2It1rLvyf/IVVzFBEYxgiE7s9IN/wX/t+cwIRD/5QAAAABJRU5ErkJggg=="/>
                </svg>
                </span>
                <span></span>
                <span></span>
            </div>
            <div v-on:click="this.activeClass" class="title">
                <h1>Canal Digital</h1>
                <h1>Smart IPVt</h1>
            </div>
        </div>
    </div>
    </template>
    <script>

    import Vue from 'vue'

    export default {
        name:'Home',
        props:['outro'],
        data(){
            return{
                activeclass:false,
                activebutton:false,
                namebutton:"Registar"
            }
        },
        mounted:function(){
            console.log(window.Vue)
            window.requestAnimationFrame(this.animationClass)
            const element = this.$el.querySelectorAll(".column-form"),
                  np = this.$el.querySelectorAll('.np')


          var a = 413
          Object.keys(np).map((e,i)=>{
            
            np[e].addEventListener('click',(e)=>{
              Object.keys(element).map((i,e)=>{
                  console.info(element[i].style.transform)
                  element[i].style.transform = "translateX(-"+a+"px)"
              })
              console.log("aqua")
 
             if(a == 413){
                 a = 0
                 console.info(a)
              }else{
                 a = 413
                 console.info(a)
               }

            })
          })
    


           let slide = document.querySelectorAll(".column-form")
           Object.keys(slide).map(function(e){
               let width = slide[e].offsetWidt
               
           })

        },
        created(){
            this.animationClass()
        },
        computed:{
            nameButtonPan(){
                if(this.activebutton){
                    return "Registrar"
                }else{
                    return "Logar"
                }
            }
        },
        methods:{
            activeClass:function(event){
                this.activeClass = true
            },
            animationClass:function(){
                console.log('d')
            }
        },
    }

    console.log(Vue.config)


    </script>

    <style lang="scss" >
    @import '../scss/Home';
    </style>

