<script>
document.addEventListener('DOMContentLoaded', function() {
  function lockShippingAsBilling() {
    const sameAddressCheckbox = document.querySelector('input[name="shippingAsBilling"]') || 
                               document.querySelector('#shipping-billing-same-checkbox');
    if (sameAddressCheckbox) {
      sameAddressCheckbox.checked = true;
      sameAddressCheckbox.disabled = true;
      const label = sameAddressCheckbox.closest('label') || 
                    document.querySelector('label[for="' + sameAddressCheckbox.id + '"]');
      if (label) {
        label.textContent = 'Billing address will be the same as shipping address';
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
