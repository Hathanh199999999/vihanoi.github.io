//banner
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".banner").classList.add("show");
});
//thương hiệu
document.addEventListener("DOMContentLoaded", function() {
  var threshold = 0.5; // Ngưỡng hiển thị
  var options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold
  };

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
              entry.target.classList.add("show");
          }
      });
  }, options);

  var targets = document.querySelectorAll('.spthuonghieu');
  targets.forEach(function(target) {
      observer.observe(target);
  });
});

//lý do chọn
document.addEventListener("DOMContentLoaded", function() {
  var threshold = 0.5; // Ngưỡng hiển thị
  var options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold
  };

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
              entry.target.classList.add("show");
          }
      });
  }, options);

  var targets = document.querySelectorAll('.lydochon');
  targets.forEach(function(target) {
      observer.observe(target);
  });
});
//thương hiệu
document.addEventListener("DOMContentLoaded", function() {
    var threshold = 0.5; // Ngưỡng hiển thị
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: threshold
    };
  
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
                entry.target.classList.add("show");
            }
        });
    }, options);
  
    var targets = document.querySelectorAll('.chungnhanaaa');
    targets.forEach(function(target) {
        observer.observe(target);
    });
  });

//đánh giá
document.addEventListener("DOMContentLoaded", function() {
  var threshold = 0.5; // Ngưỡng hiển thị
  var options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold
  };

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
              entry.target.classList.add("show");
          }
      });
  }, options);

  var targets = document.querySelectorAll('.testimonial');
  targets.forEach(function(target) {
      observer.observe(target);
  });
});


//dịch vụ
document.addEventListener("DOMContentLoaded", function() {
  var threshold = 0.5; // Ngưỡng hiển thị
  var options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold
  };

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
              entry.target.classList.add("show");
          }
      });
  }, options);

  var targets = document.querySelectorAll('.service');
  targets.forEach(function(target) {
      observer.observe(target);
  });
});


//chân trang
document.addEventListener("DOMContentLoaded", function() {
  var threshold = 0.5; // Ngưỡng hiển thị
  var options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold
  };

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
              entry.target.classList.add("show");
          }
      });
  }, options);

  var targets = document.querySelectorAll('.footer');
  targets.forEach(function(target) {
      observer.observe(target);
  });
});







//gửi thông tin chân trang

const btnGui = document.getElementById('btngui');
const tenInput = document.querySelector('.form-container input[type="text"]'); // Assuming both inputs are within the form-container
const sdtInput = document.querySelector('.form-container input[type="text"] + input[type="text"]'); // Assuming phone number input comes after name input

btnGui.addEventListener('click', function() {
  const ten = tenInput.value.trim();
  const sdt = sdtInput.value.trim();

  if (ten === '' || sdt === '') {
    alert('Vui lòng nhập đầy đủ tên và số điện thoại!');
  } else {
    alert('Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.');
    // Optionally, clear the input fields here
    tenInput.value = '';
    sdtInput.value = '';
  }
});
//Đánh giá
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



// Hiển thị nút khi cuộn xuống 20px từ đỉnh trang
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Cuộn lên đầu trang khi nhấn nút
document.getElementById("backToTopBtn").onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// This script will handle form submission and other interactions
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thông tin của bạn đã được gửi thành công!");
        form.reset();
    });
});





// Get the promotion images
var promotionImages = document.getElementsByClassName("promotion-image");
var popup = document.getElementById("popup");

// Set the first image as active
promotionImages[0].classList.add("active");

// Set the index of the current active image
var currentIndex = 0;

// Function to change the active image
function changeImage() {
    // Remove active class from the current image
    promotionImages[currentIndex].classList.remove("active");

    // Increment the index, wrapping around to 0 if necessary
    currentIndex = (currentIndex + 1) % promotionImages.length;

    // Add active class to the new active image
    promotionImages[currentIndex].classList.add("active");
}

// Change the image every 3 seconds
setInterval(changeImage, 3000);

// Show the popup after 5 seconds when the page loads
window.onload = function() {
    setTimeout(function() {
        popup.style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
}

// Close the popup when the user clicks outside of it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}






//livechat
document.addEventListener("DOMContentLoaded", function () {
    var livechat = document.getElementById("livechat");
    var chatPopup = document.getElementById("chatPopup");
    var closeChat = document.getElementById("closeChat");
    var sendChat = document.getElementById("sendChat");
    var chatInput = document.getElementById("chatInput");
    var chatBody = document.getElementById("chatBody");

    livechat.addEventListener("click", function () {
        chatPopup.style.display = "block";
    });

    closeChat.addEventListener("click", function () {
        chatPopup.style.display = "none";
    });

    sendChat.addEventListener("click", function () {
        var message = chatInput.value;
        if (message.trim()) {
            var messageElement = document.createElement("div");
            messageElement.textContent = message;
            messageElement.className = "chat-message";
            chatBody.appendChild(messageElement);
            chatInput.value = "";
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    });

    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendChat.click();
        }
    });
});


