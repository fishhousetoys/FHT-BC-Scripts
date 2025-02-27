<script>
document.addEventListener('DOMContentLoaded', function() {
  function lockShippingAsBilling() {
    const sameAddressCheckbox = document.querySelector('#sameAsBilling');
    if (sameAddressCheckbox) {
      sameAddressCheckbox.checked = true; // Force checked
      sameAddressCheckbox.disabled = true; // Lock it
      
      // Hide it (remove this block if you want it visible but locked)
      const checkboxContainer = sameAddressCheckbox.closest('div') || sameAddressCheckbox.parentElement;
      if (checkboxContainer) {
        checkboxContainer.style.display = 'none';
      }
    }
  }
  
  lockShippingAsBilling();
  
  const checkoutContainer = document.querySelector('#checkout-app');
  if (checkoutContainer) {
    const observer = new MutationObserver(function() {
      lockShippingAsBilling();
    });
    observer.observe(checkoutContainer, { childList: true, subtree: true });
  }
});
</script>
