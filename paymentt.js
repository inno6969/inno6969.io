document.getElementById('payment-form').addEventListener('submit', function (event) {
            event.preventDefault();

            // Simulate payment processing
            setTimeout(function () {
                document.getElementById('success-message').style.display = 'block';
            }, 1000);
        });