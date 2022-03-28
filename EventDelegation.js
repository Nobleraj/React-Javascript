//If we have product list like this
<div id="products">
  <li id="shirt">Shirt</li>
  <li id="Pant">Pant</li>
  <li id="Wallet">Wallet</li>
</div>

//we no need to add listener for each products that will fill our webpage completely with these events and its gonna take lot of memory

//Event Delegation - we provide the event listner to the parent and access the child elements with the help of that event
document.querySelector('#products').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    window.location.href += '#' + e.target.id;
  }
});
