// adapted from https://www.youtube.com/watch?v=1RnzyplvqEg&t=562s

let addToCartButtons = document.getElementsByClassName('btn-primary')
let cartContainer = document.getElementsByTagName('tbody')[0]
let quantityFields = document.getElementsByClassName('num')
let delete_buttons = document.getElementsByClassName('uk-button-danger')

for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart)
    
}

function addToCart(event){

    let itemContainer = document.createElement('tr')
    let btn = event.target
    let btnParent = btn.parentElement
    let itemName = btnParent.children[0].innerText

    itemContainer.innerHTML = `
    <td><input class="uk-checkbox" type="checkbox"></td>
    <td class="uk-table-link">
        <h3 class = "item-name" style="color: rgb(255, 255, 255)">${itemName}</h3>
    </td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>
`

    cartContainer.append(itemContainer)


    for(let i = 0; i < quantityFields.length; i++){
        quantityFields[i].value = 1
                
    }

    for(let i = 0; i < delete_buttons.length; i++){
        delete_buttons[i].addEventListener('click', removeItem)
    }

    grandTotal()
   
}

function grandTotal(){
    let total = 0
    let grand_total = document.getElementsByClassName('grand-total')[0]
    for(let i = 0; i < quantityFields.length; i++){
        total+=1
    }
    grand_total.children[0].innerText = total
    grand_total.children[0].style.fontWeight = 'bold'
    console.log(total)
}


function removeItem(event){
    del_btn = event.target
    del_btn_parent = del_btn.parentElement.parentElement
    del_btn_parent.remove()
    console.log(del_btn)
    grandTotal()
    
}

// guided by https://stackoverflow.com/questions/48804191/changing-html-content-with-javascript-based-on-dropdown-selection

// Location
var dropDown = document.getElementById("dropDown"),
   myWrappers = [
      document.getElementById("wrapperOne"),
      document.getElementById("wrapperTwo"),
      document.getElementById("wrapperThree")
   ];
    myWrappers[0].style.display = "none";
    myWrappers[1].style.display = "none";
    myWrappers[2].style.display = "none";
function test() {
for (i=0; i<myWrappers.length; i++){
    if(dropDown.value === "default"){ 
       myWrappers[i].style.display = "none";
     } else if(dropDown.value === "one"){
       myWrappers[i].style.display = "none";
       myWrappers[0].style.display = "block";
      } else if(dropDown.value === "two"){
       myWrappers[i].style.display = "none";
       myWrappers[1].style.display = "block";
      } else if(dropDown.value === "three"){
       myWrappers[i].style.display = "none";
       myWrappers[2].style.display = "block";
      }
 }
}


// Date
var dropDown2 = document.getElementById("dropDown2"),
   myWrappers2 = [
      document.getElementById("wrapperFour"),
      document.getElementById("wrapperFive"),
      document.getElementById("wrapperSix"),
      document.getElementById("wrapperSeven"),
      document.getElementById("wrapperEight")
   ];
    myWrappers2[0].style.display = "none";
    myWrappers2[1].style.display = "none";
    myWrappers2[2].style.display = "none";
    myWrappers2[3].style.display = "none";
    myWrappers2[4].style.display = "none";
function test2() {
for (i=0; i<myWrappers2.length; i++){
    if(dropDown2.value === "default1"){ 
       myWrappers2[i].style.display = "none";
     } else if(dropDown2.value === "four"){
       myWrappers2[i].style.display = "none";
       myWrappers2[0].style.display = "block";
      } else if(dropDown2.value === "five"){
       myWrappers2[i].style.display = "none";
       myWrappers2[1].style.display = "block";
      } else if(dropDown2.value === "six"){
       myWrappers2[i].style.display = "none";
       myWrappers2[2].style.display = "block";
      } else if(dropDown2.value === "seven"){
        myWrappers2[i].style.display = "none";
        myWrappers2[3].style.display = "block";
      } else if(dropDown2.value === "eight"){
        myWrappers2[i].style.display = "none";
        myWrappers2[4].style.display = "block";
      } 
 }
}

// Time of Day
var dropDown3 = document.getElementById("dropDown3"),
   myWrappers3 = [
      document.getElementById("wrapperNine"),
      document.getElementById("wrapperTen"),
      document.getElementById("wrapperEleven"),
   ];
    myWrappers3[0].style.display = "none";
    myWrappers3[1].style.display = "none";
    myWrappers3[2].style.display = "none";
function test3() {
for (i=0; i<myWrappers3.length; i++){
    if(dropDown3.value === "default2"){ 
       myWrappers3[i].style.display = "none";
     } else if(dropDown3.value === "nine"){
       myWrappers3[i].style.display = "none";
       myWrappers3[0].style.display = "block";
      } else if(dropDown3.value === "ten"){
       myWrappers3[i].style.display = "none";
       myWrappers3[1].style.display = "block";
      } else if(dropDown3.value === "eleven"){
       myWrappers3[i].style.display = "none";
       myWrappers3[2].style.display = "block";
      } 
 }
}
