(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var s=e.g.document;if(!t&&s&&(s.currentScript&&(t=s.currentScript.src),!t)){var n=s.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"8292d0c151334d801101.png";class s{constructor(e,s){this.el=document.createElement("div"),this.el.classList.add("gallery-card"),this.el.dataset.title=e;const n=document.createElement("span");n.textContent=e;const i=document.createElement("img");i.setAttribute("src",s),i.classList.add("gallery-img");const r=document.createElement("div");r.classList.add("card-close-button"),r.innerHTML=`<img src="${t}" class="close-img">`,this.el.insertAdjacentElement("beforeEnd",n),this.el.insertAdjacentElement("beforeEnd",i),this.el.insertAdjacentElement("beforeEnd",r)}remove(){this.el.remove()}render(e){e.insertAdjacentElement("beforeEnd",this.el)}get title(){return this.el.dataset.title}}class n{constructor(e){this.el=document.createElement("div"),this.el.classList.add("gallery-card-list"),this.CardClass=e,this.cards={},this.setListeners()}setListeners(){this.el.addEventListener("click",(e=>{const{target:t}=e,s=t.closest(".card-close-button"),n=t.closest(".gallery-card");s&&this.removeCard(n.dataset.title)}))}add(e,t){if(e in this.cards)return;const s=new this.CardClass(e,t);this.cards[e]=s,s.render(this.el)}removeCard(e){const t=this.cards[e];t&&(t.remove(),delete this.cards[e])}render(e){e.insertAdjacentElement("beforeEnd",this.el)}}class i{constructor(e,t,s){this.el=document.createElement("div"),this.el.classList.add("gallery"),this.inputForm=e,this.cardList=new t(s),this.inputForm.render(this.el),this.cardList.render(this.el),this.inputForm.addInputLine("name","Название"),this.inputForm.addInputLine("src","Ссылка на изображение"),this.setListeners()}setListeners(){this.inputForm.addButtonListener((()=>{const e=this.inputForm.getInputValue("name"),t=this.inputForm.getInputValue("src");if(""===t||""===e)return void this.inputForm.showErrorMessage("Empty field",2e3);const s=document.createElement("img");s.setAttribute("src",t),s.addEventListener("error",(()=>{this.inputForm.showErrorMessage("Uncorrect url",2e3)})),s.addEventListener("load",(()=>{this.cardList.add(e,t),this.inputForm.resetInputs()}))}))}render(e){e.insertAdjacentElement("beforeEnd",this.el)}}const r=1,a=2,l=e.p+"2dbd01ce16c0fa83cb67.png";class c extends class{constructor(e){let{row:t,column:s}=e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;this.row=t,this.column=s,this.state=n}changeState(e){this.state=e}activate(){throw new Error('"activate" not implement')}deactivate(){throw new Error('"deactivate" not implement')}click(){throw new Error('"click" not implement')}render(e){throw new Error('"render" not implement')}}{constructor(e){let{row:t,column:s}=e;super({row:t,column:s},arguments.length>1&&void 0!==arguments[1]?arguments[1]:a),this.el=document.createElement("div"),this.el.dataset.row=t,this.el.dataset.column=s,this.el.classList.add("cell"),this.el.innerHTML=`<img src="${l}">`,this.deactivate()}click(){this.state===r&&(this.deactivate(),this.el.classList.add("cell-target-defeat"),setTimeout((()=>{this.el.classList.remove("cell-target-defeat")}),500))}deactivate(){this.el.classList.remove("cell-target"),this.el.querySelector("img").classList.add("hide"),this.changeState(a)}activate(){this.el.classList.add("cell-target"),this.el.querySelector("img").classList.remove("hide"),this.changeState(r)}render(e){e.insertAdjacentElement("beforeEnd",this.el)}}class o{constructor(){this.el=document.createElement("div"),this.el.classList.add("game-table-info"),this.lines={}}render(e){e.insertAdjacentElement("beforeEnd",this.el)}hide(){this.el.classList.add("hide")}show(){this.el.classList.remove("hide")}addLine(e,t){const s=document.createElement("div");s.textContent=t,this.lines[e]={constPart:t,htmlElement:s},this.el.insertAdjacentElement("beforeEnd",s)}changeLineMessage(e,t){const{htmlElement:s,constPart:n}=this.lines[e];s.textContent=`${n} ${t}`}}function d(e,t){return Math.round(e-.5+Math.random()*(t-e))}class h{constructor(e){this.el=document.createElement("div"),this.el.classList.add("game"),this.gameTableInfo=new o,this.goblinTimeInterval=1e3,this.maxGoblinCount=5,this.gameInterval=null,this.gameField=e,this.state={goblinCount:0,success:0},this.activeCellPosition=null,this.setListeners()}static createEndGameMessage(){const e=document.createElement("div");return e.classList.add("end-message"),e.textContent="Вы проиграли!!",e}gameOver(){clearInterval(this.gameInterval),this.gameField.el.classList.add("hide"),this.el.insertAdjacentElement("beforEend",h.createEndGameMessage())}setListeners(){this.gameField.addClickListener((e=>{const{target:t}=e,s=t.closest(".cell");if(!s)return;const n={row:Number(s.dataset.row),column:Number(s.dataset.column)};this.gameField.getCellState(n)===r&&(this.state.success+=1,this.state.goblinCount-=1,this.gameTableInfo.changeLineMessage("points",this.state.success)),this.gameField.clickCell(n)}))}render(e){e.insertAdjacentElement("beforeEnd",this.el)}start(){this.gameTableInfo.render(this.el),this.gameField.render(this.el),this.gameTableInfo.addLine("points","kill: "),this.gameTableInfo.changeLineMessage("points",this.state.success),this.gameInterval=setInterval((()=>{const e={row:d(0,this.gameField.rowCount),column:d(0,this.gameField.columnCount)};for(;this.activeCellPosition&&e.row===this.activeCellPosition.row&&e.column===this.activeCellPosition.column;)e.row=d(0,this.gameField.rowCount),e.column=d(0,this.gameField.columnCount);this.state.goblinCount+=1,this.changeActiveCell(e),this.state.goblinCount>this.maxGoblinCount&&this.gameOver()}),this.goblinTimeInterval)}changeActiveCell(e){this.activeCellPosition&&this.gameField.deactivate(this.activeCellPosition),this.gameField.activate(e),this.activeCellPosition=e}}class m extends class{constructor(e,t,s){this.columnCount=t,this.rowCount=e,this.CellClass=s,this.field=null,this.init()}checkFieldBoundary(e){let{column:t,row:s}=e;if(s>=this.field.length||t>=this.field[s].length||t<0||s<0)throw new Error("out of field bound")}init(){this.field=Array(this.rowCount).fill(0).map(((e,t)=>Array(this.columnCount).fill(0).map(((e,s)=>new this.CellClass({row:t,column:s})))))}getCellState(e){let{column:t,row:s}=e;throw new Error('"getCellState" not implement')}clickCell(e){let{column:t,row:s}=e;throw new Error('"clickCell" not implement')}activate(e){let{column:t,row:s}=e;throw new Error('"activate" not implement')}deactivate(e){let{column:t,row:s}=e;throw new Error('"deactivate" not implement')}render(e){throw new Error('"render" not implement')}}{constructor(e,t,s){super(e,t,s),this.el=document.createElement("div"),this.el.classList.add("game-field")}getCellState(e){let{column:t,row:s}=e;return this.checkFieldBoundary({column:t,row:s}),this.field[s][t].state}activate(e){let{column:t,row:s}=e;this.checkFieldBoundary({column:t,row:s}),this.field[s][t].activate()}deactivate(e){let{column:t,row:s}=e;this.checkFieldBoundary({column:t,row:s}),this.field[s][t].deactivate()}clickCell(e){let{column:t,row:s}=e;this.checkFieldBoundary({column:t,row:s}),this.field[s][t].click()}addClickListener(e){this.el.addEventListener("click",e)}render(e){e.insertAdjacentElement("beforeEnd",this.el),this.field.forEach((e=>{e.forEach((e=>{e.render(this.el)}))}))}}class u{constructor(e){this.el=document.createElement("div"),this.el.classList.add("input-form"),this.inputLines={},this.inptuField=u.createInputField(),this.button=u.createButton(e),this.errorMessage=document.createElement("span"),this.errorMessage.classList.add("error-message","hide"),this.el.insertAdjacentElement("beforeEnd",this.inptuField),this.el.insertAdjacentElement("beforeEnd",this.errorMessage),this.el.insertAdjacentElement("beforeEnd",this.button)}static createInputLine(e){const t=document.createElement("div");t.classList.add("input-line");const s=document.createElement("div");s.classList.add("input-label");const n=document.createElement("span");n.classList.add("input-line-label"),n.textContent=e,s.insertAdjacentElement("beforeEnd",n);const i=document.createElement("input");return t.insertAdjacentElement("beforeEnd",s),t.insertAdjacentElement("beforeEnd",i),t}static createInputField(){const e=document.createElement("div");return e.classList.add("input-field"),e}static createButton(e){const t=document.createElement("button");return t.type="button",t.classList.add("input-button"),t.textContent=e,t}addInputLine(e,t){this.inputLines[e]=u.createInputLine(t),this.inptuField.insertAdjacentElement("beforeEnd",this.inputLines[e])}getInputValue(e){return this.inputLines[e].querySelector("input").value.trim()}resetInput(e){this.inputLines[e].querySelector("input").value=""}resetInputs(){Object.keys(this.inputLines).forEach((e=>this.resetInput(e)))}addButtonListener(e){this.button.addEventListener("click",e)}showErrorMessage(e,t){this.errorMessage.classList.remove("hide"),this.errorMessage.textContent=e,setTimeout((()=>{this.errorMessage.classList.add("hide")}),t)}render(e){e.insertAdjacentElement("beforeEnd",this.el)}}const E=e.p+"ca04c95dad4e036a23ac.png",g=0,p=1;class k extends class{constructor(e,t){this.name=e,this.state=t}changeState(e){this.state=e}}{constructor(e,t){super(e,t),this.el=document.createElement("div"),this.el.classList.add("task"),this.el.dataset.name=e;const s=document.createElement("span");s.classList.add("task-name"),s.textContent=e;const n=document.createElement("div");n.classList.add("task-state-block");const i=document.createElement("img");i.classList.add("task-state-img"),i.setAttribute("src",E),i.classList.add("hide"),this.el.insertAdjacentElement("beforeEnd",s),this.el.insertAdjacentElement("beforeEnd",n),n.insertAdjacentElement("beforeEnd",i)}changeState(e){super.changeState(e);const t=this.el.querySelector(".task-state-img");this.state!==g?t.classList.add("hide"):t.classList.remove("hide")}render(e){e.insertAdjacentElement("beforeEnd",this.el)}}class L extends class{constructor(e){this.TaskClass=e,this.tasks={}}addTask(e){this.tasks[e]=new this.TaskClass(e,p)}getFilteredTasks(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const s=Object.fromEntries(Object.entries(this.tasks).filter((t=>t[1].state===e)));return""===t?s:(n=s,i=new RegExp(`^${t}`,"i"),Object.fromEntries(Object.entries(n).filter((e=>i.test(e[0])))));var n,i}}{constructor(e){super(e),this.el=document.createElement("div"),this.el.classList.add("tasks");const t=document.createElement("span");t.textContent="TOP Tasks",this.errorMessage=document.createElement("span"),this.errorMessage.classList.add("error-message","hide"),this.el.insertAdjacentElement("beforeEnd",t),this.inputBlock=L.createInputBlock(),this.pinnedTasks=L.createTaskListBlock("Pinned: ","No pinned tasks"),this.unpinnedTasks=L.createTaskListBlock("All Tasks: ","No tasks found"),this.el.insertAdjacentElement("beforeEnd",this.inputBlock),this.el.insertAdjacentElement("beforeEnd",this.errorMessage),this.el.insertAdjacentElement("beforeEnd",this.pinnedTasks),this.el.insertAdjacentElement("beforeEnd",this.unpinnedTasks),this.setListeners()}static createInputBlock(){const e=document.createElement("div");e.classList.add("tasks-block");const t=document.createElement("input");return e.insertAdjacentElement("beforeEnd",t),e}static createTaskListBlock(e,t){const s=document.createElement("div");s.classList.add("tasks-block");const n=document.createElement("label");n.textContent=e;const i=document.createElement("div");i.classList.add("task-list");const r=document.createElement("span");return r.classList.add("tasks-block-empty-msg"),r.textContent=t,s.insertAdjacentElement("beforeEnd",n),s.insertAdjacentElement("beforeEnd",r),s.insertAdjacentElement("beforeEnd",i),s}setListeners(){const e=this.inputBlock.querySelector("input");this.el.addEventListener("keypress",(t=>{const s=e.value.trim();"Enter"===t.key&&(0!==s.length?(this.addTask(s),e.value=""):this.showError("Empty task name",3e3))})),this.el.addEventListener("click",(e=>{const{target:t}=e,s=t.closest(".task-state-block");if(!s)return;const n=s.closest(".task");this.changeTaskState(n.dataset.name),this.allRedraw()})),e.addEventListener("input",(()=>{const t=e.value.trim();this.redrawTasksBlock(this.unpinnedTasks,p,t)}))}changeTaskState(e){const t=this.tasks[e];let s=t.state;switch(t.state){case g:s=p;break;case p:s=g}t.changeState(s)}showError(e,t){this.errorMessage.classList.remove("hide"),this.errorMessage.textContent=e,setTimeout((()=>{this.errorMessage.classList.add("hide")}),t)}redrawTasksBlock(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const n=e.querySelector(".task-list");n.innerHTML="";const i=this.getFilteredTasks(t,s),r=e.querySelector(".tasks-block-empty-msg");0!==Object.keys(i).length?(r.classList.add("hide"),Object.entries(i).forEach((e=>{e[1].render(n)}))):r.classList.remove("hide")}allRedraw(){const e=this.inputBlock.querySelector("input").value.trim();this.redrawTasksBlock(this.unpinnedTasks,p,e),this.redrawTasksBlock(this.pinnedTasks,g)}addTask(e){e in this.tasks||(super.addTask(e),this.redrawTasksBlock(this.unpinnedTasks,p))}render(e){e.insertAdjacentElement("beforeEnd",this.el)}}!function(){const e=document.querySelector(".controls"),t=document.querySelector(".task-field"),s=document.createElement("button");s.classList.add("control"),s.textContent="Goblynslayer",e.insertAdjacentElement("beforeEnd",s),s.addEventListener("click",(()=>{t.innerHTML="";const e=new m(4,4,c),s=new h(e);s.render(t),s.start()}))}(),function(){const e=document.querySelector(".controls"),t=document.querySelector(".task-field"),s=document.createElement("button");s.classList.add("control"),s.textContent="Top Tasks",e.insertAdjacentElement("beforeEnd",s),s.addEventListener("click",(()=>{t.innerHTML="",new L(k).render(t)}))}(),function(){const e=document.querySelector(".controls"),t=document.querySelector(".task-field"),r=document.createElement("button");r.classList.add("control"),r.textContent="Gallery",e.insertAdjacentElement("beforeEnd",r),r.addEventListener("click",(()=>{t.innerHTML="";const e=new u("Добавить");new i(e,n,s).render(t)}))}()})();