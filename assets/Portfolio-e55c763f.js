import{_ as p,o as l,d as f,w as v,e as s,t as d,c as r,f as g,g as _,T as b,r as u,h as w,v as y,b as h,n as k,F as S}from"./index-7494b639.js";const L=[{id:1,name:"Hydra",type:"Landing-page",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum explicabo architecto minima tempore. Alias laboriosam voluptatibus totam beatae accusamus, animi sapiente fuga officiis rerum, ipsum molestias odit. Recusandae, tenetur maiores.",img:"/src/assets/img/projects/hydra.jpg",technologies:[{id:0,name:"Bootstrap 5"},{id:1,name:"JavaScript"},{id:2,name:"AOS"}],website:"mamataliev.uz",source:"www.github.com"},{id:2,name:"Gym24",type:"Landing-page",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum explicabo architecto minima tempore. Alias laboriosam voluptatibus totam beatae accusamus, animi sapiente fuga officiis rerum, ipsum molestias odit. Recusandae, tenetur maiores.",img:"/src/assets/img/projects/hydra.jpg",technologies:[{id:0,name:"Bootstrap 5"},{id:1,name:"JavaScript"},{id:2,name:"AOS"}],website:"mamataliev.uz",source:"www.github.com"},{id:3,name:"Dentist",type:"Landing-page",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum explicabo architecto minima tempore. Alias laboriosam voluptatibus totam beatae accusamus, animi sapiente fuga officiis rerum, ipsum molestias odit. Recusandae, tenetur maiores.",img:"/src/assets/img/projects/hydra.jpg",technologies:[{id:0,name:"Bootstrap 5"},{id:1,name:"JavaScript"},{id:2,name:"AOS"}],website:"mamataliev.uz",source:"www.github.com"}],C="/assets/back-icon-47d62faa.svg",x={props:{id:Number,name:String,type:String,description:String,img:String,technologies:String,website:String,source:String},data(){return{modal:!1}}},M={class:"modal"},B={class:"modal__block"},A=s("img",{class:"modal__top_img",src:C,alt:"back"},null,-1),O=[A],P={class:"modal__block_title"},F={class:"modal__block_img"},$=["src"],z={class:"modal__content"},G={class:"modal__content_type"},H={class:"modal__content_description"},D={class:"modal__technologies"},J=s("span",{class:"modal__technologies_title"},"Technologies",-1),N={class:"modal__technologies_items"},R={class:"modal__source"},T=["href"],V={class:"modal__source_link"},E={class:"modal__visit"},q=["href"];function I(t,c,o,m,i,n){return l(),f(b,{name:"modal"},{default:v(()=>[s("div",M,[s("div",B,[s("div",{onClick:c[0]||(c[0]=a=>t.$emit("closeModal",!1)),class:"modal__top"},O),s("div",P,d(o.name),1),s("div",F,[s("img",{src:o.img,alt:""},null,8,$)]),s("div",z,[s("span",G,d(o.type),1),s("p",H,d(o.description),1)]),s("div",D,[J,s("div",N,[(l(!0),r(_,null,g(o.technologies,a=>(l(),r("div",{class:"modal__technologies_item",key:a.id},d(a.name),1))),128))])]),s("div",R,[s("a",{class:"modal__source_path",href:o.source},"Open Project",8,T),s("span",V,d(o.source),1)]),s("div",E,[s("a",{class:"modal__visit_path",href:o.website},"Visit site",8,q)])])])]),_:1})}const K=p(x,[["render",I]]),Q={components:{Modal:K},data(){return{modal:!1,id:0,name:"",type:"",description:"",img:"",technologies:"",website:"",source:"",projects:L}},methods:{modalOpen(t,c,o,m,i,n,a,e){this.modal=!0,this.id=t,this.name=c,this.type=o,this.description=m,this.img=i,this.technologies=n,this.website=a,this.source=e,document.body.classList.add("active")},closeModal(t){this.modal=t,document.body.classList.remove("active")},close(t){t.target.classList.contains("modal")&&(this.modal=!this.modal)}}},U={"data-aos":"fade-up","data-aos-once":"true",class:"portfolio-grid"},W={class:"wrapper"},X={class:"container"},Y={class:"portfolio-grid-row"},Z=s("h1",{class:"portfolio-grid__title"},"Portfolio",-1),j={class:"grid"},ss=["onClick","src","alt"],es={class:"item__title"};function is(t,c,o,m,i,n){const a=u("Modal");return l(),r(_,null,[s("div",{onClick:c[0]||(c[0]=(...e)=>n.close&&n.close(...e)),class:k(i.modal==!0?"blackout":"")},[w(h(a,{name:i.name,type:i.type,description:i.description,img:i.img,technologies:i.technologies,website:i.website,source:i.source,id:i.id,onCloseModal:n.closeModal},null,8,["name","type","description","img","technologies","website","source","id","onCloseModal"]),[[y,i.modal]])],2),s("div",U,[s("div",W,[s("div",X,[s("div",Y,[Z,s("div",j,[(l(!0),r(_,null,g(i.projects,e=>(l(),r("div",{class:"item",key:e.id},[s("img",{onClick:ns=>n.modalOpen(e.id,e.name,e.type,e.description,e.img,e.technologies,e.website,e.source),class:"item__img",src:e.img,alt:e.name},null,8,ss),s("h4",es,d(e.name),1)]))),128))])])])])])],64)}const os=p(Q,[["render",is]]),ts={components:{Footer:S,PortfolioGrid:os}},as={class:"w-wrap"};function cs(t,c,o,m,i,n){const a=u("PortfolioGrid"),e=u("Footer");return l(),r("div",as,[h(a),h(e,{class:"w-footer"})])}const ds=p(ts,[["render",cs]]);export{ds as default};
