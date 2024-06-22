document.addEventListener("DOMContentLoaded", () => {
    const eventForm = document.getElementById("event-form");

    eventForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const eventName = document.getElementById("event-name").value;
        const eventDate = document.getElementById("event-date").value;
        const eventType = document.getElementById("event-type").value;

        console.log(`Event Created: ${eventName}, Date: ${eventDate}, Type: ${eventType}`);
        
        alert(`Event "${eventName}" created successfully!`);
        
        eventForm.reset();
    });

    // Guest List Management
    document.getElementById('add-guest-btn').addEventListener('click', () => {
        const guestName = document.getElementById('guest-name').value;
        const guestEmail = document.getElementById('guest-email').value;

        const guestList = document.getElementById('guest-list-container');
        const guestItem = document.createElement('div');
        guestItem.classList.add('guest-item');
        guestItem.innerHTML = `<p>Name: ${guestName}, Email: ${guestEmail}</p>`;
        
        guestList.appendChild(guestItem);

        document.getElementById('guest-name').value = '';
        document.getElementById('guest-email').value = '';
    });

    // Budget Tracking
    document.getElementById('add-budget-item-btn').addEventListener('click', () => {
        const itemDescription = document.getElementById('budget-item-description').value;
        const itemCost = document.getElementById('budget-item-cost').value;

        const budgetList = document.getElementById('budget-list-container');
        const budgetItem = document.createElement('div');
        budgetItem.classList.add('budget-item');
        budgetItem.innerHTML = `<p>Item: ${itemDescription}, Cost: $${itemCost}</p>`;
        
        budgetList.appendChild(budgetItem);

        document.getElementById('budget-item-description').value = '';
        document.getElementById('budget-item-cost').value = '';
    });

    // Vendor Coordination
    document.getElementById('add-vendor-btn').addEventListener('click', () => {
        const vendorName = document.getElementById('vendor-name').value;
        const vendorService = document.getElementById('vendor-service').value;

        const vendorList = document.getElementById('vendor-list-container');
        const vendorItem = document.createElement('div');
        vendorItem.classList.add('vendor-item');
        vendorItem.innerHTML = `<p>Vendor: ${vendorName}, Service: ${vendorService}</p>`;
        
        vendorList.appendChild(vendorItem);

        document.getElementById('vendor-name').value = '';
        document.getElementById('vendor-service').value = '';
    });

    // Scheduling
    document.getElementById('add-schedule-item-btn').addEventListener('click', () => {
        const scheduleDescription = document.getElementById('schedule-description').value;
        const scheduleTime = document.getElementById('schedule-time').value;

        const scheduleList = document.getElementById('schedule-list-container');
        const scheduleItem = document.createElement('div');
        scheduleItem.classList.add('schedule-item');
        scheduleItem.innerHTML = `<p>Task: ${scheduleDescription}, Time: ${scheduleTime}</p>`;
        
        scheduleList.appendChild(scheduleItem);

        document.getElementById('schedule-description').value = '';
        document.getElementById('schedule-time').value = '';
    });
});
