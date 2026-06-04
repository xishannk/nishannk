// ১. অ্যাকর্ডিয়ন বা ড্রপডাউন মেনু সচল করার কোড (ক্লিক করলে ওপেন/ক্লোজ হবে)
document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
        // আগে থেকে কোনো মেনু খোলা থাকলে তা বন্ধ করার জন্য
        const panel = item.nextElementSibling;
        
        // টগল ইফেক্ট
        item.classList.toggle('active');
        
        // এখানে আপনি পরবর্তীতে প্রতিটা লেয়ারের ভেতরের ইমেজগুলো দেখতে পাবেন
        alert(item.querySelector('span').innerText + " সেকশনটি সফলভাবে কাজ করছে!");
    });
});

// ২. "ADD TO LIBRARY" বাটনে ক্লিক করলে যা হবে
document.querySelector('.action-btn').addEventListener('click', () => {
    const url = document.getElementById('imageUrl').value;
    const value = document.getElementById('layerValue').value;
    const type = document.getElementById('layerType').value;

    if(!url || !value) {
        alert("দয়া করে IMAGE URL এবং VALUE দুটিই সঠিকভাবে লিখুন!");
        return;
    }

    alert("সফল হয়েছে!\nইউআরএল: " + url + "\nভ্যালু: " + value + "\nটাইপ: " + type + "\n\nএটি আপনার লাইব্রেরিতে যুক্ত করা হচ্ছে...");
    
    // ইনপুট বক্স খালি করার জন্য
    document.getElementById('imageUrl').value = '';
    document.getElementById('layerValue').value = '';
});
