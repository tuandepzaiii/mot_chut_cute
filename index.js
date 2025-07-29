// ========================================
// KHỞI TẠO NỘI DUNG BỨC THƯ
// ========================================

// Lời mở đầu hiển thị khi click vào sticker
const contentLetterSrart_actived = "Nhấn vào hình bên dưới để xem tiếp nha em!!!" 

// Nội dung chính của bức thư - sẽ hiển thị khi check checkbox
const mainContentLetter = "Hôm nay là một ngày rất đẹp bởi có một nàng công chúa đã ra đời👸🏻. Nhân danh ông bụt, ta chúc con sẽ luôn luôn vui vẻ, yêu đời và tràn đầy năng lượng. Hãy mãi là cô gái xinh xắn và cute như vậy nha!!!🥳❤💕 Happy birthday to you!🎊";

// ========================================
// THIẾT LẬP HÌNH ẢNH
// ========================================

// Thiết lập hình ảnh chính (avatar) hiển thị ở góc phải dưới
let imgStart = document.querySelector(".myAI");
imgStart.src = "avt2.jpg";           // Đường dẫn đến file ảnh
imgStart.width = 100;                // Chiều rộng 100px
imgStart.height = 300;               // Chiều cao 300px

// Thiết lập hình ảnh xuất hiện trong nội dung bức thư
let imgLetter = document.querySelector(".img");
imgLetter.src = "cute-young-boy-kid-wearing-vest-and-hat-free-png.jpg"; 
// Hình ảnh này sẽ xuất hiện sau khi nội dung bức thư được viết xong

// ========================================
// CHUẨN BỊ HIỆU ỨNG GÕ CHỮ
// ========================================

// Tách từng ký tự của lời mở đầu để tạo hiệu ứng gõ chữ
const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

// ========================================
// SỰ KIỆN CLICK VÀO STICKER - HIỆU ỨNG GÕ CHỮ MỞ ĐẦU
// ========================================

