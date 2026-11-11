// HTML elemanlarını seçiyoruz
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Ekle butonuna tıklandığında çalışacak fonksiyon
addBtn.addEventListener('click', addTodo);

// Enter tuşuna basıldığında da ekleme yapılabilmesi için
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const taskText = todoInput.value.trim(); // Boşlukları temizle

    // Eğer input boşsa uyarı ver ve işlemi durdur
    if (taskText === "") {
        alert("Lütfen geçerli bir görev yazın!");
        return;
    }

    // 1. Yeni bir 'li' elemanı oluştur
    const li = document.createElement('li');

    // 2. Görev metnini ekle
    li.textContent = taskText;

    // 3. Silme butonu oluştur
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Sil";
    deleteBtn.classList.add('delete-btn');

    // Silme butonuna tıklandığında ilgili görevi (li) listeden kaldır
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    // 4. Silme butonunu 'li' içerisine yerleştir
    li.appendChild(deleteBtn);

    // 5. 'li' elemanını ana liste ('ul') içine ekle
    todoList.appendChild(li);

    // 6. Input alanını temizle ve odaklan
    todoInput.value = "";
    todoInput.focus();
}