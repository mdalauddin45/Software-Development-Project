const loadData=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=> displyUser(data))
    .catch(error => console.error('Error:', error));
}
const displyUser = (users)=>{
    console.log(users);
    const userContainer = document.getElementById('userCards');
    users.forEach(user => {
        const userCard = 
        `
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">Username: ${user.username}</p>
              <p class="card-text">Email: ${user.email}</p>
              <p class="card-text">Phone: ${user.phone}</p>
              <p class="card-text">Website: ${user.website}</p>
              <p class="card-text">City: ${user.address.city}</p>
            </div>
          </div>
        </div>
        `
        userContainer.innerHTML += userCard;
    });
}

loadData();