document.querySelector(".sticker").addEventListener("click", function () {
    // Xóa nội dung cũ trong contentLetter
    document.querySelector(".contentLetter").innerHTML = "";
    
    // Kích hoạt animation cho startLetter (di chuyển vào giữa màn hình)
    document.querySelector(".startLetter").classList.add("active")
    
    // Delay 1 giây trước khi bắt đầu gõ chữ
    setTimeout(() => {
        // Duyệt qua từng ký tự trong lời mở đầu
        splitContentLetterSrart_actived.forEach((val, index) => {
            // Delay 50ms cho mỗi ký tự để tạo hiệu ứng gõ máy đánh chữ
            setTimeout(() => {
                // Thêm từng ký tự vào contentLetter
                document.querySelector(".contentLetter").innerHTML += val;
                
                // Kiểm tra nếu đã gõ xong ký tự cuối cùng
                if (index == contentLetterSrart_actived.length - 1) {
                    // Delay 1 giây sau khi gõ xong, rồi hiển thị nút "recieve"
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index) // Delay tăng dần: 0ms, 50ms, 100ms, 150ms...
        })
    }, 1000) // Delay 1 giây trước khi bắt đầu gõ
})

// ========================================
// SỰ KIỆN CHECKBOX - HIỆU ỨNG GÕ CHỮ NỘI DUNG CHÍNH
// ========================================

document.querySelector("#mess").addEventListener("change", function () {
    // Kiểm tra nếu checkbox được check
    if (this.checked == true) {
        // Kích hoạt hiển thị nội dung chính
        document.querySelector(".content").classList.add("actived")
        
        // Tách từng ký tự của nội dung chính
        const splitMainContentLetter = mainContentLetter.split("");

        // Duyệt qua từng ký tự và gõ với delay 50ms
        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                // Thêm từng ký tự vào mainContent
                document.querySelector(".mainContent").innerHTML += val;
                
                // Kiểm tra nếu đã gõ xong ký tự cuối cùng
                if (index == mainContentLetter.length - 1) {
                    // Hiển thị hình ảnh sau khi gõ xong nội dung
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index) // Delay tăng dần cho hiệu ứng gõ chữ
        })

    } else {
        // Nếu uncheck checkbox - ẩn nội dung và hình ảnh
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

// ========================================
// SỰ KIỆN CLICK NÚT RECIEVE - CHUYỂN MÀN HÌNH
// ========================================

document.querySelector(".recieve").addEventListener("click", () => {
    // Bước 1: Đóng bức thư mở đầu (thêm class close)
    document.querySelector(".startLetter").classList.add("close");
    
    // Delay 500ms rồi thực hiện bước tiếp theo
    setTimeout(() => {
        // Bước 2: Đóng form mở đầu (thêm class close)
        document.querySelector(".startForm").classList.add("close");
        
        // Delay 500ms rồi thực hiện bước cuối
        setTimeout(() => {
            // Bước 3: Di chuyển form ra khỏi màn hình (bottom: 100%)
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            // Kiểm tra loại thiết bị để tạo hiệu ứng ánh sáng phù hợp
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                // Mobile: tạo 20 ánh sáng
                createLight(20)
            } else {
                // Desktop: tạo 40 ánh sáng
                createLight(40)
            }

        }, 500)
    }, 500)
})

// ========================================
// THIẾT LẬP KÍCH THƯỚC BACKGROUND
// ========================================

// Lấy thông tin kích thước background để sử dụng cho các hiệu ứng
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;   // Chiều rộng background
var height = getBackground.offsetHeight; // Chiều cao background

// ========================================
// HIỆU ỨNG XOAY ẢNH KHI HOVER
// ========================================

// Lấy element ảnh để thêm hiệu ứng xoay
var image = document.querySelector(".myAI");
var currentRotation = 0;    // Góc xoay hiện tại
var targetRotation = 180;   // Góc xoay mục tiêu (180 độ)
var increment = 1;          // Bước tăng xoay (1 độ mỗi lần)
var rotationInterval;       // Biến lưu interval

// Thêm sự kiện hover vào ảnh
image.addEventListener("mouseover", function () {
    // Dừng bất kỳ quá trình xoay nào đang diễn ra
    clearInterval(rotationInterval);
    
    // Đặt lại góc xoay về 0
    currentRotation = 0;
    
    // Bắt đầu xoay ảnh
    rotationInterval = setInterval(function () {
        // Kiểm tra nếu chưa đạt góc mục tiêu
        if (currentRotation < targetRotation) {
            // Tăng góc xoay
            currentRotation += increment;
            // Áp dụng transform để xoay ảnh
            image.style.transform = "rotateY(" + currentRotation + "deg)";
        } else {
            // Dừng xoay khi đạt góc mục tiêu
            clearInterval(rotationInterval);
        }
    }, 10); // Cập nhật mỗi 10ms để tạo animation mượt
});

// ========================================
// HIỆU ỨNG TRÁI TIM BAY LÊN
// ========================================

// Hàm tạo trái tim bay từ dưới lên trên


// ========================================
// HIỆU ỨNG TRÁI TIM RƠI
// ========================================

// Hàm tạo trái tim rơi từ trên xuống dưới
function createFallingHeart() {
    // Tạo element div mới
    const heart = document.createElement("div");
    heart.classList.add("falling-heart-icon"); // Thêm class CSS cho styling
    
    // Thêm icon emoji trái tim
    heart.textContent = "❤️";
    
    // Đặt vị trí ngẫu nhiên theo chiều ngang (0-100vw)
    const randomLeft = Math.random() * 100;
    
    // Đặt thời gian rơi ngẫu nhiên (4-8 giây)
    const animationDuration = 4 + Math.random() * 4 + "s";

    // Áp dụng vị trí và animation
    heart.style.left = randomLeft + "vw";
    heart.style.animation = `fallHeart ${animationDuration} linear infinite`;

    // Thêm trái tim vào background
    document.querySelector(".backgroundParty").appendChild(heart);
}

// Tạo trái tim rơi mỗi 1000ms (1 giây)
setInterval(createFallingHeart, 3000);

// ========================================
// HIỆU ỨNG TUYẾT RƠI (ĐÃ BỊ VÔ HIỆU HÓA)
// ========================================

// Hàm tạo tuyết rơi từ trên xuống dưới
function createFallingSnowflake() {
    // Tạo element div mới
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake"); // Thêm class CSS cho styling

    // Đặt vị trí ngẫu nhiên theo chiều ngang (0-width màn hình)
    const leftPosition = Math.random() * window.innerWidth;
    snowflake.style.left = leftPosition + "px";

    // Thêm tuyết vào startForm
    document.querySelector(".startForm").appendChild(snowflake);
}

// Tạo tuyết rơi mỗi 200ms (đã bị vô hiệu hóa trong CSS)
setInterval(createFallingSnowflake, 200);

// ========================================
// HIỆU ỨNG TEXT TRÁI TIM RƠI (THAY THẾ TUYẾT)
// ========================================

// Mảng chứa 10 loại emoji trái tim khác nhau
// Bạn có thể thay đổi các emoji trái tim ở đây
const fallingTexts = [
    "❄ Chúc em một ngày sinh nhật thật rực rỡ và đầy tiếng cười – y như cách em khiến mọi thứ quanh mình tươi sáng hơn.",  // Trái tim đỏ
    "❄ Tuổi mới mong em luôn đủ vui vẻ để mỉm cười, đủ mạnh mẽ để vượt qua, và đủ dịu dàng để ai gặp cũng quý.",  // Hai trái tim
    "❄ Nếu ngày hôm nay là một bản nhạc, chắc chắn nó sẽ có giai điệu nhẹ nhàng, trong trẻo – giống em.",  // Trái tim lấp lánh
    "❄ Anh không biết em ước gì trong ngày sinh nhật, nhưng anh chúc điều đó sẽ đến, nhẹ nhàng mà chắc chắn.",  // Trái tim có ruy băng
    "❄ Em sinh ra vào một ngày đẹp, nên chắc chắn cả cuộc đời em cũng sẽ đáng yêu như chính ngày hôm đó.",  // Trái tim đang lớn
    "❄ Chúc em tuổi mới đầy trải nghiệm hay ho, những mối quan hệ ấm áp, và vài bất ngờ đáng yêu (biết đâu có cả anh 😅).",  // Trái tim đập
    "❄",  // Trái tim xoay
];

// Hàm tạo text trái tim rơi từ trên xuống
function createFallingText() {
    // Tạo element div mới
    const textElement = document.createElement("div");
    textElement.classList.add("falling-text"); // Thêm class CSS cho styling
    
    // Chọn ngẫu nhiên một emoji trái tim từ mảng
    const randomText = fallingTexts[Math.floor(Math.random() * fallingTexts.length)];
    textElement.textContent = randomText;
    
    // Đặt vị trí ngẫu nhiên theo chiều ngang (10% - 70% màn hình)
    const minLeft = window.innerWidth * 0.05; // 10% từ trái
    const maxLeft = window.innerWidth * 0.3; // 70% từ trái
    const leftPosition = minLeft + Math.random() * (maxLeft - minLeft);
    
    // Thời gian rơi từ 3-7 giây - bạn có thể thay đổi khoảng này
    const animationDuration = 3 + Math.random() * 4 + "s";
    
    // Áp dụng vị trí và thời gian animation
    textElement.style.left = leftPosition + "px";
    textElement.style.animationDuration = animationDuration;

    // Thêm text vào startForm
    document.querySelector(".startForm").appendChild(textElement);
    
    // Xóa element sau khi animation kết thúc để tránh memory leak
    setTimeout(() => {
        if (textElement.parentNode) {
            textElement.remove();
        }
    }, parseFloat(animationDuration) * 1000); // Chuyển đổi giây thành milliseconds
}

// Tạo text rơi mỗi 300ms - bạn có thể thay đổi số này để tăng/giảm tần suất
setInterval(createFallingText, 300);

// ========================================
// THIẾT LẬP NHẠC NỀN
// ========================================

// Lấy các element liên quan đến nhạc
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
const youtubeBtn = document.getElementById('youtubeBtn');
const audioPlayer = document.querySelector('.audio-player');

// Biến để theo dõi trạng thái nhạc
let isMusicPlaying = false;

// Hiển thị audio player ngay khi trang web được tải
audioPlayer.classList.add('show');

// Hàm phát nhạc
function playMusic() {
    backgroundMusic.play()
      .then(() => {
        isMusicPlaying = true;
        musicToggle.textContent = '🔊';
        musicToggle.classList.add('playing');
      })
      .catch(err => console.warn('Play blocked', err));
  }

// Hàm dừng nhạc
function pauseMusic() {
    backgroundMusic.pause();
    isMusicPlaying = false;
    musicToggle.textContent = '🎵';
    musicToggle.classList.remove('playing');
  }
  
  musicToggle.addEventListener('click', () =>
    isMusicPlaying ? pauseMusic() : playMusic()
  );
  const firstGesture = () => {
    playMusic();                // cố phát
    document.removeEventListener('pointerdown', firstGesture);
  };
  document.addEventListener('pointerdown', firstGesture, { once: true });
// Hàm toggle nhạc
function toggleMusic() {
    if (isMusicPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

// Hàm mở YouTube
function openYouTube() {
    const youtubeUrl = 'https://www.youtube.com/watch?v=LG5hQJsO8k0&list=RDLG5hQJsO8k0&start_radio=1';
    window.open(youtubeUrl, '_blank');
}

// Thêm sự kiện click cho nút nhạc
musicToggle.addEventListener('click', toggleMusic);

// Thêm sự kiện click cho nút YouTube
youtubeBtn.addEventListener('click', openYouTube);

// Thiết lập âm lượng nhạc (0.0 - 1.0)
backgroundMusic.volume = 0.3; // 30% âm lượng

// Tự động phát nhạc khi trang web được tải
document.addEventListener('DOMContentLoaded', () => {
    // ====== Grab DOM ======
    const bg        = document.getElementById('backgroundMusic');
    const btnMusic  = document.getElementById('musicToggle');
    const btnYT     = document.getElementById('youtubeBtn');
    const playerUI  = document.querySelector('.audio-player');
  
    // ====== UI ready ======
    playerUI.classList.add('show');
    bg.volume = 0.3;
  
    // ====== State ======
    let playing = false;
  
    // ====== Controls ======
    const play  = () =>
      bg.play()
        .then(() => {
          playing = true;
          btnMusic.textContent = '🔊';
          btnMusic.classList.add('playing');
        })
        .catch(e => console.warn('Play blocked', e));
  
    const pause = () => {
      bg.pause();
      playing = false;
      btnMusic.textContent = '🎵';
      btnMusic.classList.remove('playing');
    };
  
    const toggle = () => (playing ? pause() : play());
  
    // ====== Events ======
    btnMusic.addEventListener('click', toggle);
  
    // Gesture đầu tiên để “mở khóa” autoplay
    document.addEventListener(
      'pointerdown',
      function firstGesture() {
        play();
        document.removeEventListener('pointerdown', firstGesture);
      },
      { once: true }
    );
  
    // Nút mở YouTube
    btnYT.addEventListener('click', () =>
      window.open(
        'https://www.youtube.com/watch?v=LG5hQJsO8k0&list=RDLG5hQJsO8k0&start_radio=1',
        '_blank'
      )
    );
  });
  