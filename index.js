
  function initShoppingList() {
    const itemList = document.getElementById('list');
    const addItemButton = document.getElementById('addBtn');
    const markPurchasedButton = document.getElementById('markPurchasedBtn');
    const clearListButton = document.getElementById('clearBtn');
    const inputItem = document.getElementById('item');

    let shoppingList = [];

    function addToList() {
      itemList.innerHTML = '';
      shoppingList.forEach((item, index) => {
        const listItem = createListItem(item, index);
        itemList.appendChild(listItem);
      });
    }

    // Function to create a list
    function createListItem(item, index) {
      const listItem = document.createElement('li');
      listItem.textContent = item.name;

      // Add edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit', 'hidden'); 
      editButton.addEventListener('click', () => editItem(index));
      listItem.appendChild(editButton);

      // Add delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete', 'hidden'); 
      deleteButton.addEventListener('click', () => deleteItem(index));
      listItem.appendChild(deleteButton);

     
      listItem.addEventListener('click', () => togglePurchased(index));

      if (item.purchased) {
        listItem.classList.add('purchased');
      }

      return listItem;
    }

    //add a new item to the shopping list
    function addItem() {
      const itemName = inputItem.value.trim();
      if (itemName !== '') {
        shoppingList.push({ name: itemName, purchased: false });
        addToList();
        inputItem.value = '';
      }
    }

 
    function togglePurchased(index) {
      shoppingList[index].purchased = !shoppingList[index].purchased;
      addToList();
    }

    //delete an item
    function deleteItem(index) {
      shoppingList.splice(index, 1);
      addToList();
    }

    //clear the entire shopping list
    function clearList() {
      shoppingList = [];
      addToList();
    }

    //mark all items as purchased
    function markAllPurchased() {
      shoppingList.forEach(item => {
        item.purchased = true;
      });
      addToList();
    }

    
    addItemButton.addEventListener('click', addItem);
    markPurchasedButton.addEventListener('click', markAllPurchased);
    clearListButton.addEventListener('click', clearList);

  
    addToList();
  }


  initShoppingList();
