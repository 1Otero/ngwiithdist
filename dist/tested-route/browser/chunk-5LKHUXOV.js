import{a as f}from"./chunk-EBC6MOXI.js";import{b as E,e as h,j as b}from"./chunk-CV4Y6KAD.js";import{Ib as o,Lb as v,Mb as u,Nb as g,Sa as p,Ta as c,ha as m,sb as t,tb as n,yb as d}from"./chunk-AUUIYZ7A.js";var C=(()=>{let e=class e{constructor(i){this.eventService=i,this.meEvent={eventId:0,name:"",description:"simple event create",status:1,place:"bogota",startEvent:new Date,endEvent:new Date,notView:0}}createSimpleEvent(){this.eventService.createEvent(this.meEvent).subscribe(i=>{console.log("new event: "),console.log(i)})}};e.\u0275fac=function(r){return new(r||e)(c(f))},e.\u0275cmp=m({type:e,selectors:[["app-create-simple-event"]],decls:15,vars:1,consts:[[1,"flex","flex-grow","justify-around"],[1,"h-screen","w-1/2","p-2"],[1,"h-auto"],[1,"bg-gray-600","text-2xl","md:text-4xl","font-black","text-white","text-center","p-2","md:p-8"],[1,"font-mono"],["type","text","placeholder","Perreo intenso","matInput","",3,"ngModelChange","ngModel"],[1,"p-2","focus:outline-none","text-white","bg-blue-800","hover:bg-blue-600","focus:ring-4","focus:ring-purple-300","font-bold","rounded-lg","text-","px-5","py-2.5","mb-2","dark:bg-purple-600","dark:hover:bg-purple-700","dark:focus:ring-purple-900",3,"click"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),o(4,"create event"),n(),t(5,"p",4),o(6,"Este evento se eliminara despues de 24 horas, Reclame su evento antes!"),n()(),t(7,"div")(8,"div")(9,"label"),o(10,"Name event "),n(),t(11,"input",5),g("ngModelChange",function(s){return u(a.meEvent.name,s)||(a.meEvent.name=s),s}),n()(),t(12,"div")(13,"button",6),d("click",function(){return a.createSimpleEvent()}),o(14,"Create event"),n()()()()()),r&2&&(p(11),v("ngModel",a.meEvent.name))},dependencies:[E,h,b]});let l=e;return l})();export{C as a};