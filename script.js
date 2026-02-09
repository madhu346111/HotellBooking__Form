
function enterBooking(){
  document.getElementById('welcomePage').style.display='none';
  document.getElementById('bookingPage').style.display='block';
}


let selectedRoom = '';
let roomPrice = 0;
document.querySelectorAll('.room-selection img').forEach(img=>{
  img.addEventListener('click', ()=>{
    document.querySelectorAll('.room-selection img').forEach(i=>i.classList.remove('selected'));
    img.classList.add('selected');
    selectedRoom = img.dataset.room;
    roomPrice = img.dataset.price;
    document.getElementById('amount').value = "₹" + roomPrice;
  });
});


document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;

  if(!name || !email || !phone || !checkin || !checkout || !selectedRoom){
    alert("Please fill all fields and select a room type.");
    return;
  }
  if(!/^\d{10}$/.test(phone)){
    alert("Phone number must be 10 digits.");
    return;
  }
  if(new Date(checkout) <= new Date(checkin)){
    alert("Check-Out must be after Check-In.");
    return;
  }

  
  document.getElementById('bookingPage').style.display='none';
  document.getElementById('successPage').style.display='block';

  
  document.getElementById('showRoomType').innerText = "Room Type: " + selectedRoom;
  document.getElementById('showName').innerText = "Name: " + name;
  document.getElementById('showEmail').innerText = "Email: " + email;
  document.getElementById('showPhone').innerText = "Phone: " + phone;
  document.getElementById('showCheckin').innerText = "Check-In: " + checkin;
  document.getElementById('showCheckout').innerText = "Check-Out: " + checkout;
  document.getElementById('showAmount').innerText = "Amount:₹ " + roomPrice;
});

