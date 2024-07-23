const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

        const renderCalendar = () => {
            const calendar = document.getElementById('calendar');
            const month = new Date().getMonth() + 1;
            const year = new Date().getFullYear();
            const totalDays = daysInMonth(month, year);
            const availableDays = [1,3, 5, 7, 10, 12, 14, 15,23, 17, 20, 24, 26, 28,30,31]; // Dummy data: available days in the month

            for (let day = 1; day <= totalDays; day++) {
                const dayElement = document.createElement('div');
                dayElement.classList.add('day');
                dayElement.textContent = day;

                if (availableDays.includes(day)) {
                    dayElement.classList.add('available');
                } else {
                    dayElement.classList.add('booked');
                }

                dayElement.addEventListener('click', () => {
                    if (dayElement.classList.contains('available')) {
                        alert(`You have selected ${day}/${month}/${year}`);
                    } else {
                        alert('This slot is already booked.');
                    }
                });

                calendar.appendChild(dayElement);
            }
        };

        document.addEventListener('DOMContentLoaded', renderCalendar);