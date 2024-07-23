function handleSubmit(event) {
            event.preventDefault();
            document.getElementById('review-form').reset();
            document.getElementById('message-sent').style.display = 'block';
        }

        function handleRating() {
            const stars = document.querySelectorAll('.rating input');
            stars.forEach((star, index) => {
                star.addEventListener('change', () => {
                    const rating = index + 1;
                    alert(`You have rated ${rating} star${rating > 1 ? 's' : ''}`);
                });
            });
        }
        document.addEventListener('DOMContentLoaded', handleRating);