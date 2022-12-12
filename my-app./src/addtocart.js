var additemId = 0;

export function del(item) {
    document.getElementById(item).remove();
} 


export function addtocart (item) {
    additemId += 1;

    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',additemId);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[1].currentSrc);
    var title = document.createElement('div');
    title.classList.add('H3')
    title.innerText = item.children[0].innerText;
    var label = document.createElement('div')
    label.innerText = item.children[2].children[0].innerText;
    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);
    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete:';
    delBtn.setAttribute('onClick','del('+additemId+')');
    var cartitems = document.getElementById('Cardtitle');
    selectedItem.append(img);    
    selectedItem.append(title);
    selectedItem.append(label);  
    selectedItem.append(delBtn);
    cartitems.append(selectedItem);


}