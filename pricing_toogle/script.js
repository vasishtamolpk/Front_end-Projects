function togglePricing() {
    let toggle = document.getElementById('toggle');
    let basicPrice = document.getElementById('basicPrice');
    let premiumPrice = document.getElementById('premiumPrice');
  
    if (toggle.checked) {
      basicPrice.innerText = "$100<span>/year</span>";
      premiumPrice.innerText = "$200<span>/year</span>";
    } else {
      basicPrice.innerText = "$10<span>/month</span>";
      premiumPrice.innerText = "$20<span>/month</span>";
    }
  }
  